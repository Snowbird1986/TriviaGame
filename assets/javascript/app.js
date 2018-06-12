var questions = [{
    question: "What was the teachers name?",
    answers: [
        "a",
        "Mr. Pheeny",
        "a",
        "a",
    ],
    correctAnswer: "Mr. Pheeny",
    correctImage: "./images/questionOneCorrect.gif",
    incorrectImage: "./images/questionOneIncorrect.gif",
    time:30
    },
    {
    question: "What grade was Corey in in season 1?",
    answers: [
        "a",
        "6th Grade",
        "a",
        "a",
    ],
    correctAnswer: "6th Grade",
    correctImage: "./images/questionTwoCorrect.jpg",
    incorrectImage: "./images/QuestiontwoIncorrect.jpg",
    time:30
    },
    {
    question: "What city did the Matthews family live in?",
    answers: [
        "a",
        "a",
        "a",
        "Philadelphia",
    ],
    correctAnswer: "Philadelphia",
    correctImage: "./images/questionThreeCorrect.gif",
    incorrectImage: "./images/questionThreeIncorrect.gif",
    time:30
    },
    {
    question: "What was Corey's dads job?",
    answers: [
        "General store manager",
        "a",
        "a",
        "a",
    ],
    correctAnswer: "General store manager",
    correctImage: "./images/questionFourCorrect.gif",
    incorrectImage: "./images/questionFourIncorrect.gif",
    time:30 
    },
    {
    question: "Who is Corey's best friend?",
    answers: [
        "Shawn",
        "a",
        "a",
        "a",
    ],
    correctAnswer: "Shawn",
    correctImage: "./images/questionFiveCorrect.gif",
    incorrectImage: "./images/questionFiveIncorrect.gif",
    time:30 
    },
    {
    question: "What is Corey's favorite sport",
    answers: [
        "a",
        "a",
        "Baseball",
        "a",
    ],
    correctAnswer: "Baseball",
    correctImage: "./images/questionSixCorrect.gif",
    incorrectImage: "./images/questionSixIncorrect.png",
    time:30  
    }]
    

$(document).ready(function(){
    time = 30
    i=0
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    $(".hide1").hide()
    $(".hide2").show()
    $(".btn").on("click", function() {
        $(".hide1").show();
        $(".hide2").hide();
        // for(i=0; i<questions.length; i++){
        $(".question").html(questions[i].question);
        // console.log(questions[i].answers.length)
        for(j=0; j<questions[i].answers.length; j++){
            // console.log(questions[i].answers[j])
            // $(".answer").append("<div class='answers'>questions[i].answers[j]</div>")
            // $("<div/>").html(questions[i].answers[j]).attr('class','answers').append(".answer")
            var answerAuto = $("<div>");
            answerAuto.addClass("answers"+j);
            answerAuto.html(questions[i].answers[j]);
            $(".answer").append(answerAuto);
        };
        setTimeout(noAnswer,31000);
        questionInterval = setInterval(decrement,1000);
            // $(".timer").html(setTimeout(function() {
            //     ;
            //     }, 30000));

            // };
        })
    $(".answers0,.answers1,.answers2,.answers3").on("click", function() {
        if(this.text()==questions[i].correctAnswer){
            correct()
        }
        else {
            incorrect()
        }
    });
    
    function correct (){
        correct++;
        betweenCorrect();
        console.log(correct)
    }
    function incorrect (){
        incorrect++;
        betweenIncorrect();
        console.log(incorrect)
    }
    function noAnswer (){
        unanswered++;
        nextQuestion();
        console.log(unanswered)
    }

    function betweenCorrect() {
        clearInterval(questionInterval);
        time=5;
        $(".timer").html(timeConverter(time));
        $(".question").html(questions[i].correctImage);
        $(".answer").html("Correct:"+questions[i].correctAnswer);
        setTimeout(nextQuestion,6000);
        questionInterval = setInterval(decrement,1000)
    }
    function betweenIncorrect() {
        clearInterval(questionInterval);
        time=5;
        $(".timer").html(timeConverter(time));
        $(".question").html(questions[i].incorrectImage);
        $(".answer").html("The Correct Answer was:"+questions[i].correctAnswer);
        setTimeout(nextQuestion,6000);
        questionInterval = setInterval(decrement,1000)
    }
    function nextQuestion() {
        if(i<(questions.length-1)){
            clearInterval(questionInterval)
            time = 30
            $(".timer").html(timeConverter(time));
            i++;
            $(".question").html(questions[i].question);
            for(j=0; j<questions[i].answers.length; j++){
                // $(".answers").html("<div>'questions[i].answers'</div>")
                // $("<div/>").html(questions[i].answers[j]).attr('class','answers').append(".answer")
                $(".answers"+j).html(questions[i].answers[j]);

            };
            setTimeout(noAnswer,31000);
            questionInterval = setInterval(decrement,1000);
        }
        else{
            clearInterval(questionInterval)
            quizReults()
        }

    }
    function quizReults(){
        $(".timer").html("Percentage: "+Math.floor(correct/6*100)+"%");
        $(".question").html("Thank you for taking this quiz.  Results Below");
        $(".answer").html("Correct: "+correct+"<br>Incorrect: "+incorrect+"<br>Unanswered: "+unanswered)
    }
    function decrement(){
        time--;
        $(".timer").html(timeConverter(time));
        }
    function timeConverter(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
            minutes = "00";
        }
    
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
        }
    });