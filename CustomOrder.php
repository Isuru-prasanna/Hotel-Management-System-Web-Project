<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
    crossorigin="anonymous" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
    crossorigin="anonymous">
    <link rel="stylesheet" href="CustomOrder.css" />
</head>
<body>
<div class="container">
      <div class="image">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png" alt="">
      </div>
      <div class="card-content">
        <div class="wrapper">
          <div class="title">Adidas Originals</div>
          <p>Men's running tshirt</p>
          <span class="price">$29.99</span>
          <div class="content size">
            <div class="name size-name">Size</div>        
            <div class="size-value">
              <span class="color">XS</span>
              <span class="color">S</span>
              <span class="active">M</span>
              <span class="color">L</span>
              <span class="color">XL</span>
            </div>
          </div>
          <div class="content colour">
            <div class="name colour-name">Colour</div>
            <div class="colour-value">
              <span class="white" data-color="lightgrey" data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png"></span>
              <span class="blue active" data-color="#456ABD" data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png"></span>
              <span class="yellow" data-color="#EAA523" data-img="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png"></span>
            </div>
          </div>
          <div class="btns">
            <button>Buy now</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      $(".colour-value span").click(function(){
        $(".colour-value span").removeClass("active");
        $(this).addClass("active");
        $("body").css("background", $(this).attr("data-color"));
        $(".wrapper .price").css("color", $(this).attr("data-color"));
        $(".size-value span.color").css("color", $(this).attr("data-color"));
        $(".size-value span.active").css("background", $(this).attr("data-color"));
        $(".image img").attr("src", $(this).attr("data-img"));
        $(".btns button").css({
          "background": $(this).attr("data-color"),
          "border-color": $(this).attr("data-color")
        });
      });
    </script>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <script src="./main.js"></script>
</html>