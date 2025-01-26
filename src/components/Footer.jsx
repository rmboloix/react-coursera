export const Footer = () => {
    return (
        <footer className="row justify-content-center">
            <div className="col-lg-2">
                <a class="logo" href="/">
                    <img height={60} src="/images/logo2.png" alt="Logo" />
                </a>
            </div>
            <div className="col-lg-2">
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Menu</a>
                        </li>
                        <li>
                            <a href="/">Reservations</a>
                        </li>
                        <li>
                            <a href="/">Order Online</a>
                        </li>
                        <li>
                            <a href="/">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-lg-2">
                <ul>
                    <li>1234 W Grand Avenue, Chicago, IL 60654</li>
                    <li>(312) 555-7890</li>
                    <li>contact@tasteofchicago.com</li>
                </ul>
            </div>
            <div className="col-lg-2">
                <div>Social links</div>
                <div>
                    <a href="/">
                        <img
                            width="32"
                            src="/images/facebook-squared.svg"
                            alt="facebook"
                        />
                    </a>
                    <a href="/">
                        <img
                            width="32"
                            src="/images/linkedin.svg"
                            alt="linkedin"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};
