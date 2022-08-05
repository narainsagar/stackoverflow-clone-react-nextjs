import { NextPage } from "next"


const Hire: NextPage = () => {
    return (
        <section className="hire">
            <div className="container">
                <div className="hire-content">
                    <div className="hire-item">
                        <img src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3" alt="" className="hire-icon" />
                            <h4 className="hire-item-title">Hire your technical talent</h4>
                            <p className="hire-item-description">We help expand your technical hiring strategy to promote your employer brand and highlight relevant open roles to our community of over 100 million developers and technologists.</p>
                            <a href="#" className="btn btn-orange">Stack Overflow Talent</a>
                    </div>
                    <div className="hire-item">
                        <img src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02" alt="" className="hire-icon" />
                            <h4 className="hire-item-title">Reach developers worldwide
                            </h4>
                            <p className="hire-item-description">Use the world’s largest resource for people who code to help you increase awareness and showcase your product or service across Stack Overflow’s network of Q&amp;A sites. </p>
                            <a href="#" className="btn btn-orange">Stack Overflow Advertising</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hire