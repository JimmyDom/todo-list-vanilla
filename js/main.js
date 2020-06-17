document.addEventListener("DOMContentLoaded", () => {
    let itemList = document.querySelector(".todo-list");
    let button = document.querySelector("button");
    let input = document.querySelector("input");
    let item;

    button.addEventListener("click", () => {
        if(input.value === "") {
            alert("Поле не должно быть пустым");
        } else {
            let li = document.createElement("li");
            li.innerHTML = input.value;
            itemList.append(li);
            input.value = "";
        }
    })

    itemList.addEventListener("click", (el) => {
        item = el.target
        if (item !== itemList) {
            item.classList.toggle("done")
        }
   })
});