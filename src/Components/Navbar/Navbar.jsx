import logo1 from '../../assets/logo1.png'
import search from '../../assets/search.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
     <ul className='headerlist'>
        <li className='logo1'><i className="fa-brands fa-facebook"></i></li>
        <li className='logo'><i className="fa-brands fa-square-twitter"></i></li>
        <li className='logo'><i className="fa-brands fa-google-plus"></i></li>
        <li className='logo'><i className="fa-brands fa-linkedin"></i></li>
        <li className="right-align1 with-line">Login</li>
        <li className="right-align">Employer Zone</li>
        <li className="right-align"><i className="fa-solid fa-envelope"></i> ibmconsultation@gmail.com</li>
        <li className="right-align2"><i className="fa-solid fa-phone"></i> +91 89381*****</li>
      </ul>
      <div className="nav-logo">
          <img src={logo1} className='nav-img' alt="" />
          <img src={search} className='search-img' alt="" />
      </div>
      <ul className="nav-menu">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>JOB SEARCH</li>
            <li>RECRUIEMENT</li>
            <li>CONSULTING</li>
            <li>PROFESSIONAL COURSES</li>
            <li>TESTIMONIALS</li>
            <li>EDITORIAL</li>
            <li>EVENTS</li>
            <li>CAREER WITH IBA</li>
            <li>FAQS</li>
            <li>CONTACT</li>
      </ul>
        
    </div>
  )
}

export default Navbar