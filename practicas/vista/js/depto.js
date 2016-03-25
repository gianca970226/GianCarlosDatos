$(function(){

	crearTablaDepartamentos();
	function crearTablaDepartamentos() {

		
                
				if (usuario == 'profesor')   {
					var modo={refresh: true,
					edit: false,
					add: true,
					del: true,
					search: true}
				}else if(usuario == 'estudiante'){
					var modo={refresh: true,
					edit: false,
					add: false,
					del: false,
					search: true}
				}


        	jqGridDeptos = jQuery("#tablaDepto").jqGrid({
            url:'controlador/fachada.php',
            	datatype: "json",
            	mtype: 'POST',
            	postData: {
                	clase:'Departamento',
                	oper:'select'
            	},
            	colNames:['NOMBRE DEL DEPARTAMENTO', 'BLOQUE'],
            	colModel:[
	                {name:'deptonombre', index:'nombre', width:500, editable:true, editoptions:{size:37,
	                        dataInit: function(elemento) {$(elemento).width(150)}
	                    }},
	                {name:'nombrebloque', index:'bloque', width:500, editable:true, edittype:'select',
                    editoptions: {
                        dataInit: function(elemento) {$(elemento).width(150)}, 
                        dataUrl:'controlador/fachada.php?clase=Departamento&oper=getSelect'
                    }}
            	],
            	rowNum:100,
            	width:700,
            	rowList:[100,200,300],
	            pager: '#pTablaDepto',
	            sortname: 'id',
	            viewrecords: true,
	            sortorder: "asc",
	            caption:"Gestión de departamentos",
	            multiselect: false,
	            editurl: "controlador/fachada.php?clase=departamento",
				/*loadError: function(jqXHR, textStatus, errorThrown) {
	                alert(jqXHR.responseText);
	            }*/
				}).jqGrid('navGrid', '#pTablaDepto', modo, 
				{   // Antes de enviar a obj->edit(...) se agrega un POST
					modal:true, jqModal:true,
					width:465,
				},
				{   // Antes de enviar a obj->add(...) se agrega un POST
					modal:false, jqModal:false,
					width:465
				},
				{modal:true, jqModal:true,
					width:300
				},
				{multipleSearch:true, multipleGroup:true}
			).navButtonAdd('#pTablaDepto',{
   				caption:"", 
   				title:"Agregar Bloque",
				buttonicon:"ui-icon-plusthick", 
   				onClickButton: agregarBloque, 
   				position:"last"
			})
		}
		
	function agregarBloque(){    
		$("#divBloque").dialog({
			buttons:[
			{
				text:"Enviar",
				click:function(){
					$.post("controlador/fachada.php",{
					clase:'Bloque',
					oper:'add',
					nombre: $('#nombreB').val(),
					},function(data){
						alert(data + "datos ingresados");
					},'json')
				}
				//dialog("close");
			}
			]
			
		 	
		});
	}		
});


		