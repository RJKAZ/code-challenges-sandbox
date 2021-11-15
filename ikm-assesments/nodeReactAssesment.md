27 Questions

1. Which of the following correctly describes ways that props can be defined within JSX

- defaulted to true when a value is not defined
- as a string literal: message = "1234"
- as a Javascript expression without the use of brackets: message = 1234
- Using HTML markup: message = <div>1234</div>
- As a javascript expression surrounded by brackets: message = {1234}

---

2. One of the requirements for the webpage shown below is an alert message be displayed when Button1 is clicked. Currently when the page is rendered,
   nothing happens when Button1 is clicked. Which solution corrects this problem

<script>
    function addEvent(obj, type, fn) {
        if (obj.addEventListener) {
            obj.addEventListener(type, fn, false);
            EventCache.add(obj, type, fn);
        }
        else if (obj.attachEvent) {
            obj["e" + type + fn] = fn;
            obj[type + fn] = function() {obj["e" + type + fn] (window.event);}
            obj.attachEvent("on" + type, obj[type + fn]);
        }
        else obj["on" + type] = obj["e" + type + fn];
    }
    </script>

    <body>
    <form id="form1" runat="server">
        <input id="Text1" type="text" />
        <input id="Button1" type="button" value="button"/>
    </form>
    </body>

- Add before the </script> tag: addEvent("Button1", "onclick", "alert('Y');");
- Add before the </body> tag
  <script">
  addEvent(document.getElementsById("Button1), "onclick)", "alert('Y'); ");
  </script>
- Add before the </script> tag: addEvent(document.getElementById("Button1"), "click", function1);
- add before the </body> tag:
    <script>
        addEvent(document.getElementById("Button1"), function1, "click");
    </script>
- Add before the </body> tag
    <script>
        addEvent(document.getElementById("Button1"), "click", function1);
        </script>

---

3. Which of the following are considered best Practices when using services and HTTP with components in Angular 4+

- Register Observabales with the Unsubscribe service class to prevent memory leaks when they are no longer used.
- Delegate data access to a supporting service class
- Encourage direct communication between a component and an Angular HTTP Client.
- Create a new service for each module within the angular application
- Do not instantiate a serivce class using 'new' keyword.

---

4. Implementation of dependency injection in JavaScript using the dependency injection pattern is provided by the Node.js code below.
   Which of the following are the correct implemntations of printer.js or scanner.js.

// printer_scanner.js

module.exports = function(printer, scanner) {
return {
print: function (message) {
printer.print(message);
},
scan: function() {
return scanner.scan();
}
}
};

// devices.js
var printer = require("./printer");
var scanner = require("./scanner");
var printer_scanner = require("./printer_scanner") (printer, scanner);
printer_scanner.print ("Test Message")l
var scanned_message = printer_scaner.scan();

- // printer.js
  module.exports = {
  print: function(message) {
  console.log("Printer printing" + message);
  }
  };

- // printer.js
  function (message) {
  console.log("Printer printing" + message);
  }

- // scanner.js
  function () {
  var message = "Test Message";
  console.log("Scanner scanning" + message);
  return message;
  }

- // printer.js
  module = {
  print: function (message) {
  console.log("Printer printing " + message);
  }
  }
- // scanner.js
  module.exports = {
  scan: function () {
  var message = "Test Message";
  console.log("Scanner scanning" + message);
  return message;
  }
  };

---

5. After being created using net.createConnection(), a TCP client in Node.js emits which of the following events when being connected to the Server?

- new
- established
- data
- connect
- connected

---

6.

---

7.

---

8. A JavaScript array 'persons' contains an undetermined number of objects of class Person with two properties: name(a string)
   and age (a number). Which of the following lines of JavaScript code will order the array elments by age in ascending order

- persons.sort(function(a,b) {return b.age - a.age; });
- persons.sort();
- persons.sort(function(a,b) {return a.age > b.age; });
- persons.sort(function(a,b) {return a > b; });
- persons.sort(function(a,b) {return a.age - b.age; });

---

9. Which of the following commands can be used to locate and update any MongoDB document atomically using MongoDB client (when accessed concurrently by multiple clients)?

- db.collection.findAndModify();
- db.collection.update(db.collection.find());
- db.collection.save(db.collection.findOne());
- db.collection.save(db.collection.find());
- db.collection.update(db.collection.findOne());

---

10.

---

11.

---

12. Which of the following modules are used to add HTTP support to the Angular 4+ codebase?

- HttpResponseModule
- HttpClientModule
- HttpModule
- HttpRequestModule
- HttpServerModule

---

13.

---

14.

---

15.

---

16.

---

17. Which of the following correctly describes when a "ref" is used as a callback within a React.js component?

- when an attribute cannot be used within a component
- when needing to return multiple elements within a fragment
- when a function is passed to another component with an asyncronous process
- When a component needs to be re-assigned to null after its has mounted
- when a pointer is needed to indicate the most current reference within a component.

---

18. Which of the following JavaScript statements correctly call a window alert function as an event handler for a button click event?

- <input type="button" onclick="window.alert("Hey there!");>
- <input type="button" onclick="window.alert('Hey there!');>
- <input type="button" ondblclick="window.alert("Hey there!");>
- <input type="button" onchange="window.alert("Hey there!");>
- <input type="button" onClick="window.alert("Hey there!");>

---

19.

---

20. Which of the following are valid API endpoints in the Node.js net module?

- net.connect()
- net.disconnect()
- net.restart()
- net.Server.close()
- net.Socket.drain()

---

21.

---

22.

---

23.

---

24.

---

25.

---

26. Which of the following are valid uses for a React.js ref?

- To return a reference to an element which can be used to add focus and methods to components.
- To clear the state of child components that have become unresponsive.
- To be a callback mechanism when set within an attribute of a parent compnent.
- To optimize performance of a component within a multi-component application.
- To render this.props within child components before this.state is initizialzed.

---

27. Which of the following Angular 4+ API's can be used to call http.get() to reach the GET endpoint of a service

- Observable
- HTML
- HttpResponse
- AsyncSubject
- Subject.

---

---
