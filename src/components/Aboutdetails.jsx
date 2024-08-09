import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, useNavigate, useSearchParams } from 'react-router-dom';

export default function Aboutdetails() {
    const [aboutdetauls, setdetails] = useState([]);
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await axios.get(`api/about-details/${searchParams.get("id")}`);
                setdetails(response.data['about_details']);
            } catch (error) {
                console.error("Error:",error);
            }
        };
        fetchData();
    },[]);
  return (
    <div>
        <br></br><br></br><br></br>
			<div class="breadcrumb-bar">
				<div class="container">
					<div class="row">
						<div class="col-md-12 col-12">
							<div class="breadcrumb-list">
								<nav aria-label="breadcrumb" class="page-breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><a href="index.html">Home</a></li>
										<li class="breadcrumb-item" aria-current="page">Courses</li>
										<li class="breadcrumb-item" aria-current="page">All Courses</li>
										<li class="breadcrumb-item" aria-current="page">The Complete Web Developer Course 2.0</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
            { aboutdetauls ? (
            <div key={aboutdetauls.id}>
<section class="page-content course-sec">
				<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<div class="card overview-sec">
								<div class="card-body">
									<h5 class="subs-title">{aboutdetauls.title}</h5>
									<h6>{aboutdetauls.m_summary}</h6>
									<p>{aboutdetauls.m_description}</p>
								</div>
							</div>
						
							
						</div>	
						
						
					</div>	
				</div>
			</section>
            </div>
            ):(
                <p>Loading...</p>
            )}
    </div>
  )
}
