var readlineSync = require('readline-sync');
// questions array
var questions = [
  {
    que: "Which state do I belong to? ",
    ans: "uttar pradesh"
  },
  {
    que: "Which is my favourite dish? ",
    ans: "pasta"
  },
  {
    que: "What is my favourite cuisine? ",
    ans: "south indian"
  },
  {
    que: "Which country is dream destination? ",
    ans: "japan"
  },
  {
    que: "Which is my favourite k-pop band? ",
    ans: "bts"
  },
  {
    que: "What do I like more singing or dancing? ",
    ans: "dancing"
  },

]
var score = 0;
function welcomeUser() {
  var userName = readlineSync.question("Hello user, May I have your name? ")
  console.log(`Welcome!! ${userName}`)
  console.log("I am Sandhya and I have a fun quiz about myself.")
  if (readlineSync.keyInYN('Do you want to play?')) {
    console.log("Let's go...")
    askQuestions();
    displayFinalScore()
  } else {

    console.log('Thank you for taking your time. Have a good day :)');

  }
}
function askQuestions() {

  for (var i = 0; i < questions.length; i++) {
    var givenAns = readlineSync.question(questions[i].que);
    if (givenAns.toLowerCase() == questions[i].ans.toLowerCase()) {
      score += 1
      console.log("Correct answer");
      console.log("Your current score is: " + score + "\n")
    } else {
      console.log("This answer is incorrect\n");
    }

  }
}
function displayFinalScore() {
  if (score == 6) {
    console.log(`Yayy!! you got a perfect score ${score}/6`)
    console.log("Thank you for playing. Have a great day :)")
  } else {
    console.log(`Your final score is ${score}/6`);
    console.log("Thank you for playing. Have a great day :)")
  }

}
welcomeUser()

