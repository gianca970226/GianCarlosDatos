<?php
class Usuario
{
function autenticar($args)
	{
		extract($args);
		session_start($_SESSION['usuario'], $_SESSION['clave'], $_SESSION['rol']);
		//error_log("select * from usuario where id=$usuario");
		//$resultados=UtilConexion::$pdo->query("select count(*) as filas from usuario where id='$usuario'  and clave='$password'");
		 $sql="SELECT * FROM  usuario where  id='$usuario'  and clave='$password'";
		 error_log($sql);
		 $menu=file_get_contents("sin menu");
		 if(($registros = UtilConexion::$pdo->query($sql)))
		 {
			     $fila=$registros->fetch(PDO::FETCH_ASSOC);
			
			if($fila["rol"]=="estudiante")
			{
				$menu=file_get_contents("../vista/html/menuEstudiante.html");
			}
			else if($fila["rol"]=="profesor")
			{
				$menu=file_get_contents("../vista/html/menuProfesor.html");
			}
			echo json_encode(['menu'=>$menu, 'tipousuario' => $fila["rol"]] );
			 
		 }
		 
	
		
		
		
        
		
	}	
	function CerrarSesion()
	{
		//error_log('sdfsvg');
		$_SESSION = array();

		// Si se desea destruir la sesión completamente, borre también la cookie de sesión.
		// Nota: ¡Esto destruirá la sesión, y no la información de la sesión!
		if (ini_get("session.use_cookies")) {
    		$params = session_get_cookie_params();
    		setcookie(session_name(), '', time() - 42000,
        	$params["path"], $params["domain"],
        	$params["secure"], $params["httponly"]
    		);
		}
		session_destroy();

		echo json_encode('operacion exitosa');
		
	}

}
 
?>