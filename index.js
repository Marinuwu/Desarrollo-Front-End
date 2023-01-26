const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (event) =>{
    event.preventDefault(); //evitar que se envie el form de forma predeterminada

    Validate();
})


  //verificar si los campos han sido validados correctamente
  const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName("form-control");
    let successCount = 0;
    for (let i = 0; i < formContr.length; i++) {
      if (formContr[i].className === "form-control success") {
        successCount++;
      }
    }
    if (successCount === formContr.length) {
      sendData(usernameVal);
    }
  };


  const isEmail = (emailVal) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(emailVal);
  }
//funcion para validar los valores del form(ver si las contraseñas son iguales,formato valido etc)
function Validate(){
    const usernameVal = username.value.trim(); //eliminar espacio en blanco
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    //username
    if(usernameVal === ""){
        setErrorMsg(username, 'Rellene este campo');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'Minimo 3 caracteres');
    }
    else if(/\d/.test(usernameVal)){
        setErrorMsg(username, 'No se permiten números');
    }
    else{
        setSuccessMsg(username);
    }



    //email
    if(emailVal === ""){
        setErrorMsg(email, 'Rellene este campo');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'email invalido');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Rellene este campo');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 caracteres');
    }
    else{
        setSuccessMsg(password);
    }

    //confirmarpassword
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Rellene este campo');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'No coinciden!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    SuccessMsg(usernameVal);


}

//funciones de error y success.. apariencia del form
function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
