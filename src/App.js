import React, { Component } from "react";
import logo from "./logo.svg";
import QrReader from "react-qr-reader";
import "./App.css";

class App extends Component {
	state = {
		// result: "No Result"
		dataObject: "null"
	};

	handleScan = data => {
		console.log(JSON.parse(data))
		if (data) {
			let dataObject = JSON.parse(data)
			this.setState({ dataObject });
		}
		console.log('state', this.state)
	};

	handleError = err => {
		console.log("there was an error", err);
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<p>
						QR SCANNER
					</p>
					<QrReader
						delay={1000}
						onError={this.handleError}
						onScan={this.handleScan}
						style={{ width: "40%" }}
					/>
					{/* <p>{this.state.result}</p> */}
					<p>ID: {this.state.dataObject.id}</p>
					<p>First Name: {this.state.dataObject.first_name}</p>
					<p>Last Name: {this.state.dataObject.last_name}</p>
					<a href={this.state.dataObject.twitter}>Twitter</a>
					<a href={this.state.dataObject.instagram}>Instagram</a>
					<a href={this.state.dataObject.github}>Github</a>
				</header>
				
			</div>
		);
	}
}

export default App;
