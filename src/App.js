import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Header from './layout/Header';
import AddTodo from './AddTodo';
import About from './pages/About';
import { BrowserRouter as Router, Route } from 'react-router';

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: 'Take out trash',
				completed: false
			},
			{
				id: 2,
				title: 'Make bed',
				completed: false
			},
			{
				id: 3,
				title: 'Grocery shop',
				completed: false
			}
		]
	};

	markComplete = id => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	deleteTodo = id => {
		this.setState({
			todos: [ ...this.state.todos.filter(todo => todo.id !== id) ]
		});
	};

	addTodo = title => {
		const newTodo = {
			id: 4,
			title: title,
			completed: false
		};
		this.setState({
			todos: [ ...this.state.todos, newTodo ]
		});
	};

	render() {
		return (
			<div className="App">
				<Header />
				<Route
					exact
					path="/"
					render={props => (
						<React.Fragment>
							<AddTodo addTodo={this.addTodo} />
							<Todo todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
						</React.Fragment>
					)}
				/>
				<Route path="/about" Component={About} />
			</div>
		);
	}
}

export default App;
