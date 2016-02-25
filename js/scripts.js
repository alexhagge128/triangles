var triangle = function(a, b, c) {
  if (a >= (b+c)||b >= (a+c)||c >= (b+a)){
    $("#notatriangle").show();
  } else if ((a === b) && (b === c)){
    $("#equilateral").show();
  } else if (a === b||b === c||a === c){
    $("#isosceles").show();
  } else {
    $("#scalene").show();
  }
  };


$("form#triangle").submit(function(event){
  var a = $("input#sideA").val();
  var b = $("input#sideB").val();
  var c = $("input#sideC").val();

  triangle(a,b,c);

  event.preventDefault();
});
