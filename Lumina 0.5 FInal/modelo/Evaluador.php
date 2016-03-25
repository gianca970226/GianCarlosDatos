<?php
include_once 'Conexion.php';

class Evaluador  {

    var $Mensaje;
    var $Conexion;
    var $Sql;
    var $Sql1;
    var $Datos;

    function __construct($Datos) {
        $this->Conexion= new Conexion();
        $this->Mensaje=$this->Conexion->conectar(); //aca se usa la clase 
        $this->Datos = $Datos;
    }
	public function loadEvaluador(){
		session_start();	
		$this->Sql="select * from  revision r join articulos a on r.id_articulo=a.id where id_evaluador='".$_SESSION['id']."' and estado='Evaluando' and nota is null ";
		$Registros1 = pg_query($this->Conexion->getconexion(), $this->Sql);
		$filas=pg_num_rows($Registros1);
		if($filas==0){
		return "No hay";
		}
		else{
			for ($i = 0; $i < $filas; $i++) 
			{
             $response = array("titulo" => "" . pg_result($Registros1, $i, 6),
               
			   "tema" => "" . pg_result($Registros1, $i, 7),
			   "resumen" => "" . pg_result($Registros1, $i, 8),
			   "id" => "" . pg_result($Registros1, $i, 9),
			   "p_claves" => "" . pg_result($Registros1, $i,10),
			   "enlace" => "" . pg_result($Registros1, $i, 11),
			   "estado" => "" . pg_result($Registros1, $i, 12),
			   "autor" => "" . pg_result($Registros1, $i, 13),
			   "evalu"=>"".$_SESSION['id'],
				
			   
                   );
                $M[$i] = $response; 
				}
				 $response = $M;
            pg_freeResult($Registros1);
            return $response;
			}
			}
			
			
	public function Evaluar(){
		session_start();
		
		$this->Sql="update revision set nota='".$this->Datos['nota']."', comentarios='".$this->Datos['comentarios']."'  where id_evaluador='".$_SESSION['id']."' and id_articulo=".$this->Datos['id_articulo']." and terminado = FALSE";
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
		//Promedio($Datos['id_articulos']);
		
		$this->Sql1="select count(id_articulo) from revision r join articulos a on r.id_articulo=a.id
		where id_articulo=".$this->Datos['id_articulo']." and r.nota is not null
		group by r.id_articulo,a.estado,r.terminado
		having a.estado='Evaluando' and r.terminado=FALSE ;
		";
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql1);
		$count= pg_result($Registros,0,0);
		if($count==3){
			$this->Sql="update articulos set estado='Evaluados' where id=".$this->Datos['id_articulo']. "";
			$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
			}
		return "Se agrego nota";
		}
		public function Comentarios($id_articulo){
				$this->Sql="select id_evaluador,comentario from revision where id_articulos='".$id_articulo."'";
				$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
				$Comentario="";
				for($i=0;$i<3;$i++){
					$Comentario=$Comentario+""+pg_result($Registros,$i,0);
					$Comentario=$Comentario+""+pg_result($Registros,$i,1);
					}
					return $Comentario;
				
			}
	
	    function cerrarSesion(){
	  		session_start();
			$this->Sql = "update personas  set activo = false where id='" . $_SESSION['id']. "' ";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			session_destroy();
			return "CS"; 
   }
       function informacion_evaluador()
   {
	    session_start();
	    $this->Sql = "select nombre from personas where id='".$_SESSION['id']."'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);


			
                $response=pg_result($Registros,0,0);

   
			
			return $response;
	

	   
   }
	  
	  
}
 
?>
