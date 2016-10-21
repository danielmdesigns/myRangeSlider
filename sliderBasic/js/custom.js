//custom slider javascript
$(function() {
  var output = document.querySelectorAll('output')[0];

  $(document).on('input', 'input[type="range"]', function(e) {
    output.innerHTML = e.currentTarget.value;
  });

  $('input[type=range]').rangeslider({
    polyfill: false
  });
});

//when slider changes, hide start message
$("input").on("change", function() {
  $("small").fadeOut("slow");
})