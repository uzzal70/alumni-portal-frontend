import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Chip from "../../components/Chip/Chip";
import "./register.css";
import axios from "axios";

const Register = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const userData = {
		FirstName: user.fname,
		LastName: user.lname,
		PhoneNumber: user.phone,
		Email: user.email,
		Password: user.password
	  };


	//   const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	try {
	// 	  const response = await fetch('https://alumni-portal-production-4ea2.up.railway.app/admin/registration', {
	// 		method: 'POST',
	// 		headers: {
	// 		  'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(userData)
	// 	  });
	  
	// 	  if (response.ok) {
	// 		const data = await response.json();
	// 		console.log('Registration successful:', data);
	// 	  } else {
	// 		throw new Error('Registration failed');
	// 	  }
	// 	} catch (error) {
	// 	  console.error('Registration failed:', error);
	// 	}
	//   };

	const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('https://alumni-portal-production-4ea2.up.railway.app/admin/registration', userData);

    // Check the response status code
    if (response.status === 200) {
      const data = response.data;
      // Handle successful registration response
      console.log('Registration successful:', data);
      // Update the UI or perform additional actions
    } else {
      throw new Error('Registration failed');
    }
  } catch (error) {
    // Handle registration error
    console.error('Registration failed:', error);
    // Update the UI or perform additional actions
  }
};
	const roles = [
		{
			title: "Student",
			value: "student",
			color: "green",
		},
		{
			title: "Faculty",
			value: "faculty",
			color: "orange",
		},
		{
			title: "Admin",
			value: "admin",
			color: "red",
		},
		{
			title: "Alumni",
			value: "alumni",
			color: "blue",
		},
	];
	return (
		<section className="register">
			<div className="register-container" data-aos="zoom-in">
				<div className="register-content">
					<div className="register-title">
						<span>Sign Up</span>
						<button className="icon" onClick={() => navigate("/")}>
							<span className="material-icons">close</span>
						</button>
					</div>
					<form className="register-form" onSubmit={handleSubmit}>
						<div className="register-form-group">
							<label>
								<span className="material-icons">person</span>
							</label>
							<input
														required

								type="text"
								name="fname"
								value={user.fname}
								onChange={handleChange}
								placeholder="First Name"
							/>
							<label>
								<span className="material-icons">person</span>
							</label>
							<input
														required

								type="text"
								name="lname"
								value={user.lname}
								onChange={handleChange}
								placeholder="Last Name"
							/>
						</div>
						<div className="register-form-group">
							<label>
								<span className="material-icons">email</span>
							</label>
							<input
														required

								type="email"
								name="email"
								value={user.email}
								onChange={handleChange}
								placeholder="Email"
							/>
							<label>
								<span className="material-icons">
									account_circle
								</span>
							</label>
							<input
							
								type="text"
								name="phone"
								value={user.phone}
								onChange={handleChange}
								placeholder="Phone Number"
							/>
						</div>
						<div className="register-form-group">
							<label>
								<span className="material-icons">lock</span>
							</label>
							<input
														required

								type="password"
								name="password"
								value={user.password}
								onChange={handleChange}
								placeholder="Password"
							/>
							<label>
								<span className="material-icons">key</span>
							</label>
							<input
							// required
								type="password"
								name="confirmPassword"
								value={user.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm Password"
							/>
						</div>
						<div
							className="register-form-group register-form-radio"
							style={{
								justifyContent: "space-evenly",
							}}
						>
							<span className="register-form-radio-span">
								Choose your role:{" "}
							</span>
							{roles.map((role, index) => (
								<label key={index}>
									<input
										type="radio"
										name="role"
										value={role.value}
										onChange={handleChange}
										placeholder={role.title}
									/>
									<Chip
										text={role.title}
										color={role.color}
										onClick={(e) => {
											e.preventDefault();
											setUser({
												...user,
												role: role.value,
											});
										}}
										variant={
											user.role === role.value
												? "fill"
												: "outline"
										}
									/>
								</label>
							))}
						</div>
						<div className="register-form-group">
							<Button
								text="Sign Up"
								color="brown"
								variant="fill"
								size="large"
								type="submit"
							/>
						</div>
					</form>
					<div className="register-bottom">
						<span>Already have an account?</span>
						<Link to="/login">Log In</Link>
					</div>
				</div>
				<div className="register-background">
					<div className="register-background-shape register-background-shape__4"></div>
					<div className="register-background-shape register-background-shape__3"></div>
					<div className="register-background-shape register-background-shape__2"></div>
					<div className="register-background-shape register-background-shape__1"></div>
				</div>
			</div>
		</section>
	);
};

export default Register;
