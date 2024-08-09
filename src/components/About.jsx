import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, useNavigate, useSearchParams } from 'react-router-dom';
export default function About() {
	const [about, setAbout] = useState([]);
	const [volunteer, setVolunteer] = useState([]);
	useEffect (() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("api/about");
				setAbout(response.data['abouts']);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchData();
	}, []);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("api/volunteer");
				setVolunteer(response.data['volunteers']);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchData();
	},[]);
  return (
    <div><br/>
	{
		about.map((pageObj) => {
				return (
					<div key={pageObj.id}>
						<section className="master-skill-three">
							<div className="master-three-vector">
								<img className="ellipse-right img-fluid" src="assets/img/bg/pattern-01.png" alt="Img"/>
							</div>
							<div className="container">
								<div className="row">		
									<div className="col-xl-6 col-lg-6 col-md-12" >
										<div className="master-three-images">
											<div className="master-three-left"> 
												<img className="img-fluid" src={`admin/about/medium/${pageObj.about_image}`} alt="image-banner" title="image-banner"/>
											</div>
										</div>
									</div>
									
									<div className="col-xl-6 col-lg-6 col-md-12" >
										<div className="home-three-head" >
											<h2>{pageObj.title}</h2>
										</div>
										<div className="home-three-content" >
											<p>{pageObj.summary}</p>
										</div>
										<div className="skils-group">
											<div className="row">
											{
												pageObj.about_details.map((abdetails) => {
													return (
														<div key={abdetails.id} className="col-lg-6 col-xs-12 col-sm-6">
															<div className="skils-icon-item">
																<div className="skils-icon">
																	<img className="img-fluid" src="assets/img/icon-three/career-03.svg" alt="Stay Motivated"/>
																</div>
																<div className="skils-content">
																	<p className="mb-0">{abdetails.m_summary}</p>
																</div>
																<div class="see-all">											
																	<Link to={"/about-details?id="+ abdetails.id}>See all<span class="see-all-icon"><i class="fas fa-arrow-right"></i></span></Link>
																</div>
															</div>
														</div>
													);
												})
											}
											</div>
										</div>
									</div>
								</div>		
							</div>
						</section>
					</div>
				);
			})
	}
			<section class="home-three-courses">
				<div class="container">
					<div class="favourite-course-sec">
						<div class="row">
							<div class=" section-header-title">
								<div class="row align-items-center d-flex justify-content-between">
									<div class="col-lg-6 col-sm-8">
										<h2>volunteer</h2>
									</div><br/>
									<div class="col-lg-6 col-sm-4">
										<div class="see-all">											
											<Link to="#">See all<span class="see-all-icon"><i class="fas fa-arrow-right"></i></span></Link>
										</div>
									</div>
								</div>
							</div>

							<div class="all-corses-main">
								<div class="tab-content">
									
				
									<div class="tab-content">

						
										<div class="tab-pane fade active show" id="alltab" role="tabpanel">
											<div class="all-course">
												<div class="row">
													{
														volunteer.map((volenteerObj) => {
															return (
																<div key={volenteerObj.id}>
																	<div class="col-xl-3 col-lg-6 col-md-6 col-12" >
																		<div class="course-box-three">
																			<div class="course-three-item">
																				<div class="course-three-img">
																					<Link to="course-details.html">
																						<img class="img-fluid" alt="Img" src={`admin/volunteer/large/${volenteerObj.image}`}/>
																					</Link>													
																					<div class="heart-three">
																						<Link to="#"><i class="fa-regular fa-heart"></i></Link>
																					</div>
																				</div>
																				
																				<div class="course-three-content">	
																					<div class="course-group-three">
																						<div class="group-three-img">
																							<Link to="instructor-profile.html"><img src={`admin/volunteer/large/${volenteerObj.image}`} alt="Img" class="img-fluid"/></Link>
																						</div>
																					</div>

																					<div class="course-three-text">
																						<Link to="course-details.html">
																							<p>{volenteerObj.name}</p>
																							<h3 class="title instructor-text">{volenteerObj.email}</h3>
																						</Link>
																					</div>
																					
																					<div class="student-counts-info d-flex align-items-center">
																						<div class="students-three-counts d-flex align-items-center">
																							<img src={`admin/volunteer/large/${volenteerObj.image}`} alt="Img"/>
																							<p>{volenteerObj.blood_group}</p>
																						</div>
																					</div>
											
																					<div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">
																						<div class="price-three-view d-flex align-items-center">
																							<div class="course-price-three">
																								<h3>{volenteerObj.gender}</h3>
																							</div>
																						</div>
																						<div class="price-three-time d-inline-flex align-items-center">
																							<i class="fa-regular fa-clock me-2"></i>
																							<span>{new Date(volenteerObj.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															)
														})
													}
												</div>
											</div>
										</div>
									
				
										
										<div class="tab-pane fade" id="mostpopulartab" >
											<div class="all-course">
												<div class="row">													

										
													<div class="col-xl-3 col-lg-6 col-md-6 col-12" >
														<div class="course-box-three">
															<div class="course-three-item">
																<div class="course-three-img">
																	<Link to="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-21.jpg"/>
																	</Link>													
																	<div class="heart-three">
																		<Link to="#"><i class="fa-regular fa-heart"></i></Link>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<Link to="instructor-profile.html"><img src="assets/img/user/user4.jpg" alt="Img" class="img-fluid"/></Link>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<Link to="course-details.html">
																			<p>Creative Arts & media</p>
																			<h3 class="title instructor-text">Build Creative Arts & media Course Completed</h3>
																		</Link>
																	</div>
																	
																	<div class="student-counts-info d-flex align-items-center">
																		<div class="students-three-counts d-flex align-items-center">
																			<img src="assets/img/icon-three/student.svg" alt="Img"/>
																			<p>250 Students</p>
																		</div>
																	</div>
							
																	<div class="price-three-group d-flex align-items-center justify-content-between">
																		<div class="price-three-view d-flex align-items-center">
																			<div class="course-price-three">
																				<h3>$700 <span>$99.00</span></h3>
																			</div>
																		</div>
																		<div class="price-three-time d-inline-flex align-items-center">
																			<i class="fa-regular fa-clock me-2"></i>
																			<span>6hr 30min</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													

													

										
													<div class="col-xl-3 col-lg-6 col-md-6 col-12" >
														<div class="course-box-three">
															<div class="course-three-item">
																<div class="course-three-img">
																	<Link to="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-25.jpg"/>
																	</Link>													
																	<div class="heart-three">
																		<Link to="#"><i class="fa-regular fa-heart"></i></Link>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<Link to="instructor-profile.html"><img src="assets/img/user/user8.jpg" alt="Img" class="img-fluid"/></Link>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<Link to="course-details.html">
																			<p>Creative Arts & media</p>
																			<h3 class="title instructor-text">Build Responsive Websites with HTML</h3>
																		</Link>
																	</div>
																	
																	<div class="student-counts-info d-flex align-items-center">
																		<div class="students-three-counts d-flex align-items-center">
																			<img src="assets/img/icon-three/student.svg" alt="Img"/>
																			<p>400 Students</p>
																		</div>
																	</div>
							
																	<div class="price-three-group d-flex align-items-center justify-content-between">
																		<div class="price-three-view d-flex align-items-center">
																			<div class="course-price-three">
																				<h3>$300 <span>$99.00</span></h3>
																			</div>
																		</div>
																		<div class="price-three-time d-inline-flex align-items-center">
																			<i class="fa-regular fa-clock me-2"></i>
																			<span>6hr 30min</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
	

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</section>

			<section className="gallery-three">
				<div className="container">
					<div className="home-three-head section-header-title" >
						<div className="row align-items-center d-flex justify-content-between">
							<div className="col-lg-6 col-sm-12">
								<h2>Courses taught by real instructor</h2>
							</div>
							<div className="col-lg-6 col-sm-12">
								<div className="see-all">											
									<Link to="instructor-list.html">See all<span className="see-all-icon"><i className="fas fa-arrow-right"></i></span></Link>
								</div>
							</div>
						</div>
					</div>
					<div className="courses-gallery-three">
						<div className="row">
					
							<div className="col-lg-5 col-md-5">
								<div className="row">
									<div className="col-lg-7 col-md-7">
										<div className="gallery-three-img-item">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-1.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-5 col-md-5">
										<div className="gallery-three-img-item">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-2.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-5 col-md-5">
										<div className="gallery-three-img-item mb-0">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-3.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-7 col-md-7">
										<div className="gallery-three-img-item mb-0">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-4.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-lg-3 col-md-3">
								<div className="gallery-three-img-item mb-0">
									<div className="content-three-main">
										<div className="gallery-img">
											<img src="assets/img/gallery/gallery-5.jpg" alt="Instructor"/>
										</div>
										<div className="content-three-overlay">
											<div className="content-three-text">
												<div>
													<h6>Patricia</h6>
													<p>Node Js</p>
												</div>	
												<div>														
													<Link to="instructor-list.html" className="content-three-arrows">
														<span><i className="fas fa-arrow-right"></i></span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-lg-4 col-md-4">
								<div className="row">
									<div className="col-lg-12 col-md-12">
										<div className="gallery-three-img-item">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-6.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="gallery-three-img-item mb-0">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-7.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="gallery-three-img-item mb-0">
											<div className="content-three-main">
												<div className="gallery-img">
													<img src="assets/img/gallery/gallery-8.jpg" alt="Instructor"/>
												</div>
												<div className="content-three-overlay">
													<div className="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<Link to="instructor-list.html" className="content-three-arrows">
																<span><i className="fas fa-arrow-right"></i></span>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}
