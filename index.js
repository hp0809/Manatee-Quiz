const STORE = [
  {
   question: 'What is the current status of the manatee according to the World Conservation Union?',
   answers: [
     'Extinct in the wild',
     'Vulnerable',
     'Least Concern',
     'Endangered'
   ],
   correctAnswer: 'Vulnerable',
   comment: 'All species of manatee are classified as vulnerable. However, in Florida, USA they are classified as endangered.',
   answerImg: '<img class="answerimg" src="./quiz-app-pictures/manatee1.jpeg" alt="Manatee floating in a lagoon" width="500" >'
 },
 {
   question: 'How big do manatees grow?',
   answers: [
     '100kg - 300kg '+
     '(220lbs - 660lbs)',
     '400kg - 550kg (880lbs - 1200lbs)',
     '600kg - 800kg (1300lbs - 1700lbs)',
     '900 kg - 1000kg (1900 lbs - 2200lbs'
   ],
   correctAnswer: '400kg - 550kg (880lbs - 1200lbs)',
   comment: 'They can be from 400 - 550 kg of loveable chubby mermaid! However, babies are an adorable 30kg.',
   answerImg: '<img class="answerimg" src="./quiz-app-pictures/baby-manatee.jpg" "A baby manatee being exaimed gently by a carer" width="500">'
 },
 {
   question: 'How old do manatees live to be in the wild?',
   answers: [
     '10 - 20 years old',
     '20 - 30 years old',
     '30 - 40 years old',
     '40 - 50 years old'
   ],
   correctAnswer: '40 - 50 years old',
   comment: 'Manatees usually live about 40 - 50 years in the wild. However, the oldest manatee, Snooty, lived to be a whopping 69 years old (he was bred in captivity)',
   answerImg: '<img src="./quiz-app-pictures/snooty.jpg" alt="Snooty the manatee facing the camera" width="500">'
 },
 {
   question: 'What is the common nickname for manatees?',
   answers: [
     'Sea Monkeys',
     'Cow-maids',
     'Water Elephant',
     'Sea cow'
   ],
   correctAnswer: 'Sea cow',
   comment: 'Their common nickname is \'sea cow\'. Just living the laid back life, doing the best they can do.',
   answerImg: '<img src="./quiz-app-pictures/couple-manatee.jpg" alt="Two manatees eating together underwater" width="500">'
 },
 {
   question: 'Which are the biggest threat to manatees?',
   answers: [
     'Sharks',
     'Humans',
     'Killer Whales',
     'Sea Lions'
   ],
   correctAnswer: 'Humans',
   comment: 'Manatees have no predators but boats and human expansion are the top threats to them.',
   answerImg: '<img src="./quiz-app-pictures/owie-manatee.jpg" alt="Manatee with scars on back from boats" width="500">'
 },
 {
   question: 'Who are manatees most closely related?',
   answers: [
     'Dolphins',
     'Cows',
     'Elephants',
     'Whales'
   ],
   correctAnswer: 'Elephants',
   comment: 'You\'d think that they would be related to some other marine life, but they actually descend from a common ancestor of elephant!',
   answerImg: '<img src="./quiz-app-pictures/manatee-elephant.jpg" alt="Manatee and Elephant side by side comparison" width="500">'
 },
 {
   question: 'How many species of manatee are there, currently?',
   answers: [
     'One',
     'Two',
     'Three',
     'Four'
   ],
   correctAnswer: 'Three',
   comment: 'There are three accepted species of the manatee: the Amazonian manatee, the West Indian manatee, and the West African manatee.',
   answerImg: '<img src="./quiz-app-pictures/manate-species.png" alt="The three manatee species" width="700">'
 },
 {
   question: ' What are manatees in regards to diet?',
   answers: [
     'Carnivore (eats only meat)',
     'Herbivore (eats only plants)',
     'Omnivore (eats both meat & plants)',
     'Scavenger(eats dead animals or plants)'
   ],
   correctAnswer: 'Herbivore (eats only plants)',
   comment: 'Manatees graze on sea plants and grasses with their flat teeth, which are just perfect for being a herbivore!',
   answerImg: '<img src="./quiz-app-pictures/manatee-eating.jpg" alt="Manatee eating sea grass" width="500">'
 },
 {
   question: 'When is \'Manatee Appreciation Day\'?',
   answers: [
     'There isn\'t one',
     'The first Tuesday in March',
     'The first Monday in June',
     'The last Wednesday in March'
   ],
   correctAnswer: 'The last Wednesday in March',
   comment: 'It is the last Wednesday in March, every year! Mark your calendars!',
   answerImg: '<img src="./quiz-app-pictures/manatee-day.jpg" alt="Manatee Appreciation Day" width="500">'
 },
 {
   question: 'Aren\'t manatees just the cutest?',
   answers: [
     'Yes',
     'Heck, yeah!',
     'Who would think otherwise?',
     'I just want to hug one!'
   ],
   correctAnswer: null,
   comment: 'I thought so too!',
   answerImg: '<img src="./quiz-app-pictures/manatee-boop.gif" alt="Manatee boops the aquarium glass" width="500">'
  }
];

let score = 0;
let questionNumber = 0;


function generateQuestion () {
  if (questionNumber < STORE.length) {
    return `<div class="question-${questionNumber}">
    <h2>${STORE[questionNumber].question}</h2>
    <form>
    <fieldset>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[0]}" name="answer" required>
    <span><img class="manateeIcon" src="./quiz-app-pictures/manatee-icon.jpg" alt="Cartoon Manatee Icon" width="50">${STORE[questionNumber].answers[0]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[1]}" name="answer" required>
    <span><img class="manateeIcon" src="./quiz-app-pictures/manatee-icon.jpg" alt="Cartoon Manatee Icon" width="50">${STORE[questionNumber].answers[1]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[2]}" name="answer" required>
    <span><img class="manateeIcon" alt="Cartoon Manatee Icon" src="./quiz-app-pictures/manatee-icon.jpg" width="50">${STORE[questionNumber].answers[2]}</span>
    </label>
    <label class="answerOption">
    <input type="radio" value="${STORE[questionNumber].answers[3]}" name="answer" required>
    <span><img class="manateeIcon" alt="Cartoon Manatee Icon" src="./quiz-app-pictures/manatee-icon.jpg" width="50">${STORE[questionNumber].answers[3]}</span>
    </label>
    <button type="submit" class="submitButton">Submit</button>
    </fieldset>
    </form>
    </div>`;
} else {
    renderResults();
    restartQuiz();
    $('.questionNumber').text('10')
  };
};

function changeQuestionNumber () {
    questionNumber ++;
    $('.questionNumber').text(questionNumber+1);
};

function startQuiz () {
  console.log('startQuiz ran');
  $('.start').on('click', '.startButton', event => {
    event.preventDefault();
    $('.start').remove();
    $('.quizForm').css('display', 'block');
    $('.questionNumber').text(1);  
  });
};

function renderQuestion () {
  console.log('renderQuestion ran');
  $('.quizForm').html(generateQuestion());
};



function userAnswer() {
  if (STORE[questionNumber].correctAnswer === null) {
    $('form').submit(function (event) {
      event.preventDefault();
      userAnswerCorrect();
      updateScore();
    })
  } else {
       $('form').submit(function (event) {
        event.preventDefault();
        let answer = $('input:checked').val();
        let correctAnswer = STORE[questionNumber].correctAnswer;
        console.log('userAnswer ran');
        console.log(correctAnswer, answer);
        if (answer === correctAnswer) {
            userAnswerCorrect();
            updateScore();      
        } else {
          userAnswerWrong();
     	  };
     	});
    };
	};




//user feedback for correct answer
function userAnswerCorrect () {
  let correctAnswer = '$(STORE[questionNumber].correctAnswer)';
  $('.quizForm').html(`<div class="correctFeedback"><h2>You got it right!</h2><img ${STORE[questionNumber].answerImg}<br>
  <p>${STORE[questionNumber].comment}</span></p><button type=button class="nextButton">Next</button></div>`);
};

function userAnswerWrong () {
  $('.quizForm').html(`<div class="correctFeedback"><h2>You got it wrong</h2><img src="./quiz-app-pictures/huge-manatee.jpg" width="600"><br><p>${STORE[questionNumber].comment}</span></p><button type=button class="nextButton">Next</button></div>`);
};

function updateScore () {
    console.log('userScore ran')
    score ++;
    $('.score').text(score);
  };


function nextQuestion () {
  $('main').on('click', '.nextButton', function (event) {
    changeQuestionNumber();
    renderQuestion();
    userAnswer();
  });
};

function restartQuiz () {
  $('main').on('click', '.restartButton', function (event) {
    location.reload();
  });
};
//when quiz is over

function renderResults() {
    if (score >=8) {
      $('.quizForm').html(`<div class="resultsCorrectFeedback"><h2>You're a Manatee Master!</h2><img src="./quiz-app-pictures/manateemaster.png" alt="Adopt a Manatee information" width="400"/><p>You got ${score} / 10</p><p>Let's go educate more people to save the manatees! You get a new picture of a manatee if you get a correct answer, so let's try again!</p><button class="restartButton">Restart Quiz</button></div>`);
    } else if (score < 8 && score >=5) {
      $('.quizForm').html(`<div class="resultsCorrectFeedback"><h2>You're a Manatee Novice!</h2><img src="./quiz-app-pictures/hug-manatee.jpg" alt="Manatee saying "I'd hug you if I had arms""/><p>You got ${score} / 10</p><p>You know quite a lot about manatees but there is still so much to learn! You get a new picture of a manatee if you get a correct answer, so let's try again!</p><button class="restartButton">Restart Quiz</button></div>`)
    } else {
      $('.quizForm').html(`<div class="resultsCorrectFeedback"><h2>You're a Baby Manatee!</h2><img src="./quiz-app-pictures/baby-manatee-img.png" alt="Two manatees saying "It's okay, we still love you""/><p>You got ${score} / 10</p><p>There is still much for you to learn, but we hope you learned something new from this quiz about manatees! You get a new picture of a manatee if you get a correct answer, so let's try again!</p><button class="restartButton">Restart Quiz</button></div>`)
    }
    console.log('renderResults ran')
};



function createQuiz () {
  $('.quizForm').css('display', 'none');
  startQuiz();
  renderQuestion();
  userAnswer();
  nextQuestion();
};

$(createQuiz);