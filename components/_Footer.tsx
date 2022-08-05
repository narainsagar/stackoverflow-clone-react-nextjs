import { NextPage } from "next";


const Footer: NextPage = () => {
    return (
        <footer className="footer">
            <img src="https://cdn.sstatic.net/Img/home/robot.svg?v=dfa16a330cbd" alt="" className="footer-robot-img" />
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-icon">
                            <i className="fab fa-stack-overflow"></i>
                        </div>
                        <div className="footer-nav">
                            <div className="footer-nav-col">
                                <div className="footer-links-title"><a href="#">Stack Overflow</a></div>
                                <ul className="footer-links">
                                    <li className="footer-link-item"><a href="#" className="footer-link">Questions</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Jobs</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Developer Jobs Directory</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Salary Calculator</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Help</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Mobile</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Disable Responsiveness</a></li>
                                </ul>
                            </div>
                            <div className="footer-nav-col">
                                <div className="footer-links-title"><a href="#">Products</a></div>
                                <ul className="footer-links">
                                    <li className="footer-link-item"><a href="#" className="footer-link">Teams</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Talent</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Advertising</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Enterprise</a></li>
                                </ul>
                            </div>
                            <div className="footer-nav-col">
                                <div className="footer-links-title"><a href="#">Company</a></div>
                                <ul className="footer-links">
                                    <li className="footer-link-item"><a href="#" className="footer-link">About</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Press</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Work Here</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Legal</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Privacy Policy</a></li>
                                    <li className="footer-link-item"><a href="#" className="footer-link">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="footer-nav-col">
                                <div className="footer-links-title"><a href="#">Stack Exchange Network</a></div>
                                <ul className="footer-links">
                                    <li className="footer-link-item">
                                        <a href="#" className="footer-link">Technology</a>
                                        <div className="footer-arrow-icon">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="footer-link-item">
                                        <a href="#" className="footer-link">Life / Arts</a>
                                        <div className="footer-arrow-icon">
                                            <i className="fas fa-chevron-right"></i>
                                        </div></li>
                                    <li className="footer-link-item">
                                        <a href="#" className="footer-link">Culture / Recreation</a>
                                        <div className="footer-arrow-icon">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="footer-link-item">
                                        <a href="#" className="footer-link">Science</a>
                                        <div className="footer-arrow-icon">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="footer-link-item">
                                        <a href="#" className="footer-link">Other</a>
                                        <div className="footer-arrow-icon">
                                            <i className="fas fa-chevron-right"></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-another-links">
                            <div className="social-media">
                                <ul>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="#">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="#">Instagram</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright">
                                <p>
                                    site design / logo © 2020 Stack Exchange Inc; user contributions licensed under 
                                    <a href="https://stackoverflow.com/help/licensing">cc by-sa</a>. rev 2020.10.2.37725
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
        </footer>
    )
}

export default Footer;