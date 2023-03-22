
const btn = document.getElementById("btn");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const income = document.getElementById("income13");
const expenses = document.getElementById("expences13");
const final = document.getElementById('final')
const text = document.getElementById('text')
const cont = document.getElementById('des')

let inputTotal = [];
let expensesTotal = [];
let number = document.getElementById("number");
let inSumTotal = 0;
let esSumTotal = 0;


function calculate() {

    let p = document.createElement('p');
    cont.appendChild(p);

  if (number.value === 0) {
    alert('Please enter the value')
  }
  if (add.selected) {
    let intotal = number.value;
    inputTotal.push(intotal);
    inSumTotal += parseFloat(intotal);
    income.innerText = "+" + " " + inSumTotal.toFixed(2);
    p.classList.add("inc");
    p.innerText = text.value  + " " + "$" + " " + intotal;
    text.value = "";

    number.value = "";
  } else if (sub.selected) {
    let extotal = number.value;
    expensesTotal.push(extotal);
    esSumTotal += parseFloat(extotal);
    expenses.innerText = "-" + " " + esSumTotal.toFixed(2);
    p.classList.add("exp");
    p.innerText = text.value + " " + " " + "$" + " " + extotal;
    number.value = "";
    text.value = "";
  }

  let finalVal = inSumTotal - esSumTotal;
  final.innerText = finalVal.toFixed(2);


}
