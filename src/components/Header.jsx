import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <header className="header-three">
				<div className="header-fixed-three header-fixed">
					<nav className="navbar navbar-expand-lg header-nav-three scroll-sticky">
						<div className="container">
							<div className="navbar-header">
								<Link id="mobile_btn" to="javascript:void(0);">
									<span className="bar-icon">
										<span></span>
										<span></span>
										<span></span>
									</span>
								</Link>
								<Link to="/" className="navbar-brand logo">
									<img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo"/>
								</Link>
							</div>
							<div className="main-menu-wrapper">
								<div className="menu-header">
									<Link to="/" className="menu-logo">
										<img src="assets/img/logo/logo.svg" className="img-fluid" alt="Logo"/>
									</Link>
									<Link id="menu_close" className="menu-close" to="javascript:void(0);">
										<i className="fas fa-times"></i>
									</Link>
								</div>
								<ul className="main-nav">
									<li className="has-submenu active">
										<Link to="/">Home</Link>
									</li>
									<li className="has-submenu">
										<Link to="/about">About</Link>
									</li>
									<li className="has-submenu">
										<Link to="#">Instructor <i className="fas fa-chevron-down"></i></Link>
										<ul className="submenu">
											<li className="has-submenu">
												<Link to="instructor-list.html">Instructor</Link>
												<ul className="submenu">
													<li><Link to="instructor-list.html">List</Link></li>
													<li><Link to="instructor-grid.html">Grid</Link></li>
												</ul>
											</li>
											<li><Link to="instructor-dashboard.html">Dashboard</Link></li>
											<li><Link to="instructor-profile.html">My Profile</Link></li>
											<li><Link to="instructor-course.html">My Course</Link></li>
											
										</ul>
									</li>	
									<li className="has-submenu">
										<Link to="/blog">Blog</Link>
									</li>
									
									<li className="has-submenu">
										<Link to="/contact">Contact</Link>
									</li>
									<li className="login-link">
										<Link to="login.html">Login / Signup</Link>
									</li>
								</ul>		 
							</div>		 
							<ul className="nav header-navbar-rht align-items-center">
								<li className="nav-item"> 
									<Link className="nav-link login-three-head button" to="login.html"><span>Login</span></Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link signin-three-head" to="register.html">Register</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</header>
    </div>
  )
}
