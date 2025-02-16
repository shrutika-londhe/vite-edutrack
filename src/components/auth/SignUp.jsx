import React from 'react'
import '../auth/SignUp.css'
const SignUp = () => {
  return (
    <div><div className="container mt-5">
    <h2 className="text-center">Sign Up</h2>
    <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email ID</label>
            <input type="email" className="form-control" id="email" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="branch" className="form-label">Branch</label>
            <input type="text" className="form-control" id="branch" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile No</label>
            <input type="tel" className="form-control" id="mobile" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="rollno" className="form-label">Roll No</label>
            <input type="text" className="form-control" id="rollno" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="personalEmail" className="form-label">Personal Email</label>
            <input type="email" className="form-control" id="personalEmail" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" id="address" rows="3" required></textarea>
        </div>
        <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">LinkedIn</label>
            <input type="url" className="form-control" id="linkedin" required/>
        </div>
        <button type="submit" className="btn btn-signup w-100">Sign Up</button>
    </form>
</div>
</div>
  )
}

export default SignUp