export const Card = ({ name, description, price, photo }) => {
    return (
        <div className="col-md-4">
            <div style={{ gap: '10px', padding: '18px' }} className="card">
                <img width="100%" src={photo} alt={name} />
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
