function subtract() {
    let firstNum = document.getElementById('firstNumber').value;
    let secondNum = document.getElementById('secondNumber').value;
    const sum = Number(firstNum - secondNum);
    document.getElementById('result').textContent = sum;
}