import createElement from './createElement'

const content =  [
    {
        title:"Adress",
        text:"Block 5B Devon county, Trenchtown, Jamaica"
    },
    {
        title:"Email",
        text:"choplife@freemail.com, choplife.info@freemail.com"
    },
    {
        title:"Phone",
        text:"+234-803-234-3342, +234-800-134-2345"
    },
]

export default function contact(){
    const container = createElement("div");
    const header = createElement("h1");
    header.innerHTML = "Contact us"
    
    container.append(header);

    for(let i=0; i<content.length; i++){
        let item = createElement("div");
        let title = createElement("h2");
        let text  = createElement("p");
        title.innerHTML = content[i].title;
        text.innerHTML = content[i].text;

        item.append(title,text);
        container.append(item)


    }
    
    return container;
}