export const Hero = () => {
    return (
        <section className="hero">
            <article>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    Located in the heart of Chicago, our restaurant offers a
                    diverse menu designed to satisfy every palate. From fresh,
                    crisp salads to delicious handcrafted pizzas, we take pride
                    in serving a variety of dishes made with high-quality
                    ingredients. Whether you&apos;re in the mood for a light
                    bite or a hearty meal, our welcoming atmosphere and
                    flavorful options make us the perfect spot for any occasion.
                    Join us for a memorable dining experience that celebrates
                    great food and good company!
                </p>
                <a href="/booking" role="button" className="button">
                    Reserve a table
                </a>
            </article>
            <img width="100%" src="/images/restaurant.jpg" alt="restaurant" />
        </section>
    );
};
