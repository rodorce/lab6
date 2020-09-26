

$("#addItem").on("click", (event) => {
    event.preventDefault();
    let itemName = $("#itemName").val();
    let listElement = `<div class="item" style="border: 1px solid black; padding:1em 2em 1em 2em; margin-top:5px;"> <h3 class="itemElement">${itemName}</h3> <button type="button" class="checkBtn">Check</button> <button class="deleteBtn">Delete</button> </div>`
    $("#itemList").append(listElement)
})

$(document).ready( () => {
$(document).on("click",".checkBtn", (event) => {
    let parentDiv = $(event.target).parent()
    let itemTitle = parentDiv.find("h3")
    console.log($(itemTitle).css('text-decoration'))
    if($(itemTitle).css('text-decoration') == "none solid rgb(0, 0, 0)"){
        $(itemTitle).css('text-decoration', 'line-through');
    }
    else{
        $(itemTitle).css('text-decoration', "none");
    }
    
})
})

$(document).ready( () => {
    $(document).on("click",".deleteBtn", (event) => {
        let parentDiv = $(event.target).parent()
        parentDiv.remove();
    })
    })