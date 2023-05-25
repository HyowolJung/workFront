window.onload = function () {
    //open, close는 내장함수
    //아이디로 참조불가
    //직접 변수에 담아주어야 함

    //#open : 모달창 보여주기
    //#clse : 모달창 닫기

    let open = document.getElementById('open');
    let close = document.getElementById('close');
    //특수문자가 입력되서 아이디로 바로 접근 안됨
    let modal = document.getElementById('modal-box');

    open.addEventListener('click', function () {
        modal.classList.add('active');
    });

    close.addEventListener('click', function () {
        //모달창 닫기
        //class속성 active 제거
        modal.classList.remove('active');
    });
}



