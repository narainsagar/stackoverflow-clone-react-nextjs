import { NextPage } from 'next';

const Hero: NextPage = () => {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1 className='hero-title'>
                    We <span>{'<3'}</span> people who code
                </h1>
                <p className='hero-paragraph'>
                    We build products that empower developers and connect them to solutions that enable productivity, growth, and discovery.
                </p>
                <div className='hero-options'>
                    <a href="#" className="btn btn-developers">For developers</a>
                    <a href="#" className="btn btn-businesses">For businesses</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;