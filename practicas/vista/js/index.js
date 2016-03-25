var anchoContenedor;
var usuario;

$(document).on('ready',function(){
	
	var dlgAutentica = $("#divLogin").dialog({
			buttons:[
			{
				text:"Enviar",
				click:function(){
					Autenticar();
					dlgAutentica.dialog("close");
					}
			}
			]
			
		 	
		});
	function Autenticar()
	{		
			$.post("controlador/fachada.php",{
				clase:'Usuario',
				oper:'autenticar',
				usuario:$('#usuario').val(),
				password:$('#clave').val(),
				},function(data){
					usuario=data.tipousuario;
					if(!data.menu) {
						alert("contraseña o usuario incorrecto");
                        dlgAutentica = $("#divLogin").dialog({
                                            buttons:[
                                                {
                                                    text:"Enviar",
                                                    click:function(){
                                                        Autenticar();
                                                        dlgAutentica.dialog("close");
                                                    }
                                                }
                                            ]
                        });
					} else {
						anchoContenedor = $('#columnaContenido').outerWidth() * 0.94;
    					$(window).on('resize', function() {
        					anchoContenedor = $('#columnaContenido').outerWidth() * 0.94;
        						if (grid = $('.ui-jqgrid-btable:visible')) {
            						grid.each(function(index) {
                						var gridId = $(this).attr('id');
                						gridParentWidth = $('#gbox_' + gridId).parent().width() * 0.99;
                						jQuery('#' + gridId).setGridWidth(gridParentWidth);
            						});
        						}
    					});

    					$("#panel-menu").html(data.menu, function(response, status, xhr) {
        					if (status === "error") {
            					alert("Lo siento, no se pudo dar acceso al menú (Error " + xhr.status + ": " + xhr.statusText + ')');
        					} else {
								// En realidad aquí debería condicionarse de acuerdo al usuario autenticado para desplegar un menú según privilegios
            					$("#columnaContenido").show();
        					}

    
    					});
						
						
					}
					
					
					},"json");	
	}
	
	 
	jQuery.fn.agregarElementos = function(elementos) {
		var combo = this;
		combo.empty();
	
		if (typeof elementos[0] === 'object') {  // los datos vienen de tipo PDO::FETCH_ASSOC
			for (var i in elementos) {
				var elemento = $.map(elementos[i], function(value, index) {
					return [value];
				});
				combo.append($("<option></option>").attr("value", elemento[0]).text(elemento[1]));
			}
		} else {  // los datos vienen de tipo FETCH_KEY_PAIR
			$.each(elementos, function(indice, valor) {
				combo.append($("<option></option>").attr("value", indice).text(valor));
			});
		}
		return combo;
	};
	
	function getElementos(parametros) {
		var asincrono = false, aviso = false, elementos = new Object();
		aviso = ("aviso" in parametros) ? parametros['aviso'] : false;
		asincrono = ("async" in parametros) ? parametros['async'] : false;
		mapear = ("mapear" in parametros) ? parametros['mapear'] : false;
	
		$.ajax({
			type: "POST",
			url: "controlador/fachada.php",
			beforeSend: function(xhr) {
				if (aviso) {
					// $.blockUI({message: getMensaje(aviso)});
				}
			},
			data: parametros,
			async: asincrono,
			dataType: "json"
		}).done(function(data) {
			elementos = data;
		}).fail(function() {
			console.log("Error de carga de datos: " + JSON.stringify(parametros));
			alert("Error de carga de datos");
		}).always(function() {
			if (aviso) {
				// $.unblockUI();
			}
		});
		return elementos;
	}
	
	
	function descargar(nombreArchivo) {
		$.fileDownload('controlador/fachada.php', {
			httpMethod: "POST",
			data: {
				clase: 'Utilidades',
				oper: 'descargar',
				archivo: nombreArchivo
			},
			failCallback: function(respuesta, url) {
				console.log('OJO: ' + respuesta)
				if (respuesta) {
					respuesta = jQuery.parseJSON(respuesta);
					alert('El intento de descarga reporta el siguiente error:<br>' + respuesta.mensaje);
				} else {
					alert('Sucedió un error inesperado intentando la descarga');
				}
			}
		});
	}
	
	jQuery.fn.slide = function(opciones, izquierda, derecha, tiempo, factor) {
		var elementos = "#" + $(this).attr("id") + " li";
		var linksDeElementos = elementos + " a";
		var temporizador = 0;
	
		izquierda = izquierda || 25;
		derecha = derecha || 15;
		tiempo = tiempo || 150;
		factor = factor || .8;
	
		//$(this).children().remove();
		$(this).addClass("navigation-block")
		$(this).html('<img src="vista/imagenes/background.jpg" id="hide" alt=""/>').append($('#' + opciones));
		$($('#' + opciones)).show();
	
		// Crea la animación de deslizamiento para todos los elementos de la lista
		$(elementos).each(function(i) {
			// margen izquierda = - ([ancho del elemento] + [relleno vertical del elemento])
			$(this).css("margin-left", "-180px");
			temporizador = (temporizador * factor + tiempo);
			$(this).animate({
				marginLeft: "0"
			}, temporizador);
			$(this).animate({
				marginLeft: "15px"
			}, temporizador);
			$(this).animate({
				marginLeft: "0"
			}, temporizador);
		});
	
		// Crea el efecto de activación para todos los elementos de la lsita
		$(linksDeElementos).each(function(i) {
			$(this).hover(
					function() {
						$(this).animate({
							paddingLeft: izquierda
						}, 150);
					},
					function() {
						$(this).animate({
							paddingLeft: derecha
						}, 150);
					});
		});
	}
	
	String.prototype.capitalize = function() {
		return this.replace(/[^\s]+/g, function(str) {
			str = str.toLowerCase();
			if ('de del el la los las y o'.indexOf(str) > 0) {
				return str;
			} else {
				return str.substr(0, 1).toUpperCase() + str.substr(1);
			}
		});
	};
});







