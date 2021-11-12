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

___________________________________________________________________________________________________________________________