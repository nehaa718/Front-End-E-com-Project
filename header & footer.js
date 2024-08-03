document.addEventListener("DOMContentLoaded", function(){
    document.body.insertAdjacentHTML("afterbegin", `
    <header>
    <div class="navbar">
      <div class="nav-logo">
          <div class="logo">E-COMMERCE </div>
          <span>(Expect More. Pay Less.)</span>
      </div>
      <div id="humburger">
        <i id="bar" class="fa-solid fa-bars"></i>
      </div>
      <div class="search">
          <input type="search" placeholder="Search" class="form-control">
          <button type="submit" class="btn btn-default">Search</button>
      </div>
      <div class="login">
          <button type="submit" class="btn btn-default" id="button" ><a href="login.html" style="color: black;  text-decoration: none;">Login</a></button>
      </div>
      <a href="cart.html"><i class="fa-solid fa-cart-shopping" id="cart"></i></a>
  </div>
    <!--this is 2nd nav-->
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="all product.html">All Products</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#">Women</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="women all.html">All</a></li>
                  <li><a class="dropdown-item" href="women kurti.html">Kurties</a></li>
                  <li><a class="dropdown-item" href="women pants.html">Pants</a></li>
                  <li><a class="dropdown-item" href="women skirts.html">Skirts</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" href="#">Men</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">All</a></li>
                  <li><a class="dropdown-item" href="men shirts.html">Shirts</a></li>
                  <li><a class="dropdown-item" href="#">Pants</a></li>
                  <li><a class="dropdown-item" href="#">Hoodies</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Kids</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   </header>`);
});

//Dynamic Header 
document.addEventListener("DOMContentLoaded", function(){
    document.body.insertAdjacentHTML("beforeend", `
    <footer>
        <div class="grid-container">
          <div class="women">
            <h4>Women</h4>
            <ul class="women-item">
              <li> Dresses</li>
              <li> Pants</li>
              <li> Skirts</li>
            </ul>
          </div>
          <div class="men">
            <h4>Men</h4>
            <ul class="men-item">
              <li> Shirts</li>
              <li> Pants</li>
              <li> Hoodies</li>
            </ul>
          </div>
          <div class="Kids">
            <h4>Kids</h4>
          </div>
          <div class="link">
            <h4>Link</h4>
            <ul class="link-item">
              <li> <a href="index.html" style="text-decoration: none; color: white;"> Home </a></li>
              <li> <a href="contact.html" style="text-decoration: none; color: white;"> Contact </a></li>
              <li> <a href="login.html" style="text-decoration: none; color: white;"> Login </a></li>
            </ul>
          </div>
        </div>
        <div class="divider"></div>
        <div class="copyright">
          Copyright &copy; E-commerce 2023-24
        </div>
    </footer>`);
});