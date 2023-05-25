//html의 body에 위치한 btn1을 인식하기 전에 script가 먼저 인식되기 때문에 window.onload를 써야해요.
window.onload = function () {
    console.log('04_함수');
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function () {
        console.log('addEvent');
    });

    //1-2. 익명 함수 : 변수에 대입하거나 함수실행시 인수로 사용될 수 있다.
    btn2.addEventListener('click', function () {
        alert('2. 익명 함수(이벤트 핸들러)');
    });

    // let btn3 = document.getElementById('btn3');
    // btn3.addEventListener('click', ()=>{
    //     argTest('안녕하세요');
    // });

    //2-2. arguments
    btn4.addEventListener('click', () => {
        let arguments = sum_argument(11, 22, 33);
        console.log('합계 : ', arguments);
    });

    //3-1. 일반적인 값 리턴
    btn5.addEventListener('click', () =>{
        let random = ran();
        console.log(`random : ${random}`);
    });

    //3-2. 익명 함수를 리턴하는 함수
    btn6.addEventListener('click', () =>{
        //방법1
        // let func = funcTest();
        // func();

        //방법2
        funcTest()();
    });

    //4-1. eval() 함수
    btn7.addEventListener('click', () =>{
        // console.log(eval());

        console.log(calc.value);
        let res = eval(calc.value);
        console.log('res : ', res);
    });

    //4-2. isInfinity()와 isNaN() 함수
    btn8.addEventListener('click',()=>{
        let num1 = -10/0;
        let num2 = 10/'a';
        let p = document.getElementById('p3');

        p.innerHTML += `10 / 0 : ${num1}<br>`;
        p.innerHTML += `10 / 'a' : ${num2}<br>`;
        p.innerHTML += `num1 == Infinity : ${num1 == -Infinity}<br>`;
        p.innerHTML += `num2 == NaN : ${num2 == NaN}<br>`;
        p.innerHTML += `isFinite(num1) : ${isFinite(num1)}<br>`;
        p.innerHTML += `isNaN(num2) : ${isNaN(num2)}<br>`;
    });
}

// function eval(){
//     let calc = document.getElementById('calc');
//     let result = eval(calc.value);
//     //let result = calc.eval();
//     console.log(result)

// }




//3-2. 익명 함수를 리턴하는 함수
function funcTest(){
    //클로저 : 내부함수가 사용하는 외부함수의 지역변수는 내부함수가 소멸할 때까지 소멸되지 않는 특성
    let name = '문인수';

    return function(){
        alert(`${name}님 환영합니다.`)
    }
}

//3-1. 일반적인 값 리턴
function ran(){
    let random = parseInt(Math.random() * 100 + 1);
    return random;
}



//2-2. arguments : 매개변수의 갯수가 가변적인 경우 사용하는 속성
function sum_argument(){
    let res = 0;

    for(let i=0; i<arguments.length;i++){
        res += arguments[i];
    }
    return res;
}


//2-1. 함수의 매개변수
function argTest(value = '매개값없음'){
    alert(value);
}


//1-1. 선언적 함수
//선언 : function 함수이름(매개변수, ...){ }
//호출 : 함수명()
function test() {
    console.log('test호출')
}
test();

//1-2. 익명 함수
//익명의 함수를 변수에 대입
//익명의 함수 : 함수 이름이 없는 함수
let sum = function(a,b){
    return a+b;
}

console.log('함수실행결과 : ' , sum(10, 20));

//1-3. 자기 실행 함수(=즉시 실행 함수)
//함수에 대한 이름이 없고 즉시 실행되고 1회용
(function(a,b){
    console.log(`a: ${a}, b: ${b}`);
    console.log('자동으로 실행');
}(10, 20))

//1-4. 화살표 함수(Arrow Function)
const hi = function(){
    return alert('안녕하세요');
}

const hi1 = ()=> {return alert('hi1 안녕하세요(화살표함수)')};
//처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
const hi2 = ()=> alert('hi2 안녕하세요');