"use client";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Editor from "./editor";
import { Navbar } from "./navbar";
import { Room } from "./room";
import Toolbar from "./toolbar";

interface Documentprops{
   preloadedDocument:Preloaded<typeof api.documents.getById>;
}

export const Document =({ preloadedDocument }: Documentprops)=>{
 

    const document = usePreloadedQuery(preloadedDocument)
    // throw new Error("oops")
    return (

        <Room>
            <div className="min-h-screen bg-[#FAFBFD]">
        <div className="flex print:hidden flex-col px-4 pt-2 fixed gap-y2 top-0 left-0 right-0 bg-[#FAFBFD] z-[50]">

        <Navbar data={document}/>
        <Toolbar/>
        </div>
        <div className="pt-[114px] print:pt-0">
            
                <Editor initialContent={document.initialContent}
                />
           
        </div>
        </div>
        </Room>
    )
}

