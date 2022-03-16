let inputTodo = document.querySelector('input');
let todolist=document.querySelector('.todos');
let clickButton = document.querySelector('button') ;
let count = 0;

function AddTodo(){
    let todolist=document.querySelector('.todos');
    let Todo = inputTodo.value;
    if (Todo.length === 0){
        return ;
    }else{
        let item = document.createElement('p');
        item.innerHTML=Todo;
        item.setAttribute("key",count);
        todolist.append(item);
        count+=1;
        item.addEventListener("click",function(){
            todolist.removeChild(item);
    })

    }
    Todo =""
}
clickButton.addEventListener("click", AddTodo)

