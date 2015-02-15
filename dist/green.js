(function() {

  function calcGreen(coffeeYield, roasted) {
    return (roasted/coffeeYield).toFixed(2) + ' kg'
  }

  function getEl(el) {
    return document.getElementById(el);
  }

  function validateNumber(x) {
    /* typeof x === string
     */
    var valid;
    if (x.length === 0) {
      valid = false;
    } else {
      valid = !isNaN(Number(x));
    }
    return valid;
  }

  var coffeeYield = 0.85;

  /* Imagine destructuring...
   * var loss, calc, roasted = getEls([a,b,c])
   */
  var loss = getEl('loss');
  var calc = getEl('calc');
  var roasted = getEl('roasted');
  var green = getEl('green');

  loss.oninput = function() {
    return coffeeYield = (100 - loss.value)/100;
  }

  roasted.oninput = function() {
    return green.value = '';
  }

  document.onkeypress = function(e) {
    var enter = (e.keyCode === 13);
    if (enter) {
      return calc.onclick();
    }
  }

  calc.onclick = function() {
    /* validate inputs
     */
    var msg;
    var r = roasted.value;
    var l = loss.value;

    var notNumbers = (!validateNumber(r) || !validateNumber(l));
    var negative = ((r < 0) || (l < 0));

    if (notNumbers || negative) {  
      alert('Values must be postive numbers');
    } else {
      return green.value = calcGreen(coffeeYield, roasted.value);
    }
  }

  calc.onmousedown = function() {
    var self = this;
    self.classList.add('pure-button-active');
  }

  calc.onmouseup = function() {
    var self = this;
    self.classList.remove('pure-button-active');
  }


})();
