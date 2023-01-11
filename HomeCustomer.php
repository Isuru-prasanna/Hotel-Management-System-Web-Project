<!DOCTYPE html>
<html lang="en">

<head>
  <?php
  require_once './config.php';

  if (!empty($_SESSION["Email"])) {
    $Email = $_SESSION["isuruprasanna123@gmail.com"];
    $result = mysqli_query($dbconn, "SELECT * FROM registration WHERE Email= $Email");
    $row = mysqli_fetch_assoc($result);
  }
  ?>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>Hotel</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
  <link rel="stylesheet" href="./Style.css" />
  <link rel="stylesheet" href="./mobile-style.css">
</head>

<body>
  <header>

  <?php  require_once './nav/nav.php'; ?>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-7 col-sm-12  text-white">
          <h6>OWNER:ISURU PRASANNA</h6>
          <h1>Aqurnt Family Hotel</h1>

          <p>
            Located only an hour from the capital, Aqurnt Family Hotel Resort boasts a secluded beachfront
            setting on the picturesque southwest coast. Bring your sense of wanderlust to this paradise
            where the Kalu Ganga River meets the Indian Ocean. Luxuriate in elegant havens infused With
            a host of inspired dining options, recreation- including for children - and an Ayurvedic spa
            retreat, we welcome you to enjoy island life
            at one of the most sought after hotels.
          </p>
        </div>
        <div class="col-md-5 col-sm-12  h-25">
          <img src="PIC/charanjeet-dhiman-9xObRZdEN7g-unsplash.jpg" alt="Book" />
        </div>
      </div>
    </div>
  </header>
  <main>
    <section class="section-1">
      <div class="container text-center">
        <div class="col-md-12 col-12 text-center">
          <div class="col-md-12 col-12">
            <div class="pray">
              <img src="PIC/covid-19.jpg" alt="Pray" class="col-md12 col-12" />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="panel text-left">
              <h1 class="text-center">Travel safe during COVID-19</h1>
              <h6 class="pt-4">
                What you can expect during your stay</h6>
              <p>*Hand sanitizer available to guests & staff</p>
              <p>*Regularly sanitized high-traffic areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-3 container-fluid p-0 text-center">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <h1>Most Booked Properties in Aqurnt</h1>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section class="section-4">
      <div class="team row ">
        <div class="col-md-4 col-12 text-center">
          <div class="card mr-2 d-inline-block shadow-lg">
            <div class="card-img-top">
              <img src="PIC/fried-rice-egg-topping-shrimp-spoon-fork-plate-white-85316235.jpg" class="img-fluid border-radius p-4" alt="">
            </div>
            <div class="card-body">
              <h3 class="card-text">Fried Rice</h3>
              <p class="card-text">
                This is my secret ingredient! I love using butter in my Chinese fried rice. To me it adds a lot more flavor and helps to brown the rice. You can always
                substitute any other cooking oil if you prefer
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12">
          <div id="carouselExampleControls" class="carousel slide " data-ride="carousel">
            <div class="carousel-inner text-center">
              <div class="carousel-item active">
                <div class="card mr-2 d-inline-block shadow">
                  <div class="card-img-top">
                    <img src="PIC/FoodRise.jpeg" class="img-fluid rounded-circle w-50 p-4" alt="">
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Rice and Curry</h3>
                    <p class="card-text">
                      There are many smells of Sri Lankan food: cinnamon, pepper, cardamom, coconut, papaya, mango, pineapple, pungent dried maldive fish and tea. But if there was one fragrance
                      that was ubiquitous across the island once known as Serendip, it's that of curry leaves
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="card  d-inline-block mr-2 shadow">
                  <div class="card-img-top">
                    <img src="PIC/dsc00115.jpg" class="img-fluid rounded-circle w-50 p-2" alt="">
                  </div>
                  <div class="card-body">
                    <h3 class="card-title">Hopper</h3>
                    <p class="card-text">
                      Hoppers come in many forms. Standard hoppers are typical Sri Lankan bowl-shaped or funnel-shaped pancakes.
                      String hoppers are nests of noodle-like steamed batter. They’re almost like rice noodles, to eat with curries and chutneys in place of rice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-12 text-center">
          <div class="card mr-2 d-inline-block shadow-lg">
            <div class="card-img-top">
              <img src="PIC/2-2.jpg" class="img-fluid border-radius p-4" alt="">
            </div>
            <div class="card-body">
              <h3 class="card-title">Pittu</h3>
              <p class="card-text">
                Traditional Sri Lankan food always makes me very happy, hungry and ready to eat. Most of it involves very simple ingredients like rice and coconut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer>
    <div class="container-fluid p-0">
      <div class="row text-left">
        <div class="col-md-5 col-sm-5">
          <h4 class="text-light">About us</h4>
          <p class="pt-4 text-muted">safe and enjoi now
            <span> Daily Open</span>
          </p>
        </div>
        <div class="col-md-5 col-sm-12">
          <h4 class="text-light">Newsletter</h4>
          <p class="text-muted">Stay Updated</p>
          <form class="form-inline">
            <div class="col pl-0">
              <div class="input-group pr-5">
                <input type="text" class="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-2 col-sm-12">
          <h4 class="text-light">Follow Us</h4>
          <p class="text-muted">Let us be social</p>
          <div class="column text-light">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="./main.js"></script>
</body>

</html>