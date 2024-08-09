import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Blog() {
    const [blog, setBlog] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/api/blog");
                setBlog(response.data['blogs']);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        let item = { search };
        try {
            let result = await fetch("/api/search-news", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item)
            });
            let data = await result.json();
            if (result.status === 200) {
                setSearchResults(data.categorynewsts);
            } else {
                console.error("Error:", data.message);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <br /><br /><br />
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">Pages</li>
                                        <li className="breadcrumb-item" aria-current="page">Blog Grid</li>
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
                        <div className="col-lg-9 col-md-12">
                            <div className="row">
                                {searchResults.length > 0 ? searchResults.map((blogObj) => (
                                    <div key={blogObj.id} className="col-md-6 col-sm-12">
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="blog-details.html">
                                                    <img className="img-fluid" src={`admin/blog/large/${blogObj.image}`} alt="Post Image" />
                                                </Link>
                                            </div>
                                            <div className="blog-grid-box">
                                                <div className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li>
                                                                <img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img" />{new Date(blogObj.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </li>
                                                            <li>
                                                                <img className="img-fluid" src="assets/img/icon/icon-23.svg" alt="Img" />Programming, Web Design
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h3 className="blog-title">
                                                    <Link to="blog-details.html">{blogObj.title}</Link>
                                                </h3>
                                                <div className="blog-content blog-read">
                                                    <p>{blogObj.summary}</p>
                                                    <Link to={"/blog-details?id=" + blogObj.id} className="read-more btn btn-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )) : blog.map((blogObj) => (
                                    <div key={blogObj.id} className="col-md-6 col-sm-12">
                                        <div className="blog grid-blog">
                                            <div className="blog-image">
                                                <Link to="blog-details.html">
                                                    <img className="img-fluid" src={`admin/blog/large/${blogObj.image}`} alt="Post Image" />
                                                </Link>
                                            </div>
                                            <div className="blog-grid-box">
                                                <div className="blog-info clearfix">
                                                    <div className="post-left">
                                                        <ul>
                                                            <li>
                                                                <img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img" />{new Date(blogObj.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                            </li>
                                                            <li>
                                                                <img className="img-fluid" src="assets/img/icon/icon-23.svg" alt="Img" />Programming, Web Design
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <h3 className="blog-title">
                                                    <Link to="blog-details.html">{blogObj.title}</Link>
                                                </h3>
                                                <div className="blog-content blog-read">
                                                    <p>{blogObj.summary}</p>
                                                    <Link to={"/blog-details?id=" + blogObj.id} className="read-more btn btn-primary">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
                            <div className="card search-widget blog-search blog-widget">
                                <div className="card-body">
                                    <form className="search-form" onSubmit={handleSearch}>
                                        <div className="input-group">
                                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="form-control" />
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
                                        <li>
                                            <div className="post-thumb">
                                                <Link to="blog-details.html">
                                                    <img className="img-fluid" src="assets/img/blog/blog-01.jpg" alt="Img" />
                                                </Link>
                                            </div>
                                            <div className="post-info">
                                                <h4>
                                                    <Link to="blog-details.html">Learn Webs Applications Development from Experts</Link>
                                                </h4>
                                                <p><img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img" />Jun 14, 2022</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-thumb">
                                                <Link to="blog-details.html">
                                                    <img className="img-fluid" src="assets/img/blog/blog-02.jpg" alt="Img" />
                                                </Link>
                                            </div>
                                            <div className="post-info">
                                                <h4>
                                                    <Link to="blog-details.html">Expand Your Career Opportunities With Python</Link>
                                                </h4>
                                                <p><img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img" /> 3 Dec 2019</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-thumb">
                                                <Link to="blog-details.html">
                                                    <img className="img-fluid" src="assets/img/blog/blog-03.jpg" alt="Img" />
                                                </Link>
                                            </div>
                                            <div className="post-info">
                                                <h4>
                                                    <Link to="blog-details.html">Complete PHP Programming Career Guideline</Link>
                                                </h4>
                                                <p><img className="img-fluid" src="assets/img/icon/icon-22.svg" alt="Img" /> 3 Dec 2019</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
