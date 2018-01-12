$(document).ready(function(){
  $('#triForm').submit(function(event){
    var tri1 = parseInt($("input#side1").val());
    var tri2 = parseInt($("input#side2").val());
    var tri3 = parseInt($("input#side3").val());

    $("p").hide();
    if ((tri1+tri2) <= tri3 || (tri2+tri3) <= tri1 || (tri1+tri3) <= tri2) {
      $("p#notTri").show();
    } else if(tri1 === tri2 && tri1 === tri3) {
      $("p#equilateral").show();
    } else if (tri1 === tri2 || tri2 === tri3 || tri1 ===tri3) {
    $("p#isosceles").show();
    } else {
      $("p#scalene").show();
    }

    event.preventDefault();
  });



});
