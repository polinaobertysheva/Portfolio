<?php
$LOGIN_INFORMATION = array(
   'hellodesign'
);

// request login? true - show login and password boxes, false - password box only
define('USE_USERNAME', false);

// User will be redirected to this page after logout
define('LOGOUT_URL', 'http://www.example.com/');

// time out after NN minutes of inactivity. Set to 0 to not timeout
define('TIMEOUT_MINUTES', 0);

// This parameter is only useful when TIMEOUT_MINUTES is not zero
// true - timeout time from last activity, false - timeout time from login
define('TIMEOUT_CHECK_ACTIVITY', true);

if(isset($_GET['help'])) {
  die('Include following code into every page you would like to protect, at the very beginning (first line):<br>&lt;?php include("' . str_replace('\\','\\\\',__FILE__) . '"); ?&gt;');
}

// timeout in seconds
$timeout = (TIMEOUT_MINUTES == 0 ? 0 : time() + TIMEOUT_MINUTES * 60);

// logout?
if(isset($_GET['logout'])) {
  setcookie("verify", '', $timeout, '/'); // clear password;
  header('Location: ' . LOGOUT_URL);
  exit();
}

if(!function_exists('showLoginPasswordProtect')) {

// show login form
function showLoginPasswordProtect($error_msg) {
?>
<html>
<head>
  <title>Polina OBERTYSHEVA - Product Designer</title>
  <link rel="icon" type="image/png" href="./img/favicon.png" />
  <link rel="stylesheet" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta charset="UTF-8">
  <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
  <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
</head>

<body>
  <div class="fullpage">
    <div class="section">
      <header class="header header__internal">
        <nav class="header__navigation">
          <div class="header__logo">
            <a class="header__logo-link" href="./">POLINA O.</a>
          </div>
        </nav>
      </header>
      <div class="protection">
        <div class="protection__information">
          <p class="protection__message">Pour accédez à mon portfolio, saisissez le mot de passe que je vous ai partagé lors de notre échange.</p>
        </div>
        <div class="protection__form-container">
          <form class="protection__form" method="post">
          <div class="protection__inputs">
          <input type="password" name="access_password" class='protection__input' />
            <input type="submit" name="Submit" value="C’est parti!" class="protection__submit" />
          </div>
          <div class="protection__error" style=""><?php echo $error_msg; ?></div>
          </form>
        </div>
      </div>
      <div class="contact">
          <p class="contact__message">
              Pour avoir le mot de passe, contacez-moi <br class="herlper__mobile-br">  au <a class="contact__link" href="mailto:polina.obertysheva@gmail.com">polina.obertysheva@gmail.com</a>
          </p>
        </div>
    </div>
  </div>
  <script src="bundle.js"></script>
</body>

</html>

<?php
  // stop at this point
  die();
}
}

// user provided password
if (isset($_POST['access_password'])) {

  $login = isset($_POST['access_login']) ? $_POST['access_login'] : '';
  $pass = $_POST['access_password'];
  if (!USE_USERNAME && !in_array($pass, $LOGIN_INFORMATION)
  || (USE_USERNAME && ( !array_key_exists($login, $LOGIN_INFORMATION) || $LOGIN_INFORMATION[$login] != $pass ) ) 
  ) {
    showLoginPasswordProtect("Mot de passe incorrect");
  }
  else {
    // set cookie if password was validated
    setcookie("verify", md5($login.'%'.$pass), $timeout, '/');
    
    // Some programs (like Form1 Bilder) check $_POST array to see if parameters passed
    // So need to clear password protector variables
    unset($_POST['access_login']);
    unset($_POST['access_password']);
    unset($_POST['Submit']);
  }

}

else {

  // check if password cookie is set
  if (!isset($_COOKIE['verify'])) {
    showLoginPasswordProtect("");
  }

  // check if cookie is good
  $found = false;
  foreach($LOGIN_INFORMATION as $key=>$val) {
    $lp = (USE_USERNAME ? $key : '') .'%'.$val;
    if ($_COOKIE['verify'] == md5($lp)) {
      $found = true;
      // prolong timeout
      if (TIMEOUT_CHECK_ACTIVITY) {
        setcookie("verify", md5($lp), $timeout, '/');
      }
      break;
    }
  }
  if (!$found) {
    showLoginPasswordProtect("");
  }

}

?>
