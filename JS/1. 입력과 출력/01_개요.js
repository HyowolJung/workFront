function external(){
    console.log('3. external(외부) 스크립트 실행');
    var result = add(10, 20);
    console.log('x+y' , result);
}
function add(x,y){
    return x+y
}