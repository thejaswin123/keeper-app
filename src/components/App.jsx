import react,{useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes.js"
import CreateArea from './CreateArea';

function App(){

    const [notes,setNotes] = useState([]);

    function addNote(note){
        setNotes((prev)=>{
            return [...prev,note]
        });
    }

    function deleteNode(id){
        setNotes(prev=>{
            return prev.filter((x,index)=>{return index!==id})
        });
    }

    return <>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((x,index)=>{
            return <Note key={index} id={index} title={x.title} content={x.content} onDelete={deleteNode}/>
        })}
        <Footer />
        </>
}

export default App;