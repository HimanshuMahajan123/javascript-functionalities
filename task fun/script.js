document.getElementById("changeTextButton").
addEventListener('click' , function(){
    let paragragh = document.getElementById("myParagraph");
    paragragh.textContent = "THE PARAGRAPH IS CHANGED!"
})


document.getElementById("highlightFirstCity").
addEventListener('click' , function(){
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight");
})

document.getElementById("changeOrder").
addEventListener('click' , function(){
    let order = document.getElementById("coffeeType");
    order.textContent = "Espresso"
})

document.getElementById("addNewItem").addEventListener('click' , function(){
    let newItem = document.createElement("li");
    newItem.textContent = "eggs";

    document.getElementById("shoppingList").appendChild(newItem)
})

document.getElementById("removeLastTask").addEventListener('click' , function(){
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove();
})

document.getElementById("teaList").addEventListener('click' , function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert(event.target.textContent);
    }
    
})


document.getElementById("feedbackForm").addEventListener('submit', function(event){
    event.preventDefault();

    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent = feedback;
})

document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("domStatus").textContent = "DOM loaded successfully!"
})

document.getElementById("toggleHighlight").addEventListener('click' , function(){
    let descriptionText = document.getElementById("descriptionText")
    descriptionText.classList.toggle("highlight")
})