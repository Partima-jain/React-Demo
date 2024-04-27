import './About.css';
import imageleft from '../../assets/image-left.png';
import imageright from '../../assets/image-right.png';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';
import program1 from '../../assets/Program1.png';
import program2 from '../../assets/program2.png';
import program3 from '../../assets/program3.png';
import program4 from '../../assets/program4.png';
import program5 from '../../assets/program5.png';
import program6 from '../../assets/progrm6.png';
import employers from '../../assets/employers.png';

const About = () => {
  return (
    <div className="about-section">
      <div className="image-container">
        <img src={imageleft} alt="Left Image" className="left-image" />
        <div className="about-content">
          <h2>About Us</h2>
          <p>International Business Advantage is a Global Search & Business Consulting Company. IBA undertakes complete projects of Search & Recruitment, Business Consulting, Coaching & Training Solutions with MNCs, Blue Chip Co’s, Large Corporate Houses, SME & Family owned businesses since over two and a half decades, based at Gurgaon and have PAN India presence. IBA provides its services in overseas market too.</p>
        </div>
        <img src={imageright} alt="Right Image" className="right-image" />
      </div>
      <h2 className="text">OUR SERVICES</h2>
      <div className="service-container">
        <div className="service-area">
          <div className="service-item">
            <img src={service1} alt="Service Image 1" />
            <p>EXECUTIVE SEARCH 
              EXECUTIVE SEARCH PARTNERS
              RECRUITMENT PARTNERS
              CAMPUS HIRING PARTNERS</p>
          </div>
          <div className="service-item">
            <img src={service2} alt="Service Image 2" />
            <p>BUSINESS CONSULTING
                BUSINESS & MARKETING CONSULTING
                HR CONSULTING & TRANSFORMATION
                IT SUPPORT CONSULTING</p>
          </div>
          <div className="service-item">
            <img src={service3} alt="Service Image 3" />
            <p>AVY KOCHHAR ACADEMY
              LEADERSHIP COACHING SOLUTIONS
              TRAINERS ACADEMY
              IMPACT SALES TRAINING</p>
          </div>
        </div>
      </div>
      <h2 className="text">TOP PROGRAMS</h2>
      <div className="program-container">
      <ul className="about-menu">
            <li>LEADERSHIP COACHING SOLUTION</li>
            <li>IMPACT SALES TRAINING</li>
            <li>SOFTSKILLS PROGRAM</li>
            <li>UNIVERSITY PROGRAM</li>
      </ul>
        <div className="program-area">
          <div className="program-item">
            <img src={program1} alt="Program Image 1" />=
          </div>
          <div className="program-item">
            <img src={program2} alt="Program Image 2" />
          </div>
          <div className="program-item">
            <img src={program3} alt="Program Image 3" />
          </div>
        </div>
        <div className="program-area">
          <div className="program-item">
            <img src={program4} alt="Program Image 1" />
          </div>
          <div className="program-item">
            <img src={program5} alt="Program Image 2" />
          </div>
          <div className="program-item">
            <img src={program6} alt="Program Image 3" />
          </div>
        </div>
        <div className="employers">
          <h2>Top Employers</h2>
          <img src={employers} alt="employers" />
        </div>
      </div>
    </div>
  );
}

export default About;
