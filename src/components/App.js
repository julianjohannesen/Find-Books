import React, { Component } from 'react'
import axios from 'axios'
import '../styles/App.scss'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import DisplayBooks from './DisplayBooks'

class App extends Component {

	state = {
		query: '',
		books: [],
		isValid: true,
	}


	handleChange = (e) => {
		this.setState({ query: e.target.value.trim() })
	}

	handleBlur = (e) => {
		if(e.target.value.trim().length < 1) {
			this.setState({isValid: false})
		} 
	}

	handleFocus = (e) => {
		this.setState({isValid: true})
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
				<Header />
				<Search 
					handleBlur={this.handleBlur} 
					handleChange={this.handleChange} 
					handleFocus={this.handleFocus}
					handleSubmit={this.handleSubmit} 
					isValid={this.state.isValid}
					query={this.state.query} 
				/>
				<DisplayBooks books={this.state.books} />
				<Footer />
			</div>
		);
	}
}

export default App;
