
//window.onload = manda_a_html; // con esta funcion al terminar de cargar la pagina, carga los articulos, maravilla

function articulo(id,titulo,tema,p_claves,resumen,enlace,estado){
	
	this.id=id;
	this.titulo=titulo;
	this.tema=tema;
	this.p_claves=p_claves;
	this.resume=resumen;
	this.enlace=enlace;
	this.estado=estado;
	
	}

list_articulos=new articulo();


articulo.prototype.crear_articulos=function()
{
	
	
}


$(function()
{


			$.post("controladora/Controladora.php",{clase:"Publico",oper:"LoadPublico"},function(respuesta)
			{
				
				
				
				
				var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
		  		
				if(datos!="No hay")
				{
				
					for (var i in datos)
					{
				
					div_p=document.createElement("div");  //CREACION DE DIV PRINCIPAL
					div_p.setAttribute("class","col-lg-4");
					
					img_p=document.createElement("img");
					img_p.setAttribute("class","img1 img-circle");
					img_p.setAttribute("src","articulos/"+datos[i].img);
					
					h2_p=document.createElement("h2");
					tex_h2=document.createTextNode(datos[i].titulo);	//aca va el titulo
					h2_p.appendChild(tex_h2);							// insertar texto al h2
					
					h3_p=document.createElement("h3");
					tex_h3=document.createTextNode(datos[i].tema);	
					h3_p.appendChild(tex_h3);							
				
					h4_p=document.createElement("h4");
					tex_h4=document.createTextNode("RESUMEN");	
					h4_p.appendChild(tex_h4);	
					
					p_p=document.createElement("p");
					tex_p=document.createTextNode(datos[i].resumen);	 //aca va el resumen
					p_p.appendChild(tex_p);	
					
					
					h44_p=document.createElement("h4");
					tex_h44=document.createTextNode("Palabras claves:");	
					h44_p.appendChild(tex_h44);	
					
					pp_p=document.createElement("p");
					tex_pp=document.createTextNode(datos[i].p_claves);	 //aca va el resumen
					pp_p.appendChild(tex_pp);
					
					
					
					
					a_p=document.createElement("a");
					a_p.setAttribute("href","articulos/"+datos[i].enlace);
					tex_a=document.createTextNode("Descargar");	
					a_p.appendChild(tex_a);
					
					
					div_p.appendChild(img_p); //METIENDO TODO AL DIV
					div_p.appendChild(h2_p);
					div_p.appendChild(h3_p);
					div_p.appendChild(h4_p);
					div_p.appendChild(p_p);
					
					div_p.appendChild(h44_p);
					div_p.appendChild(pp_p);
					
					div_p.appendChild(a_p);	
					
					brr=document.createElement("br");
					div_p.appendChild(brr);
					
					roww=document.getElementById("row");
					roww.appendChild(div_p);
					
					
					}
				
				}
				
				
	
			}
				
				  )

	
	
		
	
    }
)

	
	

	

