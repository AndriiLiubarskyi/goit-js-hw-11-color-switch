const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const max = colors.length;

const bodyTheme = document.querySelector('body');

const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');

const changeColor = {
    timerId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.timerId = setInterval(() => {
            bodyTheme.style.backgroundColor = colors[Math.floor(Math.random() * (max + 1))];
        }, 1000);
    },
    stop() {
        clearInterval(this.timerId);
        this.isActive = false;
    },
};

buttonStart.addEventListener('click', () => {
    changeColor.start()
});
buttonStop.addEventListener('click', () => {
    changeColor.stop()
});

