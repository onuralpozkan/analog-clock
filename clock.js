const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

let hour;
let minute;
let second;

let hourHandAngle; 
let minuteHandAngle;
let secondHandAngle;

const getClockTime = () => {
  hour = new Date().getHours() % 12 || 12;
  minute = new Date().getMinutes();
  second = new Date().getSeconds();
  console.log(hour);
  minuteHandAngle = (minute - 15) * 6;
  secondHandAngle = (second - 15) * 6;
  switch (hour) {
    case 1:
      hourHandAngle = "-60deg";
      break;
    case 2:
      hourHandAngle = "-30deg";
      break;
    case 3:
      hourHandAngle = "0deg";
      break;
    case 4:
      hourHandAngle = "30deg";
      break;
    case 5:
      hourHandAngle = "60deg";
      break;
    case 6:
      hourHandAngle = "90deg";
      break;
    case 7:
      hourHandAngle = "120deg";
      break;
    case 8:
      hourHandAngle = "150deg";
      break;
    case 9:
      hourHandAngle = "180deg";
      break;
    case 10:
      hourHandAngle = "210deg";
      break;
    case 11:
      hourHandAngle = "240deg";
      break;
    case 12:
      hourHandAngle = "270deg";
      break;
    default:
      break;
  }
  secondHand.style.transform =  `rotateZ(${secondHandAngle}deg)`;
  hourHand.style.transform = `rotateZ(${hourHandAngle})`;
  minuteHand.style.transform = `rotateZ(${minuteHandAngle}deg)`;
}


setInterval(() => {
  getClockTime();
}, 1000);

/*? Theme Selector */
const themeOpenerBtn = document.getElementById('openBtn');
const themesSelector = document.querySelector('.clock-themes');


themeOpenerBtn.addEventListener('click', ()=>{
  themesSelector.classList.toggle('clock-themes-close')
  themeOpenerBtn.classList.toggle('open-themes-revert')
})

const clockContainer = document.querySelector('.clock-container');
const clock = document.querySelector('.clock');

var diffThemes = document.querySelectorAll('.theme');
console.log(diffThemes);
diffThemes.forEach(themeCard => {
  themeCard.addEventListener('click', ()=>{
    let themeName = themeCard.dataset.theme;
    clockContainer.className = "clock-container";
    clock.className = "clock";
    clockContainer.classList.toggle(`${themeName}-bg`)
    clock.classList.toggle(`${themeName}`)
    console.log(themeCard.dataset.theme);

  })
})



{/* <div class="clock-container yy-theme-bg">
<div class="clock yy-theme">
    <div class="hour-hand" id="hourHand">
      <img src="./themes/hands_white.svg" alt="">
    </div>
    <div class="minute-hand" id="minuteHand">
      <img src="./themes/hands_white.svg" alt="">
    </div>
    <div class="second-hand" id="secondHand"></div>
    <div class="clock-center"></div>
</div>
</div> */}

