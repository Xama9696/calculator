let display = document.getElementById('display');

function input(val) {
  if (display.innerText === '0') {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === '') {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    let result = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}
