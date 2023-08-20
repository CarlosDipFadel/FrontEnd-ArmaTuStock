import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function GroupExample() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const resetHoveredIndex = () => {
    setHoveredIndex(null);
  };

  const cardsData = [
    {
      src : "https://img.freepik.com/premium-vector/cartoon-young-man-icon_24908-23721.jpg?w=740",
      title: "Agustin Sanchez",
    },
    {
      src: "https://img.freepik.com/free-vector/hand-drawn-people-with-dreadlocks-illustration_23-2149752847.jpg?w=740&t=st=1692462162~exp=1692462762~hmac=3dc13496af8cf47b319a960bc61db0eda902f7d3a309ab8ef8c0a6b0d31d0a7a", 
      title: "Carlos Dip Fadel",
    },
    {
      src: "https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?w=740&t=st=1692463279~exp=1692463879~hmac=6414b17549de184c0c30c6334fa06e65f719a5bce99f098aaf64c568a90ebeb6", 
      title: "Angel Pastrana",
    },
    {
      src: "https://img.freepik.com/premium-photo/close-up-person-wearing-headphones-jacket-generative-ai_958098-25134.jpg?w=740", 
      title: "Lucas Ranalleta",
    },
    {
      src: "https://img.freepik.com/premium-vector/young-man-avatar-character-vector-illustration-design_24877-18517.jpg?w=740", 
      title: "Juan Pablo Rodriguez",
    },
    {
      src: "https://img.freepik.com/premium-vector/cartoon-young-man-icon_24908-23707.jpg?w=740", 
      title: "Mario Copa",
    },
  ];

  return (
    <div>
      <div
        className="description"
        style={{ backgroundColor: "", padding: "20px" }}
      >
        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "16px",
            color: "black",
          }}
        >
          ¡Hola a todos! Somos un apasionado grupo de estudiantes de
          programación que estamos trabajando juntos en un emocionante proyecto
          de diseño web. Nuestra misión es crear una plataforma de control de
          stock intuitiva y eficiente. A medida que exploramos el fascinante
          mundo de la programación, estamos canalizando nuestra creatividad y
          habilidades técnicas para desarrollar una solución que permita a las
          empresas gestionar sus inventarios de manera más eficaz. Estamos
          entusiasmados por fusionar la tecnología con las necesidades del mundo
          real y estamos comprometidos en brindar una herramienta que
          simplifique el seguimiento y la gestión de inventarios. ¡Esperamos que
          nuestro trabajo pueda aportar un impacto positivo al mundo empresarial
          y estamos emocionados de compartir nuestro progreso con todos ustedes!
        </p>
      </div>

      <CardGroup>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={resetHoveredIndex}
            style={{
              transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.3s ease-in-out",
              backgroundColor:
                hoveredIndex === index ? "#" : "transparent", // Color de fondo de cards
              boxShadow:
                hoveredIndex === index
                  ? "0 4px 8px rgba(0, 0, 0, 0)"
                  : "none",
            }}
          >
            <Card.Img
              variant="top"
              src={card.src}
              className="rounded-circle mx-auto mt-3"
            />
            <Card.Body className="text-center">
              <Card.Title>{card.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default GroupExample;
