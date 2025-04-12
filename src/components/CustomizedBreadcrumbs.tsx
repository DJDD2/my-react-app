import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StyledBreadcrumb from "./StyledBreadcrumb";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

// 🎨 Estilo para el fondo guindo del menú
const BackgroundContainer = styled(Box)({
  width: "100vw",
  height: "60px", // Ajuste de altura para mayor espacio visual
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Centra el contenido verticalmente
  alignItems: "center",
  backgroundColor: "#800020", // Color de fondo guindo
  padding: "10px 0", // Ajuste del padding
});

export default function CustomBreadcrumbs() {
  return (
    <BackgroundContainer>
      <Breadcrumbs aria-label="breadcrumb" separator={<ExpandMoreIcon />}>
        <StyledBreadcrumb
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb
          component={Link}
          to="/HISTORIA LABORATORIO DE METALURGIA"
          label="HISTORIA LABORATORIO DE METALURGIA"
        />
        <StyledBreadcrumb
          component={Link}
          to="/ACERCA DE"
          label="ACERCA DE"
        />
        <StyledBreadcrumb
          component={Link}
          to="/DISTRIBUCION"
          label="DISTRIBUCION"
        />
        <StyledBreadcrumb
          component={Link}
          to="/UBICACION"
          label="UBICACION"
        />
        <StyledBreadcrumb
          label="PÁGINA OFICIAL DEL TEC SALTILLO"
          component={(props: any) => (
            <Link
              {...props}
              to="https://saltillo.tecnm.mx/"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        />
      </Breadcrumbs>
    </BackgroundContainer>
  );
}
