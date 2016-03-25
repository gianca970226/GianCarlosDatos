

$(function() {	
	
	$("#enviar").on("click",function(event){

	var x=document.getElementById("enlace").value.indexOf(".");
	
	var nombre=document.getElementById("enlace").value.substr(x);
	var img=document.getElementById("img").value.substr(12);
	var titulo= document.getElementById("titulo").value;
	var tema= document.getElementById("tema").value;
	var p_claves= document.getElementById("p_claves").value;
	var resumen= document.getElementById("resumen").value;
	$.post("../controladora/Controladora.php",{clase:"Autor",oper:"SubArchivo",name:nombre,titulo:titulo,tema:tema,p_claves:p_claves,resumen:resumen,img:img},function(respuesta)
			{
				
				respuesta= eval(respuesta);
			
			if(respuesta == 'oe'){
					
				 var oxe = new FormData($(".formulario")[0]);
				
				 $.ajax({
					
					url: '../modelo/subirarchivo.php',
					type: 'post',
					data:oxe,
					cache: false,
            		contentType: false,
            		processData: false,
					success: function(data){
               
           alert(data);
		   location.reload(true);
   //
          			 },
				 
				 });
				}
				else{
					alert(respuesta);
					}
					
					
			
		});
	});


	
	$("#enviar_a").on("click",function(event){
	
	var nombre=document.getElementById("enlace1").value.substr(12);
	var img=document.getElementById("img1").value.substr(12);

	if(nombre ==document.getElementById("enviar_correciones_a").value){
		$.post("../controladora/Controladora.php",{clase:"Autor",oper:"Correcciones",name:nombre,img:img},function(respuesta)
			{
				
				respuesta= eval(respuesta);
				
			if(respuesta == 'oe'){
					
				 var oe = new FormData($(".formulario1")[0]);
				
				 $.ajax({
					
					url: '../modelo/subirarchivo1.php',
					type: 'post',
					data:oe,
					cache: false,
            		contentType: false,
            		processData: false,
					success: function(data){
               
           alert(data);
   //
          			 },
				 
				 });
				}
				else{
					alert(respuesta);
					}
		});
		
		}
		else{
			alert("Envie el archivo con el id Descargado")
			}
	
	});



    var notifications = new $.ttwNotificationMenu({
        notificationList:{
            anchor:'item',
            offset:'0 15'
        }
    });

    notifications.initMenu({
        projects:'#notificaciones', //el id del link 

    });
	
	
	
	
	
	
	
	
			$.post("../controladora/Controladora.php",{clase:"Autor",oper:"Notificacion"},function(respuesta)
			{
				
			var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
		  		
				if(datos !='No hay'){
					for (var i in datos)
				{
					
					var $form = $(this), type;
		
        			type = $form.find('#type').val();

					var options = {
					category:"projects",
					message: ""+datos[i].notificacion
					};
            		notifications.createNotification(options);
					
					
					//notifications.deleteNotifiction(notifications);
				
				}
					}
				
				

	
			}
				
				  )


  
});
