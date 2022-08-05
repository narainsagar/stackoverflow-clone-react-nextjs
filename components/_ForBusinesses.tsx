import { NextPage } from "next"


const ForBusinesses: NextPage = () => {
    return (
        <section className="for-businesses">
            <div className="container">
                <div className="section-head">
                    <h2 className="section-title">For businesses, by developers</h2>
                    <div className="section-line"></div>
                    <p className="section-description">Our mission is to help developers write the script of the future. This means helping you find and hire skilled developers for your business and providing them the tools they need to share knowledge and work effectively.</p>
                </div>

                <div className="options">
                    <div className="option">
                        <div className="option-icon">
                            <img src="https://cdn.sstatic.net/Img/home/private-questions.svg?v=a4f1cfb08f7e" alt="Private Q&amp;A" />
                        </div>
                        <div className="option-description">
                            Quickly find and share internal knowledge with <a href="#" className="option-link">Private Q&amp;A</a>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3" alt="Talent solutions" />
                        </div>
                        <div className="option-description">
                            Find the perfect candidate for your growing technical team with <a href="#" className="option-link">Talent solutions</a>
                        </div>
                    </div>
                    <div className="option">
                        <div className="option-icon">
                            <img src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02" alt=" Advertising platform" />
                        </div>
                        <div className="option-description">
                            Accelerate the discovery of your products or services through our <a href="#" className="option-link">Advertising platform</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ForBusinesses