<?php

include_once 'Conexion.php';

class Autor {

	var $Mensaje;
    var $Sql;
    var $Datos;
	var $Conexion;

    public function __construct($Datos) {
		
        $this->Conexion = new Conexion();
        $this->Mensaje = $this->Conexion->conectar(); //aca se usa la clase 
        $this->Sql ="";
		$this->Datos=$Datos;
    }
	
   public function SubArchivo() {
			session_start();
                //verificamos si ya esta ese archivo en el servidor
				
                $this->Sql = "select * from articulos where titulo='".$this->Datos["titulo"]."' ";
                $Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
                $Filas = pg_num_rows($Registros);
                if ($Filas == 0) {
                       // copy($_SESSION['url'],"D:/oe.png") or die(error_reporting()) ;SubirArchivo();
                       // SE sin evaluador
				$this->Sql = "select max(id) from articulos";
                $Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
				$id=pg_result($Registros,0,0)+1;   
   $this->Sql="insert into articulos (titulo,tema,resumen,p_claves,enlace,estado,autor,img)  values('".$this->Datos["titulo"]."','".$this->Datos["tema"].
                             "','".$this->Datos["resumen"]."','".
                             $this->Datos["p_claves"]."','".
                             $id."".$this->Datos["name"]."','".
							 "SinEvaluar','".$_SESSION['id']."','"
                             .$this->Datos["img"].
                             "')" ;
                $Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
                    return "oe";
                } else {
                   
                    $Estado = pg_result($Registros, 0, 6);
					
                    if ($Estado == "Aceptado") {
                        return "Este archivo ya fue aceptado por su editor";
                    }
                    if ($Estado == "Rechazado") {
                        return("Este archivo ya fue rechazado por su editor");
                    }
                    if ($Estado == "Evaluando") {
                        return("Este archivo ya esta en revision");
                    }
					if ($Estado == "Evaluado") {
                        return"ya subio solo que no le han asginado evaluador";
                    }
					if ($Estado == "SinEvaluar") {
                        return"ya subio solo que no le han asginado evaluador";
                    }   if ($Estado == "Correciones") {
                       
                       //sin respuestas = sR
                       
						return "Su archivo es con correciones";
                        
                       // return ("Ya Subio el dato con sus modificaciones");
                    }
                 
					
                }
				}
       
	   public function Correcciones(){
		 $this->Sql = "update articulos set estado='SinEvaluar',img='".$this->Datos['img']."' where enlace='" .$this->Datos["name"]."'  ";
						pg_query($this->Conexion->getconexion(), $this->Sql);
						return "oe";
                        
                       // return ("Ya Subio el dato con sus modificaciones");
                    }
		   
        
    public function Notificacion() 
	
	{
		session_start();
        $this->Sql = "select * from notificaciones where id = '".$_SESSION['id']."'";
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
		if($Filas>0){
			 for ($i = 0; $i < $Filas; $i++) 
			 {   

                $response=array("notificacion"=>"".pg_result($Registros,$i,1),

                );
				
				
                $M[$i] = $response;
           
			 }

            $response = $M;
			
			return $response;
          //  echo json_encode($response,true);
		}
		else {
			return 'No hay';
			}
	
			
   }
       
	 public function Mis_articulos() 
	{
		session_start();
        $this->Sql = "select * from articulos where autor ='".$_SESSION['id']."'";
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
 			if($Filas>0){
					for ($i = 0; $i < $Filas; $i++) 
			 {   
			 
			 	//comentarios
			 $d=pg_result($Registros,$i,3);		
			 $estado=pg_result($Registros,$i,6);
			 if($estado!='SinEvaluar' and $estado!='Evaluando' ){	
				
				$Sql2="select id_evaluador,comentarios from revision where id_articulo=".$d.";";
				$Registros1 = pg_query($this->Conexion->getconexion(), $Sql2);
				$Comentario="";
				
				for($j=0;$j<3;$j++)
				{
					$Comentario=$Comentario."  ".pg_result($Registros1,$j,0);
					$Comentario=$Comentario." : ".pg_result($Registros1,$j,1);
			
					
				}
			
				//fin comentarios

                $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"estado"=>"".pg_result($Registros,$i,6),
								"enlace"=>"".pg_result($Registros,$i,5),
								"img"=>"".pg_result($Registros,$i,8),
							"comentarios"=>"".$Comentario,

                );
			 }
			 else{
				 $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"estado"=>"".pg_result($Registros,$i,6),
								"enlace"=>"".pg_result($Registros,$i,5),
								"img"=>"".pg_result($Registros,$i,8),
								"comentarios"=>" ",

                );
				 
				 
				 }
				
                $M[$i] = $response;
           
			 }

            $response = $M;
			
			return $response;
          //  echo json_encode($response,true);
			
	
			}
			else{
				return 'No hay';
				}
			 
			
   }
   public function cerrarSesion(){
	  		session_start();
			$this->Sql = "update personas  set activo = false where id='" . $_SESSION['id']. "' ";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			session_destroy();
	return "CS"; 
   }
   public  function informacion_autor()
   {
	    session_start();
	    $this->Sql = "select nombre from personas where id ='".$_SESSION['id']."';" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);


			
                $response=pg_result($Registros,0,0);

   
			
			return $response;
	
}
   
   
   
   
   	public function __destruct()
	{
		
		$this->Conexion;
		$this->Mensaje;
	}	
   
   
    

}

?>
