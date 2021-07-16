// https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621

const goButton = document.getElementById("go-btn");

const parentDiv = document.getElementById("resultDiv");

let allInputNumbers = document.querySelectorAll(".inputNumber");   
let numbers = [];

goButton.addEventListener('click', function(e) {
     for ( let i = 0; i < allInputNumbers.length; i++) {
         //turn into array
         numbers.push(allInputNumbers[i].value)
      }  
    //console.log(numbers)
    // extract min and max       
            
    let minNum = Math.min(...numbers)
    let maxNum = Math.max(...numbers)
    parentDiv.innerHTML = `min # ${minNum} | max # ${maxNum}`
  
 })
