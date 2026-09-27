document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // DOM ELEMENTS
    // ========================================

    // Landing
    const startLearningButton =
        document.getElementById("start-learning-btn");

    // Profile
    const profileSection =
        document.getElementById("profile-section");

    const profileForm =
        document.getElementById("profile-form");

    // Assessment
    const assessmentSection =
        document.getElementById("assessment-section");

    const questionNumber =
        document.getElementById("question-number");

    const totalQuestions =
        document.getElementById("total-questions");

    const questionTopic =
        document.getElementById("question-topic");

    const questionText =
        document.getElementById("question-text");

    const optionsContainer =
        document.getElementById("options-container");

    const nextQuestionButton =
        document.getElementById("next-question-btn");

    const assessmentProgress =
        document.getElementById("assessment-progress-fill");

    // Results
    const resultsSection =
        document.getElementById("results-section");

    const scoreValue =
        document.getElementById("score-value");

    const scoreText =
        document.getElementById("score-text");

    const strongTopics =
        document.getElementById("strong-topics");

    const weakTopics =
        document.getElementById("weak-topics");

    // Recommendation
    const recommendationTitle =
        document.getElementById("recommendation-title");

    const recommendationText =
        document.getElementById("recommendation-text");

    const focusAreaText =
        document.getElementById("focus-area-text");

    const learningStrategyText =
        document.getElementById("learning-strategy-text");

    const nextStepText =
        document.getElementById("next-step-text");

    const recommendedTopics =
        document.getElementById("recommended-topics");

    // Continue Learning
    const continueLearningButton =
        document.getElementById("continue-learning-btn");

    // Learning page
    const learningSection =
        document.getElementById("learning-section");

    const learningFocus =
        document.getElementById("learning-focus");

    const learningQuestionNumber =
        document.getElementById(
            "learning-question-number"
        );

    const learningTotalQuestions =
        document.getElementById(
            "learning-total-questions"
        );

    const learningProgressFill =
        document.getElementById(
            "learning-progress-fill"
        );

    const learningQuestionTopic =
        document.getElementById(
            "learning-question-topic"
        );

    const learningQuestionText =
        document.getElementById(
            "learning-question-text"
        );

    const learningOptionsContainer =
        document.getElementById(
            "learning-options-container"
        );

    const learningNextButton =
        document.getElementById(
            "learning-next-btn"
        );


    // ========================================
    // QUESTIONS
    // ========================================

    const questions = [

        {
            question:
                "Which keyword is used to declare a variable in JavaScript?",

            topic:
                "Variables",

            options: [
                "var",
                "define",
                "variable",
                "declare"
            ],

            answer: 0
        },

        {
            question:
                "Which symbol is used for strict equality in JavaScript?",

            topic:
                "Operators",

            options: [
                "=",
                "==",
                "===",
                "!="
            ],

            answer: 2
        },

        {
            question:
                "Which method adds an element to the end of an array?",

            topic:
                "Arrays",

            options: [
                "push()",
                "pop()",
                "shift()",
                "slice()"
            ],

            answer: 0
        },

        {
            question:
                "Which keyword is used to define a function?",

            topic:
                "Functions",

            options: [
                "function",
                "func",
                "define",
                "method"
            ],

            answer: 0
        },

        {
            question:
                "Which method converts JSON text into a JavaScript object?",

            topic:
                "JSON",

            options: [
                "JSON.convert()",
                "JSON.parse()",
                "JSON.object()",
                "JSON.read()"
            ],

            answer: 1
        }

    ];


    // ========================================
    // LEARNING QUESTIONS
    // ========================================

    const learningQuestions = [

        {
            question:
                "Which method adds an element to the end of an array?",

            topic: "Arrays",

            options: [
                "push()",
                "pop()",
                "shift()",
                "slice()"
            ],

            answer: 0
        },

        {
            question:
                "Which operator checks both value and type?",

            topic: "Operators",

            options: [
                "=",
                "==",
                "===",
                "!="
            ],

            answer: 2
        },

        {
            question:
                "Which keyword is used to create a function?",

            topic: "Functions",

            options: [
                "function",
                "func",
                "method",
                "create"
            ],

            answer: 0
        },

        {
            question:
                "Which method converts JSON text into an object?",

            topic: "JSON",

            options: [
                "JSON.convert()",
                "JSON.parse()",
                "JSON.object()",
                "JSON.read()"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword can be used to declare a variable?",

            topic: "Variables",

            options: [
                "var",
                "define",
                "variable",
                "declare"
            ],

            answer: 0
        }

    ];


    // ========================================
    // ASSESSMENT VARIABLES
    // ========================================

    let currentQuestion = 0;

    let score = 0;

    let selectedAnswer = null;

    let topicResults = {};


    // ========================================
    // LEARNING VARIABLES
    // ========================================

    let learningCurrentQuestion = 0;

    let learningSelectedAnswer = null;

    let learningScore = 0;

    let personalizedQuestions = [];


    // ========================================
    // START LEARNING
    // ========================================

    startLearningButton.addEventListener(
        "click",
        function () {

            profileSection.classList.remove(
                "hidden"
            );

            profileSection.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    // ========================================
    // PROFILE FORM
    // ========================================

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            // Reset assessment
            currentQuestion = 0;

            score = 0;

            selectedAnswer = null;

            topicResults = {};


            // Hide profile
            profileSection.classList.add(
                "hidden"
            );


            // Show assessment
            assessmentSection.classList.remove(
                "hidden"
            );


            assessmentSection.scrollIntoView({
                behavior: "smooth"
            });


            // Show first question
            showQuestion();

        }
    );


    // ========================================
    // SHOW QUESTION
    // ========================================

    function showQuestion() {

        const question =
            questions[currentQuestion];


        // Question number
        questionNumber.textContent =
            currentQuestion + 1;


        // Total questions
        totalQuestions.textContent =
            questions.length;


        // Topic
        questionTopic.textContent =
            question.topic;


        // Question
        questionText.textContent =
            question.question;


        // Reset selected answer
        selectedAnswer = null;


        // Remove old options
        optionsContainer.innerHTML = "";


        // Create options
        question.options.forEach(
            function (option, index) {

                const button =
                    document.createElement(
                        "button"
                    );

                button.type = "button";

                button.classList.add(
                    "option"
                );

                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function () {

                        // Remove previous selection
                        const allOptions =
                            optionsContainer.querySelectorAll(
                                ".option"
                            );

                        allOptions.forEach(
                            function (item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                        // Select this option
                        button.classList.add(
                            "selected"
                        );


                        // Store answer
                        selectedAnswer =
                            index;

                    }
                );


                optionsContainer.appendChild(
                    button
                );

            }
        );


        // Progress
        const progress =
            (
                (currentQuestion + 1) /
                questions.length
            ) * 100;


        assessmentProgress.style.width =
            progress + "%";

    }


    // ========================================
    // NEXT QUESTION
    // ========================================

    nextQuestionButton.addEventListener(
        "click",
        function () {

            // No answer selected
            if (selectedAnswer === null) {

                alert(
                    "Please select an answer first."
                );

                return;

            }


            // Current question
            const current =
                questions[currentQuestion];


            // Current topic
            const topic =
                current.topic;


            // Create topic object
            if (!topicResults[topic]) {

                topicResults[topic] = {

                    correct: 0,

                    total: 0

                };

            }


            // Count question
            topicResults[topic].total++;


            // Check answer
            if (
                selectedAnswer ===
                current.answer
            ) {

                score++;

                topicResults[topic].correct++;

            }


            // Move to next question
            currentQuestion++;


            // More questions
            if (
                currentQuestion <
                questions.length
            ) {

                showQuestion();

            }

            // Assessment finished
            else {

                showResults();

            }

        }
    );


    // ========================================
    // SHOW RESULTS
    // ========================================

    function showResults() {

        // Calculate percentage
        const percentage =
            Math.round(
                (score / questions.length) * 100
            );


        // Show score
        scoreValue.textContent =
            percentage;

        scoreText.textContent =
            score +
            " out of " +
            questions.length +
            " correct";


        // Clear old results
        strongTopics.innerHTML = "";

        weakTopics.innerHTML = "";

        recommendedTopics.innerHTML = "";


        // Store weak topics
        let weakTopicNames = [];


        // Analyze topics
        Object.keys(topicResults).forEach(
            function (topic) {

                const result =
                    topicResults[topic];


                const topicScore =
                    result.correct /
                    result.total;


                const topicItem =
                    document.createElement(
                        "div"
                    );


                topicItem.classList.add(
                    "topic-item"
                );


                topicItem.textContent =
                    topic +
                    " — " +
                    result.correct +
                    "/" +
                    result.total;


                // Strong
                if (topicScore >= 0.5) {

                    strongTopics.appendChild(
                        topicItem
                    );

                }

                // Weak
                else {

                    weakTopics.appendChild(
                        topicItem
                    );

                    weakTopicNames.push(
                        topic
                    );

                }

            }
        );


        // ====================================
        // RECOMMENDED TOPICS
        // ====================================

        weakTopicNames.forEach(
            function (topic) {

                const item =
                    document.createElement(
                        "div"
                    );


                item.classList.add(
                    "learning-topic"
                );


                item.textContent =
                    "📚 " + topic;


                recommendedTopics.appendChild(
                    item
                );

            }
        );


        // ====================================
        // RECOMMENDATION
        // ====================================

        if (percentage >= 80) {

            recommendationTitle.textContent =
                "You're ready for more challenging topics!";

            recommendationText.textContent =
                "Your assessment shows strong understanding. " +
                "We'll gradually increase the difficulty " +
                "and introduce advanced questions.";

            focusAreaText.textContent =
                "Continue strengthening your existing skills " +
                "while exploring advanced concepts.";

            learningStrategyText.textContent =
                "Practice challenging questions and apply " +
                "your knowledge to real-world problems.";

            nextStepText.textContent =
                "Move to higher-level questions and " +
                "advanced learning content.";

        }

        else if (percentage >= 50) {

            recommendationTitle.textContent =
                "You're making good progress!";

            recommendationText.textContent =
                "You understand several concepts, " +
                "but some areas need more practice.";

            focusAreaText.textContent =
                weakTopicNames.length > 0
                    ? "Focus more on " +
                      weakTopicNames.join(", ") +
                      "."
                    : "Continue practicing the concepts " +
                      "you have learned.";

            learningStrategyText.textContent =
                "We'll balance revision of weaker areas " +
                "with new questions.";

            nextStepText.textContent =
                "Practice your weaker topics before " +
                "moving to more difficult questions.";

        }

        else {

            recommendationTitle.textContent =
                "Let's strengthen your foundations.";

            recommendationText.textContent =
                "We'll focus more on your weaker topics " +
                "and build your understanding step by step.";

            focusAreaText.textContent =
                weakTopicNames.length > 0
                    ? "Start with " +
                      weakTopicNames.join(", ") +
                      "."
                    : "Review the fundamental concepts.";

            learningStrategyText.textContent =
                "We'll provide easier questions and " +
                "additional practice before increasing difficulty.";

            nextStepText.textContent =
                "Strengthen your fundamentals with " +
                "a personalized practice session.";

        }


        // ====================================
        // SHOW RESULTS
        // ====================================

        assessmentSection.classList.add(
            "hidden"
        );

        resultsSection.classList.remove(
            "hidden"
        );

        resultsSection.scrollIntoView({
            behavior: "smooth"
        });

    }


    // ========================================
    // CONTINUE LEARNING
    // ========================================

    /*
       IMPORTANT:
       Only connect this button if it
       actually exists in HTML.
    */

    if (continueLearningButton) {

        continueLearningButton.addEventListener(
            "click",
            function () {

                // Hide results
                resultsSection.classList.add(
                    "hidden"
                );


                // Show learning page
                learningSection.classList.remove(
                    "hidden"
                );


                learningSection.scrollIntoView({
                    behavior: "smooth"
                });


                startPersonalizedLearning();

            }
        );

    }


    // ========================================
    // START PERSONALIZED LEARNING
    // ========================================

    function startPersonalizedLearning() {

        learningCurrentQuestion = 0;

        learningSelectedAnswer = null;

        learningScore = 0;


        // Find weak topics
        let weakTopicsList = [];


        Object.keys(topicResults).forEach(
            function (topic) {

                const result =
                    topicResults[topic];


                const topicScore =
                    result.correct /
                    result.total;


                if (topicScore < 0.5) {

                    weakTopicsList.push(
                        topic
                    );

                }

            }
        );


        // If no weak topics
        if (
            weakTopicsList.length === 0
        ) {

            weakTopicsList =
                Object.keys(topicResults);

        }


        // Show focus
        learningFocus.textContent =
            weakTopicsList.join(", ");


        // Select matching questions
        personalizedQuestions =
            learningQuestions.filter(
                function (question) {

                    return weakTopicsList.includes(
                        question.topic
                    );

                }
            );


        // If no matching questions
        if (
            personalizedQuestions.length === 0
        ) {

            personalizedQuestions =
                learningQuestions;

        }


        // Maximum 5
        personalizedQuestions =
            personalizedQuestions.slice(
                0,
                5
            );


        learningTotalQuestions.textContent =
            personalizedQuestions.length;


        showLearningQuestion();

    }


    // ========================================
    // SHOW LEARNING QUESTION
    // ========================================

    function showLearningQuestion() {

        const question =
            personalizedQuestions[
                learningCurrentQuestion
            ];


        learningQuestionNumber.textContent =
            learningCurrentQuestion + 1;


        learningQuestionTopic.textContent =
            question.topic;


        learningQuestionText.textContent =
            question.question;


        learningSelectedAnswer = null;


        learningOptionsContainer.innerHTML =
            "";


        question.options.forEach(
            function (option, index) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type = "button";

                button.classList.add(
                    "learning-option"
                );

                button.textContent =
                    option;


                button.addEventListener(
                    "click",
                    function () {

                        const allOptions =
                            learningOptionsContainer.querySelectorAll(
                                ".learning-option"
                            );


                        allOptions.forEach(
                            function (item) {

                                item.classList.remove(
                                    "selected"
                                );

                            }
                        );


                        button.classList.add(
                            "selected"
                        );


                        learningSelectedAnswer =
                            index;

                    }
                );


                learningOptionsContainer.appendChild(
                    button
                );

            }
        );


        const progress =
            (
                (learningCurrentQuestion + 1) /
                personalizedQuestions.length
            ) * 100;


        learningProgressFill.style.width =
            progress + "%";

    }


    // ========================================
    // NEXT LEARNING QUESTION
    // ========================================

    if (learningNextButton) {

        learningNextButton.addEventListener(
            "click",
            function () {

                if (
                    learningSelectedAnswer === null
                ) {

                    alert(
                        "Please select an answer first."
                    );

                    return;

                }


                const question =
                    personalizedQuestions[
                        learningCurrentQuestion
                    ];


                if (
                    learningSelectedAnswer ===
                    question.answer
                ) {

                    learningScore++;

                }


                learningCurrentQuestion++;


                if (
                    learningCurrentQuestion <
                    personalizedQuestions.length
                ) {

                    showLearningQuestion();

                }

                else {

                    alert(
                        "Practice complete! Score: " +
                        learningScore +
                        "/" +
                        personalizedQuestions.length
                    );

                }

            }
        );

    }

});