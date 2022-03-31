let realTimeClock = document.querySelector('.realTimeClock');

function getTime() {
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  realTimeClock.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}
getTime();

function init() {
  setInterval(getTime, '1000');
}
init();