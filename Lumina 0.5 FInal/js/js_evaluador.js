
//window.onload = manda_a_html; // con esta funcion al terminar de cargar la pagina, carga los articulos, maravilla



	
function evaluador(id,nombre,direccion,tel,email,afiliacion){
	
	this.id=id;
	this.nombre=nombre;
	this.direccion=direccion;
	this.tel=tel;
	this.email=email;
	this.afiliacion=afiliacion;

	}

list_evaluadores=new evaluador();


evaluador.prototype.crear_evaluador=function()
{
	
	
}

function oe(){
	return  this.id;
	}

function listar_articulos(datos){
	
 for (var i in datos)
	 {
		 //alert("Cedula: "+datos[i].Cedula+" Nombre: "+datos[i].Nombre+" Apellido: "+datos[i].Apellido);

	    var elementotr=document.createElement('tr');
	
	 	   // creacion primer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
      	var texto=document.createTextNode(datos[i].titulo);
	              elementotd.appendChild(texto);
    
	 // creacion segundo td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	 var texto=document.createTextNode(datos[i].tema);
	         elementotd.appendChild(texto);
			 
      // creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].resumen);
	         elementotd.appendChild(texto);
			 
			 // creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].id);
	         elementotd.appendChild(texto);

// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].p_claves);
	         elementotd.appendChild(texto);
////////////////////////////////////////////// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].enlace);
	         elementotd.appendChild(texto);
			 
			 ///////////////////////////////// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].estado);
	         elementotd.appendChild(texto);
			 
			 ///////////////////////////////// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 
    	var texto=document.createTextNode(datos[i].autor);
	         elementotd.appendChild(texto);
			 
		 
		//descarga
			 
		var elementotd=document.createElement('td');
		
		
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);
		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);
		
		elementotd.appendChild(a_p);
		
		elementotr.appendChild(elementotd); 
		
		//Comentarios
			 
		var elementotd=document.createElement('td');
		
		
		a_p=document.createElement("textarea");
		a_p.setAttribute("class","form-control");
		a_p.setAttribute("rows","5");
		a_p.setAttribute("id","text_comentarios");
		a_p.setAttribute("placeholder","Ingrese Comentarios");
		elementotd.appendChild(a_p);
		
		elementotr.appendChild(elementotd);

		//nota
			 
		var elementotd=document.createElement('td');

		
		a_p=document.createElement("input");
		a_p.setAttribute("class","form-control");
		a_p.setAttribute("id","Nota");
		a_p.setAttribute("type","text");
		a_p.setAttribute("name","Nota");
		a_p.setAttribute("width","10");
		a_p.setAttribute("placeholder","Nota");
		elementotd.appendChild(a_p);
		
		elementotr.appendChild(elementotd);
			 
			 
/////////////////////////////////////////////
// creacion tercer td y se lo asigno al padre tr
	    var elementotd=document.createElement('td');
			elementotr.appendChild(elementotd); 

		var elemtoa=document.createElement('button');
//elemtoa.setAttribute('id',datos[i].evalu)
		elemtoa.setAttribute("onClick","Evaluar2("+datos[i].id+")");
		elemtoa.setAttribute('id','enviar');
		elemtoa.setAttribute('name','enviar');
		elemtoa.setAttribute('class','btn btn-info');
		var createAText = document.createTextNode('Enviar');
		elemtoa.appendChild(createAText);
 		 elementotd.appendChild(elemtoa);			 		
		
////////////////////////////////////////////			 
		 

    	//var texto=document.createTextNode(elemtoa);
	      
		var obj=document.getElementById('Contenido');
        obj.appendChild(elementotr);
	 }//fin for
}

function f_chat()
    {
		
		

		ccc=document.getElementById("divf1");
		
		ccc.style.display='block';

			
		

		


    };


function Evaluar2(id)
{
		
		
		//alert("entro a evaluar");
		
			
		valor=document.getElementById("Nota").value;
		comentarios=document.getElementById("text_comentarios").value;
			
		$.post("../controladora/Controladora.php",{clase:"Evaluador",oper:"Evaluar",id_articulo:id,nota:valor,comentarios:comentarios},function(respuesta)		{
	
	
		//alert(respuesta);
		location.reload(true);
		
	  });
	
}


$(function()
{
	$.post("../controladora/Controladora.php",{clase:"Evaluador",oper:"loadEvaluador"},function(respuesta)
		{
			//alert(respuesta);
		
				datos = eval(respuesta);
				if(datos!='No hay'){
		    	listar_articulos(datos);
				}
		  });
	$("#cargarArticulos").on("click",function(event){
	
			location.reload(true);
			
	});
	

	

	
	
	$("#cerrarSesion").on("click",function(event){
		

		$.post("../controladora/Controladora.php",{clase:"Editor",oper:"cerrarSesion"},function(respuesta)
				{	
				
				respuesta = eval(respuesta);
					
					if(respuesta =='CS')
					{
						window.parent.location.href="../Sesion.html";
					}
					

					});	
				
		});
		$.post("../controladora/Controladora.php",{clase:"Evaluador",oper:"informacion_evaluador"},function(respuesta)
	{	
	
	 	
				
		datos= eval(respuesta);	
		
		
		df=document.getElementById("nombre_evaluador");
		
		tex=document.createTextNode(datos.toUpperCase());
		df.appendChild(tex);
			
		});

});
