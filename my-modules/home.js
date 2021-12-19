import createElement from './createElement'
import '../src/home.css'

const content =  [
    {
        title: "All You Can Eat Buffet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis. Sed sed purus ac lectus lobortis lacinia et ut libero. Aliquam sed nisl sem. Etiam ac urna ut purus imperdiet facilisis. In nec mauris turpis. Integer in commodo lacus.",
        img: '../src/assets/background.jpg'
    },
    {
        title: "All You Can Eat Buffet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis. Sed sed purus ac lectus lobortis lacinia et ut libero. Aliquam sed nisl sem. Etiam ac urna ut purus imperdiet facilisis. In nec mauris turpis. Integer in commodo lacus.",
        img: '../src/assets/background.jpg'
    },
    {
        title: "All You Can Eat Buffet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis. Sed sed purus ac lectus lobortis lacinia et ut libero. Aliquam sed nisl sem. Etiam ac urna ut purus imperdiet facilisis. In nec mauris turpis. Integer in commodo lacus.",
        img: '../src/assets/background.jpg'
    },
    {
        title: "All You Can Eat Buffet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis. Sed sed purus ac lectus lobortis lacinia et ut libero. Aliquam sed nisl sem. Etiam ac urna ut purus imperdiet facilisis. In nec mauris turpis. Integer in commodo lacus.",
        img: '../src/assets/background.jpg'
    },
    {
        title: "All You Can Eat Buffet",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa arcu, porta ac eros ac, imperdiet dapibus mauris. Cras tempor, lacus quis lacinia placerat, dui enim malesuada magna, quis bibendum leo arcu non felis. Sed sed purus ac lectus lobortis lacinia et ut libero. Aliquam sed nisl sem. Etiam ac urna ut purus imperdiet facilisis. In nec mauris turpis. Integer in commodo lacus.",
        img: '../src/assets/background.jpg'
    },
]

export default function home(){
    const container = createElement("div");
        container.id="home"
    for(let i=0; i<content.length; i++){
        let post = createElement("div"); 
        post.classList.add('post');
        let title = createElement("h2"); 
        let text = createElement("p"); 
        let image = createElement("img"); 

        title.innerHTML = content[i].title;
        text.innerHTML = content[i].text;
        image.src = content[i].img;
        post.append(title,text,image)
        container.append(post)
    }
    
    return container;
}