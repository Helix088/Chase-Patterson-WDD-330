// const question = "What is Superman's real name?";
// const answer = prompt(question);
// alert(`You answered ${answer}`);

// const quiz = [
//   ["What is Superman's real name?", "Clark Kent"],
//   ["What is Captain America's real name?", "Steve Rodger's"],
//   ["What is Wonder Woman's real name?", "Diana Prince"],
//   ["What is Iron Man's real name?", "Tony Stark"],
//   ["What is Batman's real name?", "Bruce Wayne"],
//   ["What is The Hulk's real name?", "Bruce Banner"],
//   ["What is The Flash's real name?", "Barry Allen"],
//   ["What is Black Widow's real name?", "Natasha Romanoff"],
//   ["What is Green Lantern's real name?", "Hal Jordan"],
//   ["What is Hawkeye's real name?", "Clint Barton"],
//   ["What is Martian Manhunter's real name?", "John Jones"],
//   ["What is Thor's real name?", "Thor Odinson"],
// ];

// let score = 0;

// for(const [question, answer] of quiz) {
//     const response = prompt(question);
//     if(response === answer) {
//         alert("Correct!");
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }

// alert(`Game Over, you scored ${score} point${score !== 1 ? "s" : ""}`);

const quiz = [
  ["What is Superman's real name?", "Clark Kent"],
  ["What is Captain America's real name?", "Steve Rogers"],
  ["What is Wonder Woman's real name?", "Diana Prince"],
  ["What is Iron Man's real name?", "Tony Stark"],
  ["What is Batman's real name?", "Bruce Wayne"],
  ["What is The Hulk's real name?", "Bruce Banner"],
  ["What is The Flash's real name?", "Barry Allen"],
  ["What is Black Widow's real name?", "Natasha Romanoff"],
  ["What is Green Lantern's real name?", "Hal Jordan"],
  ["What is Hawkeye's real name?", "Clint Barton"],
  ["What is Martian Manhunter's real name?", "John Jones"],
  ["What is Thor's real name?", "Thor Odinson"],
];

function start(quiz) {
  let score = 0;
  for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
  }

  gameOver();

  function ask(question) {
    return prompt(question);
  }

  function check(response, answer) {
    if (response === answer) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver() {
    alert(`Game is over, you scored ${score} point${score !== 1 ? "s" : ""}`);
  }
}

start(quiz);