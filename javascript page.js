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


var page_locations = {//creates objects where key is page id and value is a function to navigate to page
    "home-page": function() {window.location.href="#body"},
    "page1": function() {window.location.href="#style_list";},
    "page2": function() {window.location.href="#container"},
    "page3": function() {window.location.href="#style_list"},
    "page4": function() {window.location.href="#style_list"}
}

function remove_styles(){
    for(i=0;i<pages.children.length;i++){//loops through pages
                pages.children[i].classList = "";//removes styles from all children in pages 
            }
    document.getElementById("home-page").classList="";
}

document.addEventListener("click", () => {
    // alert(`${event.target.id}`)
    page_locations[event.target.id]();
    console.log(page_locations[0]())
})

document.addEventListener("scroll", () => {
    remove_styles();
    // console.log("scrolling");
    console.log(window.visualViewport.pageTop)
    if (window.visualViewport.pageTop < 420){
        document.getElementById("home-page").classList.add("active");
    } else if(window.visualViewport.pageTop > 420 && window.visualViewport.pageTop < 850){
        pages.children["page1"].classList.add("active");
    } else if (window.visualViewport.pageTop >850){
        pages.children["page2"].classList.add("active");
    }
    // document.getElementById("home-page").classList.add("");
    console.log(document.getElementById("home-page"))
})