import "./footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Asif Khan</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className='footer__link'>Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.behance.net/asifkhanafridi" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="Behance"><i className='uil uil-behance-alt'></i></a>

                    <a href="https://github.com/asifaliafridi" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="GitHub"><i className='uil uil-github-alt'></i></a>

                    <a href="https://www.linkedin.com/in/asifkhanafridi" className="footer__social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className='uil uil-linkedin-alt'></i></a>
                </div>

                <span className='footer__copy'>
                    &#169; Asif khan. All rights reserved
                </span>
            </div>

        </footer>
    )
}

export default Footer