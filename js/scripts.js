$(document).ready(function() {
  $("form#content").submit(function(event) {
    var sentence = "inputUser";
    var res = sentence.split(" ");
      alert(res);

    // function sentence(stringToSplit, separator) {
    // var arrayOfStrings = stringToSplit.split(separator);
  });

    event.preventDefault();
});
