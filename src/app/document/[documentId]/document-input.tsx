import {BsCloudCheck, BsCloudSlash} from "react-icons/bs";
import { Id } from "../../../../convex/_generated/dataModel";
import { useDebounce } from "@/hooks/use-debounce";
import { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { toast } from "sonner";

import { LoaderIcon } from "lucide-react";
interface DocumentInputProps{
    title:string;
    id:Id<"documents">;
}
export const DocumentInput =({title,id}:DocumentInputProps)=>{
  
    const [value,setValue]=useState(title);
    
    const [isPending,setIsPending] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const mutate = useMutation(api.documents.updateById);
    const debounceUpdate = useDebounce((newValue:string)=>{
        if(newValue = title ) return;
        setIsPending(true);
        mutate({id,title:newValue})
        .then(()=>toast.success("Document updated"))
        .catch(()=>toast.error("Something went wrong"))
        .finally(()=>setIsPending(false));
    });
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = e.target.value;
        setValue(newValue);
        debounceUpdate(newValue);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        
        
        setIsPending(true);
        mutate({id,title:value})
        .then(()=>{
            toast.success("Document updated")
            setIsEditing(false);
        })
        .catch(()=>toast.error("Something went wrong"))
        .finally(()=>setIsPending(false));
    };

    const showLoader = isPending || status === "connecting" || status === "reconnecting"
;
    const showError = status === "disconnected";
    return(
        <div className="flex  items-center gap-2">
            {isEditing ? (
                <form onSubmit={handleSubmit} className="relative w-fit max-w-[50ch]" >
                    <span className="invisible whitespace-pre ">
                    {value || " "}
                    </span>
                    <input ref= {inputRef}
                    value={value}
                    onBlur={()=>setIsEditing(false)}
                    onChange={onChange}
                    className="absolute inset-0 text-lg text-black px-1.5 bg-tansparent truncate"
                    />
                </form>
            ):(

                <span 
                onClick={()=> {
                    setIsEditing(true)
                    setTimeout(()=>{
                        inputRef.current?.focus();
                    },0);
                }}
                className="text-lg px-1.5 cursor-pointer truncate">{title}</span>
            )}
            {showError && <BsCloudSlash className="size-4"/>}
            {!showError && !showLoader && <BsCloudCheck className="size-4"/>}
            {showLoader && <LoaderIcon className="size-4 animate-spin text-muted-foreground"/>}
        
        </div>
    )
}
