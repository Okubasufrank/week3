//calculation of the total score

$(document).ready(function () {

$(document).on('submit', '#form_', function () {

var o1Collection=document.getElementsByName('o1');
var o2Collection=document.getElementsByName('o2');
var o3Collection=document.getElementsByName('o3');
var o4Collection=document.getElementsByName('o4');




    var x=0
    for (let i of o1) {
        if (i.checked && i.value == 'correct') {
          x = x + 10;
        }

    }
    for (let i of o2) {
        if (i.checked && i.value == 'correct') {
          x = x + 10;
        }

    }
   return false;
});

    function quizSubmit(){
        console.log
    }
})

