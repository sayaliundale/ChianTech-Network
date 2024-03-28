var flag = 0;

const showMenu = () => {
    if (flag === 0) {
        flag = 1;
        var menu = document.querySelector(".nav-items");
        menu.style.visibility = "visible";

        var hamburger = document.getElementById("hamburger-menu");
        hamburger.style.visibility = "hidden";

        var cancle = document.getElementById("cancle");
        cancle.style.visibility = "visible";
    }
}

const hideMenu= () =>{
    if(flag===1){
        flag=0;
        var menu = document.querySelector(".nav-items");
        menu.style.visibility = "hidden";

        var hamburger = document.getElementById("hamburger-menu");
        hamburger.style.visibility = "visible";

        var cancle = document.getElementById("cancle");
        cancle.style.visibility = "hidden";
    }
}