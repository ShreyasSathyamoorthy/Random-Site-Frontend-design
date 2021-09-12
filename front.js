const won = document.querySelector(".won");
const two = document.querySelector(".two");
const tree = document.querySelector(".tree");
const wonn = document.querySelector(".wonn");
const tooo = document.querySelector(".tooo");
const treee = document.querySelector(".treee");
wonn.addEventListener("click", ()=> {
    won.style.display ="flex";
    two.style.display ="none";
    tree.style.display ="none";
    wonn.style.filter = "invert(1)"
    tooo.style.filter = "invert(0)"
    treee.style.filter = "invert(0)"
});
tooo.addEventListener("click", ()=> {
    won.style.display ="none";
    two.style.display ="flex";
    tree.style.display ="none";
    tooo.style.filter = "invert(1)"
    wonn.style.filter = "invert(0)"
    treee.style.filter = "invert(0)"
});
treee.addEventListener("click", ()=> {
    won.style.display ="none";
    two.style.display ="none";
    tree.style.display ="flex";
    wonn.style.filter = "invert(0)"
    tooo.style.filter = "invert(0)"
    treee.style.filter = "invert(1)"
});