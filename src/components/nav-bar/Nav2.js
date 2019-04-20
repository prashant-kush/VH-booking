import React from "react";
import "./nav2.css";

// import cross from "./cross.svg";
class Nav2 extends React.Component
{
	onClickOpen=()=>
	{
		
		
		const navBar = document.querySelector('.nav');

		
		  navBar.classList.add('nav--is-visible');
		

		
	}
	onClickClose=()=>
	{
		
		const navBar = document.querySelector('.nav');
		
		  navBar.classList.remove('nav--is-visible');
		
	}

	render()
	{

		return(
			<div>
				<header className="navbar">
				  <ul className="navbar__list">
				    <li className="navbar__item">
				      <button class="js-open-nav navbar__btn nav-buttons" onClick={this.onClickOpen}>
				        <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path id="burger" d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>

				      </button>
				    </li>
				  </ul>
				</header>

				<nav class="nav">
				  <ul class="nav__list">
				    <button class="js-close-nav nav__btn nav-buttons" onClick={this.onClickClose}>
				    <svg height="32px" id="Layer_1"  version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path id="cross" d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>
				    </button>
				    <li class="nav__item">
				      <a href="#" class="nav__link">Home</a>
				    </li>
				    <li class="nav__item">
				      <a href="#" class="nav__link">Book Room</a>
				    </li>
				    <li class="nav__item">
				      <a href="#" class="nav__link">Events</a>
				    </li>
				    <li class="nav__item">
				      <a href="#" class="nav__link">FAQ</a>
				    </li>
				    <li class="nav__item">
				      <a href="#" class="nav__link">About</a>
				    </li>
				    <li class="nav__item">
				      <a href="#" class="nav__link">Contact</a>
				    </li>
				  </ul>
				    <ul class="navbar__list">
				    <li class="navbar__item navbar__item--social">
				      
				      <a href="https://www.instagram.com/infotsav19/" class="navbar__link">
					  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30"><path fill="#F7293E" id="instagram" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
					</a>
				      
				    </li>
				    <li class="navbar__item navbar__item--social">
				      
				      <a href="https://www.twitter.com/infotsav" class="navbar__link">
					 <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 30 30"><path fill="#1DA1F2" id="twitter" d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
					 </a>
				      
				    </li>
				    <li class="navbar__item navbar__item--social">
				      
				      <a href="https://www.facebook.com/Infotsav/" class="navbar__link">
					  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30"><path id="facebook" fill="#3B579D" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
					</a>
				      
				    </li>
				  </ul>
				</nav>
			</div>	
			);


	}
}
export default Nav2;