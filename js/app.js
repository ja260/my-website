function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;

  if(u === "admin" && p === "1234") {
    document.getElementById("msg").innerHTML = "Login Success!";
  } else {
    document.getElementById("msg").innerHTML = "Invalid Login";
  }
}
