const bodyParser = require('body-parser');
const KnexDatabase = require('./KnexDatabase');


function AccountDbHandler(app) {
  let urlencodedParser = bodyParser.urlencoded({ extended: true });
  let cors = require('cors');
  let knex = KnexDatabase.getConfiguration();

  app.use(bodyParser.json());
  app.use(cors());

  // Account endpoints :

  /**
   * Get all account, joined by it's wallet entity
   */
  app.get('/accounts', function(req,res){
      knex.raw("SELECT a.id, a.name, a.email, a.birthday, w.balance FROM account a\n" +
          "LEFT JOIN wallet w ON a.id = w.account_id;")
        .then(function(collection){
          res.json(collection[0])
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

  /**
   * Create a new account with a inital wallet balance
   */
  app.post('/accounts', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let birthday = req.body.birthday;
    let balance = req.body.balance;
    if(req.body.balance == null){
      balance = 0;
    }
    //TODO : Update to use ORM knex ORM transations.
    knex.raw("INSERT INTO account (name, email, birthday) VALUES (?, ?, ?);", [name, email, birthday])
        .then(function(collection){
          let newId = collection[0].insertId;
          knex.raw("INSERT INTO wallet (account_id, balance) VALUES (?, ?);", [newId, balance])
              .then(function(collection){
                res.json(collection[0])
              }).catch(function(err){
                res.status(500).json({message:err.message})
              })
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

  /**
   * Get a account by id, joined by wallet balance
   */
  app.get('/accounts/:id', (req, res) => {
    let id = req.params.id;
      knex.raw("SELECT a.id, a.name, a.email, a.birthday, w.balance FROM account a\n" +
          "LEFT JOIN wallet w ON a.id = w.account_id WHERE a.id = ?", [id])
        .then(function(collection){
          res.json(collection[0][0])
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });


  /**
   * Delete account and wallet record
   */
  app.delete('/accounts/:id', (req, res) => {
    let id = req.params.id;
    //TODO : Update to use ORM knex ORM transations.
    knex.raw("DELETE FROM wallet WHERE account_id = ?;", [id])
        .then(function(collection){
          knex.raw("DELETE FROM account WHERE id = ?", [id])
              .then(function(collection){
                res.json(collection[0])
              }).catch(function(err){
            res.status(500).json({message:err.message})
          })
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

  /**
   * Update account and wallet record.
   */
  app.put('/accounts/:id', urlencodedParser, (req, res) => {
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let birthday = req.body.birthday;
    let balance = req.body.balance;
    if(req.body.balance == null){
      balance = 0;
    }
    //TODO : Update to use ORM knex ORM transations.
    knex.raw("UPDATE account SET name = ?, email = ?, birthday = ? WHERE id = ?", [name, email, birthday, id])
        .then(function(collection){
          knex.raw("UPDATE wallet SET balance = ? WHERE account_id = ?", [balance, id])
              .then(function(collection){
                res.json(collection[0])
              }).catch(function(err){
                res.status(500).json({message:err.message})
              })
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

  // Wallet endpoints :

  /**
   * Get wallet by account_id
   */
  app.get('/wallet/:account_id', (req, res) => {
    let accountId = req.params.account_id;
    knex.raw("SELECT * FROM wallet WHERE account_id = ?;", [accountId])
        .then(function(collection){
          res.json(collection[0][0])
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

  /**
   * Create a new wallet record, probably don't need this.
   */
  app.post('/wallet', (req, res) => {
    let accountId = req.body.account_id;
    let balance = req.body.balance;
    knex.raw("INSERT INTO wallet (account_id, balance) VALUES (?, ?);", [accountId, balance])
        .then(function(collection){
          res.json({
            success:true,
            data: collection[0][0]
          })
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

  /**
   * Update a wallet record.
   */
  app.put('/wallet/:account_id', urlencodedParser, (req, res) => {
    let accountId = req.params.account_id;
    let balance = req.body.balance;
    knex.raw("UPDATE wallet SET balance = ? " +
        "WHERE account_id = ?", [balance, accountId])
        .then(function(collection){
          res.json({
            success:true,
            data: collection[0][0]
          })
        })
        .catch(function(err){
          res.status(500).json({message:err.message})
        })
  });

}
module.exports = AccountDbHandler;
