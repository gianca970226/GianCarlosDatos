<?php
include_once("../modelo/Login.php");

include_once("../modelo/Publico.php");

include_once("../modelo/Autor.php");
include_once("../modelo/Editor.php");
include_once("../modelo/Evaluador.php");


class controladora {
  

    public function __construct($args) {
		try{
			if (isset($args['clase']) && isset($args['oper'])) 
			{
             
                $clase = $args['clase'];
                $metodo = $args['oper'];
                $obj = new $clase($args);
                $t = $obj->$metodo();
                echo json_encode($t);
            } 
			else 
			{
                echo json_encode("Error el nombre de la clase o metodo incorrectos");
            }
		  } 
		catch (Exception $e) 
		{
            echo json_encode(array("mensaje" => $e->getMessage()));
        }
    }
    
    

    public function __destruct() {
        
    }

}

$Ob = new controladora($_REQUEST);
    	
?>

