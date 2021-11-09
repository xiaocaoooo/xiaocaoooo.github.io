function myTime() {
  const time = new Date();
  const hh = time.getHours();
  const mm = time.getMinutes();
  const ss = time.getSeconds();

  if (hh = 6) {
    if (mm = 49) {
      window.open('./alarm_clock.html')
    }
  }
  if (hh = 13) {
    if (mm = 25) {
      window.open('./alarm_clock.html')
    }
  }
}
myTime();
setInterval(myTime, 1000);