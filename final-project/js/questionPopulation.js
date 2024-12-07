
//array containing all the question content 


const questions = {
  1: {
      "questionText": "Is this label greenwashing? Q1",
      "indepthQuestionText": "On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes",
      "altText":"keurig cup label"
  },
  3: {
      "questionText": "Is this label greenwashing? Q2",
      "indepthQuestionText": "Q2 On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes",
      "altText":"keurig cup label"
  },
  5: {
      "questionText": "Is this label greenwashing? Q3",
      "indepthQuestionText": "Q3 On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes",
      "altText":"keurig cup label"
  },
  7: {
      "questionText": "Is this label greenwashing? Q4",
      "indepthQuestionText": "Q4 On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes",
      "altText":"keurig cup label"
  },
  9: {
    "questionText": "Is this label greenwashing? Q5",
      "indepthQuestionText": "Q5 On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes",
      "altText":"keurig cup label"
  }
};

const responses = {
  2: {
      "explainerText":"fill in later",
      "addtResources":"www.blah.com",
      "imageFile": "qOneKeurig.jpg"
  },
  4: {
      "explainerText": "fill in later",
      "addtResources":"www.blah.com",
      "imageFile": "qOneKeurig.jpg"
  },
  6: {
      "explainerText": "fill in later",
      "addtResources":"www.blah.com",
      "imageFile": "qOneKeurig.jpg"
  },
  8: {
      "explainerText": "fill in later",
      "addtResources":"www.blah.com",
      "imageFile": "qOneKeurig.jpg"
  },
  10: {
      "explainerText": "fill in later",
      "addtResources":"www.blah.com",
      "imageFile": "qOneKeurig.jpg"
  }
};



let pageTracker = 1;
let questionTracker = 1;
let score = 0;


function renderQuestion() {

  //accessing content from the dom 
  const questionImg = document.querySelector(".questionImage");
  const indepthQuestionText = document.getElementById("indepthQuestionText");
  const questionNum = document.getElementById("questionNum");
  
  //adding relevant content to relevant variables 
  questionNum.innerText = questionTracker;
  questionImg.src = "assets/questionPage/" + questions[pageTracker]["imageFile"];
  questionImg.alt = "assets/questionPage/" + questions[pageTracker]["altText"];
  indepthQuestionText.innerText = questions[pageTracker]["indepthQuestionText"];
 
}

function renderExplanation(accuracy){

  //accessing content from the dom 
  const questionImg = document.querySelector(".questionImage");
  const responseAccuracy = document.getElementById("accuracy");
  const explainerText = document.getElementById("explainerText");
  const addtResources = document.getElementById("addtResources");
  
  //adding relevant content to relevant variables 
  questionImg.src = "assets/questionPage/" + responses[pageTracker]["imageFile"];
  responseAccuracy.innerText = "You are " + accuracy;
  explainerText.innerText = responses[pageTracker]["explainerText"];
  addtResources.innerText = "Read more at " + responses[pageTracker]["addtResources"];

}


function renderResults(score){
  const quizResults = document.getElementById("quizResults");

  quizResults.innerText = "You received " + score + " out of 5 correct";
}

//declaring relevant variables for functions
let yesButton = document.getElementById("yesButton");
let noButton = document.getElementById("noButton");


let nextButton = document.getElementById("nextQuestion");
let answer = "";
let accuracy = ""; 


//checking this answer by checking stored answer in 
//recording the accuracy of the response
function checkAnswer(){
  if(answer === questions[pageTracker]["correctAnswer"]){
    console.log("you are correct") //just using these as a metric to motor correctness 
    score++;
    accuracy = "correct"
    return accuracy;
  }
  else{
    console.log("you are incorrect");
    accuracy = "incorrect"
    return accuracy;
  }

}


//FLOWER ANIMATION//
let currentScale = 1; // Start at normal size
let scaleChange = 0.15

// taking accuracy as a parameter to determine whether or not the flower should grow or shrink 
function animateFlower(accuracy) {
    // depending on the accuracy of the answer, determine the scale to change the flower 
    
    if(accuracy === "correct" ){
        currentScale = currentScale + scaleChange
    }
    else {
        currentScale = currentScale - scaleChange
    }
    // Animate the flower with GSAP
    gsap.to("#flower", {
        scale: currentScale,
        duration: 0.8,
        
    });
}


//registering what answer (yes or no) a user selected and checking to see if this answer was correct
function buttonSelection(){
  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      if (event.target.value === "yes" || event.target.value === "no") {
        answer = event.target.value; //returning the value assigned to html button 
        console.log(answer);
        accuracy = checkAnswer();
        console.log(accuracy);
        changeDisplay(accuracy);
        animateFlower(accuracy);
      }
      else{ //changing content back to the question format and repopulating this div 
        changeDisplay(accuracy);
      }
    }
    
  });
}

//
function changeDisplay(accuracy) {
  // Increment tracker 
  pageTracker++;
  const questionContainer = document.querySelector(".questionContent");
  const responseContainer = document.getElementById('responseContent');
  const resultsPage = document.getElementById('resultsPage');

  //
  if (pageTracker < (Object.entries(questions).length * 2)){
    if (pageTracker % 2 === 0) {
      questionTracker++
      responseContainer.style.display = "flex";
      questionContainer.style.display = "none";
      nextButton.innerText = "Q" + questionTracker;
      renderExplanation(accuracy);
    }
    else{
      responseContainer.style.display = "none";
      questionContainer.style.display = "flex";
      renderQuestion();
    }
  }
  else{
    responseContainer.style.display = "none";
    questionContent.style.display = "none";
    resultsPage.style.display = "flex";
    renderResults(score);
  }

}















/*


// Initialize the quiz

*/

//inital render of the question 
renderQuestion();
buttonSelection();

