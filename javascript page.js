const button = document.getElementById("button");
const page1 = document.getElementById("page1")
// page1.style.backgroundColor = "#ff0000"

button.addEventListener("click", () => {
    page1.classList.toggle("page1");
});


// console.log("This javascript is working")

function onloadStyle() { //applies a style to the website when first loading in.

    //changes the style of the buttons
    const style_list = document.getElementById("style_list").children;//returns an array of children elements from the parent element "style_list"
    for(i=0;i<style_list.length;i++){ //loops through the children of id style list and adds a style 
        style_list[i].classList.add("style_1");//adds the default style which is style 1
    }
}

function Change_style(parent_element, style){
    parent_element.classList.add(style)
}

// console.log(document.getElementsByName(document.getElementById("style_list")));