import react, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

function CreateArea(props){

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name,value} = event.target;
        setNote((prev)=>{
            return {...prev,
            [name]:value,
            }
        })
    }

    function handleClick(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expand() {
        setExpanded(true);
      }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input type="text" name="title" onChange={handleChange} value={note.title} placeholder="Title"/>)}
                <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Write a note..." rows={isExpanded ? 3 : 1}/>
                <Zoom in={isExpanded}>
                <Fab onClick={handleClick}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    );
}   

export default CreateArea;