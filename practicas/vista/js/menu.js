$(function() {

    $("#menu-principal").slide('opciones');
        $("#menu-principal ul li a").each(function() {
            var opcion = $(this).text();

            $(this).on('click', function(event) {
                switch (opcion) {
                    case "Departamentos":
                        $("#contentcolumn").load("vista/html/departamento.html", function(response, status, xhr) {
                            if (status === "error") {
                                alert("Lo siento, no se pudo dar acceso a '" + opcion + "' (Error " + xhr.status + ": " + xhr.statusText + ')');
                            }
                        });
                        break; 
                          
                    case "Programas":
                        $("#contentcolumn").load("vista/html/Programa.html", function(response, status, xhr) {
                            if (status === "error") {
                                alert("Lo siento, no se pudo dar acceso a '" + opcion + "' (Error " + xhr.status + ": " + xhr.statusText + ')');
                            }
                        });
                        break;
						
                        case "Empresas":
                        $("#contentcolumn").load("vista/html/empresa.html", function(response, status, xhr) {
                            if (status === "error") {
                                alert("Lo siento, no se pudo dar acceso a '" + opcion + "' (Error " + xhr.status + ": " + xhr.statusText + ')');
                            }
                        });
                        break;
						
			case "Docente":
                        $("#contentcolumn").load("vista/html/docente.html", function(response, status, xhr) {
                            if (status === "error") {
                                alert("Lo siento, no se pudo dar acceso a '" + opcion + "' (Error " + xhr.status + ": " + xhr.statusText + ')');
                            }
                        });
                        break;
                         case "Responsable empresarial de practica":
                                       
                        $("#contentcolumn").load("vista/html/representante.html", function(response, status, xhr) {
                            if (status === "error") {
                                alert("Lo siento, no se pudo dar acceso a '" + opcion + "' (Error " + xhr.status + ": " + xhr.statusText + ')');
                            }
                        });
                        break;
                         case "Estudiante":
                         $("#contentcolumn").load("vista/html/estudiante.html", function(response, status, xhr) {
                            if (status === "error") {
                                alert("Lo siento, no se pudo dar acceso a '" + opcion + "' (Error " + xhr.status + ": " + xhr.statusText + ')');
                            }
                        });
                        break;
                        case "Cerrar Sesion":
                        $.post("controlador/fachada.php",{
                            clase:'Usuario',
                            oper:'CerrarSesion',
                            },function(data){
                                location.reload();
                            },"json");
                        break;
                }

                event.preventDefault();
            })
        }) 
    
})

function cerrarsesion(){

}

