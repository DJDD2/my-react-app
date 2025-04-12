import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomBreadcrumbs from "./components/CustomizedBreadcrumbs";
import Home from "./controller/home/home"; // ✅ Asegurar que está en `pages/Home.tsx`
import Historia from "./controller/historia/historia"; // ✅ Add the correct import for Historia
import AcercaDe from "./controller/acercade/acercade"; // ✅ Add the correct import for AcercaDe
import Distribucion from "./controller/distribucion/distribucion";
import Ubicacion from "./controller/distribucion/ubicacion";


function Accessories() {
  return <h2>👜 DEPARTAMENTOS DEL TEC</h2>;
}

function Pagina() {
  return <h2>🌍 Página Oficial del Tec Saltillo</h2>;
}

function App() {
  return (
    <Router>
      <CustomBreadcrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HISTORIA LABORATORIO DE METALURGIA" element={<Historia />} />
        <Route path="/UBICACION" element={<Ubicacion />} />

        <Route path="/ACERCA DE" element={<AcercaDe />} />
        <Route path="/DISTRIBUCION" element={<Distribucion />} />
        <Route path="/MAQUINARIA" element={<Accessories />} />
        <Route path="/pagina-oficial" element={<Pagina />} /> {/* ✅ URL corregida */}
      </Routes>
    </Router>
  );
}

export default App;
