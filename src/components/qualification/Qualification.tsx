import React from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = React.useState(2);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"}
                        onClick={() => toggleTab(1)} data-target="#education">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 1 ?
                        "qualification__button qualification__active button--flex" :
                        "qualification__button button--flex"} 
                        onClick={() => toggleTab(2)}data-target="#work">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ?
                        "qualification__content qualification__active" :
                        "qualification__content"} data-content id="education">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">BS Software Engineering</h3>
                                <span className="qualification__subtitle">CECOS University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ?
                        "qualification__content qualification__active" :
                        "qualification__content"} data-content id="work">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">iENGINEERING</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">Yakoun</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI/UX Designer</h3>
                                <span className="qualification__subtitle">Funprime Technology</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Graphic Designer</h3>
                                <span className="qualification__subtitle">Pinnacle Management Companye</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - 2021
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
