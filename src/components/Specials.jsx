import { SpecialCard } from './SpecialCard';

export const Specials = () => {
    return (
        <section className="specials">
            <h2>Week specials!</h2>
            <div className='button-container'>
                <a href="/booking" role="button" className='button'>Order Online</a>
            </div>
            <section className="specials-grid">
                <SpecialCard
                    name="Mediterranean Bliss Salad"
                    description="A vibrant mix of fresh greens, cherry tomatoes, cucumbers, red onions, Kalamata olives, and feta cheese, drizzled with our signature lemon-herb vinaigrette. Served with warm pita bread on the side."
                    price={13.95}
                    image="https://media.istockphoto.com/id/2160026798/es/foto/ensalada-de-verano-de-burrata-y-melocotones-fondo-blanco.webp?a=1&b=1&s=612x612&w=0&k=20&c=iUOraPZYsQKTacLIKJnV9ZPF17HJpXLLDlJekUGSNVY="
                />
                <SpecialCard
                    name="Chicago Classic Pizza"
                    description="Our deep-dish pizza features a buttery crust loaded with mozzarella cheese, rich tomato sauce, and your choice of classic toppings like pepperoni, Italian sausage, or fresh vegetables."
                    price={19.95}
                    image="https://media.istockphoto.com/id/1198079266/es/foto/pizza-deluxe-con-pepperoni-salchicha-champi%C3%B1ones-y-pimientos.webp?a=1&b=1&s=612x612&w=0&k=20&c=n2Kdun7TgPAF1ArpIlyzV7ub36kB2YPGp2ojjyTK4K0="
                />
                <SpecialCard
                    name="Grilled Chicken Alfredo"
                    description="Juicy grilled chicken breast served over a bed of fettuccine pasta tossed in a creamy Alfredo sauce, topped with fresh Parmesan and parsley. Served with garlic bread."
                    price={17.95}
                    image="https://media.istockphoto.com/id/622185412/es/foto/filetes-de-pollo-frito-y-verduras-sobre-fondo-de-madera.webp?a=1&b=1&s=612x612&w=0&k=20&c=4r0LBEfmSd4dk6WoKksnezCYysgV620JxD-HiGj9n_o="
                />
            </section>
        </section>
    );
};
