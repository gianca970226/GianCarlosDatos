<?php
class conexion 
{ 
	private $Conexion;


	public function getconexion()
	{
		return($this->Conexion);
	}
	
	public function setconexion($Conexion)
	{
		$this->Conexion=$Conexion;
	}
//funcion para realizar la conexion
	
	public function __construct ()
	{
		$this->Conexion='';
	}

 	public function conectar()
	  { 
	  
	  	
	 	$this->Conexion =pg_connect('dbname=revista user=revista password=123456');   
		$Mensaje="ExitoCOntrol111-Si conecto";
		
		if(!$this->Conexion){ // ESTO NO FUNCIONA COMO LO PUEDO HACE?????? 
			
			$Mensaje="Fallo, Vuelva A internarlo";	
		}
	    //if(!$this->conexion)
		  //echo json_encode("Error al conectar");
		return($Mensaje);
	}
	  
	public function __destruct ()
	{
		$this->Conexion;
	}
}

?>