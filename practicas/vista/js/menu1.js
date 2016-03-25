$(function() {

	$("#menu-principal").slide('opciones-profesor');
	$("#menu-principal ul li a").each(function() {
		var opcion = $(this).text();

		$(this).on('click', function(event) {
			switch (opcion) {
				case "Departamentos":
					$("#columnacontenido").load("vista/html/departamento.html", function(response, status, xhr) {
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
			}

			event.preventDefault();
		})
	})


})

