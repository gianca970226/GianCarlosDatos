<?php
include_once 'Conexion.php';
$Mensaje;
$Conexion;
 $Conexion = new Conexion();
   $Mensaje = $Conexion->conectar(); //aca se usa la clase 
   $Sql= "select * from articulos where id =(select max(id) from articulos)";
   $registro= pg_query($Conexion->getconexion(),$Sql);
   $x= pg_result($registro,0,5);
	if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
{
	      $archiv= basename($_FILES["enlace"]["type"]);
        	if($archiv){
			
            copy($_FILES["enlace"]["tmp_name"],"C:\wamp\www\Lumina 0.5\articulos/".$x) or die(error_reporting()) ;
			copy($_FILES["img"]["tmp_name"],"C:\wamp\www\Lumina 0.5\articulos/".$_FILES["img"]["name"]);
			
			echo json_encode("se subio el archivo");
           }
		   
}

?>