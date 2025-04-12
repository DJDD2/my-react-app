import { Box, Typography, styled } from "@mui/material";

// 🧱 Estilos generales
const Container = styled(Box)({
  padding: "2rem",
  backgroundColor: "#f9f9f9",
  minHeight: "100vh",
});

const Header = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "30px",
});

const Logo = styled("img")({
  width: "100px",
  height: "auto",
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

const Title = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#800020",
});

const Description = styled(Typography)({
  fontSize: "1.1rem",
  marginBottom: "1rem",
});

const MapContainer = styled("iframe")({
  width: "100%",
  height: "500px",
  border: 0,
  borderRadius: "8px",
  marginTop: "2rem",
});

const ImageStyled = styled("img")({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
  marginTop: "1rem",
});

export default function Ubicacion() {
  return (
    <Container>
      {/* 🧭 Header */}
      <Header>
        <Logo
          src={`${import.meta.env.BASE_URL}tecnm.png`}
          alt="Logo TecNM"
        />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo
          src={`${import.meta.env.BASE_URL}esctec.png`}
          alt="Escudo ITS"
        />
      </Header>

      <Title>📍 Ubicación del Taller</Title>

      <Description>
        El taller de metalurgia y materiales se encuentra dentro de las instalaciones del TecNM Campus Saltillo, en el campus conocido como “Ejido”. 
        En el croquis está enumerado con el número <strong>50</strong>, cerca de las áreas de ingeniería. 
        Cuenta con fácil acceso para los estudiantes y señalización clara dentro del campus.
      </Description>

      {/* Imagen del croquis o entrada */}
      <ImageStyled
        src={`${import.meta.env.BASE_URL}images/ubicacion.png`} // Asegúrate que la imagen esté en la carpeta correcta
        alt="Entrada al taller"
      />

      {/* Mapa embebido */}
      <MapContainer
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.6035814875653!2d-100.9781678!3d25.4526071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8688768eb8eacb99%3A0x1bd94c9b6b620815!2sTecNM%20-%20Campus%20Saltillo!5e0!3m2!1ses!2smx!4v1640643068857!5m2!1ses!2smx"
        allowFullScreen
        loading="lazy"
      />
    </Container>
  );
}
