let n1 = 1;
let d1 = 1.5;
let b1 = true;
let c1 = "홍길동";
let c2 = '홍길동';
let arr = [1, 2, "가"]; // let arr =[]; arr[0]
let a = []; //선언만, 초기화.
let user = { //user.id, user.hobby[1], user.account.id
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    hobby: ["농구", "축구"],
    account: {
        id: 1122,
        password: 8087,
        balance: 50000
    }
}; //Object, 객체.

console.log("n1 : " + n1); //자바스크립트에서 사용하지 않는다.
console.log("n1 : ", n1);
console.log(`n1값은 ${n1} 입니다.`);