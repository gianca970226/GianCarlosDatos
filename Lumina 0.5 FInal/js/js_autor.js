
//window.onload = manda_a_html; // con esta funcion al terminar de cargar la pagina, carga los articulos, maravilla



	
function autor(id,nombre,direccion,tel,email,afiliacion){
	
	this.id=id;
	this.nombre=nombre;
	this.direccion=direccion;
	this.tel=tel;
	this.email=email;
	this.afiliacion=afiliacion;

	}

list_autores=new autor();


autor.prototype.crear_autores=function()
{
	
	
}


function mostrar_mis_articulos(){
	

	gg=document.getElementById("enviar_correciones_a");	 
	gg.style.display="none";
	
	formm=document.getElementById("formulario_completo");	
	formm.style.display='none'; // mostar el formulario
	

	arts=document.getElementById("mis_articulos");
	arts.style.display='block';
	 
}

function mostrar_formulario()
{
	gg=document.getElementById("enviar_correciones_a");	 
	gg.style.display="none";
	formm=document.getElementById("formulario_completo");	
	formm.style.display='block'; // mostar el formulario
	

	arts=document.getElementById("mis_articulos");
	arts.style.display='none';


}



function manda_mis_articulos_html(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
	for (var i in datos)
	{
		
		div_p=document.createElement("div");  //CREACION DE DIV PRINCIPAL
		div_p.setAttribute("class","col-lg-4");
		
		img_p=document.createElement("img");
		img_p.setAttribute("class","img1 img-circle");
		img_p.setAttribute("src","../articulos/"+datos[i].img);
		
		h2_p=document.createElement("h2");
		tex_h2=document.createTextNode(datos[i].titulo);	//aca va el titulo
		h2_p.appendChild(tex_h2);							// insertar texto al h2
		
		h3_p=document.createElement("h3");
		tex_h3=document.createTextNode("Estado: "+datos[i].estado);
		h3_p.appendChild(tex_h3);
		
		a_p4=document.createElement("a");
		a_p4.setAttribute("href","../articulos/"+datos[i].enlace);

		tex_a3=document.createTextNode("Descargar");	
		a_p4.appendChild(tex_a3);							
	
		h4_p=document.createElement("h4");
		tex_p=document.createTextNode("Instrucciones: "+datos[i].comentarios);
		h4_p.appendChild(tex_p);	
		

		
		
		brr=document.createElement("br");
		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(a_p4);
		div_p.appendChild(h4_p);


		
		if(datos[i].estado=="Correciones")
		{
			
			
			
			a_s=document.createElement("a");
			a_s.setAttribute("href","Autor.html#");
			a_s.setAttribute("onClick","corregido_a('"+datos[i].enlace+"')");
			a_s.setAttribute("id","enviar_corregido");
			//a_s.setAttribute("values",datos[i].enlace);
			tex_s=document.createTextNode("Enviar Doc Corregido");	
			a_s.appendChild(tex_s);	
			div_p.appendChild(a_s);
			
		}
		
		
			
		
		brr=document.createElement("br");
		div_p.appendChild(brr);
		
		roww=document.getElementById("row");
		roww.appendChild(div_p);
	
	}

	
	
	
	
	
}


	
	
	
function corregido_a(datos)
{

		 gg=document.getElementById("enviar_correciones_a");
		 document.getElementById("enviar_correciones_a").value=datos;
		 gg.style.display="block";
		 

		formm=document.getElementById("formulario_completo");	
		formm.style.display='none'; // mostar el formulario


		arts=document.getElementById("mis_articulos");
		arts.style.display='none';
		 
		 
}


function f_chat()
    {
		
		

		ccc=document.getElementById("divf1");
		
		ccc.style.display='block';

			
		

		


    };


$(function()
{
	

	
	
	$.post("../controladora/Controladora.php",{clase:"Autor",oper:"Mis_articulos"},function(respuesta)
	{
		
		
	var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
		
		if(datos !='No hay'){
		manda_mis_articulos_html(datos);
		}

	})
		
$.post("../controladora/Controladora.php",{clase:"Autor",oper:"informacion_autor"},function(respuesta)
	{	
	
	 	
				
		datos= eval(respuesta);	

		
		df=document.getElementById("nombre_autor");
		
		tex=document.createTextNode(datos.toUpperCase());
		df.appendChild(tex);
			
		});	  
		 $("#cerrarSesion").on("click",function(event){
					 
		

	$.post("../controladora/Controladora.php",{clase:"Autor",oper:"cerrarSesion"},function(respuesta)
			{	
			
			respuesta = eval(respuesta);
				if(respuesta =='CS'){

					window.parent.location.href="../Sesion.html";
				}
				
				//respuesta=eval(respuesta);
				
				
			
		  });
	});
	

});
