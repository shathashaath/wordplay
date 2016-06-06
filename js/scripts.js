$(document).ready(function() {
  $("form#content").submit(function(event) {
    var inputSentence = $("input#sentence").val();
    var res = inputSentence.split(" ");
      alert(res);

    event.preventDefault();

  });

});
