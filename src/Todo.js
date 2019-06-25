import React, { Component } from 'react';
import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
	render() {
		return this.props.todos.map(todo => (
			<TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
		));
	}
}

Todo.propTypes = {
	todo: PropTypes.array
};

export default Todo;
