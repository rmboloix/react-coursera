import { SpecialCard } from './SpecialCard';

export const Specials = () => {
    return (
        <section className="specials">
            <h2>Week specials!</h2>
            <div className='button-container'>
                <a href="/" role="button" className='button'>Order Online</a>
            </div>
            <section className="specials-grid">
                <SpecialCard
                    name="Mediterranean Bliss Salad"
                    description="A vibrant mix of fresh greens, cherry tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, drizzled with our signature lemon-herb vinaigrette. Served with warm pita bread on the side."
                    price={13.95}
                    image="/images/greek salad.jpg"
                />
                <SpecialCard
                    name="Chicago Classic Pizza"
                    description="Our deep-dish pizza features a buttery crust loaded with mozzarella cheese, rich tomato sauce, and your choice of classic toppings like pepperoni, Italian sausage, or fresh vegetables."
                    price={19.95}
                    image="/images/pizza.webp"
                />
                <SpecialCard
                    name="Grilled Chicken Alfredo"
                    description="Juicy grilled chicken breast served over a bed of fettuccine pasta tossed in a creamy Alfredo sauce, topped with fresh Parmesan and parsley. Served with garlic bread."
                    price={17.95}
                    image="/images/grilled-chicken.webp"
                />
            </section>
        </section>
    );
};
