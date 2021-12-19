import createElement from './createElement';

const navCont = createElement('nav');
const navBar = createElement('ul');
const navArr = ["Home","Products","Contact"];

export default function nav(){  
   for(let i=0; i<navArr.length;i++){
       let linkCont = createElement('li');
       let link = createElement('a');
       link.innerHTML = navArr[i];
       link.id = navArr[i];
       link.href = "#"
       linkCont.append(link);
       navBar.append(linkCont)
   }
   navCont.append(navBar)
   return navCont
}


