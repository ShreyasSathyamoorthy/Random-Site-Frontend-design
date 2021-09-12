const e1 = document.querySelector(".e1");
const e2 = document.querySelector(".e2");
const onee = document.querySelector(".onee");
const twoo = document.querySelector(".twoo");
const m1 = document.querySelector(".m1");
const m2 = document.querySelector(".m2");
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const gg = document.querySelector(".gg");
const ggg = document.querySelector(".ggg");
const back = document.querySelector(".back");

e1.addEventListener("click", function () {
    e1.style.display = "none";
    e2.style.display = "flex";
    twoo.style.display = "flex";
    onee.style.display = "flex";
    m1.style.display = "none";
    m2.style.display = "none";
    n1.style.display = "inline";
    n2.style.display = "inline";
});
e2.addEventListener("click", function () {
    e2.style.display = "none";
    e1.style.display = "flex";
    twoo.style.display = "none";
    onee.style.display = "none";
    n1.style.display = "none";
    n2.style.display = "none";
    m1.style.display = "inline";
    m2.style.display = "inline";
});
m1.addEventListener("click" ,function() {
    n1.style.display = "inline";
    m1.style.display = "none";
    onee.style.display = "flex"
});
n1.addEventListener("click" ,function() {
    n1.style.display = "none";
    m1.style.display = "inline";
    onee.style.display = "none";
    e1.style.display = "flex";
    e2.style.display = "none";
});
m2.addEventListener("click" ,function() {
    n2.style.display = "inline";
    m2.style.display = "none";
    twoo.style.display = "flex"
});
n2.addEventListener("click" ,function() {
    n2.style.display = "none";
    m2.style.display = "inline";
    twoo.style.display = "none";
    e1.style.display = "flex";
    e2.style.display = "none";
});
gg.addEventListener("click", ()=> {
    gg.style.display = "none";
    ggg.style.display = "flex";
});
back.addEventListener("click", ()=> {
    ggg.style.display = "none";
    gg.style.display = "flex";
});
