// 📂 pages/laboratorio.tsx
import React from "react";
import { Box, Typography, styled } from "@mui/material";

// Estilos base
const Container = styled(Box)({
  padding: "2rem",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f9f9f9",
  color: "#333",
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
  margin: "5px 0",
  fontSize: "1.2rem",
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

const MainImage = styled("img")({
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
});

const ContentBox = styled(Box)({
  background: "#ffffff",
  padding: "20px",
  marginBottom: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
});

const Subtitle = styled(Typography)({
  marginBottom: "10px",
  color: "#004080",
  fontWeight: "bold",
});

const Footer = styled(Box)({
  backgroundColor: "#004080",
  color: "white",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "40px",
});

const ContactLink = styled("a")({
  color: "#cce6ff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
});

// Estilos específicos
const HistoriaTitle = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#800020",
});

const HistoriaSubTitle = styled(Typography)({
  fontSize: "1.4rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  color: "#333",
});

const HistoriaText = styled(Typography)({
  fontSize: "1rem",
  marginTop: "0.5rem",
  color: "#555",
});

// Componente principal
const LaboratorioPage: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <Logo src={`${import.meta.env.BASE_URL}/tecnm.png`} alt="Logo TecNM" />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo src={`${import.meta.env.BASE_URL}/esctec.png`} alt="Escudo ITS" />
      </Header>

      {/* Título principal */}
      <SectionHeader>🏠 Laboratorio de Metalurgia</SectionHeader>
      <CenteredImageBox>
        <MainImage
          src={`${import.meta.env.BASE_URL}/laboratorio.jpeg`}
          alt="Imagen del laboratorio de metalurgia"
        />
      </CenteredImageBox>

      {/* Misión / Visión */}
      <ContentBox>
        <Typography variant="h6" color="primary" sx={{ marginTop: "1.5rem" }}>
          🎯 Misión
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
          Formar profesionales altamente capacitados en el área de metalurgia...
        </Typography>

        <Typography variant="h6" color="primary" sx={{ marginTop: "1.5rem" }}>
          🎯 Visión
        </Typography>
        <Typography variant="body1">
          Ser un laboratorio de referencia en educación y desarrollo tecnológico...
        </Typography>
      </ContentBox>

      {/* Reglamento */}
      <ContentBox>
        <HistoriaTitle>📘 Reglamento del Laboratorio</HistoriaTitle>
        <CenteredImageBox>
          <MainImage
            src={`${import.meta.env.BASE_URL}images/reglamento.JPG`}
            alt="Ejemplo del reglamento dentro del laboratorio"
          />
        </CenteredImageBox>
        <Typography
          align="center"
          variant="body2"
          sx={{ color: "#666", marginBottom: "2rem" }}
        >
          Ejemplo del reglamento colocado en el laboratorio
        </Typography>
      </ContentBox>

      {/* Historia del laboratorio */}
      <ContentBox>
        <HistoriaTitle>📘 Historia del Laboratorio</HistoriaTitle>
        <HistoriaText>
          El laboratorio originalmente fue diseñado para dar soporte a la Ingeniería en Metalurgia...
        </HistoriaText>
        <ul>
          <li><HistoriaText>🔧 Soporte en Ingeniería en Materiales</HistoriaText></li>
          <li><HistoriaText>⚙️ Soporte en Metalurgia</HistoriaText></li>
          <li><HistoriaText>🔥 Soporte en Fundición</HistoriaText></li>
        </ul>
      </ContentBox>

      {/* Materias relacionadas */}
      <ContentBox>
        <HistoriaSubTitle>📚 Materias Relacionadas</HistoriaSubTitle>
        <HistoriaText>
          Aproximadamente el 70% de los contenidos de la materia de Materiales están directamente relacionados...
        </HistoriaText>
        <ul>
          <li><HistoriaText>🧪 Experimentación</HistoriaText></li>
          <li><HistoriaText>📊 Ensayos</HistoriaText></li>
          <li><HistoriaText>🛠️ Proyectos</HistoriaText></li>
        </ul>

        <HistoriaSubTitle>📌 ¿Qué se estudia?</HistoriaSubTitle>
        <HistoriaText>
          En este laboratorio se estudian materiales como:
        </HistoriaText>
        <ul>
          <li><HistoriaText>Metales</HistoriaText></li>
          <CenteredImageBox>
            <MainImage
              src={`${import.meta.env.BASE_URL}images/metal.png`}
              alt="Muestra de metales"
            />
          </CenteredImageBox>
          <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
            Ejemplo de Metales
          </Typography>

          <li><HistoriaText>Polímeros</HistoriaText></li>
          <CenteredImageBox>
            <MainImage
              src={`${import.meta.env.BASE_URL}images/polimero.jpg`}
              alt="Ejemplo de polímeros"
            />
          </CenteredImageBox>
          <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
            Ejemplo de Polímeros
          </Typography>

          <li><HistoriaText>Cerámicas</HistoriaText></li>
          <CenteredImageBox>
            <MainImage
              src={`${import.meta.env.BASE_URL}images/ceramica.jpg`}
              alt="Ejemplo de cerámicas"
            />
          </CenteredImageBox>
          <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
            Ejemplo de Cerámicas
          </Typography>
        </ul>

        <HistoriaSubTitle>👥 Estudiantes</HistoriaSubTitle>
        <HistoriaText>
          Cada semestre, más de 4200 estudiantes hacen uso del laboratorio de materiales...
        </HistoriaText>

        <HistoriaText sx={{ marginTop: "2rem", fontStyle: "italic", color: "#999" }}>
          *Nota: Las materias de Gestión y Sistemas no utilizan este laboratorio actualmente.
        </HistoriaText>
      </ContentBox>

      {/* Encargado */}
      <ContentBox>
        <Subtitle>Encargado</Subtitle>
        <ul>
          <li>👤 Nombre: Alejandro Quintana</li>
          <li>✉️ Correo: aquintana@tecnm.mx</li>
          <li>📞 Extensión: 123</li>
          <li>🕒 Horario: 7:00am - 3:00pm</li>
        </ul>
      </ContentBox>

      {/* Materias impartidas */}
      <ContentBox>
        <Subtitle>Materias Impartidas en los Laboratorios</Subtitle>
        <ul>
          <li>Procesos de Manufactura</li>
          <li>Metal-Mecánica Avanzada</li>
          <li>Maquinado y Herramientas</li>
        </ul>
      </ContentBox>

      {/* Footer */}
      <Footer>
        <Typography variant="h6">Contáctanos</Typography>
        <Typography>📞 Teléfono: 844 288 9460</Typography>
        <Typography>
          ✉️ Correo:{" "}
          <ContactLink href="mailto:se_saltillo@tecnm.mx">
            se_saltillo@tecnm.mx
          </ContactLink>
        </Typography>
      </Footer>
    </Container>
  );
};

export default LaboratorioPage;
