// exo 1

/*var exo1 = document.getElementById("avatar");
exo1.addEventListener("click", dessus, false);

function dessus() {
    test = exo1.children;
    test = "clic";
    console.log(test);
}
*/

//exo 2

var exo2 = document.getElementsByClassName("images");
console.log(exo2);
exo2.addEventListener("click", dessus2, false);

function dessus2() {
    console.log(exo2.src)
};