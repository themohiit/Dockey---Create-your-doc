import {auth} from "@clerk/nextjs/server";
import {Document} from "./document";
import { preloadQuery } from "convex/nextjs";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";
interface DocumentIdpageprops{
    params:Promise<{documentId: Id <"documents">}>;
};

const DocumentIdPage = async ({ params }: DocumentIdpageprops)=>{
   const {documentId} = await params;
    const {getToken} = await auth();
    const token = await getToken({template:"convex"})??undefined;
    if(!token){
        throw Error("Unauthorized");
    }
    const preloadedDocument = await preloadQuery(
        api.documents.getById,
        {id:documentId},
        {token}
    )
    return <Document preloadedDocument={preloadedDocument}/>
}

export default DocumentIdPage;