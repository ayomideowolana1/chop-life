import createElement from './createElement'

export default function header(){
    const header = createElement("header");
        
    const title = createElement("h1");
        title.innerHTML="Chop Life";
    
    const text = createElement("p");
        text.innerHTML = "Experience homeland delicacies like never before ...";

    header.append(title,text);
        
    return header;
}
