const containerElement = document.querySelector('.container');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const list = document.querySelector('.list');

let itemName;
let editFlag = false;

btn.addEventListener('click', function(){

    if(text.value && !editFlag){
         const element = document.createElement('article');
        element.classList.add('list')
        element.setAttribute('data-id', '300');
        element.innerHTML = `<p class="itemName">${text.value}</p>
    <span>
    <i class="fa-solid fa-pencil edit"></i>
     </span>

     <span>
         <i class="fa-solid fa-trash-can btn"></i>
     </span>  
        
        `

        containerElement.appendChild(element);
        const deleBtn = element.querySelector('.btn');
        const editBtn = element.querySelector('.edit');
        text.value = '';

        deleBtn.addEventListener('click', function (e) {
            containerElement.removeChild(e.currentTarget.parentElement.parentElement);
            console.log(e.currentTarget.parentElement.parentElement);
        });

        editBtn.addEventListener('click', function (e) {
            itemName = e.currentTarget.parentElement.previousElementSibling;
            text.value = itemName.innerHTML;
            btn.innerHTML = `<i class="fa-solid fa-pencil edit"></i>`;
            editFlag = true;
        })
        
    }
    else if(text.value && editFlag){

      itemName.innerHTML= text.value;
       text.value = '';
       editFlag = false;
       btn.innerHTML = `<i class="fa-solid fa-plus"></i>`
    }
    else{
        console.log('please enter value');
    }
   
})

function setToDefault(){
    text.value = '';
}
