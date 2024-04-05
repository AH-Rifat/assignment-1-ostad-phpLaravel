function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operations").value;

  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = (num1 / num2).toFixed(2);
      break;
    default:
      document.getElementById(
        "result"
      ).innerHTML = `<p class="alert alert-danger">
                        Invalid operation
                      </p>`;
  }

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById(
      "result"
    ).innerHTML = `<p class="alert alert-danger">
                      Please enter valid numbers
                   </p>`;
    return;
  }

  if (!isNaN(result)) {
    document.getElementById(
      "result"
    ).innerHTML = `<p class="alert alert-success">
                      Result: <span>${result}</span>
                  </p>`;
    return;
  }
}
