import Editor from "./editor";
import { Navbar } from "./navbar";
import Toolbar from "./toolbar";
const Document = ()=>{
    return (
        <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex print:hidden flex-col px-4 pt-2 fixed gap-y2 top-0 left-0 right-0 bg-[#FAFBFD] z-[50]">

        <Navbar/>
        <Toolbar/>
        </div>
        <div className="pt-[114px] print:pt-0">
        <Editor/>
        </div>
        </div>
    )
}

export default Document;