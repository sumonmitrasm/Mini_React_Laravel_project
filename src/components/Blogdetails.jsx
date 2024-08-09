import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, useNavigate, useSearchParams } from 'react-router-dom';


export default function Blogdetails() {
  const [blog, setBlog] = useState([]);
  const [recentblog, setRecentblog] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const fetchData = async() =>{
      try {
        const response = await axios.get(`api/blog/${searchParams.get("id")}`);
        setBlog(response.data['blogsDetails']);
		setRecentblog(response.data['blogstags']);
      } catch (error) {
        console.error("error:",error);
      }
    }
    fetchData();
  },[]);
  return (
    <div><br></br><br></br>
			<div className="breadcrumb-bar">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-12">
							<div className="breadcrumb-list">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link href="index.html">Home</Link></li>
										<li className="breadcrumb-item" aria-current="page">Pages</li>
										<li className="breadcrumb-item" aria-current="page">Blog Details</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
      
			<section className="course-content">
				<div className="container">
					<div className="row">
            { 
            blog ? (
						<div className="col-lg-9 col-md-12">
							<div className="blog">
								<div className="blog-image">
									<Link href="blog-details.html"><img className="img-fluid" src={`admin/blog/large/${blog.image}`} alt="Post Image"/></Link>
								</div>
								
								<div className="blog-info clearfix">
									<div className="post-left">
										<ul>
											<li>
												<div className="post-author">
													<Link href="instructor-profile.html"><img src="assets/img/user/user.jpg" alt="Post Author"/> <span>Ruby Perrin</span></Link>
												</div>
											</li>
											<li><img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img"/>{new Date(blog.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit',year: '2-digit' })}</li>
											<li><img className="img-fluid" src="assets/img/icon/icon-23.svg" alt="Img"/>Programming, Web Design</li>
										</ul>
									</div>
								</div>
								<h3 className="blog-title"><Link href="blog-details.html">{blog.title}</Link></h3>
								<div className="blog-content">
									<h5>{blog.summary}</h5>
									<p> <div dangerouslySetInnerHTML={{ __html: blog.description }} /><br /></p>
								</div>
							</div>
						</div>
            ):(
              <p>Loading...</p>
            )
            }
						<div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
							<div className="card search-widget blog-search blog-widget">
								<div className="card-body">
									<form className="search-form">
										<div className="input-group">
											<input type="text" placeholder="Search..." className="form-control"/>
											<button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
										</div>
									</form>
								</div>
							</div>
							<div className="card post-widget blog-widget">
								<div className="card-header">
									<h4 className="card-title">Recent Posts</h4>
								</div>
								<div className="card-body">
									<ul className="latest-posts">
										{
											recentblog.map((recentObj) => {
												return(
													<div key={recentObj.id}>
														<li>
															<div className="post-thumb">
																<Link href="blog-details.html">
																	<img className="img-fluid" src={`admin/blog/large/${recentObj.image}`} alt="Img"/>
																</Link>
															</div>
															<div className="post-info">
																<h4>
																	<Link href="blog-details.html">{recentObj.title}</Link>
																</h4>
																<p><img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img"/>{new Date(recentObj.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit',year: '2-digit' })}</p>
															</div>
														</li>
													</div>
												)
											})
										}
									</ul>
								</div>
							</div>
							<div className="card tags-widget blog-widget tags-card">
								<div className="card-header">
									<h4 className="card-title">Latest Tags</h4>
								</div>
								<div className="card-body">
									<ul className="tags">
										
									{blog.tags && blog.tags.map((tag) => (
										<li key={tag.id}>
											<Link to={`/tag?id=${tag.id}&slug=${tag.slug}`} className="tag">
												{tag.name}
											</Link>
										</li>
									))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
    </div>
  )
}
