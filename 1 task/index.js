const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let intervalState;

const createTimerAnimator = () => {

  return (seconds) => {
    clearInterval(intervalState);

    function countSeconds() {

      if (seconds >= 0) {

        const h = Math.floor(seconds/3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;

        timerEl.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

        seconds -= 1;
        
        intervalState = setTimeout(countSeconds, 1000);
      } else {
        timerEl.textContent = '00:00:00';
      };

    };
    countSeconds();

  };
};

// function resetCurrentTimer() {
//   createTimerAnimator.running === false;
// }

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
