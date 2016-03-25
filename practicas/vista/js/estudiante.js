$(function(){

crearTablaEstudiante();
function crearTablaEstudiante() {
  
        jqGridCiudades = jQuery('#tablaEstudiante').jqGrid({
            url:'controlador/fachada.php',
            datatype: "json",
            mtype: 'POST',
            postData: {
                clase: 'estudiante',
                oper:'select'
            },
            colNames:['ID','PRACTICA ','NOMBRE','NIVEL DE FORMACION','RESPONSABLE','PROGRAMA'],
            colModel:[
                {name:'id', index:'id', width:55, align:'center', editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'practica', index:'practica', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'nombre', index:'nombre', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'nivel', index:'nivel', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'responsable', index:'responsable', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }},
                {name:'programa', index:'programa', width:250, editable:true, editoptions:{size:44,
                        dataInit: function(elemento) {$(elemento).width(282)}
                    }}
                
            ],
            rowNum:200,
            width:700,
            rowList:[200, 700, 1300],
            pager: '#pTablaEstudiante',
            sortname: 'id',
            viewrecords: true,
            sortorder: "asc",
            caption:"Estudiante",
            multiselect: false,

            editurl: "controlador/fachada.php?clase=estudiante",
            
        }).jqGrid('navGrid', '#pTablaEstudiante', {
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
        )
}
});

    