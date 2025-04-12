import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";

// 🧱 Estilos
const Container = styled(Box)({
  padding: "2rem",
  backgroundColor: "#f0f0f0",
  minHeight: "100vh",
});

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "30px",
});

const TitleBox = styled(Box)({
  textAlign: "center",
});

const TitleText = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  margin: "5px 0",
  color: "#333",
});

const SectionHeader = styled(Typography)({
  textAlign: "center",
  fontSize: "1.5rem",
  marginBottom: "20px",
});

const CenteredImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
});

const ImageStyled = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
});

const Title = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#800020",
});

const SubTitle = styled(Typography)({
  fontSize: "1.4rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  color: "#333",
});

const Text = styled(Typography)({
  fontSize: "1rem",
  marginTop: "0.5rem",
  color: "#555",
});

// ✅ Imagen con fallback si falla la carga
function ImageWithFallback({ src, alt, ...props }: any) {
  const [imgSrc, setImgSrc] = useState(src);
  const fallback = `${import.meta.env.BASE_URL}fallback.png`;

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallback);
        console.error(`❌ No se pudo cargar la imagen: ${src}`);
      }}
    />
  );
}

export default function AcercaDe() {
  return (
    <Container>
      {/* 🧭 Header */}
      <Header>
        <ImageStyled
          as={ImageWithFallback}
          src={`${import.meta.env.BASE_URL}tecnm.png`}
          alt="Logo TecNM"
          style={{ width: "100px", height: "auto" }}
        />

        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>

        <ImageStyled
          as={ImageWithFallback}
          src={`${import.meta.env.BASE_URL}esctec.png`}
          alt="Logo ESC Tec"
          style={{ width: "100px", height: "auto" }}
        />
      </Header>

      {/* 🏠 Página de Inicio */}
      <SectionHeader>🏠 Página de Inicio</SectionHeader>

      <CenteredImageBox>
        <ImageStyled
          as={ImageWithFallback}
          src={`${import.meta.env.BASE_URL}laboratorio.jpeg`}
          alt="Imagen Tec Saltillo"
        />
      </CenteredImageBox>

      <Title>🔧 Cambios en el Laboratorio</Title>

      <SubTitle>🛠️ Mantenimiento</SubTitle>
      <Text>
        Se realiza mantenimiento constante en el taller, ya que la adquisición de nuevo material representa un alto
        costo. Esto permite extender la vida útil del equipo existente.
      </Text>

      <SubTitle>👥 Personal Clave</SubTitle>
      <ul>
        <li><Text>👨‍🔧 Técnico: Alejandro Quintana</Text></li>
        <li><Text>🧑‍💻 Soporte: Marcos Hernández</Text></li>
      </ul>

      <SubTitle>📍 Estado del Laboratorio</SubTitle>
      <Text>Todas las áreas del laboratorio actualmente se encuentran habilitadas y en funcionamiento.</Text>

      <SubTitle>💰 Equipos de Alto Costo</SubTitle>
      <ul>
        <li><Text>Molino laminador — Valor aproximado: $7 millones</Text></li>
        <li><Text>Muflas y medidores de temperatura — También implican altos costos</Text></li>
      </ul>

      <SubTitle>📅 Acreditación</SubTitle>
      <Text>En 2016 se obtuvo la acreditación ABET, lo cual implicó adecuaciones importantes al laboratorio.</Text>

      <SubTitle>🖼️ Galería AREA DE TRABAJO</SubTitle>

      {/* Galería con Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        {[
          { src: "images/areas.jpg", alt: "Área de Trabajo" },
          { src: "images/1.jpg", alt: "Molino Laminador" },
          { src: "images/2.jpg", alt: "Área de Muflas" },
          { src: "images/3.jpg", alt: "Molino Laminador" },
          { src: "images/4.jpg", alt: "Área de Muflas" },
        ].map((img, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#ddd",
              width: { xs: "100%", sm: "48%", md: "30%" },
              height: "200px",
              textAlign: "center",
            }}
          >
            <ImageStyled
              as={ImageWithFallback}
              src={`${import.meta.env.BASE_URL}${img.src}`}
              alt={img.alt}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
