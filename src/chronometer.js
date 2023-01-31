class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);

    // ... your code goes here
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);

    return minutes;

    // ... your code goes here
  }

  getSeconds() {
    
    let seconds = this.currentTime % 60;
    return seconds;
    
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    // ... your code goes here
  }

  split() {
    let minut = this.computeTwoDigitNumber(this.getMinutes());
    let sec = this.computeTwoDigitNumber(this.getSeconds());

    return `${minut}:${sec}`;

    // ... your code goes here
  }
}
