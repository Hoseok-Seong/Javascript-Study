function m1() {

}

function m2() {
    return 2;
}

function m3(a) {
    console.log("m3");
}

let m4 = function () { }; //익명함수, 세미콜론은 안 넣어도 되지만 넣어줄 것.

let m5 = () => { } //람다식

let m6 = () => {
    return 1;
}

let m7 = () => 1; //m6과 같은 것

function m8(a, b, c) { //선택적 매개변수
    console.log(a);
    console.log(b);
    console.log(c);
}

m8(a, b);