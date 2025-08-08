export function bannerLogin(){

    let div = document.createElement('div');
    div.className = "bannerLogin ";

    let flecha = document.createElement('a');
    flecha.href = "../login/login.html";
    flecha.className = "flecha"
    flecha.textContent = "←"
    div.appendChild(flecha);

    let span11 = document.createElement('span');
    span11.className = "span11"
    span11.textContent = "Welcome Back!"
    div.appendChild(span11);

    let span22 = document.createElement('span');
    span22.className = "span22"
    span22.textContent = "Yay! You're back! Thanks for shopping with us.We have excited deals and promotions going on, grab your pick now! "
    div.appendChild(span22);

    let span33 = document.createElement('span');
    span33.className = "span33"
    span33.textContent = "LOG IN"
    div.appendChild(span33);

    let span44 = document.createElement('span');
    span44.className = "span44"
    span44.textContent = "Email address"
    div.appendChild(span44);

    let div11 = document.createElement('div');
    div11.className = "div11";
    div.appendChild(div11)

    let span55 = document.createElement('span');
    span55.className = "span55"
    span55.textContent = "hlo@geeta.co|"
    div.appendChild(span55);

    let div22 = document.createElement('div');
    div22.className = "div22";
    div.appendChild(div22)

    let span66 = document.createElement('span');
    span66.className = "span66"
    span66.textContent = "Enter your password"
    div.appendChild(span66);







    return div;
}

document.body.appendChild(bannerLogin());