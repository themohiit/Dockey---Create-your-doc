import Editor from "./editor";
import Toolbar from "./toolbar";
const Document = ()=>{
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
        <Toolbar/>
        <Editor/>
        </div>
    )
}

export default Document;