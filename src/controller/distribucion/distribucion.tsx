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

export default function Distribucion() {
  return (
    <Container>
      {/* Encabezado */}
      <Header>
        <Logo
          src={`${import.meta.env.BASE_URL}images/tecnm.png`}
          alt="Logo TecNM"
        />
        <TitleBox>
          <TitleText>TECNOLOGICO NACIONAL DE MÉXICO</TitleText>
          <TitleText>INSTITUTO TECNOLÓGICO DE SALTILLO</TitleText>
        </TitleBox>
        <Logo
          src={`${import.meta.env.BASE_URL}images/esctec.png`}
          alt="Escudo ITS"
        />
      </Header>

      {/* Título principal */}
      <Title>🏭 Áreas y Equipos del Taller</Title>

      {/* Subtítulo */}
      <SubTitle>📍 Diferentes Áreas</SubTitle>

      {/* Extracción de minerales */}
      <MachineBox>
        <Typography variant="h6">🔹 Extracción de minerales</Typography>
        <Typography>Responsable: Sergio Ramos (área tipo museo)</Typography>

        {/* Imágenes sin Grid */}
        {["museo.jpg", "museo2.jpg", "piedras3.jpg"].map((img, i) => (
          <CenteredImageBox key={i}>
            <ImageStyled
              src={`${import.meta.env.BASE_URL}images/${img}`}
              alt={`Imagen museo ${i + 1}`}
            />
            <Typography align="center" variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
              Ejemplo del reglamento colocado en el laboratorio
            </Typography>
          </CenteredImageBox>
        ))}
      </MachineBox>

      {/* Resto de las secciones... */}

      {/* Fundición */}
      <MachineBox>
        <Typography variant="h6">🔹 Fundición</Typography>
        <Typography>Espacio acondicionado para pruebas y trabajo con metales fundidos.</Typography>

        
          {["fundicion.jpg", "fundicion2.jpg"].map((img, i) => (
            
              <CenteredImageBox>
                <ImageStyled src={`./images/${img}`} alt={`Fundición ${i + 1}`} />
                <Typography align="center" variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
                  Imagen del área de fundición
                </Typography>
              </CenteredImageBox>
            
          ))}
       
      </MachineBox>

      {/* Ensayos mecánicos */}
      <MachineBox>
        <Typography variant="h6">🔹 Ensayos mecánicos</Typography>
        <CenteredImageBox>
          <ImageStyled src="images/A.jpg" alt="Zona de ensayos mecánicos" />
          <Typography variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
            Maquinaria utilizada para pruebas de resistencia de materiales
          </Typography>
        </CenteredImageBox>
      </MachineBox>

      {/* Seguridad y equipo de protección */}
      <MachineBox>
        <Typography variant="h6">🔹 Seguridad y equipo de protección</Typography>
        <Typography>Espacio designado para resguardo de estudiantes y equipo de protección personal.</Typography>
        <CenteredImageBox>
          <ImageStyled src="images/herramienta.jpg" alt="Equipo de protección" />
          <Typography variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
            Herramientas y equipo de protección disponibles
          </Typography>
        </CenteredImageBox>
      </MachineBox>

      {/* Zona de hornos */}
      <MachineBox>
        <Typography variant="h6">🔹 Zona de hornos (muflas)</Typography>
        <CenteredImageBox>
          <ImageStyled src="images/escri.jpg" alt="Zona de hornos" />
          <Typography variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
            Área donde se ubican los hornos para tratamientos térmicos
          </Typography>
        </CenteredImageBox>
      </MachineBox>

      {/* Laminación */}
      <MachineBox>
        <Typography variant="h6">🔹 Laminación</Typography>
        <CenteredImageBox>
          <ImageStyled src="images/B.jpg" alt="Zona de laminación" />
          <Typography variant="body2" sx={{ color: "#555", marginTop: "0.5rem" }}>
            Equipo utilizado para reducir el espesor del material
          </Typography>
        </CenteredImageBox>
      </MachineBox>
    </Container>
  );
}
