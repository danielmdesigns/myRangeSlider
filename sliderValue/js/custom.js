//custom slider javascript
var $element = $('input[type="range"]');

var $handle;

$element
  .rangeslider({
    polyfill: false,
    onInit: function(){
      $handle = $('.rangeslider__handle', this.$range);
      updateHandle($handle[0], this.value);
    }
  }).on('input', function() {
    updateHandle($handle[0], this.value);
  });

function updateHandle(el, val) {
  val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  var myNumber = " " + "$" + val + " ";
  //put the price into the handle element
  el.textContent = myNumber;
  $("#advanceInputField").val(myNumber);
}

//when slider changes, hide start message
$("input").on("change", function() {
  $("#animated-text").fadeOut("slow");
});