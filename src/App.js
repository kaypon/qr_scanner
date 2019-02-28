import React, { Component } from "react";
import QrReader from "react-qr-reader";
import {
	Box,
	Button,
	Collapsible,
	Heading,
	Grommet,
	ResponsiveContext
} from "grommet";
import { UserExpert, UserNew } from "grommet-icons";

const AppBar = props => (
	<Box
		tag="header"
		direction="row"
		align="center"
		justify="between"
		background="brand"
		pad={{ left: "medium", right: "small", vertical: "small" }}
		elevation="medium"
		style={{ zIndex: "1" }}
		{...props}
	/>
);

class App extends Component {
	state = {
		showSidebar: false,
		dataObject: "null"
	};

	handleScan = data => {
		if (data) {
			let dataObject = JSON.parse(data);
			this.setState({ dataObject, showSidebar: true });
		}
		console.log("state", this.state);
	};

	handleError = err => {
		console.log("there was an error", err);
	};

	render() {
		const { showSidebar } = this.state;
		const theme = {
			global: {
				colors: {
					brand: "#228BE6"
				},
				font: {
					family: "Roboto",
					size: "14px",
					height: "20px"
				}
			}
		};

		var fullName = `${this.state.dataObject.first_name} ${
			this.state.dataObject.last_name
		}`;
		var headerText =
			this.state.dataObject !== "null"
				? `User Scanned: ${fullName}`
				: "Scan a Guests QR";

				console.log(this.state.dataObject.twitter_photo)

		return (
			<Grommet theme={theme} full>
				<ResponsiveContext.Consumer>
					{size => (
						<Box fill>
							<AppBar>
								<Heading level="3" margin="none">
									{headerText}
								</Heading>
								<Button
									icon={
										this.state.dataObject !== "null" ? (
											<UserExpert />
										) : (
											<UserNew />
										)
									}
									onClick={() =>
										this.setState(prevState => ({
											showSidebar: !prevState.showSidebar
										}))
									}
								/>
							</AppBar>
							<Box direction="row" flex overflow={{ horizontal: "hidden" }}>
								<Box flex align="center" justify="center">
									<QrReader
										delay={1000}
										onError={this.handleError}
										onScan={this.handleScan}
										style={{ width: "20%" }}
										showViewFinder={false}
									/>
								</Box>
								{size !== "small" && (
									<Collapsible direction="horizontal" open={showSidebar}>
										<Box
											flex
											width="medium"
											background="light-2"
											elevation="small"
											align="center"
											justify="center"
										>
											<div>
												{/* <img src={this.state.dataObject.twitter_photo} alt="alttaghere"></img> */}
												<p>Guest ID: {this.state.dataObject.id}</p>
												<p>{fullName}</p>
												<li>
													<a href={this.state.dataObject.twitter}>Twitter</a>
												</li>
												<li>
													<a href={this.state.dataObject.instagram}>
														Instagram
													</a>
												</li>
												<li>
													<a href={this.state.dataObject.github}>Github</a>
												</li>
											</div>
										</Box>
									</Collapsible>
								)}
							</Box>
						</Box>
					)}
				</ResponsiveContext.Consumer>
			</Grommet>
		);
	}
}

export default App;
