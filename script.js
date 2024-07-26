const buttonsElem = document.querySelectorAll("button");
const inputFieldElem = document.getElementById("result");

for (let i = 0; i < buttonsElem.length; i++) {
    buttonsElem[i].addEventListener("click", () => {
        const buttonValue = buttonsElem[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calcResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputFieldElem.value = "";
}

function calcResult() {
    inputFieldElem.value = eval(inputFieldElem.value);
}

function appendValue(buttonValue) {
    inputFieldElem.value += buttonValue;
}