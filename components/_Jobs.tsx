import { NextPage } from "next"


const Jobs: NextPage = () => {
    return (
        <section className="jobs">
            <div className="container">

                <div className="jobs-content">
                    <h3 className="jobs-title">Looking for a job?</h3>
                    <div className="jobs-body">
                        <div className="jobs-items">
                            <div className="column">
                                <div className="jobs-item">
                                    <img src="https://cdn.sstatic.net/Img/home/jobs-tech.svg?v=42f011c01763" alt="" className="jobs-item-img" />
                                        <p className="jobs-item-description">Browse jobs by technology</p>
                                </div>
                                <div className="jobs-item">
                                    <img src="https://cdn.sstatic.net/Img/home/jobs-salary.svg?v=401840ff8931" alt="" className="jobs-item-img" />
                                        <p className="jobs-item-description">Browse jobs by salary</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="jobs-item">
                                    <img src="https://cdn.sstatic.net/Img/home/jobs-visa.svg?v=1f3acc6dc772" alt="" className="jobs-item-img" />
                                        <p className="jobs-item-description">Browse jobs by visa sponsorship</p>
                                </div>
                                <div className="jobs-item">
                                    <img src="https://cdn.sstatic.net/Img/home/jobs-remote.svg?v=a4b4d1b5a80c" alt="" className="jobs-item-img" />
                                        <p className="jobs-item-description">Browse remote-friendly jobs</p>
                                </div>
                            </div>
                        </div>
                        <div className="jobs-btn">
                            <div className="btn btn-orange jobs-btn">View all jobs</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Jobs