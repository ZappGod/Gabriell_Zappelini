const h2 = document.querySelectorAll("h2")
const p = document.querySelectorAll("p")

h2.forEach(element =>
    {
        element.style.fontFamily = "fantasy"
    });

p.forEach((element,index) =>
    {
        if (index > 0)
        {
            element.style.fontFamily = "cursive"
        }
    });