const bodyParser = require('body-parser');

function AccountHandler(app) {
    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    let currentId = 1;
    const mockDatabase = [
        {
            name: 'Tester One',
            birthday: new Date('1986-12-31'),
            email: 'test1@epicgames.com',
            id: '' + currentId++
        },
        {
            name: 'Tester Two',
            birthday: new Date('1984-02-12'),
            email: 'test2@epicgames.com',
            id: '' + currentId++
        },
        {
            name: 'Tester Three',
            birthday: new Date('1989-10-31'),
            email: 'test3@epicgames.com',
            id: '' + currentId++
        },
        {
            name: 'Tester Four',
            birthday: new Date('1990-11-25'),
            email: 'test4@epicgames.com',
            id: '' + currentId++
        },
        {
            name: 'Tester Five',
            birthday: new Date('1986-01-01'),
            email: 'test5@epicgames.com',
            id: '' + currentId++
        }
    ];

    app.get('/accounts', (req, res) => {
        res.json(mockDatabase);
    });

    app.post('/accounts', urlencodedParser, (req, res) => {
        const id = currentId++;
        mockDatabase.push({
            name: req.body.name,
            birthday: new Date(req.body.birthday),
            email: req.body.email,
            id
        });
        res.json({ success: true, id });
    });

    app.get('/accounts/:id', (req, res) => {
        for (let i = 0; i < mockDatabase.length; i++) {
            let account = mockDatabase[i];
            if (account.id === req.params.id) {
                res.json(account);
                return;
            }
        }
        res.json({ error: true, message: 'account.not.found' });
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
        res.json({ success, removed });
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
        }
        res.json({ success, updated: toUpdate });
    });
}

module.exports = AccountHandler;
