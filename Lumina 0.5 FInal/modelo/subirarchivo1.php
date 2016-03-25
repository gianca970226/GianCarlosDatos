<?php
include_once 'Conexion.php';
$Mensaje;
$Conexion;
 $Conexion = new Conexion();
   $Mensaje = $Conexion->conectar(); //aca se usa la clase 
	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
{
	      $archiv= basename($_FILES["enlace1"]["type"]);
        	if($archiv){

			copy($_FILES["enlace1"]["tmp_name"],"C:\wamp\www\Lumina 0.5\articulos/".$_FILES["enlace1"]["name"]) or die(error_reporting()) ;
			copy($_FILES["img1"]["tmp_name"],"C:\wamp\www\Lumina 0.5\articulos/".$_FILES["img1"]["name"]);
			
			echo json_encode("se subio el archivo");
           }
		   
}

?>