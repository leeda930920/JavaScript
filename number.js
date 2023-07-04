

let count = 0;
    // 1 부터 100까지(포함)의 임의의 정수 발생하기
    let com = parseInt(Math.random() * 10) + 1;

    function numberCheck(){
      let user = document.querySelector("#num").value;
      if (1 <= user && user <= 100){
        if (user >= com){
          document.querySelector("#display").innerHTML = "더 작은 수를 입력하세요";
        }else if(user <= com){
          document.querySelector("#display").innerHTML = "더 큰 수를 입력하세요";
        }else{
          document.querySelector("#display").innerHTML = "<span style='color:red'>정답입니다</span>";
        }
        // document.querySelector("#num").value = "";
        count++;
        document.querySelector("#counter").innerHTML = `${count} 번만에 맞히셨습니다`;

      }else{
        alert('1에서 100까지의 정수 중에서만 입력하세요');
      }

    }