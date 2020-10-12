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
    * Location: `src/questions1/Questions1.test.js`

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
    * Location: `src/questions2/Questions2.test.js`

* Logging:
    * In the MatrixRotator.js line 36 we are console logging this error. A TODO, would to implement some kind of logging library, monitoring, on this error.
        * Maybe client-to-server logging mechanism / library

* Question 2a:
    * Question: Given your solution, how would you verify the correctness of your answers?
    * Answer : I've verified my solutions by doing the following
        * Initial tests with the provided input/output test data (6 total)
        * Tests for the string cleaning and formatting.
        * Matrix string to 2d-array formatting
        * Matrix generation



 * Answer : You could use a combination of unit testing targeted towards method I/O. Also, since there are several directions
     of traversal (left to right, top to bottom..) You could individual write unit tests for these traversals. Finally you could
     rebuild the matrix based on the outputted list of integers and the last captured element location when the matrix was disassembled
     to a list.






## Question 3: Simple Account Mangement Service






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