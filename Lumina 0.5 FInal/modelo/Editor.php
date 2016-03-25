<?php

include_once 'Conexion.php';

class Editor  {

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



	function adiccionarEvaluador (){
		
			$this->Sql="insert into revision (id_articulo,id_evaluador,terminado) values(".$this->Datos['id_articulo'].",'".$this->Datos["id_evaluador0"]."',FALSE)";	
		$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
		$this->Sql="insert into revision (id_articulo,id_evaluador,terminado)values(".$this->Datos['id_articulo'].",'".$this->Datos["id_evaluador1"]."',FALSE)";	
		$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
		$this->Sql="insert into revision (id_articulo,id_evaluador,terminado)values(".$this->Datos['id_articulo'].",'".$this->Datos["id_evaluador2"]."',FALSE)";	
		$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
	
		$this->Sql1="update articulos set estado='Evaluando' where id=".$this->Datos['id_articulo'].";";
		$Registros1 = pg_query($this->Conexion->getconexion(),$this->Sql1);
	
	
			return 'Se asigno Evaluador';
	
	}
	function cargarEvaluadores(){
		$this->Sql="select * from personas where roll='Evaluador'";	
		$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
		$Filas=pg_num_rows($Registros);
		if($Filas>0){
			
				for ($i = 0; $i < $Filas; $i++) 
			{   
			      $response=array("id"=>"".pg_result($Registros,$i,0),
								"nombre"=>"".pg_result($Registros,$i,1),
								"size"=>"".$Filas,
								
                );
				
				
						
                $M[$i] = $response;
           
			}
			 

            $response = $M;
			
			return $response;
		}
		else
		{
			return 'no hay evaluadores';
		}
			
		}
	function cargar_autor()
	{
		
		$this->Sql= "select * from personas  where id='".$this->Datos["id"]."'";
		$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
	   	$Filas=pg_num_rows($Registros);
	   
		if($Filas<=0)
		{
		   return "No Existe";
		}
		else
		{
			if(pg_result($Registros,0,7)=='Autor')
			{
				 $response = array(
						"id" => "" . pg_result($Registros, 0, 0),
						"nombre" => "" . pg_result($Registros, 0, 1),
						"pass" => "" . pg_result($Registros, 0, 2),
						"direccion" => "" . pg_result($Registros, 0, 3),
						"correo" => "" . pg_result($Registros, 0, 4),
						"telefono" => "" . pg_result($Registros,0, 5),
						"afiliacion" => "" . pg_result($Registros, 0,6),
					   );
				pg_freeResult($Registros);
				
			
				
				return $response;
			}
			else
			{
				return "el id ingresado es un evaluador";
			}
		}
	}
		
		function cargar_evaluador()
		{
			
			$this->Sql= "select * from personas where id='".$this->Datos["id"]."'";
			$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
			$Filas=pg_num_rows($Registros);
			
			if($Filas==0){
				return "No Existe";
			}
			else
			{
				
				if(pg_result($Registros,0,7) =='Evaluador')
				{
					
					$this->Sql1= "select * from estudios where evaluador='".$this->Datos["id"]."'";
					 $Registros1=  pg_query($this->Conexion->getconexion(),  $this->Sql1);
					 
					  $response = array(
						"id" => "" . pg_result($Registros, 0, 0),
						"nombre" => "" . pg_result($Registros, 0, 1),
						"pass" => "" . pg_result($Registros, 0, 2),
						"direccion" => "" . pg_result($Registros, 0, 3),
						"correo" => "" . pg_result($Registros, 0, 4),
						"tel" => "" . pg_result($Registros,0, 5),
						"afiliacion" => "" . pg_result($Registros, 0,6),
						"estudios" => "" . pg_result($Registros1, 0,1),
					   );
						
						pg_freeResult($Registros);
						return $response;
				}
				else
				{
					return "el id ingresado es un Editor";
				}
			}
		}
	
	
	
	
	function agregar_autor(){
		 
		 
		$this->Sql= "select * from personas where id='".$this->Datos["id"]."';";
        $Registros=pg_query($this->Conexion->getconexion(),$this->Sql);
	
	  	$Filas= pg_num_rows($Registros);
     	
		if($Filas == 0)
		{
			$this->Sql= "insert into personas (id,nombre,pass,direccion,correo,telefono,afiliacion,roll,activo)  values ('".$this->Datos["id"]."','".$this->Datos["nombre"]."','".$this->Datos["pass"]."','".$this->Datos["direccion"]."','".$this->Datos["correo"]."','".$this->Datos["tel"]."','".$this->Datos["afiliacion"]."','Autor',FALSE)";
		   $Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
			return "Se agrego el autor";
		 }
	 	else
		{
		 	return "Id Ocupado";
		 }
    }
	
	
	function agregar_evaluador()
	{
		
		$this->Sql= "select * from personas where id='".$this->Datos["id"]."'";
        $Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
	    $Filas=pg_num_rows($Registros);
		
        if($Filas==0)
		{
		 
		   $this->Sql= "insert into personas (id,nombre,pass,direccion,correo,telefono,afiliacion,roll,activo)  values ('".$this->Datos["id"]."','".$this->Datos["nombre"]."','".$this->Datos["pass"]."','".$this->Datos["direccion"]."','".$this->Datos["correo"]."','".$this->Datos["tel"]."','".$this->Datos["afiliacion"]."','Evaluador',FALSE)";
		   $Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
		 
		
		   $this->Sql="insert into estudios  values('".$this->Datos["id"]."','".$this->Datos["estudios"]."')";
			$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
			return "Se agrego el evaluador";
		 }
		 else
		 {
			  return "Id Ocupado";
			 
	}
	 
        
    }
	
	
	
	
	    function modificar_autor()
		{
			
			$this->Sql= "update personas set nombre='".$this->Datos["nombre"]."' , pass='".$this->Datos["pass"].
			"', direccion='".$this->Datos["direccion"]."', correo='".$this->Datos["correo"]."' ,telefono='".$this->Datos["tel"]."' ,afiliacion='".$this->Datos["afiliacion"]."' where id='".$this->Datos["id"]."'";
		
		   $Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
		   
			return "se actualizo el autor";
    }
	    function modificar_evaluador()
		{
	
			$this->Sql= "update personas set nombre='".$this->Datos["nombre"]."', pass='".$this->Datos["pass"].
			"', direccion='".$this->Datos["direccion"]."', correo='".$this->Datos["correo"]."', telefono='".$this->Datos["tel"]."', afiliacion='".$this->Datos["afiliacion"]."' where id='".$this->Datos["id"]."'";
			
			$this->Sql1= "update estudios set estudios='".$this->Datos["estudios"]."' where evaluador='".$this->Datos["id"]."'";
			
		   $Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
		   $Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql1);
			
			return "Se actualizo el evaluador";
    	}
		function eliminar_autor()
		{
			$this->Sql= "select * from personas  where id='".$this->Datos["id"]."'";
			$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
			if(pg_num_rows($Registros)==0)
			{
			   return "No esta en la base de datos";
			}
			else
			{
				$id=pg_result($Registros,0,7);
				
				if($id=='Autor')
				{
					$this->Sql="delete from personas where id ='".$this->Datos["id"]."'";
					$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
					return "se elimino el autor";
				}
				else
				{
					return "el id ingresado es un evaluador";
				}
			}
		
		}
		
		function eliminar_evaluador(){
			
			$this->Sql= "select * from personas  where id='".$this->Datos["id"]."'";
			$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
			
			if(pg_num_rows($Registros)==0)
			{
			   return "No esta en la base de datos";
			}
			else
			{
				$id=pg_result($Registros,0,7);
				
				if($id=='Evaluador')
				{
					$this->Sql="delete from estudios where evaluador='".$this->Datos["id"]."'";
					$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
					$this->Sql="delete from personas where id ='".$this->Datos["id"]."'";
					$Registros=  pg_query($this->Conexion->getconexion(),  $this->Sql);
					return "se elimino el evaluador";
				}
				else
				{
						return "el id ingresado es un editor";
				}
			}
		
		}
	

//NUEVOS METODOS 

	 public function articulos_publicados() 
	{

        $this->Sql = "select * from articulos where estado ='Publicado'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
		if($Filas>0){
			for ($i = 0; $i < $Filas; $i++) 
			 {   
			 
			 	//comentarios
			 	$d=pg_result($Registros,$i,3);		
				
				$Sql2="select id_evaluador , comentarios from revision where id_articulo=".$d.";";
				$Registros1 = pg_query($this->Conexion->getconexion(), $Sql2);
				$Comentario="";
				
				for($j=0;$j<3;$j++)
				{
					$Comentario=$Comentario."  ".pg_result($Registros1,$j,0);
					$Comentario=$Comentario." : ".pg_result($Registros1,$j,1);
			
					
				}
				
				//fin comentarios
				
                $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"tema"=>"".pg_result($Registros,$i,1),
								"resumen"=>"".pg_result($Registros,$i,2),
								"id"=>"".pg_result($Registros,$i,3),
								"p_claves"=>"".pg_result($Registros,$i,4),
								"enlace"=>"".pg_result($Registros,$i,5),
								"estado"=>"".pg_result($Registros,$i,6),
								"autor".pg_result($Registros,$i,7),
								"img"=>"".pg_result($Registros,$i,8),
								"comentarios"=>"".$Comentario, 
								"calificacion"=>"".pg_result($Registros,$i,9),

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
 public function articulos_sin_evaluador() 
	{

        $this->Sql = "select * from articulos where estado ='SinEvaluar'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
	if($Filas>0){
				 for ($i = 0; $i < $Filas; $i++) 
			 {  
			 
			 			 
			 	 

                $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"tema"=>"".pg_result($Registros,$i,1),
								"resumen"=>"".pg_result($Registros,$i,2),
								"id"=>"".pg_result($Registros,$i,3),
								"p_claves"=>"".pg_result($Registros,$i,4),
								"enlace"=>"".pg_result($Registros,$i,5),
								"estado"=>"".pg_result($Registros,$i,6),
								"autor".pg_result($Registros,$i,7),
								"img"=>"".pg_result($Registros,$i,8),
					
                );
				
                $M[$i] = $response;
           
			 }
			 

            $response = $M;
			
			return $response;
			}
			else{
				return "No hay";
				}
			
   }
 public function articulos_pendientes() 
	{
		session_start();
        $this->Sql = "select * from articulos where estado ='Correciones'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
		
		
		if($Filas>0)
		{
			 for ($i = 0; $i < $Filas; $i++) 
			 {   


			 	//comentarios
			 	$d=pg_result($Registros,$i,3);		
				
				$Sql2="select id_evaluador , comentarios from revision where id_articulo=".$d.";";
				$Registros1 = pg_query($this->Conexion->getconexion(), $Sql2);
				$Comentario="";
				
				for($j=0;$j<3;$j++)
				{
					$Comentario=$Comentario."  ".pg_result($Registros1,$j,0);
					$Comentario=$Comentario." : ".pg_result($Registros1,$j,1);
			
					
				}
				
				//fin comentarios
				
                $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"tema"=>"".pg_result($Registros,$i,1),
								"resumen"=>"".pg_result($Registros,$i,2),
								"id"=>"".pg_result($Registros,$i,3),
								"p_claves"=>"".pg_result($Registros,$i,4),
								"enlace"=>"".pg_result($Registros,$i,5),
								"estado"=>"".pg_result($Registros,$i,6),
								"autor".pg_result($Registros,$i,7),
								"img"=>"".pg_result($Registros,$i,8),
								"comentarios"=>"".$Comentario,
								"calificacion"=>"".pg_result($Registros,$i,9),

                );
				
				
                $M[$i] = $response;
           
			 }
			 

            $response = $M;
			
			return $response;	
			}
			else{
				return "No hay";
				}

   }

       public function articulos_evaluando() 
	{
		
        $this->Sql = "select * from articulos where estado ='Evaluando'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
	if($Filas>0){
						 for ($i = 0; $i < $Filas; $i++) 
			 {   



			
                $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"tema"=>"".pg_result($Registros,$i,1),
								"resumen"=>"".pg_result($Registros,$i,2),
								"id"=>"".pg_result($Registros,$i,3),
								"p_claves"=>"".pg_result($Registros,$i,4),
								"enlace"=>"".pg_result($Registros,$i,5),
								"estado"=>"".pg_result($Registros,$i,6),
								"autor".pg_result($Registros,$i,7),
								"img"=>"".pg_result($Registros,$i,8),
			

                );
				
				
                $M[$i] = $response;
           
			 }
			 

            $response = $M;
			
			return $response;
			}
			else{
				return "No hay";
				}

	

   }
    public function articulos_rechazados() 
	{
		session_start();
        $this->Sql = "select * from articulos where estado ='Rechazado'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
	if($Filas>0){
					 for ($i = 0; $i < $Filas; $i++) 
			 {   

			 	//comentarios
			 	$d=pg_result($Registros,$i,3);		
				
				$Sql2="select id_evaluador , comentarios from revision where id_articulo=".$d.";";
				$Registros1 = pg_query($this->Conexion->getconexion(), $Sql2);
				$Comentario="";
				
				for($j=0;$j<3;$j++)
				{
					$Comentario=$Comentario."  ".pg_result($Registros1,$j,0);
					$Comentario=$Comentario." : ".pg_result($Registros1,$j,1);
			
					
				}
				
				//fin comentarios
				
                $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"tema"=>"".pg_result($Registros,$i,1),
								"resumen"=>"".pg_result($Registros,$i,2),
								"id"=>"".pg_result($Registros,$i,3),
								"p_claves"=>"".pg_result($Registros,$i,4),
								"enlace"=>"".pg_result($Registros,$i,5),
								"estado"=>"".pg_result($Registros,$i,6),
								"autor".pg_result($Registros,$i,7),
								"img"=>"".pg_result($Registros,$i,8),
								"comentarios"=>"".$Comentario,
								"calificacion"=>"".pg_result($Registros,$i,9),
                );
				
				
                $M[$i] = $response;
           
			 }
			 

            $response = $M;
			
			return $response;
			}
			else{
				return "No hay";
				}
	
	
   }
   public function articulos_aceptados(){
	   
		
		$this->Sql = "select * from articulos where estado ='Aceptados'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
 		$Filas = pg_num_rows($Registros);
		
		if($Filas>0)
		{
			for ($i = 0; $i < $Filas; $i++) 
			{
				
			 	//comentarios
			 	$d=pg_result($Registros,$i,3);		
				
				$Sql2="select id_evaluador , comentarios from revision where id_articulo=".$d.";";
				$Registros1 = pg_query($this->Conexion->getconexion(), $Sql2);
				$Comentario="";
				
				for($j=0;$j<3;$j++)
				{
					$Comentario=$Comentario."  ".pg_result($Registros1,$j,0);
					$Comentario=$Comentario." : ".pg_result($Registros1,$j,1);
			
					
				}
				
				//fin comentarios
				
               
			    $response=array("titulo"=>"".pg_result($Registros,$i,0),
								"tema"=>"".pg_result($Registros,$i,1),
								"resumen"=>"".pg_result($Registros,$i,2),
								"id"=>"".pg_result($Registros,$i,3),
								"p_claves"=>"".pg_result($Registros,$i,4),
								"enlace"=>"".pg_result($Registros,$i,5),
								"estado"=>"".pg_result($Registros,$i,6),
								"autor".pg_result($Registros,$i,7),
								"img"=>"".pg_result($Registros,$i,8),
								"comentarios"=>"".$Comentario,
								"calificacion"=>"".pg_result($Registros,$i,9),
                );
				
				
						
                $M[$i] = $response;
           
			 }
				 

              $response = $M;
			
			  return $response;
		}
		 else{
			return "No hay";
						 
			 }
				
	   }
       public function articulos_evaluados() 
	{

        $this->Sql = "select * from articulos where estado ='Evaluados'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
        $Filas = pg_num_rows($Registros);
		
		if($Filas>0)
		{
			for ($i = 0; $i < $Filas; $i++) 
			{   

				$d=pg_result($Registros,$i,3);	
				
				//Promedio
				
				$this->Sql="select avg(nota) from revision where terminado=FALSE and id_articulo=".$d." "; 

				$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);
				$Filas = pg_num_rows($Registros);
				
				$Promedio= pg_result($Registros,0,0);
				$this->Sql1="update articulos set calificacion=".$Promedio." where id=".$d.";";
				$Registros = pg_query($this->Conexion->getconexion(), $this->Sql1);
				
				
				if($Promedio <3 )
				{
					$this->Sql1="update articulos set estado='Rechazado' where id=".$d.";";
					$Registros = pg_query($this->Conexion->getconexion(), $this->Sql1);
				}
				else if($Promedio >=3 and $Promedio<4)
				{
					$this->Sql1="update articulos set estado='Correciones' where id=".$d.";";
					$Registros = pg_query($this->Conexion->getconexion(), $this->Sql1);
				}
				else if($Promedio >=4 and $Promedio <=5)
				{
					$this->Sql1="update articulos set estado='Aceptados' where id=".$d.";";
					$Registros1 = pg_query($this->Conexion->getconexion(),$this->Sql1);
					
				}
		
	
			  	$this->Sql1="update revision set terminado = TRUE where id_articulo=".$d."";	
				$Registros=pg_query($this->Conexion->getconexion(), $this->Sql1);
	  
	  /// fin del promedio(////////
	  
				/// notificaciones
			 	

				
				$this->Sql1="select autor,estado from articulos where id=".$d."";	
				$Registros=pg_query($this->Conexion->getconexion(), $this->Sql1);
				
				$ff=pg_result($Registros,0,0);
				$est=pg_result($Registros,0,1);
				
				$sql3="insert into notificaciones values ('".$ff."','Su articulo ".$d." A sido :".$est."');";
			 	$Registros=pg_query($this->Conexion->getconexion(), $sql3);	
					
					// fin notificaciones
					

				
			}
			
			return "Si hay";
		}
		else
		{
			return "No hay";
		}
	
	
   }
      public function eliminar_instrucciones(){
	  	
			$this->Sql = "update revision  set  comentarios = ' ' where id_articulo=".$this->Datos['id'].";";
			
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			
	return "Se han Borrado la Instruciones"; 
   }
     public function eliminar_articulos(){
		 
		 	$this->Sql = "select from revision where id_articulo=".$this->Datos['id'].";";
            $Registro1 = pg_query($this->Conexion->getconexion(), $this->Sql);
			$Filas = pg_num_rows($Registro1);
		
			if($Filas>0)
			{
				$this->Sql = "delete from revision  where id_articulo=".$this->Datos['id'].";";
				$Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			}
	  	
			$this->Sql = "delete from articulos  where id='".$this->Datos['id']."' ";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			
	return "Se borro articulo22"; 
   }
   

   	  function publicar_articulo(){

			$this->Sql = "update articulos  set estado = 'Publicado' where id=".$this->Datos['id'].";";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			$this->Sql1="select autor from articulos where id=".$this->Datos['id'].";";
			$Registro = pg_query($this->Conexion->getconexion(), $this->Sql1);
			$ff=pg_result($Registro,0,0);
			$sql3="insert into notificaciones values ('".$ff."','Su articulo ".$this->Datos['id']." A sido : Publicado');";
			$Registros=pg_query($this->Conexion->getconexion(), $sql3);	
			return "El articulo ha sido publicado"; 
   }
   
	  function cerrarSesion(){
	  		session_start();
			$this->Sql = "update personas  set activo = false where id='" . $_SESSION['id']. "' ";
            $Registro = pg_query($this->Conexion->getconexion(), $this->Sql);
			session_destroy();
			return "CS"; 
   }
   
   function informacion_editor()
   {
	   
	    $this->Sql = "select nombre from personas where roll='Editor'" ;
		$Registros = pg_query($this->Conexion->getconexion(), $this->Sql);


			
                $response=pg_result($Registros,0,0);

   
			
			return $response;
	

	   
   }


	
	

	  

}




?>