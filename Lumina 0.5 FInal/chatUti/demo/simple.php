<?php

require_once dirname(__FILE__)."/../src/phpfreechat.class.php";
$params["serverid"] = md5(__FILE__); // calculate a unique id for this chat
$chat = new phpFreeChat($params);

?>
<!DOCTYPE>
<html>

  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>phpChat </title>
  </head>

  <body>
    <?php $chat->printChat(); ?>


  </body>

</html>