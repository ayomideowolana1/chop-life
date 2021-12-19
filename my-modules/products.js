import createElement from './createElement'
import '../src/products.css'

const productList =[
    {
        title:"Specials",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis.",
    },
    {
        title:"Bookings",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis.",
    },
    {
        title:"5 Star Servings",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis.",
    },
    {
        title:"Buffets",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis.",
    },
]

export default function products(){
    const container = createElement("div");
    const header = createElement("h1");
    header.innerHTML = "Our Products";
    container.append(header)

    for (let i=0; i<productList.length; i++){
        let item = createElement("div")
        let title = createElement("h2");
        let text = createElement("p");

        title.innerHTML = productList[i].title
        text.innerHTML = productList[i].text

        item.append(title,text);
        container.append(item)
    }

    return container;
}