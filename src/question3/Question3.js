import React from 'react';
import './Question3.sass';
import Accounts from '../question3/Accounts/Accounts';
import Modal from '../question3/Common/Modal';
import NewUserForm from '../question3/Forms/NewUserForm'
import EditUserForm from '../question3/Forms/EditUserForm'
import DeleteUserForm from '../question3/Forms/DeleteUserForm'
import Navigation from "../question3/Common/Navigation";
import Compare from "../question3/Common/Compare";

export default class Question3 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null, // All records
            userData: null, // User specific
            isEditModalOpen: false,
            isDeleteModalOpen: false,
            isNewModalOpen: false,
            hasClickedSortName: false,
            hasClickedSortEmail: false,
            hasClickedSortDob: false,
            hasClickedSortBalance: false

        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditCloseModal = this.handleEditCloseModal.bind(this);
        this.handleDeleteCloseModal = this.handleDeleteCloseModal.bind(this);
        this.handleNewClick = this.handleNewClick.bind(this);
        this.handleNewCloseModal = this.handleNewCloseModal.bind(this);
        this.getAllRecord = this.getAllRecord.bind(this);
        this.filterBy = this.filterBy.bind(this);
        this.getPrettyDate = this.getPrettyDate.bind(this);
        this.getCurrentNumber = this.getCurrentNumber.bind(this);
        this.filterList = this.filterList.bind(this);
    }


    componentDidMount() {
        this.getAllRecord();
    }

    getPrettyDate(date){
        let formatDate = new Date(date);
        return (formatDate.getMonth()+1) + "-" + formatDate.getDate() + '-' + formatDate.getFullYear()
    }

    getCurrentNumber(balance){
        let intbalance = parseInt(balance, 10);
        return intbalance.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }

    /**
     * This gets all user records and we reverse it to show the most recent.
     */
    getAllRecord() {
        Accounts.getAll().then(data => {
            this.setState(
                {data: data.data.reverse()}
            )
        });
    }

    /**
     * This gets a account by id, sets the user data
     * for the modal, sets modal flag
     * @param id user id
     */
    handleEditClick(id) {
        Accounts.getById(id).then(data => {
            this.setState(
                { userData: data.data,
                    clickedChild:true,
                    isEditModalOpen: true
                }
            )
        });
    }

    /**
     * This closes the user edit modal
     */
    handleEditCloseModal() {
        this.setState({
            isEditModalOpen: false
        })
    }

    /**
     * This gets a account by id, set the user data for the modal, sets modal flag
     * @param id
     */
    handleDeleteClick(id) {
        Accounts.getById(id).then(data => {
            this.setState(
                { userData: data.data,
                    clickedChild:true,
                    isDeleteModalOpen: true
                }
            )
        });
    }

    /**
     * This closes the delete modal
     */
    handleDeleteCloseModal() {
        this.setState({
            isDeleteModalOpen: false
        })
    }

    /**
     * This opens new user modal.
     */
    handleNewClick(){
        this.setState({
            isNewModalOpen: true
        });
    }

    /**
     * This closes new user modal.
     */
    handleNewCloseModal() {
        this.setState({
            isNewModalOpen: false
        })
    }

    /**
     * This search the list based off user name.
     * @param event search event
     */
    filterList(event) {
        if(event.target.value === ""){
            this.getAllRecord();
        } else {
            let updatedList = this.state.data;
            updatedList = updatedList.filter(function (item) {
                return item.name.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
            });
            this.setState({data: updatedList});
        }
    }

    /**
     * This does row filter ascending / descending
     * @param column
     */
    filterBy(column){
        switch(column){
            case 'name':
                if(this.state.hasClickedSortName){
                    let newList = Compare.compareByName(this.state.data).reverse();
                    this.setState({
                        data: newList,
                        hasClickedSortName: false
                    });
                } else {
                    let newList = Compare.compareByName(this.state.data);
                    this.setState({
                        data: newList,
                        hasClickedSortName: true
                    });
                }
                break;
            case 'email':
                if(this.state.hasClickedSortEmail){
                    let newList = Compare.compareByEmail(this.state.data).reverse();
                    this.setState({
                        data: newList,
                        hasClickedSortEmail: false
                    });
                } else {
                    let newList = Compare.compareByEmail(this.state.data);
                    this.setState({
                        data: newList,
                        hasClickedSortEmail: true
                    });
                }
                break;
            case 'dob':
                if(this.state.hasClickedSortDob){
                    let newList = Compare.compareByDob(this.state.data).reverse();
                    this.setState({
                        data: newList,
                        hasClickedSortDob: false
                    });
                } else {
                    let newList = Compare.compareByDob(this.state.data);
                    this.setState({
                        data: newList,
                        hasClickedSortDob: true
                    });
                }
                break;
            case 'balance':
                if(this.state.hasClickedSortBalance){
                    let newList = Compare.compareByBalance(this.state.data).reverse();
                    this.setState({
                        data: newList,
                        hasClickedSortBalance: false
                    });
                } else {
                    let newList = Compare.compareByBalance(this.state.data);
                    this.setState({
                        data: newList,
                        hasClickedSortBalance: true
                    });
                }
                break;
            default:
                break;
        }
    }

    render() {
        const self = this;
        return (
            <div className="question4-view container">
                <div className="row text-center">
                    <div className="col-xs-12">
                        <p className="App-intro">
                            Write a small app that can be used to CRUD users from the service.
                        </p>
                    </div>
                </div>
                <Navigation newUserButton={self.handleNewClick} searchFilter={self.filterList}/>
                <div className="row">
                    <link rel="stylesheet" type="text/css" href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    <div className="container bootstrap snippet">
                        <div className="row">
                            <div className="col-lg-12 list-column">
                                <div className="main-box no-header clearfix">
                                    <div className="main-box-body clearfix">
                                        <div className="table-responsive">
                                            <table className="table user-list">
                                                <thead>
                                                <tr>
                                                    <th className="column-hover">
                                                      <span className="account-column" onClick={this.filterBy.bind(null, "name")}>
                                                        User <i className="fa fa-fw fa-sort"/>
                                                      </span>
                                                    </th>
                                                    <th className="column-hover">
                                                      <span className="account-column" onClick={this.filterBy.bind(null, "email")}>
                                                        Email <i className="fa fa-fw fa-sort"/>
                                                    </span></th>
                                                    <th className="column-hover">
                                                      <span className="account-column" onClick={this.filterBy.bind(null, "dob")}>
                                                        DOB <i className="fa fa-fw fa-sort"/>
                                                    </span></th>
                                                    <th className="column-hover">
                                                        <span className="account-column" onClick={this.filterBy.bind(null, "balance")}>
                                                          Balance <i className="fa fa-fw fa-sort"/>
                                                      </span></th>
                                                    <th>&nbsp;</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    this.state.data && this.state.data.map(function(account,index) {
                                                        let prettyDate = self.getPrettyDate(account.birthday);
                                                        let currencyFormat = self.getCurrentNumber(account.balance);
                                                        return <tr className="row-style" key={account.id}>
                                                            <td className="cell-style">
                                                                {account.name}
                                                            </td>
                                                            <td className="cell-style">
                                                                {account.email}
                                                            </td>
                                                            <td className="cell-style">
                                                                {prettyDate}
                                                            </td>
                                                            <td className="cell-style">
                                                                ${currencyFormat}
                                                            </td>
                                                            <td style={{width: '20%'}}>
                                                                <a onClick={ self.handleEditClick.bind(null, account.id)} className="table-link">
                                                                    <span className="fa-stack">
                                                                        <i className="fa fa-square fa-stack-2x fa-2x"/>
                                                                        <i className="fa fa-edit fa-stack-1x fa-inverse"/>
                                                                    </span>
                                                                </a>
                                                                <a onClick={ self.handleDeleteClick.bind(null, account.id)} className="table-link danger">
                                                                    <span className="fa-stack">
                                                                        <i className="fa fa-square fa-stack-2x"/>
                                                                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"/>
                                                                    </span>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.isNewModalOpen} onClose={self.handleNewCloseModal}>
                    <NewUserForm
                        modalState={this.state.isNewModalOpen}
                        closeModal={this.handleNewCloseModal.bind(null)}
                        refreshMe={this.getAllRecord.bind(null)}
                    />
                </Modal>


                <Modal isOpen={this.state.isEditModalOpen} onClose={self.handleEditCloseModal}>
                    <EditUserForm
                        modalState={this.state.isEditModalOpe}
                        sendData={this.state.userData}
                        closeModal={this.handleEditCloseModal.bind(null)}
                        refreshMe={this.getAllRecord.bind(null)}
                    />
                </Modal>


                <Modal isOpen={this.state.isDeleteModalOpen} onClose={self.handleDeleteCloseModal}>
                    <DeleteUserForm
                        modalState={this.state.isDeleteModalOpen}
                        sendData={this.state.userData}
                        closeModal={this.handleDeleteCloseModal.bind(null)}
                        refreshMe={this.getAllRecord.bind(null)}
                    />
                </Modal>
            </div>

        );
    }
}
