export const SpecialCard = ({ name, price, description, image }) => {
    return (
        <article className="special-card">
            <img src={image} alt={name} />
            <header>
                <h3>{name}</h3>
                <span className="price">${price}</span>
            </header>
            <main>
                <p>{description}</p>
            </main>
            <footer>
                <a href="/booking" role="button" className="button-link">
                    Order delivery
                </a>
            </footer>
        </article>
    );
};
