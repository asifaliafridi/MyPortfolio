import React from 'react';
import './services.css';

const Services = () => {
    const [modalOpen, setModalOpen] = React.useState<number | null>(null);

    const toggleModal = (index: number) => {
        if (modalOpen === index) {
            setModalOpen(null);
        } else {
            setModalOpen(index);
        }
    };

    return (
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I Offer</span>

            <div className='services__container container grid'>
                {/* Graphic Designer */}
                <div className='services__content'>
                    <div>
                        <i className='uil uil-palette services__icon'></i>
                        <h3 className='services__title'>Graphic <br /> Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleModal(1)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={`services__modal ${modalOpen === 1 ? 'active-modal' : ''}`}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleModal(0)} className='uil uil-times services__modal-close'></i>
                            <h4 className='services__modal-title'>Graphic Designer</h4>
                            <p className='services__modal-description'>
                                Over 4 years of experience in creating brand identities, social media graphics, and visual communication materials that enhance brand presence and storytelling.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Logo, banner, and brand identity design.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Marketing and social media design assets.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Creative layouts and visual storytelling.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Designs optimized for print and digital platforms.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Collaboration with clients to bring visual ideas to life.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* UI/UX Designer */}
                <div className='services__content'>
                    <div>
                        <i className='uil uil-object-group services__icon'></i>
                        <h3 className='services__title'>UI/UX <br /> Designer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleModal(2)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={`services__modal ${modalOpen === 2 ? 'active-modal' : ''}`}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleModal(0)} className='uil uil-times services__modal-close'></i>
                            <h4 className='services__modal-title'>UI/UX Designer</h4>
                            <p className='services__modal-description'>
                                Designing user-centered digital experiences through thoughtful research, wireframing, and prototyping with a focus on usability and modern aesthetics.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>User research, wireframing, and prototyping.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Interactive design using Figma and Adobe XD.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Creating design systems and style guides.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Usability testing and design iteration.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Responsive UI layouts for web and mobile.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Frontend Developer */}
                <div className='services__content'>
                    <div>
                        <i className='uil uil-brackets-curly services__icon'></i>
                        <h3 className='services__title'>Frontend <br /> Developer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleModal(3)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={`services__modal ${modalOpen === 3 ? 'active-modal' : ''}`}>
                        <div className='services__modal-content'>
                            <i onClick={() => toggleModal(0)} className='uil uil-times services__modal-close'></i>
                            <h4 className='services__modal-title'>Frontend Developer</h4>
                            <p className='services__modal-description'>
                                Building responsive and high-performing web interfaces using React, modern CSS frameworks, and best practices for performance and accessibility.
                            </p>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>React.js development with reusable components.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Integration of APIs and dynamic data handling.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>State management using Context API and Hooks.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Pixel-perfect UI implementation from design mockups.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'></i>
                                    <p className='services__modal-info'>Responsive, SEO-friendly, and optimized code.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services