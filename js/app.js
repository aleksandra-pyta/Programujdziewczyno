/*
console.log("It's alive!");

var name = 'Aleksandra';
console.log(name);

var tableNames = ['Ola', 'Ola1', 'Ola2', 'Ola3'];
console.log(tableNames[1]);

var a = 10;
var b = 6;
if (a>b) {
  console.log('Hurra!');
}

for (var i=0; i<=tableNames.length-1; i++) {
  console.log(tableNames[i]);
}
*/

// uniemożliwienie deklarowania zmiennych globalnych
'use strict';

//nasłuchiwanie kiedy skończy ładować się kod HTMLa - dopiero wtedy rusza kod JavaScript'u
document.addEventListener('DOMContentLoaded', function() {
  console.log("It's alive!")

      //Zadanie 1

  var dropdownMain = document.querySelector(".for-dropdown");
  console.log(dropdownMain);

  var dropdownLi = document.querySelector(".dropdown");
  console.log(dropdownLi);

  dropdownMain.addEventListener('mouseover', function() {
    //console.log('Mouseover works!');
    dropdownLi.style.display = 'block';
    });

  dropdownMain.addEventListener('mouseout', function() {
    //console.log('Mouseout works!');
    dropdownLi.style.display = 'none';
    });
  });
