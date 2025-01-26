export const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2>Testimonials</h2>
            <section className="testimonials-grid">
                <TestimonialCard
                    name="Emma"
                    review="This place is a gem! The Mediterranean Bliss Salad was so fresh and flavorful, and the staff was incredibly friendly. I’ll definitely be coming back for more!"
                    rating={4}
                    image="https://randomuser.me/api/portraits/women/0.jpg"
                />
                <TestimonialCard
                    name="Michael R."
                    review="The Chicago Classic Pizza is hands down the best deep-dish I’ve ever had. The crust was perfect, and the toppings were so fresh. Highly recommend!"
                    rating={4}
                    image="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <TestimonialCard
                    name="Sophia T."
                    review="I stopped in for lunch and was blown away by the variety on the menu. The Grilled Chicken Alfredo was creamy and delicious. Great portion sizes too!"
                    rating={4}
                    image="https://randomuser.me/api/portraits/women/65.jpg"
                />
                <TestimonialCard
                    name="James K."
                    review="Fantastic atmosphere and great food! Everything we tried was cooked to perfection, and the service was top-notch. A must-visit in Chicago!"
                    rating={5}
                    image="https://randomuser.me/api/portraits/men/21.jpg"
                />
            </section>
        </section>
    );
};

export const TestimonialCard = ({ name, review, rating, image }) => {
    return (
        <article className="testimonial-card">
            <div>
                Rating: {rating}/5 {'⭐'.repeat(rating)}
            </div>
            <header>
                <img src={image} width={60} />
                {name}
            </header>
            <main>
                <p>{review}</p>
            </main>
        </article>
    );
};
