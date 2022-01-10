class Calculator {
  screen = document.querySelector(".calculator__screen");
  buttons = document.querySelectorAll(".btn");
  operation = "";

  constructor() {
    this.buttons.forEach((btn) =>
      btn.addEventListener("click", () => {
        if (btn.dataset.val === "=") this.calculate();
        if (btn.dataset.val === "AC") this.updateScreen(null, true);
        if (btn.dataset.val === "DEL") this.del();
        if (btn.dataset.type === "number" || btn.dataset.type === "op")
          this.updateScreen(btn.dataset.val);
      })
    );
  }

  calculate() {
    try {
      const op = this.screen.textContent.replace("x", "*");
      const result = eval(op);
      this.updateScreen(result, true);
    } catch (err) {
      alert("Operação inválida");
    }
  }

  updateScreen(val, clean = false) {
    if (clean) this.screen.innerHTML = "";
    if (val) this.screen.innerHTML += val;
  }

  del() {
    const newValue = this.screen.innerHTML.slice(0, -1);
    this.updateScreen(newValue, true);
  }
}

const calc = new Calculator();
