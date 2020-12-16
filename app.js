function newItem() {
    console.log("Inside newItem");
    // Store todo input into variable
    var item = document.getElementById("todoInput").value;
    console.log(item);

    // Store unordered list id in ul variable
    var ul = document.getElementById("todoList");

    // Create list element and store it in li var
    var li = document.createElement("li");

    // Append var input to li
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li); 

    document.getElementById("todoInput").value = "";

    li.onclick = removeItem;
}

function removeItem(e) {
    e.target.remove()
}

document.body.onkeyup = function(e) {
    console.log(e.keyCode);
    if(e.keyCode == 13){
        console.log("enter clicked!");
        newItem();
    }
    
};