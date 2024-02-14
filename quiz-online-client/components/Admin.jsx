import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <section className="container-fluid d-flex justify-content-center align-items-center vh-100">
    <div className="text-center">
        <h2 className="mt-5">Admin Home Page</h2>
        <hr />
        <nav className="nav flex-column">
            <Link to={"/create-quiz"} className="nav-link mb-3 mr-3">
                Create a New Quiz
            </Link>
            <Link to={"/all-quizzes"} className="nav-link" style={{ marginLeft: '8px' }}> {/* Added inline style */}
                Manage existing Quizzes
            </Link>
        </nav>
    </div>
</section>

    )
}

export default Admin



