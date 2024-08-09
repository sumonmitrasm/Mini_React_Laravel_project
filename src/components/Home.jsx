import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  
  return (
    <div>
      <section className="home-three-slide d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 col-12" >
              <div className="home-three-slide-face">
                <div className="home-three-slide-text">
                  <h5>The Leader in Online Learning</h5>
                  <h1>Engaging <span>&</span> Accessible Online Courses For All</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et</p>
                </div>
                <div className="banner-three-content">
                  <form className="form" action="course-list.html">
                    <div className="form-inner-three">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Search School, Online educational centers, etc"/>
                        <span className="drop-detail-three">
                        </span>
                        <button className="btn btn-three-primary sub-btn" type="submit"><i className="fas fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-md-6 col-12" >
              <div className="girl-slide-img aos">
                 <img className="img-fluid" src="assets/img/slider/home-slider.png" alt="Img"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section student-course home-three-course">
				<div class="container">
					<div class="course-widget-three">
						<div class="row">
							<div class="col-lg-3 col-md-6 d-flex" >
								<div class="course-details-three">
									<div class="align-items-center">
										<div class="course-count-three course-count ms-0">
											<div class="course-img">
												<img class="img-fluid" src="assets/img/icon-three/course-01.svg" alt="Img"/>
											</div>
											<div class="course-content-three">
												<h4 class="text-blue"><span class="counterUp">10</span>K</h4>
												<p>Online Courses</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 d-flex" >
								<div class="course-details-three">
									<div class="align-items-center">
										<div class="course-count-three course-count ms-0">
											<div class="course-img">
												<img class="img-fluid" src="assets/img/icon-three/course-02.svg" alt="Img"/>
											</div>
											<div class="course-content-three">
												<h4 class="text-yellow"><span class="counterUp">200</span>+</h4>
												<p>Expert Tutors</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 d-flex" >
								<div class="course-details-three">
									<div class="align-items-center">
										<div class="course-count-three course-count ms-0">
											<div class="course-img">
												<img class="img-fluid" src="assets/img/icon-three/course-03.svg" alt="Img"/>
											</div>
											<div class="course-content-three">
												<h4 class="text-info"><span class="counterUp">6</span>K+</h4>
												<p>Ceritified Courses</p>
											</div>
										</div>
									</div>
								</div>	
							</div>
							<div class="col-lg-3 col-md-6 d-flex" >
								<div class="course-details-three mb-0">
									<div class="align-items-center">
										<div class="course-count-three">
											<div class="course-img">
												<img class="img-fluid" src="assets/img/icon-three/course-04.svg" alt="Img"/>
											</div>
											<div class="course-content-three course-count ms-0">
												<h4 class="text-green"><span class="counterUp">60</span>K +</h4>
												<p>Online Students</p> 
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

      <section class="master-skill-three">
				<div class="master-three-vector">
					<img class="ellipse-right img-fluid" src="assets/img/bg/pattern-01.png" alt="Img"/>
				</div>
				<div class="container">
					<div class="row">		
						<div class="col-xl-6 col-lg-6 col-md-12" >
							<div class="master-three-images">
								<div class="master-three-left"> 
									<img class="img-fluid" src="assets/img/students/career.png" alt="image-banner" title="image-banner"/>
								</div>
							</div>
						</div>
						
						<div class="col-xl-6 col-lg-6 col-md-12" >
							<div class="home-three-head" >
								<h2>Master the skills to drive your career</h2>
							</div>
							<div class="home-three-content" >
								<p>Get certified, master modern tech skills, and level up your career whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
							</div>
							<div class="skils-group">
								<div class="row">
									<div class="col-lg-6 col-xs-12 col-sm-6" >
										<div class="skils-icon-item">
											<div class="skils-icon">
												<img class="img-fluid" src="assets/img/icon-three/career-01.svg" alt="certified"/>
											</div>
											<div class="skils-content">
												<p class="mb-0">Get certified with 100+ certification courses</p>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-xs-12 col-sm-6" >
										<div class="skils-icon-item">
											<div class="skils-icon">
												<img class="img-fluid" src="assets/img/icon-three/career-02.svg" alt="Build skills"/>
											</div>
											<div class="skils-content">
												<p class="mb-0">Build skills your way, from labs to courses</p>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-xs-12 col-sm-6" >
										<div class="skils-icon-item">
											<div class="skils-icon">
												<img class="img-fluid" src="assets/img/icon-three/career-03.svg" alt="Stay Motivated"/>
											</div>
											<div class="skils-content">
												<p class="mb-0">Stay motivated with engaging instructors</p>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-xs-12 col-sm-6" >
										<div class="skils-icon-item">
											<div class="skils-icon">
												<img class="img-fluid" src="assets/img/icon-three/career-04.svg" alt="latest cloud"/>
											</div>
											<div class="skils-content">
												<p class="mb-0">Keep up with the latest in cloud</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>		
				</div>
			</section>

      <section class="home-three-courses">
				<div class="container">
					<div class="favourite-course-sec">
						<div class="row">
							<div class="home-three-head section-header-title">
								<div class="row align-items-center d-flex justify-content-between">
									<div class="col-lg-6 col-sm-8">
										<h2>Courses</h2>
									</div>
									<div class="col-lg-6 col-sm-4">
										<div class="see-all">											
											<a href="#">See all<span class="see-all-icon"><i class="fas fa-arrow-right"></i></span></a>
										</div>
									</div>
								</div>
							</div>

							<div class="all-corses-main">
								<div class="tab-content">
									<div class="nav tablist-three" role="tablist">
										
										<a class="nav-tab active me-3" data-bs-toggle="tab" href="#alltab" role="tab">All</a>
				
										<a class="nav-tab me-3" data-bs-toggle="tab" href="#mostpopulartab" role="tab">Most popular</a>

										<a class="nav-tab me-3" data-bs-toggle="tab" href="#businesstab" role="tab">Business</a>

										<a class="nav-tab me-3" data-bs-toggle="tab" href="#designtab" role="tab">Design</a>

										<a class="nav-tab me-3" data-bs-toggle="tab" href="#designtab" role="tab">Music</a>

										<a class="nav-tab me-3" data-bs-toggle="tab" href="#programmingtab" role="tab">Programming</a>

										<a class="nav-tab me-3" data-bs-toggle="tab" href="#databasetab" role="tab">Database</a>
										
									</div>
				
									<div class="tab-content">

						
										<div class="tab-pane fade active show" id="alltab" role="tabpanel">
											<div class="all-course">
												<div class="row">

											
													<div class="col-xl-3 col-lg-6 col-md-6 col-12" >
														<div class="course-box-three">
															<div class="course-three-item">
																<div class="course-three-img">
																	<a href="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-26.jpg"/>
																	</a>													
																	<div class="heart-three">
																		<a href="#"><i class="fa-regular fa-heart"></i></a>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<a href="instructor-profile.html"><img src="assets/img/user/user1.jpg" alt="Img" class="img-fluid"/></a>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<a href="course-details.html">
																			<p>Personalized Learning</p>
																			<h3 class="title instructor-text">Build Responsive Websites with HTML</h3>
																		</a>
																	</div>
																	
																	<div class="student-counts-info d-flex align-items-center">
																		<div class="students-three-counts d-flex align-items-center">
																			<img src="assets/img/icon-three/student.svg" alt="Img"/>
																			<p>450 Students</p>
																		</div>
																	</div>
							
																	<div class="price-three-group d-flex align-items-center justify-content-between justify-content-between">
																		<div class="price-three-view d-flex align-items-center">
																			<div class="course-price-three">
																				<h3>$650 <span>$99.00</span></h3>
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
																	<a href="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-27.jpg"/>
																	</a>													
																	<div class="heart-three">
																		<a href="#"><i class="fa-regular fa-heart"></i></a>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<a href="instructor-profile.html"><img src="assets/img/user/user2.jpg" alt="Img" class="img-fluid"/></a>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<a href="course-details.html">
																			<p>Pyhton Development</p>
																			<h3 class="title instructor-text">The Complete Web Developer PHP Course</h3>
																		</a>
																	</div>
																	
																	<div class="student-counts-info d-flex align-items-center">
																		<div class="students-three-counts d-flex align-items-center">
																			<img src="assets/img/icon-three/student.svg" alt="Img"/>
																			<p>500 Students</p>
																		</div>
																	</div>
							
																	<div class="price-three-group d-flex align-items-center justify-content-between">
																		<div class="price-three-view d-flex align-items-center">
																			<div class="course-price-three">
																				<h3>$650 <span>$99.00</span></h3>
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
																	<a href="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-25.jpg"/>
																	</a>													
																	<div class="heart-three">
																		<a href="#"><i class="fa-regular fa-heart"></i></a>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<a href="instructor-profile.html"><img src="assets/img/user/user8.jpg" alt="Img" class="img-fluid"/></a>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<a href="course-details.html">
																			<p>Creative Arts & media</p>
																			<h3 class="title instructor-text">Build Responsive Websites with HTML</h3>
																		</a>
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
									
				
										
										<div class="tab-pane fade" id="mostpopulartab" >
											<div class="all-course">
												<div class="row">													

										
													<div class="col-xl-3 col-lg-6 col-md-6 col-12" >
														<div class="course-box-three">
															<div class="course-three-item">
																<div class="course-three-img">
																	<a href="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-21.jpg"/>
																	</a>													
																	<div class="heart-three">
																		<a href="#"><i class="fa-regular fa-heart"></i></a>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<a href="instructor-profile.html"><img src="assets/img/user/user4.jpg" alt="Img" class="img-fluid"/></a>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<a href="course-details.html">
																			<p>Creative Arts & media</p>
																			<h3 class="title instructor-text">Build Creative Arts & media Course Completed</h3>
																		</a>
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
																	<a href="course-details.html">
																		<img class="img-fluid" alt="Img" src="assets/img/course/course-25.jpg"/>
																	</a>													
																	<div class="heart-three">
																		<a href="#"><i class="fa-regular fa-heart"></i></a>
																	</div>
																</div>
																<div class="course-three-content">	
																	<div class="course-group-three">
																		<div class="group-three-img">
																			<a href="instructor-profile.html"><img src="assets/img/user/user8.jpg" alt="Img" class="img-fluid"/></a>
																		</div>
																	</div>

																	<div class="course-three-text">
																		<a href="course-details.html">
																			<p>Creative Arts & media</p>
																			<h3 class="title instructor-text">Build Responsive Websites with HTML</h3>
																		</a>
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

      <section class="home-three-transform">
                <div class="container" >
                    <div class="row align-items-center">
                        <div class="col-lg-9 col-md-8 col-sm-12">
                            <div class="cta-content">
                                <h2>Transform Access To Education</h2>
								<p>Create an account to receive our newsletter, course recommendations and promotions.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-12">
                            <div class="transform-button-three">
                                <a href="register.html" class="btn btn-action">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        <section class="home-three-goals">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-12 col-md-12" >
							<div class="acheive-goals-main">
								<h2>Acheive you Goals  with DreamsLMS</h2>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-4 col-12" >
							<div class="acheive-goals">
								<div class="acheive-elips-one">
									<img src="assets/img/icon-three/ellipse-1.svg" alt="Img"/>
								</div>
								<div class="acheive-goals-content text-center course-count ms-0">
									<h4><span class="counterUp">253,085</span></h4>
									<p>Students Enrolled all over World</p>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-4 col-12" >
							<div class="acheive-goals">
								<div class="acheive-elips-two">
									<img src="assets/img/icon-three/ellipse-2.svg" alt="Img"/>
								</div>
								<div class="acheive-goals-content text-center course-count ms-0">
									<h4><span class="counterUp">1,205</span></h4>
									<p>Total Courses on our Platform</p>
								</div>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-4 col-12" >
							<div class="acheive-goals">
								<div class="acheive-elips-three">
									<img src="assets/img/icon-three/ellipse-3.svg" alt="Img"/>
								</div>
								<div class="acheive-goals-content text-center course-count ms-0">
									<h4><span class="counterUp">56</span></h4>
									<p>Countries of Students </p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

      <section class="latest-blog-three">
				<div class="container">
					<div class="home-three-head section-header-title">
						<div class="row align-items-center d-flex justify-content-between">
							<div class="col-lg-6 col-md-8">
								<h2>Latest news & Events</h2>
							</div>
							<div class="col-lg-6 col-md-4">
								<div class="see-all">											
									<a href="blog-list.html">See all<span class="see-all-icon"><i class="fas fa-arrow-right"></i></span></a>
								</div>
							</div>
						</div>
					</div>
					<div class="latest-blog-main">
						<div class="row">
							<div class="col-xl-6 col-lg-12 col-md-12">								
								<div class="row">
									<div class="col-md-12" >	
										<div class="event-blog-three blog-three-one" >
											<div class="blog-img-three">
												<a href="blog-list.html">
													<img class="img-fluid" alt="Img" src="assets/img/blog/blog-20.jpg"/>
												</a>
											</div>
											<div class="latest-blog-content">
												<div class="event-three-title">
													<div class="event-span-three">
														<span class="span-name-three badge-green">Sales</span>
													</div>
													<a href="blog-list.html">
														<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida..Lorem ipsum dolor sit amet, </p>
													</a>
													<div class="blog-student-count">
														<i class="fa-solid fa-calendar-days"></i>
														<span>Jun 15, 2022</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<div class="event-blog-three blog-three-two">
											<div class="blog-img-three">
												<a href="blog-list.html">
													<img class="img-fluid" alt="Img" src="assets/img/blog/blog-21.jpg"/>
												</a>
											</div>
											<div class="latest-blog-content">
												<div class="event-three-title">
													<div class="event-span-three">
														<span class="span-name-three badge-info">Sales</span>
													</div>
													<a href="blog-list.html">
														<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida..Lorem ipsum dolor sit amet, </p>
													</a>
													<div class="blog-student-count">
														<i class="fa-solid fa-calendar-days"></i>
														<span>Jun 15, 2022</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-xl-6 col-lg-12 col-md-12">
								<div class="row">									
									<div class="col-md-12" >	
										<div class="event-blog-three blog-three-three">
											<div class="blog-img-three">
												<a href="blog-list.html">
													<img class="img-fluid" alt="Img" src="assets/img/blog/blog-22.jpg"/>
												</a>
											</div>
											<div class="latest-blog-content">
												<div class="event-three-title">
													<div class="event-span-three">
														<span class="span-name-three badge-info">Sales</span>
													</div>
													<a href="blog-list.html">
														<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida..Lorem ipsum dolor sit amet, </p>
													</a>
													<div class="blog-student-count">
														<i class="fa-solid fa-calendar-days"></i>
														<span>Jun 15, 2022</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">	
										<div class="event-blog-three blog-three-four">
											<div class="blog-img-three">
												<a href="blog-list.html">
													<img class="img-fluid" alt="Img" src="assets/img/blog/blog-23.jpg"/>
												</a>
											</div>
											<div class="latest-blog-content">
												<div class="event-three-title">
													<div class="event-span-three">
														<span class="span-name-three badge-info">Sales</span>
													</div>
													<a href="blog-list.html">
														<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida..Lorem ipsum dolor sit amet, </p>
													</a>
													<div class="blog-student-count">
														<i class="fa-solid fa-calendar-days"></i>
														<span>Jun 15, 2022</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12" >	
										<div class="event-blog-three blog-three-five">
											<div class="blog-img-three">
												<a href="blog-list.html">
													<img class="img-fluid" alt="Img" src="assets/img/blog/blog-24.jpg"/>
												</a>
											</div>
											<div class="latest-blog-content">
												<div class="event-three-title">
													<div class="event-span-three">
														<span class="span-name-three badge-yellow">Sales</span>
													</div>
													<a href="blog-list.html">
														<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida..Lorem ipsum dolor sit amet, </p>
													</a>
													<div class="blog-student-count">
														<i class="fa-solid fa-calendar-days"></i>
														<span>Jun 15, 2022</span>
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

      <section class="gallery-three">
				<div class="container">
					<div class="home-three-head section-header-title" >
						<div class="row align-items-center d-flex justify-content-between">
							<div class="col-lg-6 col-sm-12">
								<h2>Courses taught by real instructor</h2>
							</div>
							<div class="col-lg-6 col-sm-12">
								<div class="see-all">											
									<a href="instructor-list.html">See all<span class="see-all-icon"><i class="fas fa-arrow-right"></i></span></a>
								</div>
							</div>
						</div>
					</div>
					<div class="courses-gallery-three">
						<div class="row">
					
							<div class="col-lg-5 col-md-5">
								<div class="row">
									<div class="col-lg-7 col-md-7">
										<div class="gallery-three-img-item">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-1.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-5 col-md-5">
										<div class="gallery-three-img-item">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-2.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-5 col-md-5">
										<div class="gallery-three-img-item mb-0">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-3.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-7 col-md-7">
										<div class="gallery-three-img-item mb-0">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-4.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="col-lg-3 col-md-3">
								<div class="gallery-three-img-item mb-0">
									<div class="content-three-main">
										<div class="gallery-img">
											<img src="assets/img/gallery/gallery-5.jpg" alt="Instructor"/>
										</div>
										<div class="content-three-overlay">
											<div class="content-three-text">
												<div>
													<h6>Patricia</h6>
													<p>Node Js</p>
												</div>	
												<div>														
													<a href="instructor-list.html" class="content-three-arrows">
														<span><i class="fas fa-arrow-right"></i></span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="col-lg-4 col-md-4">
								<div class="row">
									<div class="col-lg-12 col-md-12">
										<div class="gallery-three-img-item">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-6.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-6">
										<div class="gallery-three-img-item mb-0">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-7.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-lg-6 col-md-6">
										<div class="gallery-three-img-item mb-0">
											<div class="content-three-main">
												<div class="gallery-img">
													<img src="assets/img/gallery/gallery-8.jpg" alt="Instructor"/>
												</div>
												<div class="content-three-overlay">
													<div class="content-three-text">
														<div>
															<h6>Patricia</h6>
															<p>Node Js</p>
														</div>	
														<div>														
															<a href="instructor-list.html" class="content-three-arrows">
																<span><i class="fas fa-arrow-right"></i></span>
															</a>
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
  );
}
