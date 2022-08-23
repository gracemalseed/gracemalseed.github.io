const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
        question: "Grace Malseed is currently completing a PhD in:",
        answers: {
          a: "Cancer Biology",
          b: "Human-computer interaction",
          c: "Interactive programming languages",
          d: "Low and high fidelity prototyping"
        },
        correctAnswer: "a"
      },
      {
        question: "Grace Malseed studies at:",
        answers: {
          a: "Queensland Health",
          b: "University of Queensland",
          c: "Queensland University of Technology",
          d: "University of Technology Sydney"
        },
        correctAnswer: "c"
      },
      {
        question: "Grace's research skills include",
        answers: {
          a: "Planning and execution of experiments",
          b: "Maintaining accurate lab records",
          c: "Retrieval and analysis of literature",
          d: "All these answers are correct"
        },
        correctAnswer: "d"
      },
      {
        question: "Grace is super passionate about:",
        answers: {
          a: "Women's health",
          b: "Using cool, new techniques",
          c: "Sharing research",
          d: "All of these and more!"
        },
        correctAnswer: "d"
      }
    ];


function buildQuiz() {
    // variable to store the HTML output
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
        // variable to store the list of possible answers
        const answers = [];
        // for each available answer to this question add a html radio button
        for(letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'
                );
             }
        // add this question and its answers to the output
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
            );
    }
     // combine our output list into one string of HTML and put it on the page
     quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;
    // for each question...
        for(i=0; i<quizQuestions.length; i++){
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            // if answer is correct
            if(userAnswer===quizQuestions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
            
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
            // color the answers red
                answerContainers[i].style.color = 'red';
            }
    }
    // show number of correct answers out of total
    if (numCorrect === 0) { 
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
     }
    if (numCorrect === 1) {
        resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";
    }
    if (numCorrect === 2) {
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
    }
    if (numCorrect === 3) {
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Grace pretty well!";
    }
    if (numCorrect === 4) {
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Grace so well!";
    }

}

//load quiz
buildQuiz();

//when user clicks submit, results will show
submitButton.onclick = function() {
    showResults();
}