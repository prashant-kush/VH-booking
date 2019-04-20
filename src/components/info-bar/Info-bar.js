import React from "react";
import "./info-bar.css";
import weather from "./rainy-day.svg";
import location from "./location.svg";
import phone from "./phone.svg";
class InfoBar extends React.Component
{
	render()
	{
		const {temp}=this.props;
		return(
			<div className="Infobar">
				<ul className="Infobar-left">
					<li id="weather"><img src={weather}  width="25px" height="25px"/><span>{temp}C</span></li>
					<li id="location"><img src={location}  width="20px" height="20px"/><span>ABV-IIITM, Morena Link Road, Gwalior</span></li>
					<li id="phone"><img src={phone}  width="20px" height="20px"/><a href="tel:+9999999999">9999999999</a></li>
				</ul>
				<ul className="Infobar-right">
					<li id="login">Login</li>
					<li id="register">Register</li>
				</ul>
			</div>
			);
	}
}
export default InfoBar;