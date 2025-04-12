import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StyledBreadcrumb from "./StyledBreadcrumb";
import Box from "@mui/material/Box";
import {  styled } from "@mui/material";

// 🎨 Estilo para el fondo guindo del menú
const BackgroundContainer = styled(Box)({
  width: "100vw",
  height: "30px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "#800020",
  padding: "20px",
});


export default function CustomBreadcrumbs() {
  return (
    <BackgroundContainer>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={Link}
          to="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component={Link} to="/HISTORIA LABORATORIO DE METALURGIA" label="HISTORIA LABORATORIO DE METALURGIA" deleteIcon={<ExpandMoreIcon />} />
        <StyledBreadcrumb component={Link} to="/ACERCA DE " label="ACERCA DE" deleteIcon={<ExpandMoreIcon />} />
        <StyledBreadcrumb component={Link} to="/DISTRIBUCION" label="DISTRIBUCION" deleteIcon={<ExpandMoreIcon />} />
        <StyledBreadcrumb component={Link} to="/UBICACION" label="UBICACION" deleteIcon={<ExpandMoreIcon />} />

        <StyledBreadcrumb
          label="PÁGINA OFICIAL DEL TEC SALTILLO"
          deleteIcon={<ExpandMoreIcon />}
          component={(props) => (
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
