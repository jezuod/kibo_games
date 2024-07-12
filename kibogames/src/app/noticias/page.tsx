import React from "react";

// Interfaz para las propiedades de la tarjeta de noticia
interface TarjetaNoticiaProps {
  titulo: string;
  contenido: string;
  imagen: string;
}

// Componente de tarjeta de noticia
function TarjetaNoticia({ titulo, contenido, imagen }: TarjetaNoticiaProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
        padding: "20px",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imagen}
        alt={titulo}
        style={{
          width: "30%",
          margin: "0 auto",
          borderRadius: "8px 8px 0 0",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ marginBottom: "10px", fontSize: "24px", color: "#333" }}>
        {titulo}
      </h2>
      <p style={{ fontSize: "16px", color: "#666" }}>{contenido}</p>
    </div>
  );
}

// Componente de barra lateral con anuncios
function BarraLateral() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          fontSize: "20px",
          color: "#333",
          textAlign: "center",
        }}
      >
        Anuncios
      </h2>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <img
          src="https://www.camionetica.com/wp-content/uploads/2014/01/Playing-Cards.jpg"
          alt="Anuncio 1"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        />
      </div>
      <p style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        ¡Participa en nuestro concurso de diseño de cartas y gana premios
        emocionantes! Más información en nuestra web.
      </p>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <img
          src="https://img.freepik.com/vector-premium/icono-facebook-instagram-tiktok_469489-859.jpg"
          alt="Anuncio 2"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        />
      </div>
      <p style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        ¡Sigue nuestras redes sociales para estar al tanto de las últimas
        noticias y eventos de Kibo Games!
      </p>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <img
          src="https://images.vexels.com/media/users/3/126935/isolated/preview/3e9c006f8fa3689df92e1370062cbdb7-20-descuento-etiqueta-de-venta.png"
          alt="Anuncio 3"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        />
      </div>
      <p style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        ¡Obtén un descuento exclusivo del 20% en todos los juegos de mesa esta
        semana! Usa el código "KIBOGAMES20" en tu compra.
      </p>
     
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Unity_Technologies_logo.svg/2560px-Unity_Technologies_logo.svg.png"
          alt="Anuncio 4"
          style={{ maxWidth: "100%", margin: "0 auto" }}
        />
      </div>
      <p style={{ marginBottom: "10px", fontSize: "14px", color: "#666" }}>
        ¡Colaboramos con Unity para brindarte experiencias de juego inmersivas y
        de alta calidad! Descubre nuestros últimos juegos desarrollados con
        Unity ahora.
      </p>
    </div>
  );
}

// Componente de página de noticias
export default function NoticiasPage() {
  // Noticias de ejemplo
  const noticias = [
    {
      titulo:
        'Nuevo juego de mesa "Exploradores de la Isla Perdida" lanzado por Kibo Games',
      contenido:
        'Kibo Games ha anunciado el lanzamiento de su último juego de mesa, "Exploradores de la Isla Perdida", un emocionante juego de aventuras en el que los jugadores exploran una isla misteriosa en busca de tesoros perdidos.',
      imagen: "https://nicofideos.files.wordpress.com/2019/09/8-9-web.jpg",
    },
    {
      titulo: "Torneo de juegos de mesa en línea patrocinado por Kibo Games",
      contenido:
        "¡Participa en nuestro torneo en línea de juegos de mesa y gana premios emocionantes! Kibo Games se enorgullece de patrocinar este evento que reúne a jugadores de todo el mundo para competir en juegos de estrategia, habilidad y diversión.",
      imagen:
        "https://as.com/esports/imagenes/2017/08/31/mas_esports/1504196398_695695_1504198907_noticia_normal.jpg",
    },
    {
      titulo:
        'Kibo Games revela avance del próximo juego de mesa "Aventuras en el Espacio"',
      contenido:
        '¡Prepárate para una emocionante aventura en el espacio! Kibo Games ha lanzado un avance de su próximo juego de mesa, "Aventuras en el Espacio", que promete llevar a los jugadores a través de galaxias desconocidas y enfrentar desafíos intergalácticos.',
      imagen:
        "https://donmeeple.com/wp-content/uploads/2021/10/odysea-portada-don-meeple.jpg",
    },
  ];

  return (
    <div style={{ display: "flex", height: '100%' , width: '100%'}}>
      <div style={{ flex: "2.25", padding: "20px" , height: '50%' , width: '50%'}}>
        <h1
          style={{
            marginBottom: "30px",
            color: "black",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          Noticias
        </h1>
        {noticias.map((noticia, index) => (
          <TarjetaNoticia
            key={index}
            titulo={noticia.titulo}
            contenido={noticia.contenido}
            imagen={noticia.imagen}
          />
        ))}
      </div>
      <div
        style={{
          flex: "0.50",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <BarraLateral />
      </div>
    </div>
  );
}
