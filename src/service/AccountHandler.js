const bodyParser = require('body-parser');


function AccountHandler(app) {
    let urlencodedParser = bodyParser.urlencoded({ extended: true });
    var cors = require('cors');
    app.use(bodyParser.json());
    app.use(cors());

    let currentId = 1;
    const mockDatabase = [{
        name: 'Beryl Widener',
        birthday: new Date('1986-12-31'),
        email: 'inMemory1@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Wilbert Sambrano',
        birthday: new Date('1984-02-12'),
        email: 'inMemory2@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Clemente Laferriere',
        birthday: new Date('1989-10-31'),
        email: 'inMemory3@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Raylene Falgoust',
        birthday: new Date('1990-11-25'),
        email: 'inMemory4@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Joaquina Schwalb',
        birthday: new Date('1986-01-01'),
        email: 'inMemory5@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Eli Thrash',
        birthday: new Date('1990-11-25'),
        email: 'inMemory6@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Tenisha Mcilvaine',
        birthday: new Date('1990-11-25'),
        email: 'inMemory7@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Odis Marroquin',
        birthday: new Date('1990-11-25'),
        email: 'inMemory8@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Loree Sandler',
        birthday: new Date('1990-11-25'),
        email: 'inMemory9@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Josefine Primus',
        birthday: new Date('1990-11-25'),
        email: 'inMemory10@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Amalia Fulghum',
        birthday: new Date('1990-11-25'),
        email: 'inMemory11@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Lauralee Harnish',
        birthday: new Date('1990-11-25'),
        email: 'inMemory12@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Jeanna Brumbaugh',
        birthday: new Date('1990-11-25'),
        email: 'inMemory13@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Alona Shane',
        birthday: new Date('1990-11-25'),
        email: 'inMemory14@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Rosalie Vallone',
        birthday: new Date('2008-07-23'),
        email: 'inMemory15@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Michelina Boddie',
        birthday: new Date('2011-03-28'),
        email: 'inMemory16@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }, {
        name: 'Era Weesner',
        birthday: new Date('2012-06-19'),
        email: 'inMemory17@epicgames.com',
        balance: '100.00',
        id: '' + currentId++
    }];

    app.get('/accounts', (req, res) => {
        res.json(mockDatabase);
    });

    app.post('/accounts', urlencodedParser, (req, res) => {
        const id = String(currentId++);
        mockDatabase.push({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            email: req.body.email,
            balance: req.body.balance,
            id
        });
        res.json({success: true, id});
    });

    app.get('/accounts/:id', (req, res) => {
        for (let i = 0; i < mockDatabase.length; i++) {
            let account = mockDatabase[i];
            if (account.id === req.params.id) {
                res.json(account);
                return;
            }
        }
        res.json({error: true, message: 'account.not.found'});
    });

    app.delete('/accounts/:id', (req, res) => {
        let removed = null;
        for (let i = 0; i < mockDatabase.length; i++) {
            let account = mockDatabase[i];
            if (account.id === req.params.id) {
                removed = mockDatabase.splice(i, 1);
                break;
            }
        }
        const success = !!removed;
        res.json({success, removed});
    });

    app.put('/accounts/:id', urlencodedParser, (req, res) => {
        let toUpdate = null;
        for (let i = 0; i < mockDatabase.length; i++) {
            let account = mockDatabase[i];
            if (account.id === req.params.id) {
                toUpdate = account;
                break;
            }
        }
        const success = !!toUpdate;
        if (success) {
            toUpdate.name = req.body.name;
            toUpdate.birthday = new Date(req.body.birthday);
            toUpdate.email = req.body.email;
            toUpdate.balance = req.body.balance;
        }
        res.json({success, updated: toUpdate});
    });
}

module.exports = AccountHandler;
