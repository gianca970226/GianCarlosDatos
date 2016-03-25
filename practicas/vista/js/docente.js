$(function(){
	
	crearTablaDocente();
	function crearTablaDocente() {
			jqGridCiudades = jQuery('#tablaDocente').jqGrid({
				url:'controlador/fachada.php',
				datatype: "json",
				mtype: 'POST',
				postData: {
					clase: 'docente',
					oper:'select'
				},
				colNames:['ID','NOMBRE','DEPARTAMENTO'],
				colModel:[
					{name:'id', index:'id', width:55, align:'center', editable:true,editrules:{required:true,maxValue:10,number:true}, editoptions:{size:44,
							dataInit: function(elemento) {$(elemento).width(282)}
						}},
					{name:'nombre', index:'nombre', width:250, editable:true, editoptions:{size:44,
							dataInit: function(elemento) {$(elemento).width(282)}
						}},
                                        {name:'departamento', index:'departamento', hidden: false, width:200, editable:true, edittype:'select',
						editoptions: {
							dataInit: function(elemento) {$(elemento).width(292)}, 
							dataUrl:'controlador/fachada.php?clase=docente&oper=getSelect'
						}
					}
				],
				rowNum:200,
				width:700,
				rowList:[200, 700, 1300],
				pager: '#pTablaDocente',
				sortname: 'id',
				viewrecords: true,
				sortorder: "asc",
				caption:"Docente",
				multiselect: false,
	
				editurl: "controlador/fachada.php?clase=docente",
				
			}).jqGrid('navGrid', '#pTablaDocente', {
					refresh: true,
					edit: true,
					add: true,
					del: true,
					search: true
				}, 
				{   // Antes de enviar a obj->edit(...) se agrega un POST
					modal:false, jqModal:false,
					width:465,
				},
				{   // Antes de enviar a obj->add(...) se agrega un POST
					modal:false, jqModal:false,
					width:465
				},
				{modal:false, jqModal:false,
					width:300
				},
				{multipleSearch:true, multipleGroup:true}
			)
		}
            
});
    