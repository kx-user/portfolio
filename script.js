let skillMenu = 8;
let skillNumber = document.getElementsByClassName('number');
let skillCategory = document.getElementsByClassName('skillCategory');


window.addEventListener('load', function() {
    const agent = window.navigator.userAgent.toLowerCase()

    if (agent.indexOf("chrome") != -1) {
        const coverElement = document.querySelector('.cover');
        console.log("ブラウザはchromeです。")
        coverElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        coverElement.style.backdropFilter = 'blur(10px)';
    } else if (agent.indexOf("safari") != -1) {
        console.log("ブラウザはsafariです。")
        coverElement.style.backgroundColor = 'white';
        coverElement.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))'
    }
});

//要素が画面に表示された時に実行する
document.addEventListener('DOMContentLoaded', function() {
const targetPCskill1 = document.querySelector('.PCskill1');
targetPCskill1.style.opacity = '50%'; 
targetPCskill1.style.top = '40%';
targetPCskill1.style.left = '30%';

const targetPCskill2 = document.querySelector('.PCskill2');
targetPCskill2.style.opacity = '50%'; 
targetPCskill2.style.top = '40%';
targetPCskill2.style.right = '30%';

const targetPCskill3 = document.querySelector('.PCskill3');
targetPCskill3.style.opacity = '50%'; 
targetPCskill3.style.bottom = '40%';
targetPCskill3.style.left = '30%';

const targetPCskill4 = document.querySelector('.PCskill4');
targetPCskill4.style.opacity = '50%'; 
targetPCskill4.style.bottom = '40%';
targetPCskill4.style.right = '30%';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            skill1Change(targetPCskill1);
            skill2Change(targetPCskill2);
            skill3Change(targetPCskill3);
            skill4Change(targetPCskill4);
        }
      });
    });
    observer.observe(targetPCskill1);
    observer.observe(targetPCskill2);
    observer.observe(targetPCskill3);
    observer.observe(targetPCskill4);
});

function skill1Change(targetPCskill1){
    targetPCskill1.style.transition = 'opacity 0.2s ease, top 0.2s ease, left 0.2s ease, transform 0.2s ease';
    targetPCskill1.style.opacity = '100%'; 
    targetPCskill1.style.top = '0%'; 
    targetPCskill1.style.left = '0%'; 
}

function skill2Change(targetPCskill2){
    targetPCskill2.style.transition = 'opacity 0.2s ease, top 0.2s ease, right 0.2s ease, transform 0.2s ease';
    targetPCskill2.style.opacity = '100%'; 
    targetPCskill2.style.top = '0%'; 
    targetPCskill2.style.right = '0%'; 
}

function skill3Change(targetPCskill3){
    targetPCskill3.style.transition = 'opacity 0.2s ease, bottom 0.2s ease, left 0.2s ease, transform 0.2s ease';
    targetPCskill3.style.opacity = '100%'; 
    targetPCskill3.style.bottom = '0%'; 
    targetPCskill3.style.left = '0%'; 
}

function skill4Change(targetPCskill4){
    targetPCskill4.style.transition = 'opacity 0.2s ease, bottom 0.2s ease, right 0.2s ease, transform 0.2s ease';
    targetPCskill4.style.opacity = '100%'; 
    targetPCskill4.style.bottom = '0%'; 
    targetPCskill4.style.right = '0%'; 
}

function skillChange(skillMenu){  //skillMenuの数を基準として画像を変更する
    let imgTag = document.getElementById("imgID");
    if(skillMenu%4 == 1){
        skillNumber[0].textContent = '02';
        skillCategory[0].textContent = 'Webデザイン';
        imgTag.src = 'skill02.png';
    }else if(skillMenu%4 == 2){
        skillNumber[0].textContent = '03';
        skillCategory[0].textContent = '映像製作';
        imgTag.src = 'skill03.png';
    }else if(skillMenu%4 == 3){
        skillNumber[0].textContent = '04';
        skillCategory[0].textContent = '楽曲製作';
        imgTag.src = 'skill04.png';
    }else{
        skillNumber[0].textContent = '01';
        imgTag.src = 'skill01.png';
        skillCategory[0].textContent = 'プログラミング';
    }
}

function backSkill(){
    skillMenu++;
    skillChange(skillMenu);//画像を変更する
}

function nextSkill(){
    skillMenu--;
    skillChange(skillMenu);//画像を変更する
}

function mobileGo(){
    let element;
    if(skillMenu%4 == 1){
        element = document.querySelector('.ex2');
    }else if(skillMenu%4 == 2){
        element = document.querySelector('.ex3');
    }else if(skillMenu%4 == 3){
        element = document.querySelector('.ex4');
    }else{
        element = document.querySelector('.ex1');
    }
    srcollAuto(element);
}

function go1() {
    const element = document.querySelector('.ex1');
    srcollAuto(element);
}

function go2() {
    const element = document.querySelector('.ex2');
    srcollAuto(element);
}

function go3() {
    const element = document.querySelector('.ex3');
    srcollAuto(element);
}

function go4() {
    const element = document.querySelector('.ex4');
    srcollAuto(element);
}

function srcollAuto(element){  //element（ここではクラス）に基づいて、そのクラスの場所まで自動でスクロールする。
    const elementPosition = element.offsetTop;
    const duration = 500; // アニメーションの時間
    const start = window.pageYOffset; // 今のスクロール位置
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
    const scroll = () => {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const scrollPosition = easeInOutQuad(timeElapsed, start, elementPosition - start, duration);
      window.scrollTo(0, scrollPosition);
  
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      }
    };
  
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    scroll();
}









