import { Todo } from "./todo.class";
import { divTodoList } from "../js/componentes";

export class TodoList {

    constructor( ) {
        this.cargarLocalStorage();

        
    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        
        for( let todo of this.todos ) {
            
            if( todo.id == id ) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
        
    }

    eliminarCompletados() {

        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage() { 

        this.todos = ( localStorage.getItem('todo') ) 
                    ? JSON.parse( localStorage.getItem('todo') ) 
                    : [] ;
        // Se cumple la misma condición de un solo argumento así que se puede obviar el mismo.
        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        this.todos = this.todos.map( Todo.fromJson );
        
    }

    contarPendientes() {
        let numero = divTodoList.getElementsByClassName('completed').length;
        
        let pendientes = this.todos.length - numero
        return pendientes;
    }

}



