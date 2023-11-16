const navbar = document.getElementById("navbar");
const limite = 100;

window.addEventListener("scroll",() =>
{
    if(window.scrollY > limite)
    {
        navbar.classList.add("shrink");
    }else
    {
        navbar.classList.remove("shrink");
    }
});