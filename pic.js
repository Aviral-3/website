<button onclick="one()">1</button>
<button onclick="two()">2</button>
<button onclick="four()">4</button>

<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
</script>










<div class="row">
  <div class="column">
    <img src="1.jpeg">
    <img src="2.jpeg">
    <img src="aviral.jpeg">
    <img src="4.jpeg">
    <img src="3.jpeg">
    <img src="mist.jpg">
    <img src="paris.jpg">
  </div>
  <div class="column">
    <img src="4.jpeg">
    <img src="2.jpeg">
    <img src="1.jpeg">
    <img src="3.jpeg">
    <img src="aviral.jpeg">
    <img src="underwater.jpg">
  </div>
  <div class="column">
    <img src="aviral.jpeg">
    <img src="4.jpg">
    <img src="2.jpg">
    <img src="3.jpg">
    <img src="1.jpg">
    <img src="mist.jpg">
    <img src="paris.jpg">
  </div>
  <div class="column">
    <img src="underwater.jpg">
    <img src="ocean.jpg">
    <img src="wedding.jpg">
    <img src="mountainskies.jpg">
    <img src="rocks.jpg">
    <img src="underwater.jpg">
  </div>
</div>
