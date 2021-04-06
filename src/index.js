import './styles.css';

import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

const countPendientes = document.querySelector('strong');

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml( todo ) );
// o también está esta otra forma con el forEach (si es solo un argumento)
// todoList.todos.forEach( crearTodoHtml );


export const contar = () => {
    
    countPendientes.innerText = `${ todoList.contarPendientes() }`;

}

contar();
