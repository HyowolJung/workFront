// 버튼에 onclick='함수명' 를 입력후
// 함수를 실행시키기 위해서 버튼을 클릭합니다!!!

function typeTest() {
    //document.write('typeTest');
    //alert('typeTest');
    console.log('typeTest');

    //변수를 선언시 사용되는 키워드
    //var, let, const(상수)
    //숫자형 : 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    // 문자열 : 작은 따옴표, 큰 따옴표로 묶은 데이터
    let name = '문인수';
    let name1 = "문인수";
    let name2 = ""; //빈 문자열

    // 논리값 : true, false
    let check = false;

    //박스 선택
    let area1 = document.getElementById('area1');


    //박스에 값을 입력
    area1.innerHTML = '<h4>안녕하세요!</h4>';
    //Template literals 템플릿리터럴
    //"", '' 대신 ''(백팃)을 사용하여 변수(${expression})를 함께 출력
    area1.innerHTML += `name : ${name}, type: ${typeof (name)} <br>`;
    area1.innerHTML += 'name1 : ' + name1 + ' , type: ' + typeof (name) + ' <br>';
    area1.innerHTML += `name2 : ${name2}, type: ${typeof (name2)} <br>`;
    area1.innerHTML += `age : ${age}, type: ${typeof (age)} <br>`;
    area1.innerHTML += `height : ${height}, type: ${typeof (height)} <br>`;
    area1.innerHTML += `check : ${check}, type: ${typeof (check)} <br>`;

}

function typeTest2() {
    //alert('typeTest2');
    console.log('typeTest2');

    //배열 선언
    let hobbies = ['축구', '농구', '야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = '객체 테스트';
    area2.innerHTML += `hobbies : ${hobbies}, type: ${typeof (hobbies)}<br>`;

    //변수에 함수를 저장 할 수도 있고 
    //매개변수로 함수를 넘겨줄 수도 있습니다!!

    //함수 선언
    //let testFunc = function(num1, num2)
    //매개변수의 갯수가 일치하지 않은 경우 undefined가 매개변수의 값으로 들어가 오류 발생 -> 초기 값 지정하면 해결 가능.
    //초기값 지정
    let testFunc = function (num1 = 0, num2 = 0) {
        console.log('num1', num1);
        console.log('num2', num2);
        return num1 + num2;
    }

    //함수를 실행 : 변수이름(매개변수)
    console.log('testFunc', testFunc(10, 20));
    //매개변수의 갯수가 일치하지 않아도 실행
    console.log('testFunc', testFunc(10));

    area2.innerHTML += `testFunc : ${testFunc}, type : ${typeof (testFunc)}<br><br><br>`;

    //객체타입
    let user = {
        /* 속성 : 값,
            속성 : 값, ...
        */
        name: '문인수',
        age: 20,
        height: 184.5,
        id: 'test',
        hobbies: ['축구', '농구', '야구']
    };

    console.log(user);
    console.log(user.name);

    area2.innerHTML += `user : ${user}, type : ${typeof (user)}<br>`;
    area2.innerHTML += `null type : ${typeof (null)}<br>`;
    area2.innerHTML += `undefined type : ${typeof (undefined)} <br>`;
}



function plusTest() {
    let test1 = 7 + 7;
    let test2 = '7' + 7;
    let test3 = 7 + '7';
    let test4 = 7 + 7 + '7';
    let test5 = 7 + '7' + 7;
    let test6 = '7' + (7 + 7);
    let test7 = 7 * '7';
    let test8 = '7' - 3;
    let test9 = '4' / 2;
    let test10 = 4 % '2';
    let test11 = '3' * '7';
    let test12 = '3' * 'a';

    let area3 = document.getElementById('area3');
    area3.innerHTML = `${test1}`;
    area3.innerHTML = `${test2}`;
    area3.innerHTML = `${test3}`;
    area3.innerHTML = `${test4}`;
    area3.innerHTML = `${test5}`;
    area3.innerHTML = `${test6}`;
    area3.innerHTML = `${test7}`;
    area3.innerHTML = `${test8}`;
    area3.innerHTML = `${test9}`;
    area3.innerHTML = `${test10}`;
    area3.innerHTML = `${test11}`;
    area3.innerHTML = `${test12}`;

}

function castingTest() {
    let area4 = document.getElementById('area4');

    area4.innerHTML = `${2 + '3'} <br>`; //23
    area4.innerHTML = `${2 + Number('3')}<br>`; //5
    area4.innerHTML = `${String(2) + Number('3')}<br>`; //23
    area4.innerHTML = `${2 + parseInt('3')}<br>`;
    area4.innerHTML = `${2 + parseFloat('3')}<br>`;

    //16진수를 10진수로 변환
    //ff : 255
    area4.innerHTML += `${parseInt('ff', 16)}`;
}

function opTest(){
    let area5 = document.getElementById('area5');

    area5.innerHTML += '"==" 연산자 테스트<br>';
    area5.innerHTML += `7==7 : ${7==7}<br>`;
    area5.innerHTML += `7=='7' : ${7=='7'}<br>`;
    area5.innerHTML += `7!='7' : ${7!='7'}<br>`;
    area5.innerHTML += `'7'!='7' : ${'7'!='7'}<br><br>`;

    area5.innerHTML += '"===" 연산자 테스트<br>';
    area5.innerHTML += `7===7 : ${7===7}<br>`;
    area5.innerHTML += `7==='7' : ${7==='7'}<br>`;
    area5.innerHTML += `7!=7 : ${7!=7}<br>`;
    area5.innerHTML += `'7'!=7 : ${'7'!=7}<br>`;
}

function forTest(){
    let area6 = document.getElementById('area6');
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    for(let i=0; i<11; i++){
        // area6.innerHTML += 'for =============================';
        // area6.innerHTML += i;
        console.log(arr[i]);
    }
    console.log('for =============================')

    //for(변수 in 객체)
    //반복문 - 객체 키와 값 가져오기
    //반복 변수에 array의 index를 순서대로 담아서 반복시킨다
    //객체명.속성 or 객체명[속성명]
    for(let i in arr){
        //area6.innerHTML += 'for in =============================';
        //area6.innerHTML +=  
        console.log(arr[i])
    }

    let student = {
        name : '고경희',
        age : 20,
        class : '1'
        
    };

    //객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key, student[key]);
        //console.log(key, student.key); //ERR(속성 이름이 key인 요소를 찾는데 그런 요소는 없으니까 undefined 반환)
    }

    console.log('for in ==========================')

    //배열.forEach(function(변수){})
    //배열의 요소를 함수의 매개변수로 전달
    arr.forEach(function(num){
        console.log(num);
    });
    console.log('forEach ===========================')

    let i = 0;
    while(true){
        i++;
        if(i % 2 == 0){
            continue;
            
        }

        console.log(i);

        if(i > 5){
            break;
        }
    }

    console.log('while ===========================')

    //ES6부터 추가된 for문
    for(let iterator of arr){
        console.log(iterator)
    }
    console.log('iterator ===========================')

}
