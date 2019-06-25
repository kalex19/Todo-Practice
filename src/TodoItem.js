import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			background: 'pink',
			border: '3px white dotted',
			margin: '5px 25%',
			width: '50%',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<h3>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
					{title}
				</h3>
				<button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
					X
				</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object
};

const btnStyle = {
	background: '#fff',
	color: 'lightblue',
	borderRadius: '50%'
};

export default TodoItem;
