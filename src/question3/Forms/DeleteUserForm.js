import React from 'react';
import Accounts from "../Accounts/Accounts";
import SadeFace from '../assets/sad-face.png'

/**
 * Saf Face Image constant
 * @type {{src, alt: string}}
 */
const image = {
  class: "sad-face-img",
  src: SadeFace,
  alt: 'Sad Face',
};

export default class DeleteUserForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  /**
   * Execute deleting of account and balance.
   */
  handleDeleteClick() {
    Accounts.deleteAccount(this.props.sendData.id).then(data => {
      this.props.closeModal();
      this.props.refreshMe();
    });
  }


  render() {
    return (
        <div className="delete-container">
          <h1>Delete User</h1>
          <p>Are you sure you want to delete user: {this.props.sendData.name}?</p>
          <img className={image.class} src={image.src} alt={image.alt} />
          <br/>
          <br/>
          <div className="btn-group" role="group">
            <button className="btn btn-default" onClick={this.handleDeleteClick.bind(this)}>Yes</button>
            <button className="btn btn-default" onClick={this.props.closeModal}>No</button>
          </div>
        </div>
    );
  }
}