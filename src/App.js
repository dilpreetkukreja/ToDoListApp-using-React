import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import Header from './components/Header';
import todosList from './components/todosList';

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			todos : todosList
		}
	}
	changeHandler(id){
		
		this.setState((prevState => {
			let updatedToDos = prevState.todos.map(todo => {
				if(todo.id === id){
					console.log(todo.id);
					//never change the original state, always return new object
					return { 
						...todo,
						completed : !todo.completed
					}
				}		
				return todo
			})
			console.log(this.state.todos);
			console.log(updatedToDos);
			return {todos: updatedToDos};
		}))
	}
	render(){
		let ToDoListComponents = this.state.todos.map(todo => 
			<TodoItem 
				changeHandler = {this.changeHandler.bind(this)}
				key = {todo.id} 
				todo = {todo}
			/>
		);
		return (
			<div className="App">
				<Header />
				<div className="todo-list">
					{ToDoListComponents}
				</div>
			</div>
		);

  }
  
}

export default App;
