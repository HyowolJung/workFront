// 사용자로부터 출생년도를 입력받아서 나이를 출력한다
//나이를 출력하는 프로그램
/*
전역변수와 지역변수
전역변수 : 함수 외부에서 선언해서 어디에서든 사용 가능
지역변수 : 함수 내부에서 선언해서 함수 내부에서만 사용 가능
*/

//전역변수
var date = new Date();  //내장객체
var year = date.getFullYear();  //외장객체

//(블럭레벨)
function getAge() {
    if (true) {
        //지역변수
        let birth_year = prompt('출생년도를 입력해주세요');
        var age = year - birth_year;
        console.log(`당신의 나이는 ${age}세 입니다.`);
        console.log(birth_year);

    }
}
//var키워드는 함수레벨
//console.log(`당신의 나이는 ${age}세 입니다.`);

//let키워드는 블록레벨
//console.log(birth_year);

g_str1 = '전역변수'
var g_str2 = 'var 전역변수'
let g_str3 = 'let 전역변수'

console.log('전역변수 출력=======================');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);
//widows 객체
/*
브라우저에서 제공하는 브라우저창(window)에 대한 정보를 담고 있는 객체
전역변수 사용시 'window.변수명' 혹은 'this.변수명'으로 표현해서 사용할 수 있다.
*/
//var로 선언하면 windows객체에 연결
console.log('window.변수 출력=======================');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);
console.log('this.변수 출력=======================');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

//이름을 불러야 호출됨
function test() {
    console.log('전역변수 출력=======================');
    console.log(g_str1);
    console.log(g_str2); //같은 이름의 지역변수를 선언시 호이스팅에 의해서 undefined로 출력됨
    console.log(g_str3);

    console.log('window.변수 출력=======================');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);

    console.log('this.변수 출력=======================');
    console.log(this.g_str1);
    console.log(this.g_str2);
    console.log(this.g_str3);

    //지역변수 : 함수 외부에서 접근불가
    //키워드 없이 선언된 변수는 함수가 실행되면 전역변수로 등록이 된다.
    l_str1 = '지역변수';
    var l_str2 = 'var 지역변수';
    let l_str3 = 'let 지역변수';

    console.log('지역변수 출력=======================');
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);

    //전역변수와 동일한 이름의 지역 변수 선언시 지역변수가 우선
    //상단 출력이 undefined로  나오며 전역변수는 영향을 받지 않아요.
    //g_str2 = '전역변수 == 지역변수' -> 함수가 실행된 이후 전역변수의 값이 변경
    //g_str2 = '전역변수 == 지역변수';

    /*
        호이스팅(위로 끌어올리다)
        자바스크립트 파서가 프로그램 실행 전에
        변수와 함수의 메모리 공간을 미리 할당 하는 것
        변수 선언문과 함수선언문 유효범위 최상단에 선언(변수는 undefined로 초기화)
        (함수 내에 선언되어 있으면 함수 최상단에, )
    */

    console.log(g_str2);
    console.log(aaa); //선언되지 않은 변수는 찾을 수 없음
    var g_str2 = '전역변수 == 지역변수'; //이미 전역변수로 선언한 걸 지역변수로 선언하면?
    console.log('g_str2', g_str2);

    //블럭레벨 스코프 테스트
    if (true) {
        b_str1 = '블럭선언';    //전역
        var b_str2 = '블럭선언 var';    //함수
        let b_str3 = '블럭선언 let';    //블럭
        // 상수 : 선언과 동시에 초기화 변경불가
        const b_str4 = '블럭선언 const' //블럭
    }

    console.log('함수내부선언', block_str1);
    console.log('함수내부선언', block_str2);

    // 블럭레벨 스코프(let, const)
    // 블럭 내부에서 선언된 겨우 블럭 외부에서 호출 불가
    // console.log('함수내부선언', block_str3);
    // console.log('함수내부선언', block_str4);
}

//함수내부에서 선언된 지역변수
/*
// console.log(l_str1); --> 함수 실행 후 접근 가능
// console.log(l_str2);
// console.log(l_str3);
*/

//페이지가 로드된 이후 바로 실행
window.onload = function(){
    //페이지가 모두 로딩되면 실행
    console.log("onload 실행 - 페이지 로딩완료========")

    //var예약어의 중복선언
    var num = 0;
    console.log(num);
    var num = 10;
    console.log(num);

    //let으로 선언시 num1을 선언문이 나오기 전에 사용불가
    //let, concst도 호이스팅이 되지만
    //Temporal DeadZone(TDZ)에 위치
    //TDZ : 선언 전에 변수를 사용하는 것을 비 허용하는 개념상의 공간

    //let, const 중복선언 불가
    let num1 = 0;
    //let num1 = 0;
    num1 = 10;

    //const 값 변경 불가, 선언과 동시에 초기화
    const num2 = 0;
    num2 = 10;
}


