export function bannerLogin(){
    let div = document.createElement("div");
    div.className = "fondo1";
   

    let fondo2 = document.createElement("div");
    fondo2.className = "fondo2";
    div.appendChild(fondo2);
  

    let img2 = document.createElement("img");
    img2.src = "../../assets/imagenes/Fashion.png";
    img2.className = "img2";
    div.appendChild(img2);
    
   
    let h1 = document.createElement("h1");
    h1.textContent = "Welcome Back!";
    h1.className ="welcome";
    div.appendChild(h1);

    let textoP = document.createElement("p");
    textoP.className = "textoP"
    textoP.textContent = "Yay! You're back! Thanks for shopping with us.We have excited deals and promotions going on, grab your pick now! ";
    div.appendChild(textoP);

    
    let tituloLogin = document.createElement("span");
    tituloLogin.className ="log";
    tituloLogin.textContent = "LOG IN";
    div.appendChild(tituloLogin);

    let emailTexto = document.createElement("span");
    emailTexto.textContent = "Email address";
    emailTexto.className ="emailT";
    div.appendChild(emailTexto);

    let emailInputDiv = document.createElement("div");
    emailInputDiv.className = "emailCuadro1";

    let emailImg = document.createElement("img");
    emailImg.src = "../../assets/imagenes/envio.png";
    emailImg.className = "carta";

    let emailText = document.createElement("input");
    emailText.type = "text";
    emailText.placeholder = "Enter your email";
    emailText.className = "emailText";

    emailInputDiv.appendChild(emailImg);
    emailInputDiv.appendChild(emailText);
    div.appendChild(emailInputDiv);


    let passTexto = document.createElement("span");
    passTexto.textContent = "Password";
    passTexto.className = "pass";
    div.appendChild(passTexto);

    let passInputDiv = document.createElement("div");
    passInputDiv.className = "passCuadro";

    let passImg = document.createElement("img");
    passImg.src = "../../assets/imagenes/candado.png"; 
    passImg.alt = "password icon";

    let passText = document.createElement("input");
    passText.type = "password";
    passText.placeholder = "Enter your password";

    passInputDiv.appendChild(passImg);
    passInputDiv.appendChild(passText);
    div.appendChild(passInputDiv);

 
   
    let loginBtn = document.createElement("div");
    loginBtn.className = "login-btn";
    loginBtn.textContent = "LOG IN";
    div.appendChild(loginBtn);

    
    let text2 = document.createElement("span");
    text2.className = "contenedor-text2";

    let registerSpan = document.createElement("span");
    registerSpan.textContent = "Not registered yet?  ";
    

    let Account = document.createElement("span");
    Account.textContent = "   Create an Account";
    Account.className = "Account";

    text2.appendChild(registerSpan);
    text2.appendChild(Account);

    div.appendChild(text2);

   


    return div;
}

document.body.appendChild(bannerLogin());