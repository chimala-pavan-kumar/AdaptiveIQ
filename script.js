let timeLeft = 20 * 60;

        let timerInterval = setInterval(function () {

            let minutes = Math.floor(timeLeft / 60);

            let seconds = timeLeft % 60;

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            document.getElementById("timer").textContent =
                minutes + ":" + seconds;

            timeLeft--;

            if (timeLeft < 0) {

                clearInterval(timerInterval);

                alert("Time is over!");

                submitTest();

            }

        }, 1000);


        function submitTest() {

            clearInterval(timerInterval);

            const answers = {

                q1: "var",
                q2: "//",
                q3: "Boolean",
                q4: "===",
                q5: "push",
                q6: "function",
                q7: "JSON.parse",
                q8: "let",
                q9: "pop",
                q10: "document",
                q11: "console.log",
                q12: "for",
                q13: "return",
                q14: "getElementById",
                q15: "null"

            };


            let score = 0;


            for (let question in answers) {

                let selectedAnswer =
                    document.querySelector(
                        'input[name="' + question + '"]:checked'
                    );


                if (
                    selectedAnswer &&
                    selectedAnswer.value === answers[question]
                ) {

                    score = score + 2;

                }

            }


            document.getElementById("score").textContent = score;


            let message = "";


            if (score >= 24) {

                message = "Excellent! You have a strong JavaScript foundation.";

            }
            else if (score >= 16) {

                message = "Good job! You have a basic understanding of JavaScript.";

            }
            else {

                message = "Keep learning and practice JavaScript concepts again.";

            }


            document.getElementById("result-message").textContent = message;


            document.getElementById("result-box").style.display = "block";


            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });

        }