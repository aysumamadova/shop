let buttonsebet = document.querySelectorAll(".btnsebet");
let fruitbox = document.querySelector(".fruit-box");
let basketbox = document.querySelector(".basket-box");
let totalPRICE = document.querySelector(".totalPrice");
let fruitname = document.querySelector(".fruit-name");

buttonsebet.forEach(x => {
    x.addEventListener("click", function() {
        if (x.getAttribute("data-target") == "sebet") {
            fruitbox.classList.remove("hide");
        } else if (x.getAttribute("data-target") == "hesabla") {
            totalPRICE.classList.remove("hide");
        }
    })
})

let fruitType = null;
let totalPrice = 0.00;

let ci1 = document.querySelector(".ci1");
let ci2 = document.querySelector(".ci2");
let ci3 = document.querySelector(".ci3");
let ke1 = document.querySelector(".ke1");
let ke2 = document.querySelector(".ke2");
let ke3 = document.querySelector(".ke3");
let an1 = document.querySelector(".an1");
let an2 = document.querySelector(".an2");
let an3 = document.querySelector(".an3");
let dragItem;
ci1.ondragstart = function() {
    dragItem = this;
}
ci2.ondragstart = function() {
    dragItem = this;
}
ci3.ondragstart = function() {
    dragItem = this;
}
ke1.ondragstart = function() {
    dragItem = this;
}
ke2.ondragstart = function() {
    dragItem = this;
}
ke3.ondragstart = function() {
    dragItem = this;
}
an1.ondragstart = function() {
    dragItem = this;
}
an2.ondragstart = function() {
    dragItem = this;
}
an3.ondragstart = function() {
    dragItem = this;
}

basketbox.ondragover = function(e) {
    e.preventDefault();
}

basketbox.ondrop = function() {
    if (fruitType == dragItem.getAttribute("data-id") || !fruitType) {
        totalPRICE.classList.add("hide")
        basketbox.appendChild(dragItem);
        fruitType = dragItem.getAttribute("data-id");
        totalPrice += Number(dragItem.children[2].children[0].textContent.split(":")[1])
        totalPRICE.textContent = " Ümumi məbləğ: " + totalPrice + " "
        fruitname.textContent = fruitType

    }
}