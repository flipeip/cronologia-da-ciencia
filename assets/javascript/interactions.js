let items = document.getElementsByClassName("event");

function itemClick(id) {
    for (let i = 0; i < items.length; i++) {
        if(items[i].id == id ) document.getElementById(id).classList.toggle("active");
        else items[i].classList.remove("active");
    }
}