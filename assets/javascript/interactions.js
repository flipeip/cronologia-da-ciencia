let items = document.querySelectorAll(".event");

function itemClick(id) {
    let selectedEvent = document.querySelector("#" + id);
    let selectedEventContent = selectedEvent.querySelector(".content");
    for (let i = 0; i < items.length; i++) {
        if(items[i].id == id) {
            selectedEvent.classList.toggle("active");
            if (selectedEvent.classList.contains("active")){
                selectedEventContent.style.maxHeight = selectedEventContent.scrollHeight + "px";
                setTimeout(() => {  selectedEvent.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 500);
            }
            else {
                selectedEventContent.style.maxHeight = "0px";
            }
        }
        else {
            let content = items[i].querySelector(".content");
            items[i].classList.remove("active");
            content.style.maxHeight = "0px";
        }
    }
}