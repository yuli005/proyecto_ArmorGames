const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `

<!-- Navbar -->
<!-- navbar-expand-lg indica que la barra se mostrará en su tamaño completo a partir del tamaño de pantalla grande (lg -->
<nav class="navbar navbar-expand-lg ">
  <!-- barra hacie abajo container-fluid -->
  <div class="container">
    <!-- mt-2 mt-lg-0  margin top margin top0-->
    <a class="navbar-brand " href="index.html"><img src="img/logo.png" height="50" alt="ArmorGames Logo"
        loading="lazy"></a>

    <!-- navbar-toggler" permite que la barra de navegación se colapse en un menú desplegable en pantallas más pequeñas. -->
    <button data-mdb-collapse-init class="navbar-toggler" type="button" data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>
    <!--  data-mdb-collapse-init Despliega el menu -->
    <div class="collapse navbar-collapse" id="navbarExample01">

      <!-- mx auto centrar -->
      <ul class="nav navbar-nav navbar-center">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./nosotros.html">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./consolas.html">Consolas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./contacto.html">Contactanos</a>
        </li>
      </ul>
    </div>

    <!-- dflex contenedor flexible alineando los items al centro   -->
    <div class="d-flex align-items-center">
      <!-- Icon -->
      <a class="text-reset me-3" href="#">
        <i class="fas fa-shopping-cart"></i>
      </a>


      <!-- Avatar -->
      <div class="dropdown">
        <a data-mdb-dropdown-init class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#"
          id="navbarDropdownMenuAvatar" role="button" aria-expanded="false">
          <i class="fa-solid fa-user"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          <li>
            <a class="dropdown-item" href="./inicioSesion/login.html">Iniciar Sesión</a>
          </li>
          <li>
            <a class="dropdown-item" href="./inicioSesion/signup.html">Registrarse</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<!-- Navbar -->
`;
footer.innerHTML = `
 <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #3b5998" href="#!"
          role="button"><i class="fab fa-facebook-f"></i></a>

        <!-- Twitter -->
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #55acee" href="#!"
          role="button"><i class="fab fa-twitter"></i></a>

        <!-- Instagram -->
        <a data-mdb-ripple-init class="btn text-white btn-floating m-1" style="background-color: #ac2bac" href="#!"
          role="button"><i class="fab fa-instagram"></i></a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.05)">
      © 2024 Copyright:
      <a class="text-body" href="https://mdbootstrap.com/">Armor Games</a>
    </div>
`;
