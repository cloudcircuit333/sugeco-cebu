<!doctype html>
<html lang="en">
  <head>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
   
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <title>Superior Gas & Equipment Co. of Cebu, Incorporated</title>
  </head>
  <body>
    <header id='headerlogo' class="header">
           <a href="index.html"><img class="img-fluid" src="images/hlogo.png"></a>
    </header>

<!--###################### Navigation #######################################################################################-->
    <nav id="navigationbar" class="navbar navbar-expand-md sticky-top">
        <a href="#" class="navbar-brand"><img id="sugeconavlogo" src="images/sugeconavlogo.png"></a>
        <button class="navbar-toggler" id="navtoggler-icon" type="button" data-toggle="collapse" data-target="#navMenuToggle" aria-controls="navMenuToggle" aria-expanded="false" aria-label="Toggle navigation"><img id="burgerbtn" src="icons/burgerbtn-unclck.png"> </button>  
         <div class="collapse navbar-collapse" id="navMenuToggle">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><a href="index.html" class="nav-link">HOME</a></li>
              <li class="nav-item"><a href="products.html" class="nav-link">PRODUCTS</a></li>
              <li class="nav-item"><a href="underconst.html" class="nav-link">SERVICES</a></li>
              <li class="nav-item  active"><a href="underconst.html" class="nav-link">CONTACT US</a></li>
              <li class="nav-item"><a href="underconst.html" class="nav-link">ABOUT US</a></li>
            </ul>
          </div>
    </nav>
    <hr class='ctm'>
<!--###################### END Navigation ############################################################################################-->
 
 <!-- contactus-wrapper -->  
  <div class='hero-image'>
    <div class='container-fluid'>
      <h3 class='welcome'>Contact Us</h3>
      <div id='contactus-wrapper' class='row'>
        <div id='leftJumb' class='col-12 col-sm-6 jumbotron'>
          <ul class='list-group'>
            <li class='list-group-item'><img src='images/cellicon.png' class='contIcons' alt='cellicon'> Cell:
              <ul class='list-group ml-5'>
                <li class='list-group-item'>0923-737-3742</li>
                <li class='list-group-item'>0917-627-9063</li>
              </ul>
            </li>
            <li class='list-group-item'><img src='images/telicon.png' class='contIcons' alt='telicon'> Tel:
              <ul class='list-group ml-5'>
                <li class='list-group-item'>(032) 344-3805-08</li>
                <li class='list-group-item'>(032) 420-5146 & 48</li>
              </ul>
            </li>
            <li class='list-group-item'><img src='images/emailicon.png' class='contIcons' alt='emailicon'> Email:
             <ul class='list-group ml-5'>
                <li class='list-group-item'>sugecocebu@gmail.com</li>
                <li class='list-group-item'>inquiry@sugeco-cebu.com</li>
              </ul> 
            </li>
            <li class='list-group-item'><img src='images/faxicon.png' class='contIcons' alt='faxicon'> Fax:
              <ul class='list-group ml-5'>
                <li class='list-group-item'>(032) 420-5144</li>
              </ul> 
            </li>
            <li class='list-group-item'><img src='images/addressicon.png' class='contIcons' alt='addressicon'> Address:
              <ul class='list-group ml-5'>
                <li class='list-group-item'>Highway Labogon, Mandaue City, Cebu 6014</li>
              </ul> 
            </li>
            <li class='list-group-item'><img src='images/webicon.png' class='contIcons' alt='webicon'> Website:
              <ul class='list-group ml-5'>
                <li class='list-group-item'>www.sugeco-cebu.com</li>
              </ul> 
            </li>
          </ul>
        </div>
        <div id='rightJumb' class='col-12 col-sm-6 jumbotron'>
          <h5>Send us a message</h5>
          <small class='text-danger'>*Required</small>
<!--- contact us FORM -->
         <form method="post" id='conusForm_reg' action="conusreg_process.php">
          <div class="form-group">
            <label for="conusreg_fname">First Name<span class='reqFieldSign text-danger'> *</span></label>
            <input type="text" class="form-control" id="conusreg_fname" name="conusreg_fname" placeholder="First Name..." required>
          </div>
          <div class="form-group">
            <label for="conusreg_lname">Last Name<span class='reqFieldSign text-danger'> *</span></label>
            <input type="text" class="form-control" id="conusreg_lname" name="conusreg_lname" placeholder="Last Name..." required>
          </div>
          <div class="form-group">
            <label for="conusreg_email">Email address<span class='reqFieldSign text-danger'> *</span></label>
            <input type="email" class="form-control" id="conusreg_email" name='conusreg_email' aria-describedby="emailHelp" placeholder="Enter email..." required>
            <small id="conusreg_error" class="form-text text-danger messageHide">*Invalid Email</small>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="conusreg_number">Enter phone number<span class='reqFieldSign text-danger'> *</span></label>
            <input type="tel" class="form-control" id="conusreg_number" name='conusreg_number' placeholder="Enter phone number..." required>
          </div>
          <div class="form-group">
            <label for="conusreg_message">Your Message<span class='reqFieldSign text-danger'> *</span></label>
            <textarea class="form-control" id="conusreg_message" name='conusreg_message' rows="3" placeholder="Your message..." required></textarea>
          </div>
          <div class="g-recaptcha" data-sitekey="6Lf6yJcUAAAAANWl9mk8zhkf80WrcI_pG6NpOFKH" data-callback="recaptchaCallback" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" required></div>

          <button type="submit" id='conusreg_submit' name='conusreg_submit' class="btn btn-primary">Submit</button>
        </form>
<!--- END contact us FORM -->
        </div>
         <div id='mapJumb' class='col-12 jumbotron'>
            <div id='map-wrapper'class='img-fluid'>
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.8782226047038!2d123.94880030414451!3d10.351621152761624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c62fca52dcc68ef!2sSugeco+Superior+Gas!5e0!3m2!1sen!2sph!4v1552550000831" id='googleMap' width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div><!-- END contactus-wrapper -->
  </div><!-- Hero Image -->

    <footer class="page-footer font-small">
      <div class='container-fluid'>
      <div class="row">
          <div class="col-sm-12 col-md-3 col-lg-3 text-center">
                <div class="jumbotron">
                  <a href="index.html" class="navbar-brand"><img id="sugecofooterlogo" src="images/sugeconavlogo.png"></a>
                  <br>
                  <p class="text-justified">The company's humble beginning can be traced back in 1952, when the late Mrs. Concepcion Lua, together with Mrs. Quiros, saw and Ad in a local newspaper looking for a distributorship in the Visayas for compressed gases. With Mrs. Lua's strategic vision and determination, the tandem grabbed the opportunity and started selling compressed gases in a small rented house in Jones Avenue.<a href='underconst.html' class='nav-link'><button class='btn btn-outline-info btn-sm'>Read More</button></a></p>
              </div>
          </div>

        <div class="col-sm-12 col-md-3 col-lg-3 text-center">
          <div class="jumbotron">
          <h3>Branches</h3>
          <div id="branches-wrapper" class="row">
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h5>(Visayas)</h5>
              <p>Lapu-Lapu</p>
              <p>Naga</p>
              <p>Tacloban</p>
              <p>Ormoc</p>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h5>(Mindanao)</h5>
              <p>Butuan</p>
              <p>Surigao</p>
              <p>Villanueva</p>
              <p>Cagayan de Oro</p>
              <p>Iligan</p>
            </div>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-3 col-lg-3 text-center">
          <div class="jumbotron">
          <h3>Contacts</h3>
          <ul class='list-group'>
            <li class='list-group-item'>Office Hours: Mon-Sat 8:00AM-5:00PM</li>
            <li class='list-group-item'>Cell: 0923-737-3742 / 0917-627-9063</li>
            <li class='list-group-item'>Tel: (032) 344-3805-08 / (032) 420-5146 & 48</li>
            <li class='list-group-item'>Fax: (032) 420-5144</li>
            <li class='list-group-item'>Email: sugecocebu@gmail.com / inquiry@sugeco-cebu.com</li>
            <li class='list-group-item'>Website: www.sugeco-cebu.com</li>
          </ul>
          </div>
        </div>

        <div class="col-sm-12 col-md-3 col-lg-3 text-center">
          <div class="jumbotron">
          <h3>Social</h3>
            <div id="social-icons" class="row">
              <div class="col-12">
                <a href="underconst.html"><i class="fab fa-linkedin"></i></a>
                <a href="underconst.html"><i class="fab fa-google-plus-g"></i></a>
                <a href="underconst.html"><i class="fab fa-youtube-square"></i></a>
              </div>
              <div class="col-12">
                <a href="underconst.html"><i class="fab fa-github"></i></a>
                <a href="underconst.html"><i class="fab fa-facebook"></i></a>
                <a href="underconst.html"><i class="fab fa-twitter"></i></a>
              </div>
              <div class="col-12 text-center">
                <a href="underconst.html"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
              </div>
          </div>
      </div><!--################ END row that wrap jumbotrons ##################################################################-->
    </div>

        <div id="copyright-wrapper" class="footer-copyright text-center py-3">
            Copyright &copy; 2019 Superior Gas & Equipment Co. of Cebu, Incorporated (SUGECO). All Rights Reserved. www.sugeco-cebu.com
        </div>
    </footer>
 
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src= "js/myjquery.js"></script>
  </body>
</html>