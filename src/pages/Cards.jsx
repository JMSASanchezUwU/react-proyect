import React from 'react';

const Cards = () => {
  const cardContent = [
    {
      title: "Card 1",
      text: "Esta es la tarjeta número 1 con información interesante.",
      link: "#"
    },
    {
      title: "Card 2",
      text: "Esta es la tarjeta número 2 con más detalles fascinantes.",
      link: "#"
    },
    {
      title: "Card 3",
      text: "Esta es la tarjeta número 3 con contenido adicional.",
      link: "#"
    },
    {
      title: "Card 4",
      text: "Esta es la tarjeta número 4 con contenido adicional.",
      link: "#"
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {cardContent.map((card, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <div className="card shadow h-100">
              <img src={`https://via.placeholder.com/150/007bff/ffffff?text=Card+${i + 1}`} className="card-img-top" alt={`Card ${i + 1}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
                <a href={card.link} className="btn btn-outline-primary">Más información</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;