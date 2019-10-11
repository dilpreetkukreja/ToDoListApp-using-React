import React from 'react'

function TodoItem(props){
	let styleCompleted = {
		textDecoration: 'line-through',
		color: '#A9A9A9',
		fontStyle: 'italic'
	}
	return(
			<div className="todo-item" style={props.todo.completed? styleCompleted: null}>
				<input type="checkbox" onChange={()=>props.changeHandler(props.todo.id)} checked={props.todo.completed}/> 
				<div>{props.todo.task}</div>
			</div>
	);
}

export default TodoItem;