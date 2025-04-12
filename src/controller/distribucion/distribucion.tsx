import { Box, Typography, styled } from "@mui/material";

// 🧱 Estilos
const Container = styled(Box)({
  padding: "2rem",
  backgroundColor: "#fdfdfd",
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

const SubTitle = styled(Typography)({
  fontSize: "1.3rem",
  fontWeight: 600,
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
});

const MachineBox = styled(Box)({
  backgroundColor: "#eeeeee",
  padding: "1rem",
  borderRadius: "8px",
  marginBottom: "1.5rem",
});

const ImageStyled = styled("img")({
  width: "100%",
  height: "240px",
  objectFit: "cover",
  borderRadius: "6px",
  marginTop: "10px",
});

const CenteredImageBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "1rem 0",
});

const imageUrl = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

// 🧠 Datos de áreas
const secciones = [
  {
    titulo: "🔹 Extracción de minerales",
    descripcion: "Responsable: Sergio Ramos (área tipo museo)",
    imagenes: ["museo.jpg", "museo2.jpg", "piedras3.jpg"],
    nota: "Ejemplo del reglamento colocado en el laboratorio",
  },
  {
    titulo: "🔹 Fundición",
    descripcion: "Espacio acondicionado para pruebas y trabajo con metales fundidos.",
    imagenes: ["fundicion.jpg", "fundicion2.jpg"],
    nota: "Imagen del área de fundición",
  },
  {
    titulo: "🔹 Ensayos mecánicos",
    imagenes: ["A.jpg"],
    nota: "Maquinaria utilizada para pruebas de resistencia de materiales",
  },
  {
    titulo: "🔹 Seguridad y equipo de protección",
    descripcion:
      "Espacio designado para resguardo de estudiantes y equipo de protección personal.",
    imagenes: ["herramienta.jpg"],
    nota: "Herramientas y equipo de protección disponibles",
  },
  {
    titulo: "🔹 Zona de hornos (muflas)",
    imagenes: ["escri.jpg"],
    nota: "Área donde se ubican los hornos para tratamientos térmicos",
  },
  {
    titulo: "🔹 Laminación",
    imagenes: ["B.jpg"],
    nota: "Equipo utilizado para reducir el espesor del material",
  },
];

export default function Distribucion() {
  return (
    <Container>
      {/* Encabezado */}
      <Header>
        <Logo
         
          src={`${import.meta.env.BASE_URL}/tecnm.png`}
          alt="Logo TecNM"
        />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo
          
          src={`${import.meta.env.BASE_URL}/esctec.png`}
          alt="Escudo ITS"
        />
      </Header>

      {/* Título principal */}
      <Title>🏭 Áreas y Equipos del Taller</Title>
      <SubTitle>📍 Diferentes Áreas</SubTitle>

      {/* Secciones dinámicas */}
      {secciones.map((seccion, index) => (
        <MachineBox key={index}>
          <Typography variant="h6">{seccion.titulo}</Typography>
          {seccion.descripcion && <Typography>{seccion.descripcion}</Typography>}
          {seccion.imagenes.map((img, i) => (
            <CenteredImageBox key={i}>
              <ImageStyled src={imageUrl(img)} alt={`${seccion.titulo} ${i + 1}`} />
              <Typography
                align="center"
                variant="body2"
                sx={{ color: "#555", marginTop: "0.5rem" }}
              >
                {seccion.nota}
              </Typography>
            </CenteredImageBox>
          ))}
        </MachineBox>
      ))}
    </Container>
  );
}
