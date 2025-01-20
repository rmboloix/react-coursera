import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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
                                    padding: '30px 0 10px'
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
                                />
                                <Card
                                    name="Chicago Classic Pizza"
                                    description="Our deep-dish pizza features a buttery crust loaded with mozzarella cheese, rich tomato sauce, and your choice of classic toppings like pepperoni, Italian sausage, or fresh vegetables."
                                    price={19.95}
                                />
                                <Card
                                    name="Grilled Chicken Alfredo"
                                    description="Juicy grilled chicken breast served over a bed of fettuccine pasta tossed in a creamy Alfredo sauce, topped with fresh Parmesan and parsley. Served with garlic bread."
                                    price={17.95}
                                />
                            </div>
                        </div>
                    </section>
                    <section>Testimonials</section>
                    <section>About</section>
                </article>
            </main>
            <footer>Footer Navigation</footer>
        </div>
    );
}

export default App;

const Card = ({ name, description, price }) => {
    return (
        <div className="col-md-4">
            <div style={{ gap: '10px', padding: '18px' }} className="card">
                <img src="https://dummyimage.com/200x200/fff/000" alt={name} />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                    }}
                >
                    <h5>{name}</h5>
                    <div>${price}</div>
                </div>
                <div>{description}</div>
                <a href="/">Order a delivery</a>
            </div>
        </div>
    );
};
