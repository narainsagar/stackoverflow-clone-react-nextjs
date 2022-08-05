import { NextPage } from "next"
import Image from 'next/image'

const ForDevelopers: NextPage = () => {
    return (
        <section className="for-developers">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-title">For developers, by developers
                    </h2>
                    <div className="section-line"></div>
                    <p className="section-description">Stack Overflow is an <a href="#">open community</a> for anyone that codes. We help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.
                    </p>
                </div>
                <div className="options">
                    <div className="option">
                        <div className="option-icon">
                            <img src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" alt="Public Q &amp; A" />
                        </div>
                        <div className="option-title">
                            Public Q&amp;A
                        </div>
                        <div className="option-description">
                            Get answers to more than 16.5 million questions and give back by sharing your knowledge with others.
                            <a href="#">Sign up</a> for an account.
                        </div>
                        <div className="option-button">
                            <a href="#" className="option-link btn btn-dark-blue">
                                Browse questions
                            </a>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7" alt="Private Q &amp; A" />
                        </div>
                        <div className="option-title">
                            Public Q&amp;A
                        </div>
                        <div className="option-description">
                            Level up with Stack Overflow while you work. Share knowledge privately with your coworkers using our flagship Q&amp;A engine.
                        </div>
                        <div className="option-button">
                            <a href="#" className="option-link btn btn-orange">
                                Try for free
                            </a>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee" alt="Browse jobs" />
                        </div>
                        <div className="option-title">
                            Public Q&amp;A
                        </div>
                        <div className="option-description">
                            Find the right job through high quality listings and search for roles based on title, technology stack, salary, location, and more.
                        </div>
                        <div className="option-button">
                            <a href="#" className="option-link btn btn-dark-blue">
                                Find a job
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForDevelopers