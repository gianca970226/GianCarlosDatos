<?php 

class docente{

	function add($argumentos) {
        extract($argumentos);
        UtilConexion::$pdo->exec("INSERT into docente_coordinador values ('$id', '$nombre','$departamento')");
        echo UtilConexion::getEstado();
    }

    /**
     * Actualiza una fila.
     * @param <type> $argumentos Un array con el id a buscar y el nuevo tema
     */
    function edit($argumentos) {
        extract($argumentos);
        $sql="UPDATE docente_coordinador set id='$id', nombre='$nombre',departamento_ad='$departamento' where id='$id'";
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }
    function del($argumentos) {
    	extract($argumentos);
    	$sql="DELETE FROM docente_coordinador where id='$id'";
        UtilConexion::$pdo->exec($sql);
        echo UtilConexion::getEstado();
    }

	function select($argumentos) {
        extract($argumentos);
        $where = UtilConexion::getWhere($argumentos); // Se construye la clausula WHERE
        $count = UtilConexion::$pdo->query("SELECT id FROM docente_coordinador $where")->rowCount();
        // Calcula el total de páginas por consulta
        if ($count > 0) {
            $total_pages = ceil($count / $rows);
        } else {
            $total_pages = 0;
        }

        // Si por alguna razón página solicitada es mayor que total de páginas
        // Establecer a página solicitada total paginas  (¿por qué no al contrario?)
        if ($page > $total_pages) {
            $page = $total_pages;
        }

        // Calcular la posición de la fila inicial
        $start = $rows * $page - $rows;
        //  Si por alguna razón la posición inicial es negativo ponerlo a cero
        // Caso típico es que el usuario escriba cero para la página solicitada
        if ($start < 0) {
            $start = 0;
        }

        $respuesta = [
            'total' => $total_pages,
            'page' => $page,
            'records' => $count
        ];

        $sql = "SELECT d.id as id, d.nombre as nombre,de.nombre as departa FROM docente_coordinador d join departamento de on d.departamento_ad=de.id $where ORDER BY $sidx $sord LIMIT $rows OFFSET $start";
        foreach (UtilConexion::$pdo->query($sql) as $fila) {
            $respuesta['rows'][] = [
                'id' => $fila['id'],
                'cell' => [$fila['id'], $fila['nombre'],$fila['departa']]
            ];
        }
        // Quite los comentarios para ver el array original y el array codificado en JSON
        // error_log(print_r($respuesta, TRUE));
        // error_log(print_r(json_encode($respuesta), TRUE));
        echo json_encode($respuesta);
    }
 public function getSelect() {
        $select = "<select>";
        $select .= "<option value='0'>Seleccione un departamento</option>";
        foreach (UtilConexion::$pdo->query("SELECT id, nombre FROM departamento ORDER BY nombre") as $fila) {
            $select .= "<option value='{$fila['id']}'>{$fila['nombre']}</option>";
        }
        echo ($select . "</select>");
    }

}

 ?>