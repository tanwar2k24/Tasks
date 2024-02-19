function action() {
  // Get user inputs
  const number1 = parseInt(document.getElementById('number1').value);
  const splitter = parseInt(document.getElementById('splitter').value);

  if(splitter <= 0){
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = 'Please enter a valid splitter (a positive integer).';
    document.getElementById('result-div').appendChild(errorMessage);
    return;
  }

  else{

  // Clear existing divs
  document.getElementById('result-div').innerHTML = '';

  // Calculate splitnumber
  let splitnumber = Math.floor(number1 / splitter);
  if(number1 % splitter != 0){
    splitnumber = splitnumber + (number1 % splitter);
  }

  // Generate divs based on splits
  for (let i = 0; i < splitter; i++) {
    const div = document.createElement('div');
    div.className = 'split-div';
    div.style.width = `${splitnumber * 50}px`; // Adjust width based on splitnumber
    div.style.backgroundColor = getRandomColor();
    div.textContent = splitnumber;
    document.getElementById('result-div').appendChild(div);
    break;
  }
  
  splitnumber = Math.floor(number1 / splitter);

  for (let i = 1; i < splitter; i++) {
    const div = document.createElement('div');
    div.className = 'split-div';
    div.style.width = `${splitnumber * 50}px`; // Adjust width based on splitnumber
    div.style.backgroundColor = getRandomColor();
    div.textContent = splitnumber;
    document.getElementById('result-div').appendChild(div);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
}