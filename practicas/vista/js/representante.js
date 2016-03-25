$(function(){
	
	crearTablaRepresentante();
	function crearTablaRepresentante() {
        
			jqGridCiudades = jQuery('#tablaRepresentante').jqGrid({
				url:'controlador/fachada.php',
				datatype: "json",
				mtype: 'POST',
				postData: {
					clase: 'representante',
					oper:'select'
				},
				colNames:['ID','NOMBRE','EMPRESA'],
				colModel:[
					{name:'id', index:'id', width:55, align:'center', editable:true,editrules:{required:true,maxValue:10,number:true}, editoptions:{size:44,
							dataInit: function(elemento) {$(elemento).width(282)}
						}},
					{name:'nombre', index:'nombre', width:250, editable:true, editoptions:{size:44,
							dataInit: function(elemento) {$(elemento).width(282)}
						}},
                                        {name:'empresa', index:'empresa', hidden: false, width:200, editable:true, edittype:'select',
						editoptions: {
							dataInit: function(elemento) {$(elemento).width(292)}, 
							dataUrl:'controlador/fachada.php?clase=representante&oper=getSelect'
						}
					}
				],
				rowNum:200,
				width:700,
				rowList:[200, 700, 1300],
				pager: '#pTablaRepresentant',
				sortname: 'id',
				viewrecords: true,
				sortorder: "asc",
				caption:"Representante Legal ",
				multiselect: false,
	
				editurl: "controlador/fachada.php?clase=representante",
				
			}).jqGrid('navGrid', '#pTablaRepresentant', {
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
    