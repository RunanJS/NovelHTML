document.getElementById("userId")
  .addEventListener("blur", function() {
  if (this.value.trim().length == 0) {
    this.style = "initial";
    return;
  }

  const regExp = /^[a-z][A-Za-z\d\-\_]{5,13}$/;

  if (regExp.test(this.value)) {
    this.style.backgroundColor = "springgreen";

  } else {
    this.style.backgroundColor = "red";
    this.style.color = "white";
  }
});

document.getElementById("userPwCk")
  .addEventListener("keyup", function() {
  const userPw = document.getElementById("userPw");
  const pwCk = document.getElementById("pwCk");

  if (userPw.value.trim().length == 0) {
    this.value = "";
    alert("비밀번호를 입력해주세요.");
    userPw.focus();
  }

  if (this.value.trim().length == 0) {
    pwCk.innerText = "";
    return;
  }

  if (userPw.value == this.value) {
    pwCk.innerText = "비밀번호 일치";
    pwCk.style.color = "green";

  } else {
    pwCk.innerText = "비밀번호가 불일치";
    pwCk.style.color = "red";
  }
});

document.getElementById("userName")
  .addEventListener("input", function() {
  const nameCk = document.getElementById("nameCk");

  if (this.value.trim().length == 0) {
    nameCk.innerText = "";
    return;
  }

  const regExp = /^[가-힣]{2,5}$/;

  if (regExp.test(this.value)) {
    nameCk.innerText = "정상입력";
    nameCk.style.color = "green";

  } else {
    nameCk.innerText = "한글만 입력하세요";
    nameCk.style.color = "red";
  }
});

function validate() {
  if (!document.querySelector
      ('input[name="gender"]:checked')) {
    alert("성별을 선택해주세요.");
    return false;
  }

  const regExp
  = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

  if (!regExp.test(document.getElementById
                   ("userPhone").value)) {
    alert("전화번호의 형식이 올바르지 않습니다");
    return false;
  }