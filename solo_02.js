//I changed line 20 by adding the [i] to the array I was sending into the function
//I changed line 44 by adding '1 + bonus' to get the right value
//I changed line 35 by using parseInt to change string to number
//I changed line 81 by taking out the basePercent - 1
//Line 50 & 53 I switched
//Added style.css to take out bullets and used .join to add space inbetween

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
//console.log(array);

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode((array[i]).join(" | "));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(myArray){
  var newArray = [];

  newArray[0] = myArray[0];
  //console.log(newArray);

  var employeeNumber = myArray[1];
  var baseSalary = parseInt(myArray[2]);
  //console.log(baseSalary);
  var reviewScore = myArray[3];
  //console.log(employeeNumber + " " + baseSalary + " "+ reviewScore);

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = (bonus.toFixed(2));
  //console.log(newArray[1]);
  newArray[3] = (baseSalary * bonus);
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  //console.log(newArray[2]);

  
  //console.log(newArray[3]);

  //console.log(newArray[0] + " " + newArray[1] + " " + newArray[3] + " " + newArray[2]);
  console.log(newArray);

  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
  console.log(basePercent);//
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}