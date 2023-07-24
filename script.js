let skillMenu = 8888;
let skillNumber = document.getElementsByClassName('number');
let skillCategory = document.getElementsByClassName('skillCategory');

window.addEventListener('load', function() {
    const agent = window.navigator.userAgent.toLowerCase()

    if (agent.indexOf("chrome") != -1) {
        const coverElement = document.querySelector('.cover');
        console.log("ブラウザはchromeです。");
        coverElement.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        coverElement.style.backdropFilter = 'blur(20px)';
        const imgElement1 = document.querySelector('.videoContents .videoContentsMain1 img');
        imgElement1.style.opacity = '0%';
        const imgElement2 = document.querySelector('.videoContents .videoContentsMain2 img');
        imgElement2.style.opacity = '0%';
    } else if (agent.indexOf("safari") != -1) {
        console.log("ブラウザはsafariです。");
        const imgElement1 = document.querySelector('.videoContents .videoContentsMain1 img');
        imgElement1.style.opacity = '100%';
        const imgElement2 = document.querySelector('.videoContents .videoContentsMain2 img');
        imgElement2.style.opacity = '100%';
        coverElement.style.backgroundColor = 'white';
        coverElement.style.background = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))';
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

const targetEx1 =  document.querySelector('.ex1');
targetEx1.style.opacity = '30%';
targetEx1.style.transform = 'translate(-10%,0)';

const targetEx2 =  document.querySelector('.ex2');
targetEx2.style.opacity = '30%'; 
targetEx2.style.transform = 'translate(10%,0)';

const targetEx3 =  document.querySelector('.ex3');
targetEx3.style.opacity = '30%'; 
targetEx3.style.transform = 'translate(-10%,0)';

const targetEx4 =  document.querySelector('.ex4');
targetEx4.style.opacity = '30%'; 
targetEx4.style.transform = 'translate(10%,0)';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            skillsOpen(targetPCskill1,targetPCskill2,targetPCskill3,targetPCskill4);
            ex1Change(targetEx1);
            ex2Change(targetEx2);
            ex3Change(targetEx3);
            ex4Change(targetEx4);
        }
      });
    });
    observer.observe(targetPCskill1);
    observer.observe(targetPCskill2);
    observer.observe(targetPCskill3);
    observer.observe(targetPCskill4);
    observer.observe(targetEx1);
    observer.observe(targetEx2);
    observer.observe(targetEx3);
    observer.observe(targetEx4);
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
function skillsOpen(targetPCskill1,targetPCskill2,targetPCskill3,targetPCskill4){
    skill1Change(targetPCskill1);
    skill2Change(targetPCskill2);
    skill3Change(targetPCskill3);
    skill4Change(targetPCskill4);
}


function ex1Change(targetEx1){
    targetEx1.style.transition = 'opacity 1.2s ease, transform 0.3s ease';
    targetEx1.style.opacity = '100%'; 
    targetEx1.style.transform = 'translate(0%,0%)'; 
}

function ex2Change(targetEx2){
    targetEx2.style.transition = 'opacity 1.2s ease, transform 0.4s ease';
    targetEx2.style.opacity = '100%'; 
    targetEx2.style.transform = 'translate(0%,0%)'; 
}

function ex3Change(targetEx3){
    targetEx3.style.transition = 'opacity 1.2s ease, transform 0.5s ease';
    targetEx3.style.opacity = '100%'; 
    targetEx3.style.transform = 'translate(0%,0%)'; 
}

function ex4Change(targetEx4){
    targetEx4.style.transition = 'opacity 1.2s ease, transform 0.6s ease';
    targetEx4.style.opacity = '100%'; 
    targetEx4.style.transform = 'translate(0%,0%)'; 
}

function fadeChange(targetSkillCategory,targetSkillImg,skillMenu,imgTag){//画像と文字列をなだらかに変化させる
    targetSkillCategory.style.opacity = 0; // 一時的に透明にする
    targetSkillImg.style.opacity = 0; // 一時的に透明にする
    setTimeout(function() {
        if (skillMenu % 4 == 1) {
            skillCategory[0].textContent = 'Webデザイン';
            imgTag.src = 'skill02.png';
        } else if (skillMenu % 4 == 2) {
            skillCategory[0].textContent = '映像製作';
            imgTag.src = 'skill03.png';
        } else if (skillMenu % 4 == 3) {
            skillCategory[0].textContent = '楽曲製作';
            imgTag.src = 'skill04.png';
        } else {
            skillCategory[0].textContent = 'プログラミング';
            imgTag.src = 'skill01.png';
        }
        targetSkillCategory.style.opacity = 1; // 0.2秒後に不透明にする
        targetSkillImg.style.opacity = 1; // 0.2秒後に不透明にする

      }, 200);
}

function skillChange(skillMenu) {//モバイル版の画像を変える大元の関数
    let imgTag = document.getElementById("imgID");
    let targetSkillCategory = document.querySelector('.skillCategory');
    let targetSkillImg = document.querySelector('.skillContents img');
    if (skillMenu % 4 == 1) {
        skillNumber[0].textContent = '02';
    } else if (skillMenu % 4 == 2) {
        skillNumber[0].textContent = '03';
    } else if (skillMenu % 4 == 3) {
        skillNumber[0].textContent = '04';
    } else {
        skillNumber[0].textContent = '01';
    }
    fadeChange(targetSkillCategory,targetSkillImg,skillMenu,imgTag);//画像と文字をなだらかに変えるやつ
}
  
function sideButtonColorChange(targetBackButton){
    targetBackButton.style.borderBottom = '30px solid red';
    setTimeout(function() {
        targetBackButton.style.borderBottom = '30px solid black'; // ボタンの色を元に戻す
    }, 10);
}

function nextSkill(){
    const targetBackButton = document.querySelector('.triangle2');
    sideButtonColorChange(targetBackButton);
    skillMenu++;
    skillChange(skillMenu);//画像を変更する
}

function backSkill(){
    const targetBackButton = document.querySelector('.triangle1');
    sideButtonColorChange(targetBackButton);
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
