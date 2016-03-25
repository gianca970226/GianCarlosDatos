<?php

include_once 'Conexion.php';

class Login {

    var $Mensaje;
    var $Sql;
    var $Datos;
	var $Conexion;

    public function __construct($Datos) {
        $this->Conexion= new Conexion();
		$this->Mensaje=$this->Conexion->conectar(); //aca se usa la clase 
		
        $this->Sql = "";
        $this->Datos = $Datos;
    }

    public function Login() {
        $this->Sql = "Select * from personas  where id='" . $this->Datos["id"] . "' and pass='" . $this->Datos["pass"] . "' ";
        $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registro);
        if ($Filas == 0) 
		{
            $this->Sql = "Select * from personas  where id='" . $this->Datos["id"] . "' ";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
            $Filas = pg_num_rows($Registro);
            
			if ($Filas == 0) 
			{
                
				
				return "no";
            } 
			else 
			{

                return "ci";
            }
			
        } 
		else 
		{
			
			$this->Sql = "select activo from personas  where id='" . $this->Datos["id"] . "' ";
            $RegistroActivo = pg_query($this->Conexion->getconexion(), $this->Sql);

			if (pg_result($RegistroActivo, 0, 0)== 'f'){
            $Roll = pg_result($Registro, 0, 7);
            
            session_start();
			
            unset($_SESSION["id"]);
            unset($_SESSION["pass"]);
			$_SESSION['id'] = $this->Datos["id"];
            $_SESSION['pass'] = $this->Datos["pass"];
			$this->Sql = "update personas  set activo = true where id='" . $this->Datos["id"] . "' ";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);

            return $Roll;
			}else{
				return "si";
			}
        }
    }
	
	
	public function __destruct()
	{
		
		$this->Conexion;
		$this->Mensaje;
	}	
	



}
?>

