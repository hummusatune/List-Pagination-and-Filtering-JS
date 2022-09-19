/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
let listItems = document.querySelectorAll('.student-item');
let totalItems = listItems.length;

listItems.item(1).style.display = 'none';

function showPage (itemsPerPage, currentPage) {
   
}

for(let i=10; i < totalItems; i++) {
   listItems[i].style.display = 'none';
}


let pageButtonsUL = document.createElement('ul');
pageButtonsUL.className = 'pagination';
document.querySelector('.page').appendChild(pageButtonsUL);

let pageButton = document.createElement('li');
pageButton.textContent = '5';
pageButtonsUL.appendChild(pageButton);

let buttonLink = document.createElement('a');
buttonLink.href = 'https://google.com';
pageButton.append(buttonLink);

function appendPageLinks(html) {
   const template = document.createElement('template');
   template.innerHTML = html.trim();
   return template.content.firstElementChild;
}

let buttonsAppear = appendPageLinks(`
   <ul class="pagination">
      <li><a href="#" class="active">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
      <li><a href="#">5</a></li>
   </ul>
`);

document.querySelector('.page').appendChild(buttonsAppear);

/* const headerToggle = document.getElementsByTagName('h2')[0];
headerToggle.addEventListener('click', () => {
   headerToggle.style.border = 'solid 2px red';
}); */

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.