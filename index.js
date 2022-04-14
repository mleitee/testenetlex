function funcaoteste (){
const email = document.getElementById ("field-email").value
const password = document.getElementById("field-password").value
console.log(email, password)

let data = {email: document.getElementById ("field-email").value, password: document.getElementById("field-password").value};

fetch("http://localhost:3086/users/login", {
  method: "POST",
  headers: {'Content-Type': 'application/json'}, 
  body: JSON.stringify(data)
}).then(async res => {
  const responsebody= (await res.json())
  localStorage.setItem("token", responsebody.token)
}).catch(res => {
    console.log("Request complete! response:", res);})
}

