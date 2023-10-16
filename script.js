
let currentValue = '';
let previousValue = '';
let operator = '';

document.addEventListener("DOMContentLoaded", function(){
  let clear = document.querySelector('.clear');
  
  let deleteNum = document.querySelector('.remove');
  
  let equal = document.querySelector('.equal');
  
  let decimal = document.querySelector('.decimal');
  
  let operators = document.querySelectorAll('.operator');
  
  let numbers = document.querySelectorAll('.number');
  
  let previousScreen = document.querySelector('.previous');
  
  let currentScreen = document.querySelector('.current');
  
  numbers.forEach((number)=> number.addEventListener("click", function(e){
    handleNum(e.target.textContent)
    currentScreen.textContent = currentValue
  }))
  
  operators.forEach((op)=>op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    previousScreen.textContent = previousValue+" "+operator;
    currentScreen.textContent = ''
  }))
  
  clear.addEventListener("click", function(){
    previousValue = '',
    currentValue = '',
    operator = '',
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  })
  
  equal.addEventListener("click", function(){
    if(previousValue != '' && currentValue != '') {
      calculate()
      previousScreen.textContent = ''
      currentScreen.textContent = previousValue
    }
  })
  
  decimal.addEventListener("click", function(){
    getDecimal()
  })
  
  deleteNum.addEventListener("click", function(){
    getRemove()
    currentScreen.textContent = currentValue
  })
  
})

function handleNum(num) {
  if(currentValue.length <= 5) {
    currentValue+=num
  }
}

function handleOperator(opr) {
  operator=opr;
  previousValue+=currentValue;
  currentValue = ''
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);
  
  if(operator === '+') {
    previousValue += currentValue
  }else if(operator === '-') {
    previousValue -= currentValue
  }else if(operator === 'x') {
    previousValue *= currentValue
  }else{
    previousValue /= currentValue
  }
  previousValue  = roundNum(previousValue)
  console.log(previousValue)
}

function roundNum(Num) {
  return Math.round(Num * 1000) / 1000
}

function getDecimal() {
  console.log('hi')
  if(!currentValue.includes('.')){
    currentValue += '.'
  }
}

function getRemove() {
  currentValue = currentValue.toString().slice(0,-1)
  console.log(currentValue)
}