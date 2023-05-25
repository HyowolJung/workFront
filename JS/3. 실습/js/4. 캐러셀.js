//이미지 배열 만들기
//const pics = ['pngwing-draven.png','pngwing-jannna.png', 'pngwing-leona.png' ]
//컨테이너 박스의 배경화면
//배열의 0번째 인덱스 값을 넣어봅시다
window.onload = function () {
    let pics = ['images/pic-1.jpg', 'images/pic-2.jpg', 'images/pic-3.jpg', 'images/pic-4.jpg', 'images/pic-5.jpg'];
    let imgIndex = 0;
    let container = document.getElementById('container');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    container.style.backgroundImage = `url(${pics[0]})`;

    left.addEventListener('click', function () {
        leftSlide();

    });

    right.addEventListener('click', function () {
        rightSlide();
    });

    function leftSlide() {
        imgIndex--;
        console.log(imgIndex);
        if (imgIndex < 0) {
            //     for(let i=0; i<pics.length; i++){
            //         container.style.backgroundImage = 'url(images/'+ pics[imgIndex] - ')';
            //    }
        }

        if (imgIndex >= pics.length) {
            imgIndex = 0;
        }


    }

    function rightSlide() {
        imgIndex++;
        console.log(imgIndex);
        if (imgIndex > 0) {
            for (let i = 0; i < pics.length; i++) {
                //container.style.backgroundImage = `url(${pics[]})`;
                container.style.backgroundImage = 'url(images/' + pics[imgIndex] + ')';
            }
        }

        if (imgIndex >= pics.length) {
            imgIndex = 0;
        }
    }

    //일정 간격으로 반복적으로 콜백 함수를 실행
    //setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열));

    // setInterval(function(){
    //     console.log('setInterval');
    // }, 3000)

    var i = 0;
    var interval = setInterval(function () {
        // i++;
        // console.log('setInterval' + i);
        imgIndex++;
        if (imgIndex <= pics.length) {
            imgIndex = 0;
            container.style.backgroundImage = 'url(images/' + pics[imgIndex] + ')';
        }
    }, 1000);
    //interval();
    function stop() {
        console.log('setInterval 중지');
        clearInterval(interval);
    }
}
