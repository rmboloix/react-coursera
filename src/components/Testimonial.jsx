export const Testimonial = ({ name, photo, rating, review }) => {
    return (
        <div className="col-md-3">
            <div style={{ gap: '10px', padding: '18px' }} className="card">
                <div>
                    Rating: {rating}/5 {'⭐'.repeat(rating)}
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start',
                        gap: '20px',
                    }}
                >
                    <img src={photo} width={60} height={60} alt={name} />
                    <h5>{name}</h5>
                </div>
                <div>{review}</div>
            </div>
        </div>
    );
};
