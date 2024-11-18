// Function to append numbers and operators to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }
  
  // Function to clear the display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
  }
  
  // Function to calculate the result
  function calculate() {
    const display = document.getElementById('display');
    try {
      // Use eval to evaluate the string expression in the display
      display.value = eval(display.value).toString();
    } catch (e) {
      display.value = 'Error';
    }
  }
  