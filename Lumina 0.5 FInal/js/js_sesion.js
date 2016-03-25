
$(function()
{

	//para buscar el usuario y la clave
   $("#Enviar").button().on("click", function(event)
    {

		usuario=document.getElementById("user").value;
		clave=document.getElementById("pass").value;
		
		//alert("usario: "+usuario +"clave: "+clave);
	 	  
		if(usuario!="" && clave!="")
		{
			$.post("controladora/Controladora.php",{clase:"Login",oper:"Login",id:usuario,pass:clave},function(respuesta)
			{
			
				
				respuesta=eval(respuesta); // convertir de json a js
				
				
				if(respuesta=="Editor")	{
						
						parent.window.location='vista/Editor.html';
					
				}
				else if(respuesta=='Autor'){
					
					parent.window.location='vista/Autor.html';
					
				}
				
				else if(respuesta=='Evaluador'){
					
					parent.window.location='vista/Evaluador.html';
					
				}
				
				else if(respuesta=='ci'){
					
					alert("LA CONTRASEÑA ES EQUIVOCA");
				}
				
				else if(respuesta=='no'){
					
					alert("USUARIO NO REGISTRADO");
				}
				

							
				else{
					alert("ACCESO DENEGADO");
			
					
				}
			}
				
				  )
	 	}
  		else{
			alert("CAMPOS INVALIDOS");
		}
	
	
		
	
    }
							)

	
	

	
	
});
	
