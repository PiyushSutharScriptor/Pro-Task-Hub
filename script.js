const inputBox = document.getElementById("inputbox")  //inputbox
const listContainer = document.getElementById("listsContainer")  //ul

function addtask() {
    if (inputBox.value === "") {
        alert("You Must Enter Something..")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li) 

        let span = document.createElement("span") //to remove list
        span.innerHTML = "\u00d7"
        li.appendChild(span)  //added to list
    }
    inputBox.value=""
    savedata()   
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savedata()
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        savedata()
    }
},false)

let savedata =()=>{
    localStorage.setItem("data",listContainer.innerHTML)
}

let showdata =()=>{
    listContainer.innerHTML = localStorage.getItem("data")
}

showdata();


