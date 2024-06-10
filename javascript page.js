const button = document.getElementById("Style_1");
const button2 = document.getElementById("Style_2");
const button3 = document.getElementById("Style_3");
const pages = document.getElementById("pages");
// const page1 = document.getElementById("page1")
// // page1.style.backgroundColor = "#ff0000"

button.addEventListener("click", () => {
    document.head.querySelector("link").remove();
    // console.log(document.head.replaceChild("link"));

});
button2.addEventListener("click", () => {
    
    document.head.appendChild("link")

});
button3.addEventListener("click", () => {
    const head_link = document.head.querySelector("link")
    const node = document.createElement()

});

function changeStyle(){
    const headChildren = document.getElementsById("style").children;
    console.log("style")
}

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
//changes the page
console.log(pages)
pages.addEventListener("click", () => {
    for(i=0;i<pages.children.length;i++){
        pages.children[i].classList = ""
        console.log(pages.children[i].classList); 
    }
    
    console.log(event.target.classList.add("active"));
    console.log(pages.children.length);
   
    // console.log(document.head.replaceChild("link"));

});