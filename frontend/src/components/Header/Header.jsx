import bg from '../../assets/images/bg.jpg';
import '../Header/Header.css'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
        <a className="navbar-brand" href="#">EduTrack</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="d-flex gap-2">
                <button className="btn btn-signup">Sign Up</button>
                <button className="btn btn-login">Login</button>
            </div>
        </div>
    </div>
</nav>
  )
}

export default Header