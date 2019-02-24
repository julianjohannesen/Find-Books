import React, { Component } from 'react'
import axios from 'axios'
import '../styles/App.css'
import Search from './Search'
import DisplayBooks from './DisplayBooks'

class App extends Component {

	state = {
		query: '',
		books: [],
	}


	handleChange = (e) => {
		this.setState({ query: e.target.value })
	}

	handleSubmit = (e) => {

		e.preventDefault()

		const url = `https://www.googleapis.com/books/v1/volumes?key=AIzaSyCP4wm4HGR-D-IHRvlnlXGBGGSsjhaR9CY&q=${this.state.query}`
		
		axios(url)
			.then(res=>this.setState({books: res.data.items}))
			.catch(error => console.error('Error:', error))
	}

	render() {
		return (
			<div className="App">
				<Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} query={this.state.query} />
				<DisplayBooks books={this.state.books} />
			</div>
		);
	}
}

export default App;
