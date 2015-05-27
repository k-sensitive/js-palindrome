var palindrome = function(word) {
  word = word.replace(/[^a-zA-Z0-9]/g, "");
  if (word.length % 2 !== 0) {
    var middle = Math.floor(word.length/2);
    var head = word.slice(0, middle);
    var tailArray = word.slice(middle+1, word.length).split("");
  } else {
    var middle = Math.floor(word.length/2);
    var head = word.slice(0, middle);
    var tailArray = word.slice(middle, word.length).split("");
  }

  var tail = tailArray.reverse().join("");

  if(head === tail){
    return true;
  } else {
    return false;
  }
}

$(document).ready(function(){
  $("form#inputForm").submit(function(event){
  var inputPhrase = $("input#phrase").val();
  var result = palindrome(inputPhrase);
  $("#not").hide();
  if(!result) {
    $("#not").show();
  }

  $("#results").show();

  event.preventDefault();
  });
});
