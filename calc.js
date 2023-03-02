'use strict';

const findArea = function () {
  const h = document.getElementById('firstNumber').value;
  const w = document.getElementById('secondNumber').value;
  document.getElementById('resultArea').innerHTML = h * w;
};

const addAll = function () {
  //function receives 10 integers from user (Array)
  //function adds numbers (forloop)
  //function returns result
  //DOM manipulation
  let num = document.querySelector('.inputNumber').value;

  let numArr = num.toString().split('');

  for (let i = 0; i < numArr.length; i++) {
    numArr[i] = +numArr[i] | 0;
  }
  //console.log(numArr);
  let sum = 0;
  for (const i of numArr) {
    sum += numArr[i];
    //console.log(sum);
  }

  document.getElementById('resultSum').innerHTML = sum;
};

const resetAll = function () {
  document.querySelector('.inputNumber').value = 0;
  document.getElementById('firstNumber').value = 0;
  document.getElementById('secondNumber').value = 0;
  document.getElementById('resultSum').textContent = 0;
  document.getElementById('resultArea').textContent = 0;
};
