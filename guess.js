let com = 53;
let user=0;

function guess() {
    let inputNum =parseInt(document.querySelector("#user").value);
        document.querySelector("#guesses").value = ++user;
    if (inputNum<com) 
        document.querySelector("#result").value = "더 큰 수를 입력하세요";
    else if(inputNum>com)
        document.querySelector("#result").value = "더 작은 수를 입력하세요";
    else
        document.querySelector("#result").value = "정답입니다";

}

function replay() {
    user = 0;
    com = Math.floor(Math.random()*100 +1);
    document.querySelector("#user").value = "";
    document.querySelector("#guesses").value = "";
    document.querySelector("#result").value = "";
    
    
}

