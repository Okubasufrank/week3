//calculation of the total score

$(document).ready(function () {
    
    function awardMarks(x){
        $('#results').text(x);
    }

$(document).on('submit', '#form_', function () {
    var x=0

var o1Collection=document.getElementsByName('o1');
var o2Collection=document.getElementsByName('o2');
var o3Collection=document.getElementsByName('o3');
var o4Collection=document.getElementsByName('o4');




    for (let i of o1Collection) {
        if (i.checked && i.value == 'correct') {
          x = x + 10;
        }

    }
    for (let i of o2Collection) {
        if (i.checked && i.value == 'correct') {
          x = x + 10;
        }

    }
    for (let i of o3Collection) {
        if (i.checked && i.value == 'correct') {
          x = x + 10;
        }

    }
    for (let i of o4Collection) {
        if (i.checked && i.value == 'correct') {
          x = x + 10;
        }

    }
awardMarks('askdjladjskj');
   return false;
});

})

