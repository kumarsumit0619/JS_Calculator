function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerHTML = num;
}
function getOutput() {
  return document.getElementById("output-value").innerText;
}
function printOutput(num) {
  if (num === "") {
    document.getElementById("output-value").innerText = "";
  } else {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
  }
}
function getFormattedNumber(n) {
  if (n == "-") {
    return "";
  }
  n = +n;
  return n.toLocaleString();
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, ""));
}
// printOutput("123222");

// alert(reverseNumberFormat(getOutput()));
let operator = document.getElementsByClassName("operator");

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    // alert("The Operator Clicked:" + this.id);
    if (this.id === "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id === "backspace") {
      let output = reverseNumberFormat(getOutput()).toString();
      if (output) {
        /* if output has a value */
        output = output.substr(0, output.length - 1);
        printOutput(output);
      }
    } else {
      let output = getOutput();
      let history = getHistory();

      if (output == "" && history != "") {
        // alert(this.className);
        if (this.className == "operator") {
          // alert("fdfdfd");

          history = history.substr(0, history.length - 1);
          printHistory(history);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : reverseNumberFormat(output);
        history = history + output;
        // printHistory(history);
        // printOutput("");
        if (this.id == "=") {
          let result = eval(history);
          //console.log(result);
          printOutput(result);
          printHistory("");
        } else {
          history = history + this.id;
          printHistory(history);
          printOutput("");
        }

        // printHistory(history + "" + this.id);
        // printOutput("");
      }
    }
  });
}

let number = document.getElementsByClassName("number");

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    // alert("The Number Clicked: " + this.id);
    let output = reverseNumberFormat(getOutput());
    if (output != NaN) {
      /*if output is a number */
      output += this.id;
      printOutput(output);
    }
  });
}
