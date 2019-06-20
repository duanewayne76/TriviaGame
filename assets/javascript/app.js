$('#start').on('click', function () {

    game.start();

})

var questions = [
    {
        question: "Which 80s movie was the highest grossing film of the decade?",
        answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "E.T. The Extraterrestrial"],
        correctAnswer: "E.T. The Extraterrestrial"
    },
    {
        question: "Which 80s movie was Alan Rickman’s first feature film role?",
        answers: ["Die Hard", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Die Hard"
    },
    {
        question: "Which 80s movie spawned 6 sequels and a T.V. series?",
        answers: ["A Bug's Life", "Monsters Inc", "Police Academy", "The Lion King"],
        correctAnswer: "Police Academy"
    },
    {
        question: "Which 80’s movie was the first to become a hit largely due to MTV",
        answers: ["A Bug's Life", "Flashdance", "Toy Story", "The Lion King"],
        correctAnswer: "Flashdance"
    },
    {
        question: "What artist sang the 1986 song “Danger Zone” from Top Gun?",
        answers: ["A Bug's Life", "Kenny Loggin", "Toy Story", "The Lion King"],
        correctAnswer: "Kenny Loggins"
    },
    {
        question: "Which 1980s theme song was recorded in just 3 hours?",
        answers: ["Don’t You (Forget About Me)", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Don’t You (Forget About Me)"
    },
    {
        question: "Which 1980s theme song inspired its own separate film?",
        answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "Eye of the Tiger"],
        correctAnswer: "Eye of the Tiger"
    },
    {
        question: "Which 1980s theme song was inspired by a commercial jingle?",
        answers: ["A Bug's Life", "Monsters Inc", "Ghostbusters", "The Lion King"],
        correctAnswer: "Ghostbusters"
    },
    {
        question: "What is the name of the lead character in The Secret of NIMH?",
        answers: ["Mrs. Brisby", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Mrs. Brisby"
    },
    {
        question: "Which film was Disney’s first animated film to use computer graphics?",
        answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "The Fox and the Hound"],
        correctAnswer: "The Fox and the Hound"
    },
    {
        question: 'Which 80s animated movie’s tagline was "Beyond good. Beyond evil. Beyond your wildest imagination."?',
        answers: ["A Bug's Life", "The Transformers: The Movie", "Toy Story", "The Lion King"],
        correctAnswer: "The Transformers: The Movie"

    }];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();

        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('subwrapper').prepend('<h2>Time Remaining: <span id="counter"</span> Seconds</h2>');
        $('#start').remove();
        //Display questions and potential answers
        for (i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                //var radio=`< input type = "radio" name="question-${i}" value="${questions[i].answers[j]}">${questions[i].answers[j]}`;
                // $("#subwrapper").append(radio);
                $("#subwrapper").append("<input type = 'radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
                //<input type="radio" name="question-0" value="male"> Male<br>
                //<input type="radio" name="question-1" value="male"> Male<br> //
            }

        }

        $('#subwrapper').append('<br><button id="end">Done</button>');
    },
        done: function () {
        $.each($('input[name="question-0]":checked')), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        }

        $.each($('input[name="question-1]":checked')), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-2]":checked')), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-3]":checked')), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-4]":checked')), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-5]":checked')), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-6]":checked')), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-7]":checked')), function () {
            if ($(this).val() == questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-8]":checked')), function () {
            if ($(this).val() == questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };
        $.each($('input[name="question-9]":checked')), function () {
            if ($(this).val() == questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        };

        this.result();
    },

    result: function () {
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $('subwrapper').append("<h3>Correct Answers: " + this.correct + "</h3>");
        $('subwrapper').append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $('subwrapper').append("<h3>Unanswered: " + (questions.length - (this.correct = this.incorrect)) + "</h3>");
    }




}
// var time = 5;
// var timerId = setInterval(function () {
//     time--;
//     if (time == 0) {
//         clearInterval(timerId);
//     }
//     $("#timer").text(time);

// }, 1000);
//