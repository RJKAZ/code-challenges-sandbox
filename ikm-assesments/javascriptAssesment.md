1. A new React.js application being deployed to webpack-dev-server works; however the path of the URL below that it uses is not correct and can potentially expose source code to the internet. Which of the following correctly describes how to resolve this issue?

https://www.myreactapp.com/src

- Ensure that sub-domains are included in the allowedHosts configuration of webpack-dev-server
- Set the contentBase property to false within the webpack-dev-server so alternate paths cannot be used.
- Define a custom handler within the before property of webpack-dev-server to ensure that all middleware configurations are correct.
- Define the contentBase property of webpack-dev-server by using the --content-base parameter along with the path to the source code files: 
    contentBase: path.join(__dirname, "public")
- ensure that all custom modules are set up using Require in the parent application. 

___________________________________________________________________________________________________________________________

2. Which of the following are valid values for c, given the JavaScript code below

function test(a,b) {
    return (a * b) + (a + b);
}
var a = 1;
var b = 2;
var c = test(a,b);

- undefined
- 2
- 5
- 1
- 3

___________________________________________________________________________________________________________________________

3. Which of the following statements are correct regarding the use of keys within object collections of react components?

- they invooke arnings within a browser console ("Warning: Each child in an array or iterator should have a unique "key" prop...")
- They can used to maintain state between components
- They can be used as an index to quickly sort or query collections
- Number data types are only used as a collection key values and must be only Base 32
- The help identify which items have changed and are added/removed. This helps to ensure that the React.js Component UI maintians stability. 
___________________________________________________________________________________________________________________________

4. Which of the following assertion test errors are thrown asynchronously while executing a function in Node.js?

- assert.fail
- assert.ifError
- assert.catch
- assert.throws
- assert.error
___________________________________________________________________________________________________________________________

5. Which of the following are valid API endpoints in the Node.js net module

- net.connect()
- net.Socket.drain()
- net.dissconnect()
- net.Server.close()
- net.restart()

___________________________________________________________________________________________________________________________

6. Based on the HTML5 form code below, which of the following statements are correct

<form method="post" action="path or location of server-side script">
    <h2>Adding Age to a Form</h2>
    <fieldset>
        <label> Age:
        <input type="number" min="18" max="100" step="1" value="21" onchange="showValue(this.value)">
        </label>
         <label> Age:
        <input type="range" min="0" max="100" step="1" value="21">
        </label>
        <span id="agedisplay"></span>
        <script>
            function showValue(newValue) {
                document.getElementById('agedisplay').innerHTML = newValue;
            }
        </script>
    </fieldset>
</form>


- Step is not an attribute used in HTML5
- The type="number" is a value used in HTML5 which adds arrows near a text box
- The Min and Max attributed are not attributes used in HTML5
- The JavaScript is being used to add numbers to the range slider
- The type="range" is a value used in HTML5 which adds a slider
___________________________________________________________________________________________________________________________

7. After being created using net.createConnection(), a TCP client in Node.js emits which of the following events when being connected to the server

- connected
- new
- connect
- data
- established

_______________________________________________________________________________________________________________________
 8. A developer is creating a new React.js web application using the code below, but transpiling fails to find the react module which causes an exception. Which of the following correctly describes what can causing the transpilation issue?

 function Welcome(props) {
     return <h1> Hello, {props.name}</h1>
 }

 function App() {
     return (
         <div class="welcomebanner">
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
         </div>
     );
 }

 ReactDom.render(
     <App />
     document.getElementById('root')
 );

 - The correct include files are not being added to the header of the cusome module to ensure that all frameworks are loaded
 - React.js applications use the root element name "app" instead of the name "root"
 - The reserved word "class" will create a syntax error if the correct babel modules are not loaded within the webpack.config.js
 - Quoted Strings within components or attributed are not proper syntax for React.js JSX
 - All components must be maintained with a custom component class. 
 ___________________________________________________________________________________________________________________________

 9. Which of the following statements correctly descrives differences between React.PureComponents and React.Components? 

 - PureComponents allow for mutation of JavaScript components while Component does not
 - PureComponents allows for the creation of new functions, objects, and arrays within the render() event, while component does not. 
 - PureComponent handles the shouldComponentUpdata lifecycle event and performs shallow comparisons of state and props while component does not. 
 - PureComponent will allow re-rendering for all children components when a context has changed, while Component does not 
 - PureComponent handles the shouldComponentUpdate lifecycle event and performs deep comparisons of state and props while component does not. 
 ___________________________________________________________________________________________________________________________

 10. Which of the following elements of an HTML5 document comprise an independent item of content? 

 - <aside>
 - <header>
 - <article>
 - <footer>
 - <section>

 ____________________________________________________________________________________________________________________________

 11. A Node.js developer writes a custom assertion regexEqual to match the expected regex to the actual value using the code snippet below. 
 Which of the following are correct examples of using this assertion? 

 var assert = require('assert');
 assert.regexEqual = function(actual, regex, message) {
     if (!actual.match(regex)) {
         assert.fail(actual, regex, message, 'regexEqual', assert.regexEqual);
     }
 };

 - assert.regexEqual('{ name: "John Doe" }', 'john', 'The name should contain john');
 - assert.regexEqual('{ name: "John Doe" }', '/John/', 'The name should contain John');
 - assert.regexEqual('{ name: "John Doe" }', /john/, 'The name should contain john');
 - assert.regexEqual('{ name: "John Doe" }', 'John', 'The name should contain John');
 - assert.regexEqual('{ name: "John Doe" }', /John/, 'The name should contain John');



 ____________________________________________________________________________________________________________________________

 12. In the JavaScript snippet below, which of the following identify the correct values for Output1, Output2, Output3?

 <script>
     let x = 20;
     var y = 20;
     {
         let x = 50;
         var y = 50;
         {
             let x = 22;
             var y = 22;
             document.write("x: " + x + "<br/>");
             document.write("y: " + y + "<br/>");
             Output 1
         }
         document.write("x: " + x + "<br/>");
         document.write("y: " + y + "<br/>");
         Output 2
     }

     document.write("x: " + x + "<br/>");
     document.write("y: " + y + "<br/>");
     Output 3

    - 
       Output 1:
        x: 22 
        y: 22
       Output 2: 
        x: 22
        y: 22
       Output 3:
        x: 20
        y: 22

    - 
       Output 1:
        x: 20 
        y: 22
       Output 2: 
        x: 22
        y: 22
       Output 3:
        x: 20
        y: 20
    
    - 
       Output 1:
        x: 22 
        y: 22
       Output 2: 
        x: 50
        y: 50
       Output 3:
        x: 20
        y: 20

    - 
       Output 1:
        x: 22 
        y: 22
       Output 2: 
        x: 50
        y: 22
       Output 3:
        x: 20
        y: 20
    - 
       Output 1:
        x: 22 
        y: 22
       Output 2: 
        x: 50
        y: 22
       Output 3:
        x: 20
        y: 22

 ____________________________________________________________________________________________________________________________

13. Which of the following can be substituted for the ***** in the node.js code below to result in an assertion error/ 

var assert = require('assert');
assert.timeout = function(actualPromise, timeout, message) {
    return Promise.race([actualPromise, new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new assert.AssertionError({ message: message, 
                actual: "Didn't complete in " + timeout + " ms",
                expected: "Should comlete in " + timeout + " ms"
            }));
        }, timeout);
    })]);
};

assert.timeout(new Promise(function(resolve){
    *****
}), 1000, 'The function should return within 1000 ms.').catch(function(err) {
    setTimeout(function() { throw err; });
});

- setTimeout(function() { resolve("message"); }, 1200);
- resolve("message");
- setTimeout(function() { resolve("message"); }, 800);
- setTimeout(function() { resolve("message"); }, 2000);
- setTimeout(function() { resolve("message"); });

____________________________________________________________________________________________________________________________

14. The --inline and --hot parameters on webpack-dev-server do not appear to be working due to multiple re-loading HMR threads and content changes.
which of the following are possible ways that webpack-dev-server can be reload changes by using --hot or --inline?

- Run a command via terminal/command line specifying a unique port to use: webpack-dev-server --hot --port=8081
- Add an entry to webopack.config.js like
    devServer: {
        inline: true,
        hot: false
    }
- Install webpack-dev-serve globally using npm install webpack-dev-server --save
- perform the npm commands npm run dev
- Add an entry to the scripts object of package.json like:
{
    scripts: 
    {"start": "webpack-dev-server --hot --inline"}
}

____________________________________________________________________________________________________________________________

15. Which of the following are valid comment tags in HTML 5

- <REM      >
- -- Comment Text
- /* Comment Text */
- <!-- Comment Text -->
- // Comment Text
____________________________________________________________________________________________________________________________

16. Which of the following are valid methods exported by the http module in Node.js to send a request to a URL?

- http.send({host: 'localhost', port: 8000, path: '/url'}, requestCallback).end();
- http.get({host: 'localhost', port: 8000, path: '/url'}, requestCallback).end();
- http.connect({host: 'localhost', port: 8000, path: '/url'}, requestCallback).end();
- http.request({host: 'localhost', port: 8000, path: '/url'}, requestCallback).end();
- var request = http.request({host: 'localhost', port: 8000, path: '/url', method: 'Post'}, 
    requestCallback);
    request.end('first_name=john&last_name=doe');
____________________________________________________________________________________________________________________________

17. Which of the following statements about JavaScript Strict Mode are correct

- Variables must be declared before they can be assigned a value in strict mode
- in ECMAScript 6+, module code is not run in strict mode
- It can be deactivated with the sentence 'no strict'
- It can be activated with the sentence 'use strict'
- It is a directive that once activated, enforces good JavaScript coding practices inside an execution block 

____________________________________________________________________________________________________________________________

18. There is a request to perform a sort on a complex object JavaScript array before mounting a React.js component that is a collection of divs.
Which of the following actions ensure the object array is sorted properly before the component finishes?

- Export the React.js Component, which will automatically sort the object array
- Perform the sort within the componentWillMount() lifecycle event 
- Sort the object array propr to the components initialization and pass the array in as a property
- create an anonymous function within the component that performs the sort regardless of lifecycle event.
- Override the event shouldComponentUpdate() and perform the sort of the object array. 

____________________________________________________________________________________________________________________________