function changeBg(){
    var navbar = document.getElementById('navbar');
    const navitem = document.querySelectorAll(".nav-box");
    // console.log(navitem[0]);
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgcolor');
        navitem.forEach((e) =>{
            e.classList.remove("lkjh")
        })
    }
    else{
        navitem.forEach((e) =>{
            e.classList.add("lkjh")
        })
        navbar.classList.add('bgcolor');
    }
}

window.addEventListener('scroll', changeBg);