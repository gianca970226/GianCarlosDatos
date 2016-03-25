<?php

include_once 'Conexion.php';

class Publico {

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

    public function LoadPublico() 
	{
        $this->Sql = "select * from articulos where estado = 'Publicado' ";
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);


			if($Filas>0)
			{
				 for ($i = 0; $i < $Filas; $i++) 
				 {   
	
					$response=array("enlace"=>"".pg_result($Registros,$i,5),
						 "autor"=>"".pg_result($Registros,$i,7),
						 "titulo"=>"".pg_result($Registros,$i,0),
						 "tema"=>"".pg_result($Registros,$i,1),
						 "p_claves"=>"".pg_result($Registros,$i,4),
						 "resumen"=>"".pg_result($Registros,$i,2),
						 "img"=>"".pg_result($Registros,$i,8),
					);
					
					
					$M[$i] = $response;
			   
				 }
	
				$response = $M;
				
				return $response;
			
			}
			
			else
			{
				return "No hay";
			}
			
	
			
   }
   	public function __destruct()
	{
		
		$this->Conexion;
		$this->Mensaje;
	}	
   
   
    

}

?>
