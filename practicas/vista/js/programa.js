$(function(){
	
	crearTablaPrograma();
	function crearTablaPrograma() {
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
			jqGridCiudades = jQuery('#tablaPrograma').jqGrid({
				url:'controlador/fachada.php',
				datatype: "json",
				mtype: 'POST',
				postData: {
					clase: 'programa',
					oper:'select'
				},
				colNames:['ID','NOMBRE DEL PROGRAMA','MODALIDAD', 'DEPARTAMENTO'],
				colModel:[
					{name:'id', index:'id', width:55, align:'center', editable:true,editrules:{required:true,maxValue:1000,number:true}, editoptions:{size:44,
							dataInit: function(elemento) {$(elemento).width(282)}
						}},
					{name:'nombre', index:'nombre', width:250, editable:true, editoptions:{size:44,
							dataInit: function(elemento) {$(elemento).width(282)}
						}},
					{name:'modalidad', index:'modalidad', width:250, editable:true, edittype:'select',
							editoptions: {value:{'Diurna':'Diurna','Nocturna':'Nocturna'}}
						},
					{name:'fk_departamento', index:'fk_departamento', hidden: false, width:200, editable:true, edittype:'select',
						editoptions: {
							dataInit: function(elemento) {$(elemento).width(292)}, 
							dataUrl:'controlador/fachada.php?clase=programa&oper=getSelect'
						}
					}
				],
				rowNum:200,
				width:700,
				rowList:[200, 700, 1300],
				pager: '#pTablaPrograma',
				sortname: 'id',
				viewrecords: true,
				sortorder: "asc",
				caption:"Programas",
				multiselect: false,
	
				editurl: "controlador/fachada.php?clase=programa",
				
			}).jqGrid('navGrid', '#pTablaPrograma', modo, 
				{   // Antes de enviar a obj->edit(...) se agrega un POST
					modal:true, jqModal:true,
					width:465,
				},
				{   // Antes de enviar a obj->add(...) se agrega un POST
					modal:true, jqModal:true,
					width:465
				},
				{modal:true, jqModal:true,
					width:300
				},
				{multipleSearch:true, multipleGroup:true}
			)
		}
				
			});
		