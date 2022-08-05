import { faCity } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NextPage } from "next"


const ForTeams: NextPage = () => {
    return (
        <section className="teams">
            <div className="container">
                <div className="teams-head">
                    <h2 className="teams-title">Unlock siloed knowledge with Stack Overflow for Teams
                    </h2>
                    <p className="teams-description">Wikis, chat messages, or formal documentation for knowledge management aren’t effective. Our question and answer format is a proven approach for accessing the right information in less time.
                    </p>
                    <div className="teams-details">
                        <a href="#" className="btn btn-orange">Learn More</a>
                    </div>
                </div>

                <div className="teams-plan">
                    <div className="card card-basic">
                        <div className="card-header">
                            <h2 className="plan-type">Basic</h2>
                            <p className="plan-description">Private knowledge base for teams</p>
                        </div>
                        <div className="card-body">
                            <div className="plan-price">
                                <div className="price">$6 USD</div>
                                <span className="per">per teammate / month</span>
                            </div>
                            <div className="plan-features">
                                <div className="plan-feature">
                                    <i className="far fa-calendar-alt"></i>
                                    <span className="plan-text">Free 30 day trial</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fab fa-keycdn"></i>
                                    <span className="plan-text">Your own private space hosted on stackoverflow.com</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-archive"></i>
                                    <span className="plan-text">Fully searchable archive</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-card">Get started for free</a>
                        </div>
                    </div>

                    <div className="card card-business">
                        <div className="card-most-used">
                            <span>MOST USED</span>
                            {/* <i className="fas fa-city"></i> */}
                            <FontAwesomeIcon icon={faCity} className='me-2'/>
                        </div>
                        <div className="card-header">
                            <h2 className="plan-type">Business</h2>
                            <p className="plan-description">Private knowledge base with SSO and premium features</p>
                        </div>
                        <div className="card-body">
                            <div className="plan-price">
                                <div className="price">$12 USD
                                </div>
                                <span className="per">per teammate / month</span>
                            </div>
                            <div className="plan-features">
                                <div className="plan-feature">
                                    <i className="fas fa-key"></i>
                                    <span className="plan-text">Single sign-on (SSO) with SAML</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="far fa-chart-bar"></i>
                                    <span className="plan-text">Reporting and analytics</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-plus-square"></i>
                                    <span className="plan-text">Priority customer support</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-star"></i>
                                    <span className="plan-text">99.5% uptime
                                    </span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-plus"></i>
                                    <span className="plan-text">All the features of Basic tier</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-card">Get started</a>
                        </div>
                    </div>

                    <div className="card card-enterprise">
                        <div className="card-header">
                            <h2 className="plan-type">Enterprise</h2>
                            <p className="plan-description">
                                Standalone knowledge base with enhanced security and flexible hosting
                            </p>
                        </div>
                        <div className="card-body">
                            <div className="plan-price">
                                <div className="price">Custom pricing </div>
                                <span className="per">Let's talk about what you need</span>
                            </div>
                            <div className="plan-features">
                                <div className="plan-feature">
                                    <i className="fas fa-key"></i>
                                    <span className="plan-text">Single sign-on with AD or SAML</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-mountain"></i>
                                    <span className="plan-text">Host on your cloud or servers – or our private managed cloud</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-code"></i>
                                    <span className="plan-text">Robust read and write API</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-user"></i>
                                    <span className="plan-text">Your own customer success and community building representative</span>
                                </div>
                                <div className="plan-feature">
                                    <i className="fas fa-star"></i>
                                    <span className="plan-text">99.5% uptime SLA and priority support</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-card">Request a demo</a>
                        </div>
                    </div>
                </div>

                <div className="teams-footer">
                    <a className="teams-footer-item">
                        <img src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910" alt="" />
                            <div className="teams-footer-text"><strong>Leader</strong> <span>Summer 2020</span> </div>
                    </a>
                    <a className="teams-footer-item">
                        <img src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910" alt="" />
                            <div className="teams-footer-text"><strong>Users Love Us</strong> </div>
                    </a>
                    <a className="teams-footer-item">
                        <img src="https://cdn.sstatic.net/Img/product/teams/endorsements/fastco.svg?v=5ebc802a76c7" alt="" />
                            <div className="teams-footer-text"><strong>Most Innovative Companies</strong> <span>2019</span> </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ForTeams