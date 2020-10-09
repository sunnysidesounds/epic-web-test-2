# If knex migration doesn't work. You can setup the schema and test data by running this command in your terminal :

# mysql -u root -p account_manager < /path/to/epic-web-test/sql/schema_test_data_setup.sql


# Schema setup :
CREATE TABLE `account` (
                           `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                           `name` varchar(255) DEFAULT NULL,
                           `email` varchar(255) DEFAULT NULL,
                           `birthday` varchar(255) DEFAULT NULL,
                           `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                           PRIMARY KEY (`id`),
                           KEY `index_name` (`name`(255))
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE `wallet` (
                          `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
                          `account_id` int(10) unsigned NOT NULL,
                          `balance` decimal(15,2) DEFAULT NULL,
                          `last_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          PRIMARY KEY (`id`),
                          KEY `account_id` (`account_id`),
                          CONSTRAINT `wallet_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

# Test data setup :

INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Beryl Widener', 'InDatabase2@epicgames.com', '1986-12-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'500.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Wilbert Sambrano', 'InDatabase2@epicgames.com', '1984-02-12T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'800.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Clemente Laferriere', 'InDatabase3@epicgames.com', '1986-12-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'1000.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Raylene Falgoust', 'InDatabase4@epicgames.com', '1990-11-25T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'600.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Joaquina Schwalb', 'InDatabase5@epicgames.com', '1975-12-22T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'800.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Eli Thrash', 'InDatabase6@epicgames.com', '1980-02-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'900.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Tenisha Mcilvaine', 'InDatabase7@epicgames.com', '1986-04-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'660.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Odis Marroquin', 'InDatabase8@epicgames.com', '1991-06-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'670.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Loree Sandler', 'InDatabase9@epicgames.com', '1992-06-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'870.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Josefine Primus', 'InDatabase10@epicgames.com', '2012-07-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'902.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Amalia Fulghum', 'InDatabase11@epicgames.com', '1980-08-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'300.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Lauralee Harnish', 'InDatabase12@epicgames.com', '1975-09-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'150.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Jeanna Brumbaugh', 'InDatabase13@epicgames.com', '1978-10-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'9000.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Alona Shane', 'InDatabase14@epicgames.com', '1980-10-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'1250.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Rosalie Vallone', 'InDatabase15@epicgames.com', '1982-09-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'1850');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Michelina Boddie', 'InDatabase16@epicgames.com', '1987-07-31T00:00:00.000Z');
INSERT INTO `wallet` (`account_id`, `balance`) VALUES(LAST_INSERT_ID(),'9.00');
INSERT INTO `account` (`name`, `email`, `birthday`) VALUES ('Era Weesner', 'InDatabase17@epicgames.com', '1989-06-31T00:00:00.000Z');
