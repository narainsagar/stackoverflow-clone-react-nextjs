import { NextPage } from "next"


const Questions: NextPage = () => {
    return (
        <section className="questions">
            <div className="container">
                <div className="questions-content">
                    <div className="questions-header">
                        <h3 className="question-title">Questions are everywhere, answers are on Stack Overflow</h3>
                    </div>
                    <div className="questions-body">
                        <div className="questions-body-items">
                            <div className="questions-body-item" data-id="0">
                                <img src="https://cdn.sstatic.net/Img/home/ask-a-question.svg?v=f4f2050b0297" alt="" className="question-item-icon" />
                                    <div className="question-item-text">Ask a question</div>
                                    <div className="question-arrow-right"></div>
                            </div>
                            <div className="questions-body-item" data-id="1">
                                <img src="https://cdn.sstatic.net/Img/home/votes.svg?v=748a8f48a8e2" alt="" className="question-item-icon" />
                                    <div className="question-item-text">Vote on everything</div>
                                    <div className="question-arrow-right"></div>
                            </div>
                            <div className="questions-body-item" data-id="2">
                                <img src="https://cdn.sstatic.net/Img/home/answer.svg?v=4cd8048a676c" alt="" className="question-item-icon" />
                                    <div className="question-item-text">Answer questions</div>
                                    <div className="question-arrow-right"></div>
                            </div>
                        </div>
                        <div className="questions-body-item-content">
                            <img src="https://cdn.sstatic.net/Img/home/illo-feats-recognize.svg?v=4f011d7173e8" alt="" className="question-item-content-img" />
                                <h4 className="question-item-content-text">
                                    Accept the answer which solved your problem to let others benefit from the valuable information.
                                </h4>
                                <a href="#" className="btn btn-orange question-item-content-btn">Create an account</a>
                        </div>
                        <div className="questions-body-items">
                            <div className="questions-body-item" data-id="3">
                                <img src="https://cdn.sstatic.net/Img/home/tags.svg?v=913379eb09eb" alt="" className="question-item-icon" />
                                    <div className="question-item-text">Tag your question</div>
                                    <div className="question-arrow-left"></div>
                            </div>
                            <div className="questions-body-item" data-id="4">
                                <img src="https://cdn.sstatic.net/Img/home/accept.svg?v=27d5be078970" alt="" className="question-item-icon" />
                                    <div className="question-item-text">Accept a answer</div>
                                    <div className="question-arrow-left"></div>
                            </div>
                            <div className="questions-body-item active" data-id="5">
                                <img src="https://cdn.sstatic.net/Img/home/get-recognized.svg?v=3b339d9aa10c" alt="" className="question-item-icon" />
                                    <div className="question-item-text">Get recognized</div>
                                    <div className="question-arrow-left"></div>
                            </div>
                        </div>
                    </div>
                    <div className="questions-footer">
                        <h3 className="question-title">Learn and grow with Stack Overflow</h3>
                        <div className="questions-grid">
                            <div className="questions-grid-item">
                                <div className="grid-item-img">
                                    <img src="https://cdn.sstatic.net/Img/home/developer.svg?v=b930de7967a7" alt="" />
                                </div>
                                <h4 className="grid-item-title">Write the script of the future</h4>
                                <p className="grid-item-description">Get your coding questions answered to learn, build, and level up whether you’re beginning with
                                    <a href="#">JavaScript</a> or a <a href="#">React</a> professional.
                                </p>
                            </div>
                            <div className="questions-grid-item">
                                <div className="grid-item-img">
                                    <img src="https://cdn.sstatic.net/Img/home/open-source.svg?v=847b604fd2ab" alt="" />
                                </div>
                                <h4 className="grid-item-title">Support open source
                                </h4>
                                <p className="grid-item-description">Reach users of your project by following tags, answering newcomer questions, and empowering experts in the community.
                                    <a href="#"> Read the curl project creator’s story.</a>


                                </p>
                            </div>
                            <div className="questions-grid-item">
                                <div className="grid-item-img">
                                    <img src="https://cdn.sstatic.net/Img/home/advocate.svg?v=4b03cfb93502" alt="" />
                                </div>
                                <h4 className="grid-item-title">Acquire and share knowledge
                                </h4>
                                <p className="grid-item-description">Answer questions and <a href="#">gain insights</a> from an audience of developers using your technology on Stack Overflow.
                                </p>
                            </div>
                            <div className="questions-grid-item">
                                <div className="grid-item-img">
                                    <img src="https://cdn.sstatic.net/Img/home/career-switcher.svg?v=a41416ff19df" alt="" />
                                </div>
                                <h4 className="grid-item-title">Find career opportunities
                                </h4>
                                <p className="grid-item-description">Create a profile that shows off your expertise and credentials to help you make your next move. Start your
                                    <a href="#">Developer Story</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions