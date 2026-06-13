// Loader Animation

window.addEventListener("load", () => {

    const loader =
    document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


// Navbar Background Change

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");


if(window.scrollY > 50){

navbar.style.background =
"rgba(0,0,0,0.85)";

}

else {

navbar.style.background =
"rgba(0,0,0,0.4)";

}

});


// Scroll Reveal Animation

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform =
"translateY(0)";

}

});

});


document.querySelectorAll(
"section, .card, .category-card, .game-card, .review-card"
).forEach(el => {

el.style.opacity = "0";

el.style.transform =
"translateY(50px)";

el.style.transition =
"all .8s ease";

observer.observe(el);

});
