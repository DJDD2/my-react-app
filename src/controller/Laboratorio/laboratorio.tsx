
import "./Home.css";

const Laboratorio: React.FC = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img className="logo left" src="/images/tecnm.png" alt="Logo TecNM" />
        <div className="title">
          <h1>TECNOLOGICO NACIONAL DE MÉXICO</h1>
          <h1>INSTITUTO TECNOLÓGICO DE SALTILLO</h1>
        </div>
        <img className="logo right" src="/images/esctec.png" alt="Escudo ITS" />
      </header>

      {/* Contenido Principal */}
      <main>
        <h2 className="hea">🏠 Página de Inicio</h2>
        <div className="cont">
          <img src="/images/laboratorio.jpeg" className="main-image" alt="Imagen Tec Saltillo" />
        </div>

        <section>
          <div className="content2">
            <p>Estudiar en el Tec Saltillo es una experiencia única...</p>
            <p>Los profesores son uno de los grandes puntos fuertes de la institución...</p>
            <p>Otro aspecto importante es la diversidad de actividades extracurriculares...</p>
          </div>
        </section>

        <section>
          <div className="content2">
            <p>MISION </p>
            <p>-jlsfdjlkdasjkldsaljkdask</p>
            <p>-</p>


          </div>
        </section>

        <section>
          <div className="content2">
            <p>VISION </p>
            <p>-</p>
            <p>-</p>

            
          </div>
        </section>



      </main>

      {/* Footer */}
      <footer>
        <div className="contact">
          <h3>CONTÁCTANOS</h3>
          <p>Teléfono: 844 288 9460</p>
          <p>Correo: <a href="mailto:se_saltillo@tecnm.mx">se_saltillo@tecnm.mx</a></p>
          <p>Dirección: Avenida Universidad No. 123, Saltillo, Coahuila</p>
        </div>
      </footer>
    </div>
  );
};

export default Laboratorio;
