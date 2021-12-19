import createElement from '../my-modules/createElement';
import './styles.css';
import header from '../my-modules/header';
import nav from '../my-modules/nav';
import home from '../my-modules/home';
import products from '../my-modules/products';
import contact from '../my-modules/contact';

const body = document.querySelector("body");
const main = createElement('main');
body.append(header(),nav(),main);




function renderBody(content){
    main.innerHTML ="";
    switch(content){
        case "Home":
            main.append(home());
            body.append(main)
            break;
        case "Products":
            main.append(products());
            body.append(main)
            break;
        case "Contact":
            main.append(contact());
            break;       
    }
}

renderBody("Home");


const links = Array.from(document.querySelectorAll("a"));
links.forEach(link => {
    link.addEventListener('click',(e)=>{
        removeActiveClass()
        e.target.classList.add("active")
        renderBody(e.target.innerHTML)
    })
})


function removeActiveClass(){
    links.forEach(link=>{
        link.classList.remove("active")
    })
}