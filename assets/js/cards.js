document.getElementById('cards').onmousemove = e => {
  for (const card of document.getElementsByClassName('card')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }
};

window.onload = () => {
  for (const card of document.getElementsByClassName('card')) {
    const cardText = card.querySelector('.card-text');
    const cardSubtext = card.querySelector('.card-subtext');

    console.log(cardText);
    console.log(cardSubtext);

    cardText.innerHTML = card.getAttribute('card-text');
    cardSubtext.innerHTML = card.getAttribute('card-subtext');
  }
};
