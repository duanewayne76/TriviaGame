$('#start').on('click', function () {
    $(this).hide();
    for (i = 0; i < questions.length; i++) {
        $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
        for (var j = 0; j < questions[i].answers.length; j++) {
            //var radio=`< input type = "radio" name="question-${i}" value="${questions[i].answers[j]}">${questions[i].answers[j]}`;
            // $("#subwrapper").append(radio);
            $("#subwrapper").append("<input type = 'radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            //<input type="radio" name="question-0" value="male"> Male<br>
            //<input type="radio" name="question-1" value="male"> Male<br> //
        }
    }
    
    var time = 5;
    var timerId = setInterval(function () {
        time--;
        if (time == 0) {
            clearInterval(timerId);
        }
        $("#timer").text(time);

    }, 1000);

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
    }, {
        question: "Which 80s movie spawned 6 sequels and a T.V. series?",
        answers: ["A Bug's Life", "Monsters Inc", "Police Academy", "The Lion King"],
        correctAnswer: "Police Academy"
    }, {
        question: "Which 80’s movie was the first to become a hit largely due to MTV",
        answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: " Flashdance"
    }, {
        question: "What artist sang the 1986 song “Danger Zone” from Top Gun?",
        answers: ["A Bug's Life", "Flashdance", "Toy Story", "The Lion King"],
        correctAnswer: "Kenny Loggins"
    }, {
        question: "Which 1980s theme song was recorded in just 3 hours?",
        answers: ["Don’t You (Forget About Me)", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Don’t You (Forget About Me)"
    }, {
        question: "Which 1980s theme song inspired its own separate film?",
        answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "Eye of the Tiger"],
        correctAnswer: "Eye of the Tiger"
    }, {
        question: "Which 1980s theme song was inspired by a commercial jingle?",
        answers: ["A Bug's Life", "Monsters Inc", "Ghostbusters", "The Lion King"],
        correctAnswer: "Ghostbusters"
    }, {
        question: "What is the name of the lead character in The Secret of NIMH?",
        answers: ["Mrs. Brisby", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Mrs. Brisby"
    }, {
        question: "Which film was Disney’s first animated film to use computer graphics?",
        answers: ["A Bug's Life", "Monsters Inc", "Toy Story", "The Fox and the Hound"],
        correctAnswer: "The Fox and the Hound"
    }, {
        question: 'Which 80s animated movie’s tagline was "Beyond good. Beyond evil. Beyond your wildest imagination."?',
        answers: ["A Bug's Life", "The Transformers: The Movie", "Toy Story", "The Lion King"],
        correctAnswer: "The Transformers: The Movie"

    }];

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 20,
        countdown: function(){
            game.counter--;
            $('#counter').html(game.counter);
            if (game.counter<=0) {
                console.log("Time is up!);
                game.done();
                
            }
        },
        start: function(){
            
        }
    }