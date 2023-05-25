/*
    1. 화면이 모두 로드 된 이후 실행
        window.onload = function(){ ... }

    2. 버튼을 선택, div선택
        document.getElmentById('id')
    
    3. 로또 번호 생성
        임의의 번호 생성
        Math.random

    4. 버튼을 클릭하면 div에 생성된 번호를 출력
        div.innerHTML = ''
*/

window.onload = function () {
    console.log('화면이 모두 로드되었어요');

    //2. 버튼을 선택, div선택
    let btn1 = document.getElementById('btn1');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');


    //let num = parseInt(Math.random()*50);
    //3. 버튼이 클릭되면 div를 초기화
    btn1.onclick = function () {
        console.log('버튼 클릭');

        lottoDiv.innerHTML += ''; //초기화
                
        let nums = [3, 5, 7, 9, 12];

        for (let num of nums) {
            console.log(num);
            lottoDiv.innerHTML += `<div class='ball'>${num}</div>`;
        }

        //색상 변경
        let ballList = document.querySelectorAll('div[class=ball]');
        for(let i=0; i<ballList.length;i++){ //for(let i in ballList){
            console.log(i);
            let color = getColor();
            console.log('color ㄴㄴㄴ' + color);

            ballList[i].style.backgroundColor = color;
            ballList[i].style.borderColor = color;
        }
    }

    //내가 했던거^^
    //let nums = [3, 5, 7, 9, 12];
    // btn1.onclick = function () {
    //     console.log('버튼 클릭');
    //     for (let i = 0; i < nums.length; i++) {
    //         // lottoDiv.innerHTML = `<div class="ball">${num}</div>`; //lottoDiv 초기화
    //         // lottoDiv.innerHTML += `<div class="ball">${num}</div>`;
    //         // lottoDiv.innerHTML = '<div class="ball">' + num + '</div>'; //이것도 됨 
    //         lottoDiv.innerHTML += `<div class='ball'>${nums}</div>`; //innerHTML 시작태그와 끝태그 사이에 배치
    //     }
    // }
}

function getColor() {
    console.log('1. getColor()작동중');

    //1. RGB값 랜덤 생성
    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);

    // console.log('2. ${r}, ${g}, ${b} : ' + `${r}, ${g}, ${b}`);

    // //2. 생성된 랜덤 RGB값 변수에 저장
    // let color = `rgb(${r}, ${g}, ${b})`;

    // console.log('3. color : ' + color);

    // //3. 변수 활용
    // ballList[i].style.backgroundColor = color;
    // ballList[i].style.borderColor = color;

    return `rgb(${r}, ${g}, ${b})`;
}

