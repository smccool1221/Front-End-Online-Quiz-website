import React from "react"
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary px-5 shadow sticky-top">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<NavLink className="navbar-brand" to={"/"} style={{ color: '#008080', margin: 15 }}>
					Online Quiz App
				</NavLink>
				<ul className="navbar-nav" style={{ listStyleType: 'none', margin: -10 }}>
					<li className="nav-item">
						<NavLink className="nav-link" to={"/admin"} style={{ color: '#00CED1', marginLeft: '950px' }}> {/* Add margin-right */}
							Admin
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={"/quiz-stepper"} style={{ color: '#00CED1', marginLeft: '25px'  }}>
							Take Quiz
						</NavLink>
					</li>
				</ul>

			</div>
		</nav>
	)
}

export default Navbar
