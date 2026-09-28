const learningData = {

    Variables: {

        title: "Variables",

        definition:
            "Variables are used to store data in a JavaScript program. A variable can store values such as text, numbers or Boolean values.",

        why:
            "Variables allow us to store information and use that information later in the program.",

        syntax:
            'let name = "Pavan";\nconst age = 21;',

        example1:
            'let name = "Pavan";\nconsole.log(name);',

        explanation1:
            "The variable name stores the text value Pavan. The value is then displayed using console.log().",

        example2:
            "let age = 21;\nconsole.log(age);",

        explanation2:
            "The variable age stores the number 21.",

        example3:
            "let marks = 80;\nmarks = 90;\nconsole.log(marks);",

        explanation3:
            "A variable declared using let can be changed later.",

        commonMistake:
            "Do not use a variable before declaring it. Remember that a const variable cannot be reassigned.",

        remember:
            "Use let when a value may change and const when a value should remain unchanged."
    },


    Comments: {

        title: "Comments",

        definition:
            "Comments are notes written inside JavaScript code. They are ignored by the JavaScript engine.",

        why:
            "Comments help developers understand the purpose of different parts of the code.",

        syntax:
            "// Single-line comment\n\n/* Multi-line comment */",

        example1:
            '// Store the student name\nlet name = "Pavan";',

        explanation1:
            "The first line is a comment. JavaScript does not execute the comment.",

        example2:
            'let age = 21; // Student age',

        explanation2:
            "A comment can also be written at the end of a JavaScript statement.",

        example3:
            "/*\nThis is a multi-line comment\n*/\nlet marks = 90;",

        explanation3:
            "A multi-line comment can contain multiple lines of text.",

        commonMistake:
            "Do not use comments instead of writing actual code. Comments should be used to explain code.",

        remember:
            "Use two forward slashes for a single-line comment and slash-star syntax for a multi-line comment."
    },


    "Data Types": {

        title: "Data Types",

        definition:
            "Data types describe the type of value stored in a variable.",

        why:
            "JavaScript uses different data types to represent different kinds of information.",

        syntax:
            'let name = "Pavan";\nlet age = 21;\nlet passed = true;\nlet value = null;',

        example1:
            'let name = "Pavan";\nconsole.log(typeof name);',

        explanation1:
            "The value Pavan is a string because it contains text.",

        example2:
            "let age = 21;\nconsole.log(typeof age);",

        explanation2:
            "The value 21 is a number.",

        example3:
            "let passed = true;\nconsole.log(typeof passed);",

        explanation3:
            "The value true is a Boolean value.",

        commonMistake:
            'Do not confuse a string containing a number with an actual number. For example, "25" is a string while 25 is a number.',

        remember:
            "Common JavaScript data types include String, Number, Boolean, Undefined, Null and Object."
    },


    Operators: {

        title: "Operators",

        definition:
            "Operators are used to perform calculations, comparisons and other operations on values.",

        why:
            "Operators allow JavaScript programs to calculate values and make decisions.",

        syntax:
            "let result = 10 + 5;\nlet result2 = 10 === 10;",

        example1:
            "let a = 10;\nlet b = 5;\nlet result = a + b;",

        explanation1:
            "The plus operator adds two numbers.",

        example2:
            "let age = 21;\nconsole.log(age >= 18);",

        explanation2:
            "The greater-than-or-equal operator compares the age with 18.",

        example3:
            "let a = 10;\nlet b = 10;\nconsole.log(a === b);",

        explanation3:
            "The strict equality operator checks whether two values have the same value and type.",

        commonMistake:
            "Do not confuse assignment with comparison. A single equals sign assigns a value, while three equals signs compare values and types.",

        remember:
            "Arithmetic operators perform calculations and comparison operators compare values."
    },


    Arrays: {

        title: "Arrays",

        definition:
            "An array is used to store multiple values inside a single variable.",

        why:
            "Arrays make it easier to store and work with collections of related values.",

        syntax:
            'let fruits = ["Apple", "Mango", "Orange"];',

        example1:
            'let fruits = ["Apple", "Mango", "Orange"];\nconsole.log(fruits[0]);',

        explanation1:
            "Array indexing starts from zero. Therefore, fruits[0] returns Apple.",

        example2:
            "let numbers = [10, 20, 30];\nnumbers.push(40);",

        explanation2:
            "The push method adds a new value to the end of an array.",

        example3:
            "let numbers = [10, 20, 30];\nnumbers.pop();",

        explanation3:
            "The pop method removes the last value from an array.",

        commonMistake:
            "Remember that array indexes start from zero instead of one.",

        remember:
            "Use arrays when you need to store multiple related values."
    },


    Functions: {

        title: "Functions",

        definition:
            "A function is a reusable block of JavaScript code designed to perform a specific task.",

        why:
            "Functions reduce repeated code and make programs easier to organize.",

        syntax:
            'function greet() {\n    console.log("Hello");\n}',

        example1:
            'function greet() {\n    console.log("Hello Pavan");\n}\n\ngreet();',

        explanation1:
            "The function is created first and then executed by calling its name.",

        example2:
            "function add(a, b) {\n    return a + b;\n}\n\nlet result = add(10, 20);",

        explanation2:
            "The function accepts two values and returns their sum.",

        example3:
            "function square(number) {\n    return number * number;\n}",

        explanation3:
            "This function returns the square of the given number.",

        commonMistake:
            "Creating a function does not execute it automatically. The function must be called.",

        remember:
            "Functions allow you to reuse the same block of code whenever it is needed."
    },


    JSON: {

        title: "JSON",

        definition:
            "JSON stands for JavaScript Object Notation. It is a format commonly used for storing and exchanging data.",

        why:
            "JSON is commonly used to transfer data between a frontend application and a backend server.",

        syntax:
            '{\n    "name": "Pavan",\n    "age": 21\n}',

        example1:
            'let data = \'{"name":"Pavan"}\';\nlet result = JSON.parse(data);',

        explanation1:
            "JSON.parse converts JSON text into a JavaScript object.",

        example2:
            'let student = {\n    name: "Pavan",\n    age: 21\n};',

        explanation2:
            "This example creates a JavaScript object containing student information.",

        example3:
            'let student = {\n    name: "Pavan"\n};\n\nlet data = JSON.stringify(student);',

        explanation3:
            "JSON.stringify converts a JavaScript object into JSON text.",

        commonMistake:
            "JSON property names are normally written inside double quotation marks.",

        remember:
            "Use JSON.parse to convert JSON text into an object and JSON.stringify to convert an object into JSON text."
    },


    DOM: {

        title: "DOM",

        definition:
            "DOM stands for Document Object Model. It represents an HTML document as objects that JavaScript can access and modify.",

        why:
            "The DOM allows JavaScript to change HTML content, elements and styles dynamically.",

        syntax:
            'document.getElementById("title");',

        example1:
            'let heading = document.getElementById("title");',

        explanation1:
            "This finds the HTML element whose ID is title.",

        example2:
            'document.getElementById("title").textContent = "Hello";',

        explanation2:
            "This changes the text displayed inside the selected HTML element.",

        example3:
            'document.getElementById("box").style.backgroundColor = "blue";',

        explanation3:
            "JavaScript can also change the style of an HTML element.",

        commonMistake:
            "Make sure the ID used in JavaScript exactly matches the ID used in HTML.",

        remember:
            "The DOM allows JavaScript to interact with HTML elements."
    },


    Console: {

        title: "Console",

        definition:
            "The browser console is a developer tool used to display information and debug JavaScript programs.",

        why:
            "The console helps developers check values and identify problems in their code.",

        syntax:
            "console.log(value);",

        example1:
            'console.log("Hello World");',

        explanation1:
            "This displays Hello World in the browser console.",

        example2:
            "let age = 21;\nconsole.log(age);",

        explanation2:
            "The value stored in the age variable is displayed in the console.",

        example3:
            'let name = "Pavan";\nconsole.log("Name:", name);',

        explanation3:
            "Multiple values can be displayed using console.log.",

        commonMistake:
            "Console output does not appear directly on the webpage. It appears inside the browser developer console.",

        remember:
            "Use console.log while developing and debugging JavaScript programs."
    },


    Loops: {

        title: "Loops",

        definition:
            "Loops are used to execute the same block of code multiple times.",

        why:
            "Loops reduce repetitive code and are useful when working with multiple values.",

        syntax:
            "for (let i = 0; i < 5; i++) {\n    console.log(i);\n}",

        example1:
            "for (let i = 1; i <= 5; i++) {\n    console.log(i);\n}",

        explanation1:
            "This loop prints the numbers from 1 to 5.",

        example2:
            "let i = 1;\n\nwhile (i <= 5) {\n    console.log(i);\n    i++;\n}",

        explanation2:
            "The while loop continues running while the condition is true.",

        example3:
            'let fruits = ["Apple", "Mango", "Orange"];\n\nfor (let fruit of fruits) {\n    console.log(fruit);\n}',

        explanation3:
            "This loop goes through each value in the array.",

        commonMistake:
            "Make sure the loop condition eventually becomes false. Otherwise, the program may create an infinite loop.",

        remember:
            "Use loops when you need to repeat an operation multiple times."
    }

};


let weakConcepts = [];
let currentTopicIndex = 0;


document.addEventListener("DOMContentLoaded", function () {

    const savedResult =
        localStorage.getItem("resultData");


    if (!savedResult) {

        showNoResult();

        return;
    }


    const resultData =
        JSON.parse(savedResult);


    weakConcepts =
        Array.isArray(resultData.weakConcepts)
            ? resultData.weakConcepts
            : [];


    if (weakConcepts.length === 0) {

        showCompletedMessage();

        return;
    }


    showTopic();

});


function showTopic() {

    const content =
        document.getElementById("learningContent");


    const topicName =
        weakConcepts[currentTopicIndex];


    const topic =
        learningData[topicName];


    if (!topic) {

        content.innerHTML = `

            <div class="learning-card message-card">

                <h2>Learning Topic</h2>

                <p>
                    Learning content for this topic
                    is not available yet.
                </p>

            </div>

        `;

        return;
    }


    content.innerHTML = `

        <article class="learning-card">

            <div class="topic-title">

                <p class="topic-number">
                    Topic ${currentTopicIndex + 1}
                </p>

                <h2>
                    ${topic.title}
                </h2>

            </div>


            <section class="learning-section">

                <h3>Definition</h3>

                <p>
                    ${topic.definition}
                </p>

            </section>


            <section class="learning-section">

                <h3>Why It Is Important</h3>

                <p>
                    ${topic.why}
                </p>

            </section>


            <section class="learning-section">

                <h3>Syntax</h3>

                <pre><code>${topic.syntax}</code></pre>

            </section>


            <section class="learning-section">

                <h3>Example 1</h3>

                <pre><code>${topic.example1}</code></pre>

                <p class="example-explanation">
                    ${topic.explanation1}
                </p>

            </section>


            <section class="learning-section">

                <h3>Example 2</h3>

                <pre><code>${topic.example2}</code></pre>

                <p class="example-explanation">
                    ${topic.explanation2}
                </p>

            </section>


            <section class="learning-section">

                <h3>Example 3</h3>

                <pre><code>${topic.example3}</code></pre>

                <p class="example-explanation">
                    ${topic.explanation3}
                </p>

            </section>


            <section class="mistake-section">

                <h3>Common Mistake</h3>

                <p>
                    ${topic.commonMistake}
                </p>

            </section>


            <section class="remember-section">

                <h3>Key Point</h3>

                <p>
                    ${topic.remember}
                </p>

            </section>

        </article>

    `;


    updateProgress();

    updateButtons();

}


function updateProgress() {

    const progressText =
        document.getElementById("progressText");


    const progressFill =
        document.getElementById("progressFill");


    const current =
        currentTopicIndex + 1;


    const total =
        weakConcepts.length;


    progressText.textContent =
        "Topic " + current + " of " + total;


    const percentage =
        (current / total) * 100;


    progressFill.style.width =
        percentage + "%";

}


function updateButtons() {

    const previousBtn =
        document.getElementById("previousBtn");


    const nextBtn =
        document.getElementById("nextBtn");


    if (currentTopicIndex === 0) {

        previousBtn.style.visibility =
            "hidden";

    } else {

        previousBtn.style.visibility =
            "visible";

    }


    if (
        currentTopicIndex ===
        weakConcepts.length - 1
    ) {

        nextBtn.textContent =
            "Finish Learning";

    } else {

        nextBtn.textContent =
            "Next Concept";

    }

}


function nextTopic() {

    if (
        currentTopicIndex <
        weakConcepts.length - 1
    ) {

        currentTopicIndex++;

        showTopic();

    } else {

        finishLearning();

    }

}


function previousTopic() {

    if (currentTopicIndex > 0) {

        currentTopicIndex--;

        showTopic();

    }

}


function finishLearning() {

    document.getElementById("learningContent")
        .style.display = "none";


    document.querySelector(".learning-navigation")
        .style.display = "none";


    document.querySelector(".learning-progress")
        .style.display = "none";


    document.getElementById("finishSection")
        .style.display = "block";

}


function showNoResult() {

    document.getElementById("learningContent").innerHTML = `

        <div class="learning-card message-card">

            <h2>No Learning Data</h2>

            <p>
                Please complete the assessment first
                to receive personalized learning content.
            </p>

        </div>

    `;

}


function showCompletedMessage() {

    document.getElementById("learningContent").innerHTML = `

        <div class="learning-card message-card">

            <h2>All Concepts Completed</h2>

            <p>
                You have performed well in all the
                assessed concepts. There are no
                weak topics to study.
            </p>

        </div>

    `;


    document.querySelector(".learning-navigation")
        .style.display = "none";


    document.querySelector(".learning-progress")
        .style.display = "none";

}


function goToTest() {

    window.location.href =
        "javascript-test.html";

}


function goToCourse() {

    window.location.href =
        "javascript.html";

}