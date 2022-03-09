import "../styles/Footer.scss";
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <p className="credits">Designed and developed by Candela Olha</p>
            <ul className="social-media-icons">
                <li className="social-media-item">
                    <a href="https://github.com/CandelaOlha" target="_blank" className="social-media-link">
                        <FaGithub aria-label="GitHub" />
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="https://www.linkedin.com/in/candela-olha/" target="_blank" className="social-media-link">
                        <FaLinkedinIn aria-label="LinkedIn" />
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="mailto:olhacandela@gmail.com" target="_blank" className="social-media-link">
                        <FaEnvelope aria-label="Gmail" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;