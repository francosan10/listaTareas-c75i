import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas,borrarTarea}) => {
    return (
        <ListGroup>
           {
                tareas.map((nombreTarea, indice)=> <ItemTarea key={indice} nombreTarea={nombreTarea} borrarTarea={borrarTarea}></ItemTarea>)
           }
        </ListGroup>
    );
};

export default ListaTareas;