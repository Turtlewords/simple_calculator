const screen = document.getElementById("screen");
const c = document.getElementById("c");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const divide = document.getElementById("divide");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const multiply = document.getElementById("multiply");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equals = document.getElementById("equals");
const plus = document.getElementById("plus");


c.addEventListener("click", () => {
    screen.value ="";
})

one.addEventListener("click", () => {
    screen.value += 1;
})

two.addEventListener("click", () => {
    screen.value += 2;
})

three.addEventListener("click", () => {
    screen.value += 3;
})

divide.addEventListener("click", () => {
    screen.value += "/";
})

four.addEventListener("click", () => {
    screen.value += 4;
})

five.addEventListener("click", () => {
    screen.value += 5;
})

six.addEventListener("click", () => {
    screen.value += 6;
})

multiply.addEventListener("click", () => {
    screen.value += "*";
})

seven.addEventListener("click", () => {
    screen.value += 7;
})

eight.addEventListener("click", () => {
    screen.value += 9;
})

nine.addEventListener("click", () => {
    screen.value += 9;
})

minus.addEventListener("click", () => {
    screen.value += "-";
})

zero.addEventListener("click", () => {
    screen.value += 0;
})

dot.addEventListener("click", () => {
    screen.value += ".";
})

plus.addEventListener("click", () => {
    screen.value += "+";
})

equals.addEventListener("click", () => {
    let x = eval(screen.value);
    screen.value = x;
})

window.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();

        let x = eval(screen.value);
        screen.value = x;

    }
})



