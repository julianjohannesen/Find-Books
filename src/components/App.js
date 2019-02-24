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
		// const init = {
		// 	method: 'GET',
		// 	headers: {
		// 		'Access-Control-Allow-Origin': '*',
		// 		'Access-Control-Allow-Credentials': true,
		// 		'Access-Control-Allow-Methods': 'POST, GET'
		// 	}
		// }
		fetch(url)
			.then(res=>this.handleResponse(res))
			.catch(error => console.error('Error:', error))
	}

	handleResponse = (res) => {
		if(res.ok) {
			res.json()
			.then(json => this.setState({ response: json.items }))
		} else {
			throw new Error("Response was not OK")
		}	
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
