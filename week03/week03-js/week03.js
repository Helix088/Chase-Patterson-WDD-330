const quiz = [
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"},
];

const view = {
  score: document.querySelector("#score strong"),
  question: document.getElementById("question"),
  result: document.getElementById("result"),
  info: document.getElementById("info"),
  start: document.getElementById("start"),
  render(target, content, attributes) {
    for (const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerHTML = content;
  },
  show(element) {
    element.style.display = "block";
  },
  hide(element) {
    element.style.display = "none";
  },
};

const game = {
  start(quiz) {
    view.hide(view.start);
    this.questions = [...quiz];
    this.score = 0;
    for (const question of this.questions) {
      this.question = question;
      this.ask();
    }
    this.gameOver();
  },
  ask() {
    const question = `What is ${this.question.name}'s real name?`;
    // Added for view
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
  },
  check(response) {
    const answer = this.question.realName;
    if (response === answer) {
      // Added for view
      view.render(view.result, "Correct!", { class: "correct" });
      alert("Correct!");
      this.score++;
      // Added for view
        view.render(view.score, this.score);
    } else {
        // Added for view
        view.render(view.result, `Wrong! The correct answer was ${answer}`, {
          class: "wrong",
        });
      alert(`Wrong! The correct answer was ${answer}`);
    }
  },
  gameOver() {
    view.show(view.start);
    // Added for view
    view.render(
      view.info,
      `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    );
    // alert(
    //   `Game Over, you scored ${this.score} point${this.score !== 1 ? "s" : ""}`
    // );
  },
};

view.start.addEventListener("click", () => game.start(quiz), false);