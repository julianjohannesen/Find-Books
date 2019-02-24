import React, { Component } from 'react';
import '../styles/App.css';
import Search from './Search';
import DisplayBooks from './DisplayBooks'

class App extends Component {

	state = {
		query: '',
		response: [],
	}


	handleChange = (e) => {
		this.setState({ query: e.target.value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY&q=${this.state.query}&callback=handleResponse`
		const options = {
			method: 'GET',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Credentials': true,
				'Access-Control-Allow-Methods': 'POST, GET'
			}
		}
		fetch(url, options)
			.then(res => {
				if(res.ok) return res.json()
				throw new Error('Network response was not ok.')
			})
			.then(json => this.setState({response: json.items}))
			.catch(error => console.error('Error:', error))
	}

	render() {
		return (
			<div className="App">
				<Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query} />
				<DisplayBooks books={this.state.response} />
			</div>
		);
	}
}

export default App;
