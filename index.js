//when the page loads, load from localstorage
const todoList=JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'study',
  dueDate: '22-07-2023'
},{
  name: 'make dinner',
  dueDate: '22-07-2023'
}];

renderTodoList();

function renderTodoList(){
   let todoListHTML= '';

   todoList.forEach((todoObject, index)=>{   
        const {name, dueDate}= todoObject;
        const html= `
          <div>${name}</div> 
          <div>${dueDate}</div> 
          <button class="delete-button js-delete-button" 
          // Whenever we update the todo list, save in localStorage.
          saveToStorage();
          " >Delete</button>
        `;
        todoListHTML += html;   
    })
   /*
   for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      // const name= todoObject.name;
      // const dueDate= todoObject.dueDate;

      const {name, dueDate}= todoObject;

      const html= `
         <div>${name}</div> 
         <div>${dueDate}</div> 
         <button class="delete-button" onclick="
         todoList.splice(${i},1);
         renderTodoList();
         // Whenever we update the todo list, save in localStorage.
         saveToStorage();
         " class="delete-todo-button">Delete</button>
      `;
      todoListHTML += html;   
   }
  */
   // console.log(todoListHTML);
   document.querySelector('.js-todo-list')
       .innerHTML= todoListHTML;
  
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index)=>{
      deleteButton.addEventListener('click', ()=>{
        todoList.splice(index,1);
          renderTodoList();
      })
    })
}

document.querySelector(".js-add-button").addEventListener('click', ()=>{
  addTodo();
});

function addTodo(){
  const inputElement= document.querySelector('.js-name-input');
  const name=inputElement.value;

  const dateInputElement= document.querySelector('.js-dateInput');
  const dueDate=dateInputElement.value;

  todoList.push({
   name,
   dueDate
  });
//   console.log(todoList);
  inputElement.value= '';

  renderTodoList();
 
  // Whenever we update the todo list, save in localStorage.
 saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

