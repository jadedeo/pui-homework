const questions = {
  "questionOne": {
      "questionText": "Is this label greenwashing?",
      "indepthQuestionText": "On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes"
  },
  "questionTwo": {
      "questionText": "Is this label greenwashing?",
      "indepthQuestionText": "On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg"
  },
  "questionThree": {
      "questionText": "Is this label greenwashing?",
      "indepthQuestionText": "On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes"
  },
    "questionFour": {
      "questionText": "Is this label greenwashing?",
      "indepthQuestionText": "On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes"
  },
  "questionFive": {
    "questionText": "Is this label greenwashing?",
      "indepthQuestionText": "On their k-cups, Keurig includes the label of recyclable. Is the inclusion of this term an example of greenwashing?",
      "imageFile": "qOneKeurig.jpg",
      "correctAnswer":"yes"
  }
};


let questionTracker = 0;
function createElement(question) {
    const template = document.querySelector('#questionLayout'); //copying 
    const clone = template.content.cloneNode(true);
    
    question.element = clone.querySelector('.questionTextBox');
    const questionImage = question.element.querySelector('#questionImage');
    questionImage.src = questions[questionTracker]["imageFile"];



    

   
  }

  //creating of a variable that increases everytime the users progresses


