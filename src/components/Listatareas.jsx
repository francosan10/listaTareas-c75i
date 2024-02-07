import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
    return (
        <ListGroup>
           {
                tareas.map((nombreTarea, indice)=> <ItemTarea key={indice} nombreTarea={nombreTarea}></ItemTarea>)
           }
        </ListGroup>
    );
};

export default ListaTareas;