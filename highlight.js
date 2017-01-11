// requires jQuery 1.9 or higher
function() {
  var lineNumbers = $("#statementlist > table > tbody > tr > td:first-child"),
      colors = $("#statementlist > table > tbody > tr > td:last-child");
  for (var i = 0; i < lineNumbers.length; i++) {
      var lineNumber = lineNumbers[i].textContent - '0',
          backgroundColor = colors[i].style["backgroundColor"];
      $("#codegrid > pre > span:nth-child("+ lineNumber +")").css('backgroundColor', backgroundColor);
  }    
}();
