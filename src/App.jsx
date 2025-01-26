import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';

function App() {
    return (
        <div className="container-fluid">
            <header className="row justify-content-center">
                <div className="col-lg-8">
                    <nav class="navbar navbar-expand-md">
                        <a class="logo" href="/">
                            <img
                                height={60}
                                src="/images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg"
                                alt="Logo"
                            />
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a
                                        class="nav-link active"
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        About
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Menu
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Reservations
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Order online
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        Login
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                <article>
                    <section className="row justify-content-center hero">
                        <div className="col-lg-5">
                            <h1>Little Lemon</h1>
                            <h3>Chicago</h3>
                            <div className="content">
                                Located in the heart of Chicago, our restaurant
                                offers a diverse menu designed to satisfy every
                                palate. From fresh, crisp salads to delicious
                                handcrafted pizzas, we take pride in serving a
                                variety of dishes made with high-quality
                                ingredients. Whether you&apos;re in the mood for
                                a light bite or a hearty meal, our welcoming
                                atmosphere and flavorful options make us the
                                perfect spot for any occasion. Join us for a
                                memorable dining experience that celebrates
                                great food and good company!
                            </div>
                            <button className="button">Reserve a table</button>
                        </div>
                        <div
                            className="col-lg-3"
                            style={{ overflow: 'hidden' }}
                        >
                            <img
                                src="/images/chicago-5347435_640.jpg"
                                alt="Logo"
                                width="auto"
                                height="auto"
                            />
                        </div>
                    </section>
                    <section className="row justify-content-center highlights">
                        <div className="col-lg-8">
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'baseline',
                                    justifyContent: 'space-between',
                                    padding: '30px 0 10px',
                                }}
                            >
                                <h2>This week specials</h2>
                                <button class="button">Online Menu</button>
                            </div>
                            <div className="row">
                                <Card
                                    name="Mediterranean Bliss Salad"
                                    description="A vibrant mix of fresh greens, cherry tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, drizzled with our signature lemon-herb vinaigrette. Served with warm pita bread on the side."
                                    price={13.95}
                                    photo="https://media.istockphoto.com/id/2160026798/es/foto/ensalada-de-verano-de-burrata-y-melocotones-fondo-blanco.webp?a=1&b=1&s=612x612&w=0&k=20&c=iUOraPZYsQKTacLIKJnV9ZPF17HJpXLLDlJekUGSNVY="
                                />
                                <Card
                                    name="Chicago Classic Pizza"
                                    description="Our deep-dish pizza features a buttery crust loaded with mozzarella cheese, rich tomato sauce, and your choice of classic toppings like pepperoni, Italian sausage, or fresh vegetables."
                                    price={19.95}
                                    photo="https://media.istockphoto.com/id/1198079266/es/foto/pizza-deluxe-con-pepperoni-salchicha-champi%C3%B1ones-y-pimientos.webp?a=1&b=1&s=612x612&w=0&k=20&c=n2Kdun7TgPAF1ArpIlyzV7ub36kB2YPGp2ojjyTK4K0="
                                />
                                <Card
                                    name="Grilled Chicken Alfredo"
                                    description="Juicy grilled chicken breast served over a bed of fettuccine pasta tossed in a creamy Alfredo sauce, topped with fresh Parmesan and parsley. Served with garlic bread."
                                    price={17.95}
                                    photo="https://media.istockphoto.com/id/622185412/es/foto/filetes-de-pollo-frito-y-verduras-sobre-fondo-de-madera.webp?a=1&b=1&s=612x612&w=0&k=20&c=4r0LBEfmSd4dk6WoKksnezCYysgV620JxD-HiGj9n_o="
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="row justify-content-center highlights"
                        style={{ padding: '100px 0' }}
                    >
                        <div className="col-lg-8">
                            <div
                                className="text-center"
                                style={{ padding: '30px 0' }}
                            >
                                <h2>Testimonials</h2>
                            </div>
                            <div className="row"></div>
                        </div>
                    </section>
                    <section
                        className="row justify-content-center"
                        style={{ padding: '100px 0' }}
                    >
                        <div className="col-lg-4">
                            <h2>Little Lemon</h2>
                            <div>Chicago</div>
                            <div>
                                At the heart of our restaurant is a shared
                                passion for food and community. Founded by
                                Adrian and Mario, two lifelong friends with a
                                love for culinary creativity, our mission is to
                                bring people together through delicious, diverse
                                dishes crafted with care. Adrian brings his
                                expertise in fresh, wholesome ingredients, while
                                Mario infuses the menu with bold flavors and
                                classic recipes reimagined. Together,
                                they&apos;ve created a space where everyone
                                feels at home—whether you&apos;re stopping by
                                for a quick bite or celebrating a special
                                occasion. We believe that great food has the
                                power to create unforgettable memories, and
                                we&apos;re honored to share our vision with the
                                vibrant city of Chicago. Welcome to our
                                table—where every dish is made with love and
                                every guest is family!
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div>
                                <img
                                    width="50%"
                                    src="https://images.unsplash.com/photo-1588938172737-f774f5476d2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hbGV8ZW58MHx8MHx8fDA%3D"
                                    alt="Mario"
                                />
                                <img
                                    width="50%"
                                    src="https://images.unsplash.com/photo-1600574691453-499962cc0611?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1hbGV8ZW58MHx8MHx8fDA%3D"
                                    alt="Adrian"
                                />
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default App;
