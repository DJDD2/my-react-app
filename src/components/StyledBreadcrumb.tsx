import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const StyledBreadcrumb = styled(Chip)(({ theme }) => ({
  
  
  backgroundColor: "#D46A3E", // 🔥 Color corregido
  color: "#FFF",
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: "20px",
  textDecoration: "none",
  "&:hover, &:focus": {
    backgroundColor: emphasize("#FFD700", 0.2),
  },
  "&:active": {
    backgroundColor: emphasize("#FFD700", 0.3),
  },
})) as typeof Chip;

export default StyledBreadcrumb;
