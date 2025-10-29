"use client";
import { toast } from "sonner";
import { AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter, 
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
 } from "@/components/ui/alert-dialog";
 import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


 interface RemoveDialogProps{
    documentId:Id<"documents">;
    children:React.ReactNode;
 }

 export const RemoveDialog = ({documentId,children}:RemoveDialogProps)=>{
    const remove = useMutation(api.documents.removeById);
    const [isRemoving,setIsRemoving] = useState(false);
    const router = useRouter();
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e)=> e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your document.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                    disabled={isRemoving}
                    onClick={async (e) => {
                        e.stopPropagation();
                        setIsRemoving(true);

                        try {
                            await remove({ id: documentId });
                            toast.success("Document removed");

                            // ✅ Wait for dialog to close before redirecting
                            setTimeout(() => {
                            router.push("/"); // or "/documents"
                            }, 400);
                        } catch  {
                            toast.error("Something went wrong");
                        } finally {
                            setIsRemoving(false);
                        }
                        }}

                        >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
 }