import { faStackOverflow } from "@fortawesome/free-brands-svg-icons"
import { faBriefcase, faGlobeEurope, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"


const Header: NextPage = () => {
    return (
        <header>
            <div className="nav-container">
                <nav>
                    <div className="nav-brand">
                        <div className="hamburger-menu-container">

                            <div className="hamburger-menu">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </div>
                            <div className="nav-dropdown-menu">
                                <a href="#" className="current-link">Home</a>
                                <h5>Public</h5>
                                <ul className="nav-ul">
                                    <li className="nav-item">
                                        {/* <i className="fas fa-globe-europe"></i> */}
                                        <FontAwesomeIcon icon={faGlobeEurope} />
                                        <a href="#" className="nav-link">Stack Overflow</a>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link">Tags</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Users</a></li>
                                </ul>
                                <h5>Find a Job</h5>
                                <ul className="nav-ul">
                                    <li className="nav-item"><a href="#" className="nav-link">Jobs</a></li>
                                    <li className="nav-item"><a href="#" className="nav-link">Companies</a></li>
                                </ul>
                                <h5>Teams <a href="#">What's this ?</a></h5>
                                <a href="#" className="nav-link">
                                    {/* <i className="fas fa-briefcase"></i> */}
                                    <FontAwesomeIcon icon={faBriefcase} />
                                    <span>Free 30 Day Trial</span>
                                </a>
                            </div>
                        </div>

                        <a href="#" className="nav-icon">
                            {/* <i className="fab fa-stack-overflow"></i> */}
                            <FontAwesomeIcon icon={faStackOverflow} fontSize={'3rem'} />
                            <div className="nav-icon-text">stack <span className="nav-bold-text">overflow</span>
                            </div>
                        </a>
                    </div>
                    <div className="nav-base-links">
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">For Teams</a></li>
                        </ul>
                    </div>
                    <div className="nav-search">
                        <div className="search-container">
                            {/* <i className="fas fa-search"></i> */}
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" id="" placeholder="Search..." />
                        </div>
                        <div className="search-hints">
                            <div className="search-arrow-up"></div>
                            <div className="search-hint-body">
                                <div className="hints-grid-column">
                                    <div className="hint-text"><span>[tag] </span> search within a tag</div>
                                    <div className="hint-text"><span>user:1234 </span>  search by author</div>
                                    <div className="hint-text"><span>"words here"</span> exact phrase </div>
                                </div>
                                <div className="hints-grid-column">
                                    <div className="hint-text"><span>answers:0</span> unanswered questions</div>
                                    <div className="hint-text"><span> score:3  </span> posts with a 3+ score</div>
                                    <div className="hint-text"><span>isaccepted:yes </span> search within status</div>
                                </div>
                            </div>
                            <div className="search-hint-footer">
                                <a href="#" className="btn">Ask a question</a>
                                <a href="#" className="search-help">Search help</a>
                            </div>
                        </div>

                    </div>
                    <div className="nav-right-buttons">
                        <div className="search-btn">
                            <i className="fas fa-search"></i>
                        </div>
                        <a href="#" className="btn btn-login">Log in</a>
                        <a href="#" className="btn btn-register">Sign up</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header