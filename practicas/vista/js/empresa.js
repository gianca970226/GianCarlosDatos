$(function(){

crearTablaEmpresa();
function crearTablaEmpresa() {
        jqGridCiudades = jQuery('#tablaEmpresa').jqGrid({
            url:'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'empresa',
                oper:'select'
            },
            colNames:['ID','NOMBRE DE LA EMPRESA','SEDE'],
            colModel:[
                {name:'id', index:'id', width:55, align:'center', editable:true,editrules:{custom:true, custom_func:validar, required:true}, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'nombre', index:'nombre', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'sede', index:'sede', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }}
            ],
            rowNum:200,
            width:700,
            rowList:[200, 700, 1300],
            pager: '#pTablaEmpresa',
            sortname: 'id',
            viewrecords: true,
            sortorder: "asc",
            caption:"Empresas",
            multiselect: false,

            editurl: "controlador/fachada.php?clase=empresa",
            
        }).jqGrid('navGrid', '#pTablaEmpresa', {
                refresh: true,
                edit: true,
                add: true,
                del: true,
                search: true
            }, 
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
        ).navButtonAdd('#pTablaEmpresa',{
                caption:"", 
                title:"Agregar Representante Legal",
                buttonicon:"ui-icon-plusthick", 
                onClickButton: agregarRepresentante, 
                position:"last"
            })
}
});
function agregarRepresentante(){
            $.post("controlador/fachada.php",{
					clase:'empresa',
					oper:'getSelect',
					},function(data){
                                             $('#divRepresentante').append('<p></p>');
                                           $('#divRepresentante').append(data);
					})
		$("#divRepresentante").dialog({
			buttons:[
			{
				text:"Enviar",
				click:function(){
                                    	$.post("controlador/fachada.php",{
					clase:'representante',
					oper:'add',
                                        id:$("#id").val(),
					nombre: $('#nombreR').val(),
                                        empresa:$('#select').val(),
					},function(data){
						alert(data + "datos ingresados");
					},'json')
				}
				//dialog("close");
			}
			]
			
		 	
		});
	}
function validar(value,colname) {
    foundError = false;
    showError = false;
        if(!isCheckOK(value) && showError == false){
            foundError = true; 
            showError = true;
            return [false,"NIT invalido"];
        }
        else{
            return [true,"Nit Correcto"];
        }
}
 
function isCheckOK(value) {
    digito=value.split("-");
    ceros = "000000";
    li_peso= new Array();
    li_peso[0] = 71;
    li_peso[1] = 67;
    li_peso[2] = 59;
    li_peso[3] = 53;
    li_peso[4] = 47;
    li_peso[5] = 43;
    li_peso[6] = 41;
    li_peso[7] = 37;
    li_peso[8] = 29;
    li_peso[9] = 23;
    li_peso[10] = 19;
    li_peso[11] = 17;
    li_peso[12] = 13;
    li_peso[13] = 7;
    li_peso[14] = 3;
 
    ls_str_nit = ceros + value;
    li_suma = 0;
    for(i = 0; i < 15; i++){
                li_suma += ls_str_nit.substring(i,i+1) * li_peso[i];
    }
    digito_chequeo = li_suma%11;
    if (digito_chequeo >= 2)
        digito_chequeo = 11 - digito_chequeo;
    if(digito[1] != digito_chequeo){
        return false;
    }
    else
        return true;
}
    