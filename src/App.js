import logo from './logo.svg';
import './App.css';
import ico from './logo-recortado-icon.png'
import '../src/images/images'
import images from '../src/images/images';

function App() {
  return (
    <div className="App">
      <header class='header'>
        <div class='logo'>
          <img src={ico} class='logo'></img>
          <div class='title-box'><span class='titulo'>WebdeV</span></div>
          
        </div>
        <nav>
          <a href='' class='nav-link'>Inicio </a>
          <a href='#contacto' class='nav-link'>Contacto </a>
          <a href='' class='nav-link'>Diseños </a>
        </nav>
      </header>
      <section id='pantalla-dividida'>
        <div class='izquierda'>
          <h1>DESARROLLOS<span class='SitiosWeb'>WEB</span></h1>
          <p>Mejora tu presencia digital y define tu espacio online</p>
          <a class='contactate' href='#formulario'>
            <div class="bg-6">
              <div class="glitch" data-text="CONTACTATE">CONTACTATE</div>
            </div>
          </a>
          

        </div>
        <div class='derecha'></div>
      </section>
      
{/*       <section class='cards'>
        <div class='card1'>
          <span class='titleCard'>DISEÑO WEB PROFESIONAL</span>
          <span>Diseño web profesional utilizando lo último en tecnologías web: PHP, HTML5, CSS3, Javascript y MYSQL</span>
        </div>
        <div class='card2'>
          <span class='titleCard'>DISEÑO RESPONSIVO</span>
          <span>Diseño de sitios web adaptados a todos los dispositivos móviles: notebooks, tablets, celulares, etc.</span>
        </div>
        <div class='card3'>          
          <span class='titleCard'>SITIOS AUTOADMINISTRABLES</span>
          <span>Se puede modificar su contenido (textos, imágenes, etc.) de manera sencilla sin tener que pagar mantenimiento.</span>
        </div>
        <div class='card4'>
          <span class='titleCard'>VENTAS ONLINE</span>
          <span>Tu empresa o negocio abierto y accesible las 24 hs. del día, los 365 días del año. Abrí tus puertas al mundo con tu web.</span>
        </div>
      </section> */}
      <div class='body'>
        <div class="container">
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true"></img>
                        <h3>Diseño Responsivo</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true"></img>
                        <h3>Sitios Autoadministrables</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="face face1">
                    <div class="content">
                        <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true"></img>
                        <h3>Ventas Online</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                        
                    </div>
                </div>
            </div>
            
        </div>
      </div>

      <section class='formulario'>
{/*         <div class='formulario' id='formulario'>
          <label>Nombre</label><input placeholder='Tu nombre...'></input>
          <label>Telefono</label><input placeholder='Tu numero telefonico...'></input>
          <label>Mail</label><input placeholder='Tu direccion de correo electronico...'></input>
          <label>Mensaje</label><input placeholder='Escribe tu mensaje sobre el sitio que necesitas...' class='mensaje'></input>
        </div> */}

        <form class="form" id='formulario'>
          <h2 class='contact-us'>Contacto</h2>
          <p class='p-form' type="Nombre:"><input placeholder="Escribe tu nombre aqui..."></input></p>
          <p class='p-form' type="Email:"><input placeholder="Tu dirreccion de correo electronico aqui..."></input></p>
          <p class='p-form' type="Mensaje:"><input placeholder="Cuenta un poco que desarrollo necesita..."></input></p>
          <button class='btn-form'>Enviar mensaje</button>
          <div class='div-form'>
            <span class="fa fa-phone"></span>+549408275
            <span class="fa fa-envelope-o"></span> ivogarrachip@gmail.com
          </div>
        </form>
      </section>
      <section>
        <div class='footer-div'>
          <ul>
            <li><a class='a-footer' href="https://twitter.com/julesforrest">Twitter</a></li>
            <li><a class='a-footer' href="https://codepen.io/julesforrest">Codepen</a></li>
            <li><a class='a-footer' href="mailto:julesforrest@gmail.com">Email</a></li>
            <li><a class='a-footer' href="https://dribbble.com/julesforrest">Dribbble</a></li>
            <li><a class='a-footer' href="https://github.com/julesforrest">Github</a></li>
            <li>
              <p class='mano'>👋</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
