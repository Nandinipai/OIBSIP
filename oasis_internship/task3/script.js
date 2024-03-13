const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list");
const list2 = document.getElementById("list2");
const list3 = document.getElementById("list3");

function addTask() {
    if (inputBox.value == '') {
        alert("You must enter a task!");
    } else {
        
        let li = document.createElement("li");

        
        let taskText = document.createElement("div");
        taskText.innerHTML = inputBox.value;
        taskText.classList.add("task-text"); 
        li.appendChild(taskText);

        
        let editIcon = document.createElement("span");
        editIcon.innerHTML = "&#9998;"; 
        editIcon.classList.add("edit-icon"); 
        li.appendChild(editIcon);

        
        listCont.appendChild(li);

        
        let liPending = li.cloneNode(true);
        list3.appendChild(liPending);

        
        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            if (li.classList.contains("checked")) {
                list2.appendChild(li);
                list3.removeChild(liPending);
            } else {
                list3.appendChild(liPending);
                list2.removeChild(li);
            }
            saveData(); 
        });

        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

       
        span.addEventListener("click", function (e) {
            e.stopPropagation(); 
            li.remove();
            liPending.remove();
            saveData(); 
        });

        
        let spanPending = document.createElement("span");
        spanPending.innerHTML = "\u00d7";
        liPending.appendChild(spanPending);

        
        spanPending.addEventListener("click", function (e) {
            e.stopPropagation(); 
            liPending.remove();
            saveData(); 
        });

        
        taskText.addEventListener("dblclick", function () {
            let updatedTask = prompt("Edit the task:", taskText.innerText);
            if (updatedTask !== null) {
                taskText.innerHTML = updatedTask;
                liPending.querySelector('.task-text').textContent = updatedTask;
                saveData();
            }
        });

        
        editIcon.addEventListener("click", function (e) {
            e.stopPropagation(); 
            let updatedTask = prompt("Edit the task:", taskText.innerText);
            if (updatedTask !== null) {
                taskText.innerHTML = updatedTask;
                liPending.querySelector('.task-text').textContent = updatedTask;
                saveData();
            }
        });
    }
    inputBox.value = "";
    saveData();
}

