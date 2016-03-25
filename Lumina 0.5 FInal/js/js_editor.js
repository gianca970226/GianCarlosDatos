
//window.onload = manda_a_html; // con esta funcion al terminar de cargar la pagina, carga los articulos, maravilla

	
	var modificar=false;
	
function editor(id,nombre,direccion,tel,email,afiliacion){
	
	this.id=id;
	this.nombre=nombre;
	this.direccion=direccion;
	this.tel=tel;
	this.email=email;
	this.afiliacion=afiliacion;

	}

editor=new editor();


function eliminar_instrucciones(id)
{
			
		
		$.post("../controladora/Controladora.php",{clase:"Editor",oper:"eliminar_instrucciones",id:id},function(respuesta)
		{	
			
			ff=eval(respuesta);
			
			alert(ff);
			location.reload(true);
		
			//respuesta=eval(respuesta);
					
			
		});	
		
			
			
}


function eliminar_articulos(id)
{
			
		
		$.post("../controladora/Controladora.php",{clase:"Editor",oper:"eliminar_articulos",id:id},function(respuesta)
		{	
		
	
			ff=eval(respuesta);
			
			alert(ff);
			location.reload(true);
		
			
			//respuesta=eval(respuesta);
			
			
			
		});	
		
		
			
}




function articulos_publicados(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
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
		tex_h3=document.createTextNode("Estado: "+datos[i].estado); //aca va el estado	
		h3_p.appendChild(tex_h3);							
	
		h4_p=document.createElement("h4");
		tex_pf=document.createTextNode("Instruciones: ");	
		h4_p.appendChild(tex_pf);
		
		p_p=document.createElement("p");
		p_p.setAttribute("style","color:#fff;");
		tex_pp=document.createTextNode(datos[i].comentarios);	
		p_p.appendChild(tex_pp);
		
		
	
		a_p1=document.createElement("a");
		a_p1.setAttribute("href","#");
		a_p1.setAttribute("onClick","eliminar_instrucciones("+datos[i].id+")");

		tex_a1=document.createTextNode("Eliminar  Evaluacion - Instrucciones");	
		a_p1.appendChild(tex_a1);		

		
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);

		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);
		
		h5_p=document.createElement("h4");
		tex_p5=document.createTextNode("Calificacion: "+datos[i].calificacion);	 //ACA VA LA CALIFICACION FALTANTE EL PHP
		h5_p.appendChild(tex_p5);
		
		
		
		a_p2=document.createElement("a");
		a_p2.setAttribute("href","#");
		a_p2.setAttribute("onClick","eliminar_articulos("+datos[i].id+")");  
		tex_a2=document.createTextNode("Eliminar  Articulos");	
		a_p2.appendChild(tex_a2);
		
		br=document.createElement("br");
		br1=document.createElement("br");
	
		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(h5_p);
		div_p.appendChild(a_p1);
		div_p.appendChild(br1);
		div_p.appendChild(a_p);	
		div_p.appendChild(br);			
		div_p.appendChild(a_p2);
		div_p.appendChild(h4_p);
		div_p.appendChild(p_p);
		

		
		roww=document.getElementById("row");
		roww.appendChild(div_p);
	
	}
}


function articulos_rechazados(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
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
		tex_h3=document.createTextNode("Estado: "+datos[i].estado); //aca va el estado	
		h3_p.appendChild(tex_h3);							
	
		h4_p=document.createElement("h4");
		tex_pf=document.createTextNode("Instrucciones:");	
		h4_p.appendChild(tex_pf);	
		
		p_p=document.createElement("p");
		p_p.setAttribute("style","color:#fff;");
		tex_pp=document.createTextNode(datos[i].comentarios);	
		p_p.appendChild(tex_pp);
		
		a_p1=document.createElement("a");
		a_p1.setAttribute("href","#");
		a_p1.setAttribute("onClick","eliminar_instrucciones("+datos[i].id+")");
		tex_a1=document.createTextNode("Eliminar  Evaluacion - Instrucciones");	
		a_p1.appendChild(tex_a1);
		
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);
		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);
		
		
		h5_p=document.createElement("h4");
		tex_p5=document.createTextNode("Calificacion: "+datos[i].calificacion);	 //ACA VA LA CALIFICACION FALTANTE EL PHP
		h5_p.appendChild(tex_p5);
		
		a_p2=document.createElement("a");
		a_p2.setAttribute("href","#");
		a_p2.setAttribute("onClick","eliminar_articulos("+datos[i].id+")");
		tex_a2=document.createTextNode("Eliminar  Articulo");	
		a_p2.appendChild(tex_a2);
		
		
		brr=document.createElement("br");
		brr1=document.createElement("br");
		brr2=document.createElement("br");
		
		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(h5_p);
		div_p.appendChild(a_p1);
		div_p.appendChild(brr);
		div_p.appendChild(a_p);
		div_p.appendChild(h4_p);
		div_p.appendChild(p_p);


		
		
		brr=document.createElement("br");
		div_p.appendChild(brr);
		
		roww=document.getElementById("row5");
		roww.appendChild(div_p);
	
	}
}


function articulos_aceptados(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
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
		tex_h3=document.createTextNode("Estado: "+datos[i].estado); //aca va el estado	
		h3_p.appendChild(tex_h3);							
	
		h4_p=document.createElement("h4");
		tex_pf=document.createTextNode("Instrucciones:");	
		h4_p.appendChild(tex_pf);
		
		p_p=document.createElement("p");
		p_p.setAttribute("style","color:#fff;");
		tex_pp=document.createTextNode(datos[i].comentarios);	
		p_p.appendChild(tex_pp);	
		

		a_p1=document.createElement("a");
		a_p1.setAttribute("href","#");
		a_p1.setAttribute("onClick","eliminar_instrucciones("+datos[i].id+")");
		tex_a1=document.createTextNode("Eliminar  Evaluacion - Instrucciones");	
		a_p1.appendChild(tex_a1);
		
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);

		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);
		
		a_p2=document.createElement("a");
		a_p2.setAttribute("href","#");
		a_p2.setAttribute("onClick","eliminar_articulos("+datos[i].id+")");
		tex_a2=document.createTextNode("Eliminar  Articulo");	
		a_p2.appendChild(tex_a2);
		
		h5_p=document.createElement("h4");
		tex_p5=document.createTextNode("Calificacion: "+datos[i].calificacion);	 //ACA VA LA CALIFICACION FALTANTE EL PHP
		h5_p.appendChild(tex_p5);

		
		
		brr=document.createElement("br");
		brr11=document.createElement("br");
		brr2=document.createElement("br");
		brr3=document.createElement("br");
		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(h5_p);
		
		div_p.appendChild(a_p1);
		div_p.appendChild(brr);
		div_p.appendChild(a_p);
		div_p.appendChild(brr2);
		div_p.appendChild(a_p2);

	
			div_p.appendChild(brr3);
			a_p3=document.createElement("a");
			a_p3.setAttribute("style","font-size:25px;");
			a_p3.setAttribute("href","#");
			a_p3.setAttribute("Onclick","publicar_articulo("+datos[i].id+")");
			tex_a3=document.createTextNode("Publicar Articulo");	
			a_p3.appendChild(tex_a3);
			
			div_p.appendChild(a_p3);
			
			
			
		
		div_p.appendChild(h4_p);
		div_p.appendChild(p_p);
		
		
		
		brr=document.createElement("br");
		div_p.appendChild(brr);
		
		roww=document.getElementById("row1");
		roww.appendChild(div_p);
	
	}
}


function articulos_sin_evaluador(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
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
		tex_h3=document.createTextNode("Estado: "+datos[i].estado); //aca va el estado	
		h3_p.appendChild(tex_h3);							
		
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);
		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);
		
		a_p21=document.createElement("a");
		a_p21.setAttribute("href","#");
		a_p21.setAttribute("onClick","asignar_evaluador("+datos[i].id+")");
		tex_a21=document.createTextNode("Asignar Evaluador");	
		a_p21.appendChild(tex_a21);

		
		a_p2=document.createElement("a");
		a_p2.setAttribute("href","#");
		a_p2.setAttribute("onClick","eliminar_articulos("+datos[i].id+")");
		tex_a2=document.createTextNode("Eliminar  Articulo");	
		a_p2.appendChild(tex_a2);
		
		
		
		brr=document.createElement("br");
		brr1=document.createElement("br");
		brr2=document.createElement("br");
		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(a_p21);
		div_p.appendChild(brr1);
		div_p.appendChild(a_p);
		div_p.appendChild(brr2);
		div_p.appendChild(a_p2);

		
		roww=document.getElementById("row2");
		roww.setAttribute("heigth","200");
		roww.appendChild(div_p);
	
	}
}


function articulos_evaluando(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
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
		tex_h3=document.createTextNode("Estado: "+datos[i].estado); //aca va el estado	
		h3_p.appendChild(tex_h3);							
		
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);
		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);


		a_p2=document.createElement("a");
		a_p2.setAttribute("href","#");
		a_p2.setAttribute("onClick","eliminar_articulos("+datos[i].id+")");
		tex_a2=document.createTextNode("Eliminar  Articulo");	
		a_p2.appendChild(tex_a2);
		
		
		brr=document.createElement("br");
		brr1=document.createElement("br");
		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(a_p);
		div_p.appendChild(brr)
		div_p.appendChild(a_p2);

		
		brr=document.createElement("br");
		div_p.appendChild(brr);
		
		roww=document.getElementById("row3");
		roww.appendChild(div_p);
	
	}
}


//aceptados



function articulos_pendientes(datos){ // LE ENTRA EL VECTOR DE ARTICULOS
	
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
		tex_h3=document.createTextNode("Estado: "+datos[i].estado); //aca va el estado	
		h3_p.appendChild(tex_h3);							
	
		h4_p=document.createElement("h4");
		tex_pf=document.createTextNode("Instrucciones:");	
		h4_p.appendChild(tex_pf);
		
		p_p=document.createElement("p");
		p_p.setAttribute("style","color:#fff;");
		tex_pp=document.createTextNode(datos[i].comentarios);	
		p_p.appendChild(tex_pp);	
		
	
		a_p=document.createElement("a");
		a_p.setAttribute("href","../articulos/"+datos[i].enlace);

		tex_a=document.createTextNode("Descargar");	
		a_p.appendChild(tex_a);
		
		h5_p=document.createElement("h4");
		tex_p5=document.createTextNode("Calificacion: "+datos[i].calificacion);	 //ACA VA LA CALIFICACION FALTANTE EL PHP
		h5_p.appendChild(tex_p5);
		
		
		
		a_p3=document.createElement("a");
		a_p3.setAttribute("href","#");
		a_p3.setAttribute("onClick","eliminar_articulos("+datos[i].id+")");
		tex_a3=document.createTextNode("Eliminar  Articulo");	
		a_p3.appendChild(tex_a3);
		
		
	
		brr=document.createElement("br");
		brr1=document.createElement("br");
		brr2=document.createElement("br");
		brr3=document.createElement("br");

		
		div_p.appendChild(img_p); //METIENDO TODO AL DIV
		div_p.appendChild(h2_p);
		div_p.appendChild(h3_p);
		div_p.appendChild(h5_p);
		div_p.appendChild(a_p);
		div_p.appendChild(brr2);

		div_p.appendChild(brr);
		div_p.appendChild(a_p3);
		div_p.appendChild(h4_p);
		div_p.appendChild(p_p);


		
		brr=document.createElement("br");
		div_p.appendChild(brr);
		
		roww=document.getElementById("row4");
		roww.appendChild(div_p);
	
	}
}




//MOSTRAR Y OCULTAR FORMULARIO

function f_a_a(){
	
	a_no();
	
	dd=document.getElementById("divtabla");
	dd.style.display='none';
	
	document.getElementById("divf1").style.display="none";
	

	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");	
	
	arts=document.getElementById("mis_articulos");

	f1.style.display='block';
	f2.style.display='none';
	f3.style.display='none';
	f4.style.display='none';
	f5.style.display='none';
	f6.style.display='none';
	
	arts.style.display='none';
	 
}

function f_a_m(){
	
	a_no();
	
	dd=document.getElementById("divtabla");
	
	document.getElementById("divf1").style.display="none";
	dd.style.display='none';
	
	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");
	
	arts=document.getElementById("mis_articulos");

	f1.style.display='none';
	f2.style.display='block';
	f3.style.display='none';
	f4.style.display='none';
	f5.style.display='none';
	f6.style.display='none';
	
	arts.style.display='none';
	 
}

function f_a_e(){
	
	a_no();
	
	dd=document.getElementById("divtabla");
	dd.style.display='none';
	
	document.getElementById("divf1").style.display="none";
	
	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");	
	
	arts=document.getElementById("mis_articulos");

	f1.style.display='none';
	f2.style.display='none';
	f3.style.display='block';
	f4.style.display='none';
	f5.style.display='none';
	f6.style.display='none';
	
	arts.style.display='none';
	 
}

function f_e_a(){
	
	a_no();
	
	dd=document.getElementById("divtabla");
	dd.style.display='none';
	
	document.getElementById("divf1").style.display="none";

	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");
	
	arts=document.getElementById("mis_articulos");

	f1.style.display='none';
	f2.style.display='none';
	f3.style.display='none';
	f4.style.display='block';
	f5.style.display='none';
	f6.style.display='none';
	
	arts.style.display='none';
	 
}

function f_e_m(){
	
	a_no();
	
	dd=document.getElementById("divtabla");
	dd.style.display='none';
	
	document.getElementById("divf1").style.display="none";

	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");	
	
	arts=document.getElementById("mis_articulos");

	f1.style.display='none';
	f2.style.display='none';
	f3.style.display='none';
	f4.style.display='none';
	f5.style.display='block';
	f6.style.display='none';
	
	arts.style.display='none';
	 
}

function f_e_e(){
	
	a_no();
	
	dd=document.getElementById("divtabla");
	dd.style.display='none';
	
	document.getElementById("divf1").style.display="none";
	
	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");
	
	arts=document.getElementById("mis_articulos");

	f1.style.display='none';
	f2.style.display='none';
	f3.style.display='none';
	f4.style.display='none';
	f5.style.display='none';
	f6.style.display='block';
	
	arts.style.display='none';
	 
}






$(function()
{

	$("#enviar_añadir_autor").on("click",function(event){
				
		nombre=document.getElementById("nombre_autor").value;
		
		id=document.getElementById("id_autor").value;
		pass=document.getElementById("pass_autor").value;
		direccion=document.getElementById("direccion_autor").value;
		correo=document.getElementById("correo_autor").value;
		afiliacion=document.getElementById("afiliacion_autor").value;
		tel=document.getElementById("tel_autor").value;
		
		if(id==""){
			
			alert("Por favor ingrese un id");
		}
		
		else if( document.getElementById("correo_autor").value.indexOf("@")== -1)
		{
			alert("Por Favor Ingrese Un Correo Valido");
		}
			else if( isNaN(tel)==true)
		{
			alert("Por Favor Ingrese telefoo numerico");
		}
		
		
		
		else
		{
			
			$.post("../controladora/Controladora.php",{clase:"Editor",oper:"agregar_autor",nombre:nombre,id:id,pass:pass,direccion:direccion,correo:correo, afiliacion:afiliacion,tel:tel},function(respuesta)
			{
				fff=eval(respuesta);
				
				alert(fff);
				
						nombre=document.getElementById("nombre_autor").value="";
						id=document.getElementById("id_autor").value="";
						pass=document.getElementById("pass_autor").value="";
						direccion=document.getElementById("direccion_autor").value="";
						correo=document.getElementById("correo_autor").value="";
						afiliacion=document.getElementById("afiliacion_autor").value="";
						tel=document.getElementById("tel_autor").value="";
				
				

			}); //post
		}// else
			
			
			
	});// boton		  
		


	$("#buscar_modificar_autor").on("click",function(event){
	
		
		id=document.getElementById("id_autor_m").value;
		
		if(id==""){
			
			alert("Por favor ingrese un id");
		}

		
		else
		{
	
	
				$.post("../controladora/Controladora.php",{clase:"Editor",oper:"cargar_autor",id:id},function(respuesta)
				{

					
					var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
					
					if(datos!="No Existe")
					{	
				
				
						document.getElementById("nombre_autor_m").value=datos.nombre;
						document.getElementById("id_autor_m").value=datos.id;
						document.getElementById("pass_autor_m").value=datos.pass;
						document.getElementById("direccion_autor_m").value =datos.direccion;
						document.getElementById("correo_autor_m").value =datos.correo;
						document.getElementById("afiliacion_autor_m").value=datos.afiliacion;
						document.getElementById("tel_autor_m").value=datos.telefono;
						
						document.getElementById("id_autor_m").disabled=true;
						
						

					}
					else
					{
						alert(datos);	
					}
	
				}
					
				
					  )
			}
	})
	
	
	
	
	
	
	$("#enviar_modificar_autor").on("click",function(event){
	
		nombre=document.getElementById("nombre_autor_m").value;
		id=document.getElementById("id_autor_m").value;
		pass=document.getElementById("pass_autor_m").value;
		direccion=document.getElementById("direccion_autor_m").value;
		correo=document.getElementById("correo_autor_m").value;
		afiliacion=document.getElementById("afiliacion_autor_m").value;
		tel=document.getElementById("tel_autor_m").value;
		
		
		
		
		if(id==""){
			
			alert("Por favor ingrese un id");
		}
		
		else if( document.getElementById("correo_autor_m").value.indexOf("@")== -1)
		{
			alert("Por Favor Ingrese Un Correo Valido");
		}
		else if( isNaN(tel)==true)
		{
			alert("Por Favor Ingrese telefoo numerico");
		}
		

		
		else
		{
	
	
				$.post("../controladora/Controladora.php",{clase:"Editor",oper:"modificar_autor",nombre:nombre,id:id,pass:pass,direccion:direccion,correo:correo, afiliacion:afiliacion,tel:tel},function(respuesta)
				{
					

					
					
					fff=eval(respuesta);
						
						alert(fff);
						
						document.getElementById("id_autor_m").disabled=false;
						
						nombre=document.getElementById("nombre_autor_m").value="";
						id=document.getElementById("id_autor_m").value="";
						pass=document.getElementById("pass_autor_m").value="";
						direccion=document.getElementById("direccion_autor_m").value="";
						correo=document.getElementById("correo_autor_m").value="";
						afiliacion=document.getElementById("afiliacion_autor_m").value="";
						tel=document.getElementById("tel_autor_m").value="";
										
						
						
	
		
				}
					
				
					  )
		}
		
	})
	
	
	
	
	
		$("#enviar_eliminar_autor").on("click",function(event){
			
			
			id=document.getElementById("id_autor_e").value;
				
			if(id==""){
		
				alert("Por favor ingrese un id");
			}
			
			else
			{
				
					 
					confirmar=confirm("¿Seguro que desea Eliminarlo?"); 
					if (confirmar) 
										{
 
					
									
				
							$.post("../controladora/Controladora.php",{clase:"Editor",oper:"eliminar_autor",id:id},function(respuesta)
							{
			
								fff=eval(respuesta);
									
								alert(fff);
								
								id=document.getElementById("id_autor_e").value="";
								
								
				
					
							})
					}
					
					else
					{
						id=document.getElementById("id_autor_e").value="";
					}
			
			}
					
			
	})
	
	
	
	$("#enviar_añadir_evaluador").on("click",function(event){
		

		nombre=document.getElementById("nombre_evaluador").value;
		id=document.getElementById("id_evaluador").value;
		pass=document.getElementById("pass_evaluador").value;
		direccion=document.getElementById("direccion_evaluador").value;
		correo=document.getElementById("correo_evaluador").value;
		afiliacion=document.getElementById("afiliacion_evaluador").value;
		tel=document.getElementById("tel_evaluador").value;
		estudios=document.getElementById("estudios_evaluador").value;
		
		
		if(id==""){
			
			alert("Por favor ingrese un id");
		}
		
		else if( document.getElementById("correo_evaluador").value.indexOf("@")== -1)
		{
			alert("Por Favor Ingrese Un Correo Valido");
		}
		else if( isNaN(tel)==true)
		{
			alert("Por Favor Ingrese telefoo numerico");
		}
		
		
		else
		{

			$.post("../controladora/Controladora.php",{clase:"Editor",oper:"agregar_evaluador",nombre:nombre,id:id,pass:pass,direccion:direccion,correo:correo,afiliacion:afiliacion,tel:tel,estudios:estudios},function(respuesta)// el telefoono es numerico
					{
		
						fff=eval(respuesta);
						
						alert(fff);
						
						nombre=document.getElementById("nombre_evaluador").value="";
						id=document.getElementById("id_evaluador").value="";
						pass=document.getElementById("pass_evaluador").value="";
						direccion=document.getElementById("direccion_evaluador").value="";
						correo=document.getElementById("correo_evaluador").value="";
						afiliacion=document.getElementById("afiliacion_evaluador").value="";
						tel=document.getElementById("tel_evaluador").value="";
						estudios=document.getElementById("estudios_evaluador").value="";
						
					}
						
						  )
	
		}
				  
	})
	
	
		$("#buscar_modificar_evaluador").on("click",function(event){
	
		
		id=document.getElementById("id_evaluador_m").value;
		
		if(id==""){
			
			alert("Por favor ingrese un id");
		}
		
		else
		{
	
				$.post("../controladora/Controladora.php",{clase:"Editor",oper:"cargar_evaluador",id:id},function(respuesta)
				{


					var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
					
					if(datos!="No Existe")
					{	
				
						document.getElementById("nombre_evaluador_m").value=datos.nombre;
						document.getElementById("id_evaluador_m").value=datos.id;
						document.getElementById("pass_evaluador_e").value=datos.pass;
						document.getElementById("direccion_evaluador_m").value =datos.direccion;
						document.getElementById("correo_evaluador_m").value =datos.correo;
						document.getElementById("afiliacion_evaluador_m").value=datos.afiliacion;
						document.getElementById("tel_evaluador_m").value=datos.tel;
						document.getElementById("estudios_evaluador_m").value=datos.estudios;
						
						
						document.getElementById("id_evaluador_m").disabled=true;
				

					}
					else
					{
						alert(datos);	
					}
					

				}
					
				
					  )
			}
	})
	
		$("#enviar_modificar_evaluador").on("click",function(event){
	
			nombre=document.getElementById("nombre_evaluador_m").value;
			id=document.getElementById("id_evaluador_m").value;
			pass=document.getElementById("pass_evaluador_e").value;
			direccion=document.getElementById("direccion_evaluador_m").value;
			correo=document.getElementById("correo_evaluador_m").value;
			afiliacion=document.getElementById("afiliacion_evaluador_m").value;
			tel=document.getElementById("tel_evaluador_m").value;
			estudios=document.getElementById("estudios_evaluador_m").value;
			
		if( document.getElementById("correo_evaluador_m").value.indexOf("@")== -1)
		{
			alert("Por Favor Ingrese Un Correo Valido");
		}
		else if( isNaN(tel)==true)
		{
			alert("Por Favor Ingrese telefoo numerico");
		}
		
		else
		{
				$.post("../controladora/Controladora.php",{clase:"Editor",oper:"modificar_evaluador",nombre:nombre,id:id,pass:pass,direccion:direccion,correo:correo, afiliacion:afiliacion,tel:tel,estudios:estudios},function(respuesta)
				{
	
	
					fff=eval(respuesta);
							
					alert(fff);
					document.getElementById("id_evaluador_m").disabled=false;				
					nombre=document.getElementById("nombre_evaluador_m").value="";
					id=document.getElementById("id_evaluador_m").value="";
					pass=document.getElementById("pass_evaluador_e").value="";
					direccion=document.getElementById("direccion_evaluador_m").value="";
					correo=document.getElementById("correo_evaluador_m").value="";
					afiliacion=document.getElementById("afiliacion_evaluador_m").value="";
					tel=document.getElementById("tel_evaluador_m").value="";
					estudios=document.getElementById("estudios_evaluador_m").value="";
	
				}
					
					  )
		}
				  
	})
	
		$("#enviar_eliminar_evaluador").on("click",function(event){
	
			
			id=document.getElementById("id_evaluador_e").value;
				
			if(id==""){
		
				alert("Por favor ingrese un id");
			}
			
			else
			{
				confirmar=confirm("¿Seguro que desea Eliminarlo?"); 
				
				if (confirmar)
				{
				
				$.post("../controladora/Controladora.php",{clase:"Editor",oper:"eliminar_evaluador",id:id},function(respuesta)
				{
					
			
					fff=eval(respuesta);
						
					alert(fff);
					
					id=document.getElementById("id_evaluador_e").value="";
	
				})
				
				}
				else
				{
					id=document.getElementById("id_evaluador_e").value="";
					
				}
			}
	})

	//ARTICULO EVALUADOS
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_publicados"},function(respuesta)
	{
				
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
			
			
			if(datos!="No hay")
			{
				articulos_publicados(datos);
			}
	
	})	
	
	//ARTICULOS RECHAZAOD
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_rechazados"},function(respuesta)
	{				
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
			
			if(datos!="No hay")
			{
				articulos_rechazados(datos);
			}

	})
	
	//ARTICULOS EVALUADOR
	
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_evaluados"},function(respuesta)
	{
		
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
					
			
	

	})
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_aceptados"},function(respuesta)
	{
		
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
					
			
		if(datos!="No hay")
		{
			articulos_aceptados(datos);
		}

	})
	
	
	//ARTICULOS POR ASIGNAR
	
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_sin_evaluador"},function(respuesta)
	{
		
		
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
			
			
			
			if(datos!="No hay")
			{
				articulos_sin_evaluador(datos);
			}

	})
	
	//ARTICULOS QUE SE ESTAN EVALUANDO
	
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_evaluando"},function(respuesta)
	{
		
		
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
			
			
			
			if(datos!="No hay")
			{
				articulos_evaluando(datos);
			}

	})
	
	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"articulos_pendientes"},function(respuesta)
	{
				
		var datos= jQuery.parseJSON(respuesta); 	 // para convertir a lenguaje js
			
			
			
			if(datos!="No hay")
			{
				articulos_pendientes(datos);
			}
	})


	//ARTICULO ACEPTADO
	
	$("#Publicados").on("click",function(event){
		
		f_no();
		
		dd=document.getElementById("divtabla");
		dd.style.display='none';
		
		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='block';
		f2.style.display='none';
		f3.style.display='none';
		f4.style.display='none';
		f5.style.display='none';
		f6.style.display='none';
		
		document.getElementById("divf1").style.display="none";
		

	});	
	
	//ARTICULOS RECHAZAOD
	
	$("#Rechazados").on("click",function(event){
		
		f_no();
		
		dd=document.getElementById("divtabla");
		dd.style.display='none';
		
		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='none';
		f2.style.display='none';
		f3.style.display='none';
		f4.style.display='none';
		f5.style.display='none';
		f6.style.display='block';
		
		document.getElementById("divf1").style.display="none";
		
	})
		//ARTICULOS evaluados

	$("#Aceptados").on("click",function(event){
			
		f_no();
		
		dd=document.getElementById("divtabla");
		dd.style.display='none';
		
		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='none';
		f2.style.display='block';
		f3.style.display='none';
		f4.style.display='none';
		f5.style.display='none';
		f6.style.display='none';
		
		document.getElementById("divf1").style.display="none";

	})
	
	//ARTICULOS POR ASIGNAR

	$("#Por_Asignar").on("click",function(event){
		
		f_no();
		
		dd=document.getElementById("divtabla");
		dd.style.display='none';
		
		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='none';
		f2.style.display='none';
		f3.style.display='block';
		f4.style.display='none';
		f5.style.display='none';
		f6.style.display='none';
		
		document.getElementById("divf1").style.display="none";

	})
	//ARTICULOS SIN EVALUAR - por evaluar
	
	//ARTICULOS QUE SE ESTA EVALUANDO
	
	
	$("#En_Evaluacion").on("click",function(event){
	
		f_no();
		
		dd=document.getElementById("divtabla");
		dd.style.display='none';
		
		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='none';
		f2.style.display='none';
		f3.style.display='none';
		f4.style.display='block';
		f5.style.display='none';
		f6.style.display='none';
		
		document.getElementById("divf1").style.display="none";

	})		
		//ARTICULOS PENDIENTES
	
	$("#Correciones").on("click",function(event){
	
		f_no();
		
		dd=document.getElementById("divtabla");
		dd.style.display='none';
		
		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='none';
		f2.style.display='none';
		f3.style.display='none';
		f4.style.display='none';
		f5.style.display='block';
		f6.style.display='none';
		
		document.getElementById("divf1").style.display="none";

	})
			  
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
		
});


function f_no(){
	

	f1=document.getElementById("añadir_autor");
	f2=document.getElementById("modificar_autor");
	f3=document.getElementById("eliminar_autor");
	f4=document.getElementById("añadir_evaluador");
	f5=document.getElementById("modificar_evaluador");
	f6=document.getElementById("eliminar_evaluador");
	
	f1.style.display='none';
	f2.style.display='none';
	f3.style.display='none';
	f4.style.display='none';
	f5.style.display='none';
	f6.style.display='none';
	
	document.getElementById("divf1").style.display="none";

}

function a_no(){
	

		f1=document.getElementById("mis_articulos");
		f2=document.getElementById("mis_articulos1");
		f3=document.getElementById("mis_articulos2");
		f4=document.getElementById("mis_articulos3");
		f5=document.getElementById("mis_articulos4");
		f6=document.getElementById("mis_articulos5");	
		
		a=document.getElementById("mis_articulos");
	
		f1.style.display='none';
		f2.style.display='none';
		f3.style.display='none';
		f4.style.display='none';
		f5.style.display='none';
		f6.style.display='none';
		
		document.getElementById("divf1").style.display="none";
	 
}

function asignar_evaluador(id)
{
	a_no();
	f_no();
	
	document.getElementById("divf1").style.display="none";
	
	dd=document.getElementById("divtabla");
	dd.style.display='block';
	
		$.post("../controladora/Controladora.php",{clase:"Editor",oper:"cargarEvaluadores"},function(respuesta)
		{	
				
			datos= eval(respuesta);			
			crear_tabla(datos,id);			
			
		});	
}


function validacion(obj) 
{
	limite=3;
	num=0;
	if (obj.checked) {
	for (i=0; ele=document.getElementsByName('fruit').item(i); i++)
	if (ele.checked) num++;
	if (num>limite)
	obj.checked=false;


}
}  

function oe(id)
{
	
	var evals=[];
	var f=0;
	
	for(j=0;j< document.getElementsByName('fruit').length ;j++)
	{
		if (document.getElementsByName('fruit').item(j).checked) 
		{
			evals[f]=document.getElementsByName('fruit').item(j).getAttribute('id');
			f++;
		}
	}
	
	

	if(f==3){
	

	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"adiccionarEvaluador",id_evaluador0:evals[0],id_evaluador1:evals[1],id_evaluador2:evals[2],id_articulo:id},function(respuesta)
	{	
				
	datos= eval(respuesta);	
	alert(datos);
	location.reload(true);
			
		});	
	}
	else{
		alert('Por favor selecione 3 evalaudores');
		}
	
	
}
function crear_tabla(datos, id)
{
	

	for (var i in datos)
	{
		
		tabla=document.getElementById("tabla_evaluadores");;
		

		tr=document.createElement("tr"); // se crea fila
		
		td=document.createElement("td");
		
		tex=document.createTextNode(datos[i].id);
		td.appendChild(tex);
		
		td1=document.createElement("td");
		
		tex=document.createTextNode(datos[i].nombre);
		td1.appendChild(tex);
		
		td2=document.createElement("td");
		
		input=document.createElement("input");
			
		input.setAttribute("type","checkbox");
		input.setAttribute("name","fruit");
		input.setAttribute("onchange","validacion(this)");
		input.setAttribute("id",""+datos[i].id);
		input.setAttribute("style","width:20px;");
				
		td2.appendChild(input);
		
		tr.appendChild(td);
		tr.appendChild(td1);
		tr.appendChild(td2);
		
		btn=document.getElementById("btn_asignar");
		btn.setAttribute("onClick","oe("+id+")");

		tabla.appendChild(tr);

	}

}

function publicar_articulo(id)
{

	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"publicar_articulo",id:id},function(respuesta)
	{	
				
		datos= eval(respuesta);	
		alert(datos);
		
		location.reload(true);
			
			
		});	
	
	
}




	$.post("../controladora/Controladora.php",{clase:"Editor",oper:"informacion_editor"},function(respuesta)
	{	
	
	 	
				
		datos= eval(respuesta);	

		
		df=document.getElementById("nombre_editor");
		
		tex=document.createTextNode(datos.toUpperCase());
		df.appendChild(tex);
			
		});


	function f_chat()
    {
		f_no();
		a_no();
		

		ccc=document.getElementById("divf1");
		
		ccc.style.display='block';

			dd=document.getElementById("divtabla");
			dd.style.display='none';
		

		


    };



