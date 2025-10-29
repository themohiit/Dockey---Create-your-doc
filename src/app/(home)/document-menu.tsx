import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, MoreVertical, TrashIcon ,FilePenIcon} from "lucide-react";
import { Id } from "../../../convex/_generated/dataModel";
import { RemoveDialog } from "@/components/remove-dialog";
import { RenameDialog } from "@/components/rename-dailog";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


interface DocumentMenuProps{
    documentId:Id<"documents">;
    title:string;
    onNewTab:(id:Id<"documents">)=>void;
};

export const DocumentMenu=({documentId,title,onNewTab}:DocumentMenuProps)=>{
  

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
         <Button variant="ghost" size="icon" className="rounded">
                    <MoreVertical className="size-4"/>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                 <RenameDialog documentId={documentId}
                                 initialTitle={title}
                  >
                    <DropdownMenuItem
                    onClick={(e)=>e.stopPropagation()}
                    onSelect={(e)=>e.preventDefault()}
                    >
                        <FilePenIcon
                         className="size-4 mr-2"/>
                       Rename
                    </DropdownMenuItem>
                </RenameDialog> 
                <RemoveDialog documentId={documentId} >
                    <DropdownMenuItem
                    onClick={(e)=>e.stopPropagation()}
                    onSelect={(e)=>e.preventDefault()}
                    >
                        <TrashIcon className="size-4 mr-2"/>
                        Remove 
                    </DropdownMenuItem>
                </RemoveDialog> 
                <DropdownMenuItem onClick={()=> onNewTab(documentId)}>
                    <ExternalLinkIcon className="size-4 mr-2"/>
                    Open in a new tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}