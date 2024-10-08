import React from "react";
import { Link } from "react-router-dom";
import AppointmentPoster from "./AppointmentPoster";

const Footer = () => {
    return(
        <div>
            <AppointmentPoster />
            <footer>
                <div className="footer-top">
                    <div className="f-top-one">
                        <img src="https://btom7447.github.io/OAUTH/images/oauthc-logo.png" alt="oauthc logo" />
                        <h5>
                            Obafemi Awolowo University <br />
                            Teaching Hospitals Complex
                        </h5>
                        <p>All for Health</p>
                    </div>
                    <div className="f-top-two">
                        <h6>Important Links</h6>
                        <ul className="footer-links">
                            {/* <li>
                                <Link to="/Home" anchor="bookAppointmentSection">Book Appointment </Link>
                            </li> */}
                            <li>
                                <Link to="/about/find-doctor">Find Doctor</Link>
                            </li>
                            <li>
                                <Link to="/services/health-services">Services</Link>
                            </li>
                            <li>
                                <Link to="/about/about-oauthc">About Us</Link>
                            </li>
                            <li>
                                <Link to="/terms-of-service">Terms of Service</Link>
                            </li>
                            <li>
                                <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="f-top-three">
                        <h6>Contact Us</h6>
                        <p>
                            Corproate Services: +234 815 209 2767 <br />
                            SERVICOM: +234 815 209 2768
                        </p>
                        <p>
                            Security: +234 805 500 2174
                        </p>
                        <p>
                            Address: Obafemi Awolowo University <br />
                            Teaching Hospital Complex Ilesa Road, <br />
                            Ife, Osun State, Nigeria
                        </p>
                    </div>
                    <div className="f-top-four">
                        <h6>Newsletter</h6>
                        <h5> 
                            Get the latest health news and updates 
                        </h5>
                        <div className="subscribe-container">
                            <input type="email" name="newsletter-mail" id="newsletterMail" placeholder="Enter your email address" />
                            <button type="button" className="newsletter-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M21.411 0.674484L21.4031 0.677567L0.744484 9.24017C0.570258 9.31173 0.416449 9.42544 0.296816 9.57112C0.177183 9.71681 0.0954555 9.88994 0.0589457 10.075C0.0186511 10.2688 0.0270797 10.4696 0.083473 10.6594C0.139866 10.8491 0.242455 11.0218 0.382009 11.1619L4.25529 15.0427C4.44635 15.234 4.69804 15.3525 4.96697 15.3778C5.2359 15.4032 5.50523 15.3337 5.72854 15.1814L15.1652 8.67724C15.2024 8.65183 15.2474 8.64023 15.2922 8.64445C15.337 8.64867 15.379 8.66845 15.4109 8.70036C15.4427 8.73227 15.4625 8.77432 15.4667 8.81925C15.4709 8.86419 15.4593 8.90918 15.4339 8.94648L8.94265 18.401C8.79061 18.6246 8.72115 18.8943 8.74623 19.1637C8.77131 19.4331 8.88936 19.6852 9.08005 19.8768L12.954 23.7582C13.0873 23.892 13.2517 23.9905 13.4324 24.0449C13.6131 24.0993 13.8044 24.1079 13.9893 24.0699C14.2122 24.0249 14.417 23.915 14.578 23.754C14.6898 23.6419 14.778 23.5086 14.8376 23.3618L23.4179 2.69827L23.4213 2.68868C23.5334 2.40712 23.5606 2.09881 23.4997 1.80191C23.4387 1.505 23.2922 1.23252 23.0783 1.01819C22.8643 0.80385 22.5924 0.657057 22.296 0.595969C21.9997 0.534881 21.692 0.562178 21.411 0.674484Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>
                        © 2024 Obafemi Awolowo University Teaching Hospital Complex. All Rights Reserved by OAUTHC
                    </p>
                    <div className="footer-links">
                        {/* FACEBOOK */}
                        <a href="https://www.facebook.com/oauthcofficial" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M12.9503 0C5.96372 0 0.300171 5.67447 0.300171 12.6745C0.300171 19.6745 5.96372 25.3489 12.9503 25.3489C19.9368 25.3489 25.6003 19.6745 25.6003 12.6745C25.6003 5.67447 19.9368 0 12.9503 0ZM15.9467 8.75859H14.0453C13.82 8.75859 13.5696 9.05564 13.5696 9.4504V10.8261H15.9481L15.5883 12.788H13.5696V18.6777H11.3255V12.788H9.28964V10.8261H11.3255V9.6722C11.3255 8.0166 12.4719 6.67126 14.0453 6.67126H15.9467V8.75859Z" fill="white"/>
                            </svg>
                        </a>
                        {/* INSTAGRAM */}
                        <a href="https://www.instagram.com/oauthcofficial" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M18.3869 8.78103C18.2771 8.49618 18.109 8.23753 17.8934 8.02174C17.6778 7.80594 17.4195 7.63779 17.1351 7.5281C16.7434 7.38278 16.3298 7.30597 15.9122 7.30102C15.2178 7.26933 15.0096 7.26141 13.2504 7.26141C11.4913 7.26141 11.2831 7.26933 10.5886 7.30102C10.1706 7.30581 9.75652 7.38263 9.36448 7.5281C9.08018 7.63809 8.82203 7.80651 8.60665 8.02254C8.39127 8.23856 8.22344 8.49739 8.11397 8.78235C7.96892 9.17472 7.89226 9.58915 7.88732 10.0075C7.8557 10.7033 7.84779 10.9119 7.84779 12.6745C7.84779 14.437 7.8557 14.6456 7.88732 15.3414C7.89211 15.7602 7.96877 16.1751 8.11397 16.5679C8.22374 16.8527 8.39184 17.1114 8.60745 17.3272C8.82306 17.543 9.08139 17.7111 9.3658 17.8208C9.75742 17.9662 10.1711 18.043 10.5886 18.0479C11.2831 18.0796 11.4913 18.0862 13.2504 18.0862C15.0096 18.0862 15.2178 18.0796 15.9122 18.0466C16.3302 18.0422 16.7443 17.9659 17.1364 17.8208C17.4207 17.7108 17.6788 17.5424 17.8942 17.3264C18.1096 17.1104 18.2774 16.8515 18.3869 16.5666C18.5319 16.1742 18.6086 15.7598 18.6135 15.3414C18.6452 14.6456 18.6518 14.437 18.6518 12.6745C18.6518 10.9119 18.6452 10.7033 18.6122 10.0075C18.6079 9.58879 18.5316 9.1739 18.3869 8.78103ZM13.2504 16.0649C12.5812 16.0649 11.9269 15.866 11.3704 15.4935C10.814 15.121 10.3802 14.5914 10.1241 13.9719C9.868 13.3524 9.80099 12.6707 9.93155 12.013C10.0621 11.3553 10.3844 10.7512 10.8577 10.2771C11.3309 9.80292 11.9339 9.48001 12.5903 9.34919C13.2467 9.21837 13.9271 9.28551 14.5454 9.54213C15.1637 9.79874 15.6922 10.2333 16.064 10.7908C16.4359 11.3484 16.6343 12.0039 16.6343 12.6745C16.6343 13.5737 16.2778 14.436 15.6432 15.0719C15.0086 15.7077 14.1479 16.0649 13.2504 16.0649ZM16.7674 9.94285C16.611 9.94285 16.4582 9.89639 16.3282 9.80935C16.1981 9.72231 16.0968 9.59859 16.037 9.45384C15.9771 9.3091 15.9615 9.14982 15.992 8.99616C16.0225 8.8425 16.0978 8.70135 16.2084 8.59056C16.3189 8.47978 16.4598 8.40433 16.6132 8.37377C16.7665 8.3432 16.9255 8.35889 17.07 8.41885C17.2144 8.4788 17.3379 8.58033 17.4248 8.7106C17.5117 8.84087 17.558 8.99403 17.558 9.1507C17.558 9.36079 17.4747 9.56228 17.3265 9.71084C17.1782 9.8594 16.9771 9.94285 16.7674 9.94285ZM15.4471 12.6745C15.4471 13.1098 15.3182 13.5353 15.0769 13.8972C14.8355 14.2591 14.4924 14.5412 14.091 14.7078C13.6897 14.8744 13.248 14.918 12.8219 14.833C12.3958 14.7481 12.0044 14.5385 11.6972 14.2307C11.39 13.9229 11.1808 13.5308 11.096 13.1038C11.0112 12.6769 11.0547 12.2344 11.221 11.8322C11.3873 11.4301 11.6688 11.0863 12.03 10.8445C12.3913 10.6027 12.816 10.4736 13.2504 10.4736C13.833 10.4736 14.3917 10.7055 14.8037 11.1182C15.2156 11.531 15.4471 12.0908 15.4471 12.6745ZM13.2504 0C10.7485 0 8.30272 0.743344 6.22242 2.13603C4.14213 3.52872 2.52073 5.5082 1.56328 7.82416C0.605823 10.1401 0.355309 12.6885 0.843415 15.1471C1.33152 17.6057 2.53633 19.8641 4.30547 21.6367C6.07462 23.4092 8.32865 24.6163 10.7825 25.1054C13.2364 25.5944 15.7799 25.3434 18.0914 24.3841C20.4029 23.4248 22.3786 21.8003 23.7686 19.716C25.1586 17.6317 25.9005 15.1812 25.9005 12.6745C25.9005 9.31299 24.5677 6.08919 22.1954 3.71227C19.823 1.33534 16.6054 0 13.2504 0V0ZM19.7995 15.3955C19.7883 15.9433 19.6845 16.4853 19.4925 16.9983C19.3232 17.4367 19.0644 17.8349 18.7327 18.1673C18.4009 18.4997 18.0035 18.759 17.566 18.9285C17.0543 19.1208 16.5139 19.2248 15.9676 19.2361C15.2639 19.2678 15.0399 19.2758 13.2504 19.2758C11.461 19.2758 11.237 19.2678 10.5333 19.2361C9.98698 19.2248 9.44653 19.1208 8.93491 18.9285C8.49732 18.759 8.09992 18.4997 7.76817 18.1673C7.43641 17.8349 7.17763 17.4367 7.0084 16.9983C6.81649 16.4857 6.71268 15.9442 6.70138 15.3968C6.66975 14.6918 6.66185 14.4674 6.66185 12.6745C6.66185 10.8816 6.66975 10.6571 6.70138 9.9521C6.71226 9.4048 6.81563 8.86331 7.00709 8.35062C7.17631 7.91182 7.43522 7.51332 7.76722 7.18068C8.09921 6.84805 8.49695 6.58863 8.93491 6.41909C9.44661 6.22726 9.98706 6.12369 10.5333 6.11279C11.237 6.0811 11.461 6.07318 13.2504 6.07318C15.0399 6.07318 15.2639 6.0811 15.9676 6.11279C16.5138 6.12369 17.0543 6.22726 17.566 6.41909C18.0037 6.58879 18.4011 6.84827 18.7329 7.1809C19.0647 7.51353 19.3234 7.91195 19.4925 8.35062C19.6844 8.86323 19.7882 9.40473 19.7995 9.9521C19.8311 10.6571 19.839 10.8816 19.839 12.6745C19.839 14.4674 19.8311 14.6918 19.7995 15.3968V15.3955Z" fill="white"/>
                            </svg>
                        </a>
                        {/* YOUTUBE */}
                        <a href="https://www.youtube.com/@oauthcofficial" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                <path d="M13.5505 0C6.56406 0 0.900513 5.67474 0.900513 12.675C0.900513 19.6753 6.56406 25.35 13.5505 25.35C20.537 25.35 26.2005 19.6753 26.2005 12.675C26.2005 5.67474 20.537 0 13.5505 0ZM18.4 13.135L11.5234 17.1129C11.1698 17.3174 10.7282 17.062 10.7282 16.653V8.69702C10.7282 8.28804 11.1701 8.03229 11.5234 8.23678L18.3997 12.2148C18.7533 12.4192 18.7533 12.9305 18.4 13.135Z" fill="white"/>
                            </svg>
                        </a>
                        {/* TWITTER */}
                        <a href="https://x.com/oauthcofficial" target='_blank' rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M7.2113 6.4812L16.4781 18.8689H18.5766L9.30972 6.4812H7.2113Z" fill="white"/>
                                <path d="M12.8756 0C5.8753 0 0.200562 5.67474 0.200562 12.675C0.200562 19.6753 5.8753 25.35 12.8756 25.35C19.8758 25.35 25.5506 19.6753 25.5506 12.675C25.5506 5.67474 19.8758 0 12.8756 0ZM15.9829 19.8586L11.7641 14.2177L6.54257 19.8586H5.20043L11.1644 13.4158L5.23789 5.49137H9.80568L13.691 10.6864L18.4996 5.49137H19.8417L14.2907 11.4886L20.5507 19.8586H15.9829Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
       
    );
};

export default Footer;