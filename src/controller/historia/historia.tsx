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
        <Logo src="images/tecnm.png" alt="Logo TecNM" />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo src="images/esctec.png" alt="Escudo ITS" />
      </Header>

      {/* Título principal */}
      <SectionHeader>🏠 Laboratorio de Metalurgia</SectionHeader>
      <CenteredImageBox>
        <MainImage src="images/laboratorio.jpeg" alt="Imagen del laboratorio" />
      </CenteredImageBox>

      {/* Misión / Visión */}
      <ContentBox>
        <Typography variant="h6" color="primary" sx={{ marginTop: "1.5rem" }}>
          🎯 Misión
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
          Formar profesionales altamente capacitados en el área de metalurgia, a través de prácticas de laboratorio que promuevan el conocimiento, la innovación y el uso responsable de los recursos metálicos para el desarrollo industrial sostenible.
        </Typography>

        <Typography variant="h6" color="primary" sx={{ marginTop: "1.5rem" }}>
          🎯 Visión
        </Typography>
        <Typography variant="body1">
          Ser un laboratorio de referencia en educación y desarrollo tecnológico en el campo de la metalurgia, reconocido por su infraestructura, seguridad, compromiso académico y contribución a la investigación aplicada y al fortalecimiento del sector industrial.
        </Typography>
      </ContentBox>

      {/* Reglamento */}
      <ContentBox>
        <HistoriaTitle>📘 REGLAMENTO DEL LABORATORIO</HistoriaTitle>
        <CenteredImageBox>
          <MainImage src="./images/reglamento.JPG" alt="Normas visibles dentro del laboratorio" />
        </CenteredImageBox>
        <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
          Ejemplo del reglamento colocado en el laboratorio
        </Typography>
      </ContentBox>

      {/* Historia del laboratorio */}
      <ContentBox>
        <HistoriaTitle>📘 Historia del Laboratorio</HistoriaTitle>
        <HistoriaText>
          El laboratorio originalmente fue diseñado para dar soporte a la Ingeniería en Metalurgia. Con el paso del tiempo, su enfoque se ha ampliado para brindar soporte en tres áreas fundamentales:
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
          Aproximadamente el 70% de los contenidos de la materia de Materiales están directamente relacionados con la metalurgia. Por ello, los estudiantes visitan el laboratorio para realizar:
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
            <MainImage src="./images/metal.png" alt="Ejemplo de Metales" />
          </CenteredImageBox>
          <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
            Ejemplo de Metales
          </Typography>

          <li><HistoriaText>Polímeros</HistoriaText></li>
          <CenteredImageBox>
            <MainImage src="./images/polimero.jpg" alt="Ejemplo de Polímeros" />
          </CenteredImageBox>
          <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
            Ejemplo de Polímeros
          </Typography>

          <li><HistoriaText>Cerámicas</HistoriaText></li>
          <CenteredImageBox>
            <MainImage src="./images/ceramica.jpg" alt="Ejemplo de Cerámicas" />
          </CenteredImageBox>
          <Typography align="center" variant="body2" sx={{ color: "#666", marginBottom: "2rem" }}>
            Ejemplo de Cerámicas
          </Typography>
        </ul>

        <HistoriaSubTitle>👥 Estudiantes</HistoriaSubTitle>
        <HistoriaText>
          Cada semestre, más de 4200 estudiantes hacen uso del laboratorio de materiales para complementar su formación académica.
        </HistoriaText>

        <HistoriaText sx={{ marginTop: "2rem", fontStyle: "italic", color: "#999" }}>
          *Nota: Las materias de Gestión y Sistemas no utilizan este laboratorio actualmente.
        </HistoriaText>
      </ContentBox>

      {/* Encargado */}
      <ContentBox>
        <Subtitle>ENCARGADO</Subtitle>
        <ul>
          <li>👤 Nombre: Alejandro Quintana</li>
          <li>✉️ Correo: aquintana@tecnm.mx</li>
          <li>📞 Extensión: 123</li>
          <li>Horario que se encuentra el encargado: 7:00am - 15:00pm</li>
        </ul>
      </ContentBox>

      {/* Materias impartidas */}
      <ContentBox>
        <Subtitle>MATERIAS IMPARTIDAS EN LOS LABORATORIOS</Subtitle>
        <ul>
          <li>Procesos de Manufactura</li>
          <li>Metal-Mecánica Avanzada</li>
          <li>Maquinado y Herramientas</li>
        </ul>
      </ContentBox>

      {/* Footer */}
      <Footer>
        <Typography variant="h6">CONTÁCTANOS</Typography>
        <Typography>Teléfono: 844 288 9460</Typography>
        <Typography>
          Correo:{" "}
          <ContactLink href="mailto:se_saltillo@tecnm.mx">
            se_saltillo@tecnm.mx
          </ContactLink>
        </Typography>
      </Footer>
    </Container>
  );
};

export default LaboratorioPage;
