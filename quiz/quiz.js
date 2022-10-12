function question1() {
var q1 = document.getElementById('question1');
var q2 = document.getElementById('question2');
var q3 = document.getElementById('question3');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

if(!q1.classList.contains('stepActive')) {
  q1.classList.add('stepActive');
  btn1.classList.add('isActive');
}
if(q2.classList.contains('stepActive')) {
  q2.classList.remove('stepActive');
  btn2.classList.remove('isActive');
}
if(q3.classList.contains('stepActive')) {
  q3.classList.remove('stepActive');
  btn3.classList.remove('isActive');
}

}

function question2() {
  var q1 = document.getElementById('question1');
  var q2 = document.getElementById('question2');
  var q3 = document.getElementById('question3');
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  
  if(!q2.classList.contains('stepActive')) {
    q2.classList.add('stepActive');
    btn2.classList.add('isActive');
  }
  if(q1.classList.contains('stepActive')) {
    q1.classList.remove('stepActive');
    btn1.classList.remove('isActive');
  }
  if(q3.classList.contains('stepActive')) {
    q3.classList.remove('stepActive');
    btn3.classList.remove('isActive');
  }
}

function question3() {
  var q1 = document.getElementById('question1');
  var q2 = document.getElementById('question2');
  var q3 = document.getElementById('question3');
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');

if(!q3.classList.contains('stepActive')) {
  q3.classList.add('stepActive');
  btn3.classList.add('isActive');
}
if(q2.classList.contains('stepActive')) {
  q2.classList.remove('stepActive');
  btn2.classList.remove('isActive');
}
if(q1.classList.contains('stepActive')) {
  q1.classList.remove('stepActive');
  btn1.classList.remove('isActive');
}
}

function redirect() {
  location.href = '../index.html';
}