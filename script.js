function generateRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function generateSet() {
  const set = [];
  for (let i = 0; i < 4; i++) {
    set.push(generateRandomNumber());
  }
  return set;
}

function displaySet(set, elementId) {
  const container = document.getElementById(elementId);
  container.innerHTML = '';
  set.forEach(num => {
    const ball = document.createElement('div');
    ball.textContent = num;
    container.appendChild(ball);
  });
}

function generateNumbers() {
  displaySet(generateSet(), 'prize1');
  displaySet(generateSet(), 'prize2');
  displaySet(generateSet(), 'prize3');
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').textContent = `Result ${today}`;
}
