const clearButton = document.getElementById("clearButton");
const leftBracketButton = document.getElementById("leftBracketButton");
const rightBracketButton = document.getElementById("rightBracketButton");
const multiplicationButton = document.getElementById("multiplicationButton");
const squareRootButton = document.getElementById("squareRootButton");
const percentageButton = document.getElementById("percentageButton");
const plusMinusButton = document.getElementById("plusMinusButton");
const divideButton = document.getElementById("divideButton");
const sevenButton = document.getElementById("sevenButton");
const eightButton = document.getElementById("eightButton");
const nineButton = document.getElementById("nineButton");
const minusButton = document.getElementById("minusButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const plusButton = document.getElementById("plusButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const decimalButton = document.getElementById("decimalButton");
const zeroButton = document.getElementById("zeroButton");
const deleteButton = document.getElementById("deleteButton");
const equalsButton = document.getElementById("equalsButton");


fourth-half
rightBracketButton.addEventListener('click', () => {
    inputLabel.text=")"
});
plusMinusButton.addEventListener("click", () => {
    inputLabel.text = "+-"
});

nineButton.addEventListener("click", () => {
    inputLabel.text = '9'
});

sixButton.addEventListener("click", () => {
    inputLabel.text = '6'
});

deleteButton.addEventListener("click", () => {
    inputLabel.text = 'x'
  
clearButton.addEventListener('click', () => {
    inputLabel.text = "";
main
});

leftBracketButton.addEventListener('click', () => {
    inputLabel.text = "(";
});

squareRootButton.addEventListener('click', () => {
});
inputLabel.text = "√";

modulasButton.addEventListener('click', () => {
    inputLabel.text = "%";
});

sevenButton.addEventListener('click', () => {
    inputLabel.text = "7";
}); 

eightButton.addEventListener('click', () => {
    inputLabel.text = "8";
});

fourButton.addEventListener('click', () => {
    inputLabel.text = "4";
});

fiveButton.addEventListener('click', () => {
    inputLabel.text = "5";
});

oneButton.addEventListener('click', () => {
    inputLabel.text = "1";
});

twoButton.addEventListener('click', () => {
    inputLabel.text = "2";
});

decimalButton.addEventListener('click', () => {
    inputLabel.text = ".";
});

zeroButton.addEventListener('click', () => {
    inputLabel.text = "0";
});