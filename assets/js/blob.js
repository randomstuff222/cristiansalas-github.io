/* -- Glow effect -- */

const blob = document.getElementById('blob');

document.onpointermove = event => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX + window.pageXOffset}px`,
      top: `${clientY + window.pageYOffset}px`,
    },
    { duration: 3000, fill: 'forwards' }
  );
};
