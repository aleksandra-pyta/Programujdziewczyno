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

      //Zadanie 2

  var moreButtons = document.querySelectorAll(".read-more");
  //console.log(moreButtons);
  //console.log(moreButtons[0].previousElementSibling);

function moreLess(){
    var details = this.previousElementSibling;
    //console.log(details);
    if (details.style.display === 'none' || details.style.display === ''){
      details.style.display = 'block';
      //console.log(this.innerHTML);
      this.innerHTML = 'mniej <span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      details.style.display = 'none';
      this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i <= moreButtons.length-1; i++){
  moreButtons[i].addEventListener('click', moreLess);
}
      //Zadanie 3
  var scrollNav = document.querySelector(".navbar");
  console.log(scrollNav);

  window.addEventListener('scroll', function() {
    //console.log('działa przy scrollu');
    scrollNav.style.borderBottom = '1px solid #7f7f7f'
  });

      //Zadanie 4
  var goUp = document.querySelector(".go-up");
  console.log(goUp);
  goUp.addEventListener('click', function(){
    //console.log("Click działa dla go-up!");
    window.scroll(0,0);
  })

      //Zadanie 5
  var carouselItems = document.querySelectorAll(".org")
  var dots = document.querySelectorAll(".dot")

  console.log(carouselItems);
  console.log(dots);


});
