import { Logo } from './Logo';

export const Header = () => {
    return (
        <header>
            <Logo />
            <nav>
                <ul className="nav-links">
                    <li className="active">
                        <a aria-current="page" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/booking">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order online</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
