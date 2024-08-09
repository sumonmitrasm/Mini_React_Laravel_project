import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, useNavigate, useSearchParams } from 'react-router-dom';

export default function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [description, setDescription] = useState("");
	const [phone, setPhone] = useState("");
	const [successMessage, setSuccessMessage] = useState(""); 
	const [errors, setErrors] = useState({});
	
	const save = async (e) => {
		e.preventDefault();
		let item = { name, phone, email, description, subject };
		try {
			let result = await fetch("/api/via-contact", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(item)
			});
			if (result.ok) {
				setSuccessMessage("Your data was saved successfully");
				setErrors({});
			} else {
				const contentType = result.headers.get("content-type");
				if (contentType && contentType.indexOf("application/json") !== -1) {
					const errorData = await result.json();
					setErrors(errorData);
				} else {
					console.error("Unexpected response format");
					setErrors({ general: "An unexpected error occurred" });
				}
			}
		} catch (error) {
			console.error("Error:", error);
			setErrors({ general: "An error occurred while saving the data" });
		}
	};
	

  return (
    <div>
      <br/> <br/> <br/>
			<div className="breadcrumb-bar">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-12">
							<div className="breadcrumb-list">
								<nav aria-label="breadcrumb" className="page-breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><a href="index.html">Home</a></li>
										<li className="breadcrumb-item">Pages</li>
										<li className="breadcrumb-item">Support</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="page-banner">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-12">
							<h1 className="mb-0">Support</h1>
						</div>
					</div>
				</div>
			</div>
			<div className="page-content">
				
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-8 mx-auto">
							<div className="support-wrap">
								<h5>Submit a Request</h5>
								<form>
									<div className="input-block">
										<label>Full Name</label>
										<input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Full Name"/>
									</div>
									<div className="input-block">
										<label>Email</label>
										<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter your email address"/>
									</div>
									<div className="input-block">
										<label>Subject</label>
										<input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control" placeholder="Enter your Subject"/>
									</div>
									<div className="input-block">
										<label>Mobile No</label>
										<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter your Mobile Number"/>
									</div>
									<div className="input-block">
										<label>Description</label>
										<textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Write down here" rows="4"></textarea>
									</div>
									{successMessage && <div className="text-success">{successMessage}</div>}
									<button type="submit" onClick={save} className="btn btn-submit">Submit</button>
								</form>
							</div>
						</div>
					</div>
					
				</div>
			</div>
    </div>
  )
}
