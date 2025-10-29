"use client";
import Link from "next/link";
import Image from "next/image";
import { DocumentInput } from "./document-input";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJsonIcon,
  FilePlayIcon,
  FilePlusIcon,
  FileTextIcon,
  GlobeIcon,
 
  ItalicIcon,
  PrinterIcon,
  RedoIcon,
  RemoveFormattingIcon,

  Strikethrough,
  TextIcon,
  TrashIcon,
  UnderlineIcon,
  UndoIcon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { RenameDialog } from "@/components/rename-dailog";
import { RemoveDialog } from "@/components/remove-dialog";

interface NavbarProps{
  data:Doc<"documents">;
};

export const Navbar = ({data}: NavbarProps) => {
  const router = useRouter();
  const {editor} = useEditorStore();
  const insertTable =({rows,cols}:{rows:number, cols:number})=>{
    return editor
    ?.chain()
    .focus()
    .insertTable({rows,cols,withHeaderRow:false})
    .run()
  };
  const onDownload =(blob:Blob , filename:string)=>{
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }
  const onSaveJSON =()=>{
    if(!editor) return;
    const content = editor.getJSON();
    const blob = new Blob([JSON.stringify(content)],{
      type:"application/json",
    });
    onDownload(blob,`${data.title}.json`)
  }
  const onSaveHTML =()=>{
    if(!editor) return;
    const content = editor.getHTML();
    const blob = new Blob([content],{
      type:"text/html",
    });
    onDownload(blob,`${data.title}.html`) 
  }
  const onSaveTEXT =()=>{
    if(!editor) return;
    const content = editor.getText();
    const blob = new Blob([content],{
      type:"text/plain",
    });
    onDownload(blob,`${data.title}.txt`) //TODO : use document name
  }
  const mutation = useMutation(api.documents.create);
  const onNewDocument=()=>{
    mutation({
      title:"Untitled document",
      initialContent:""
    })
    .catch(()=> toast.error("something went wrong"))
    .then((id)=>{
      toast.success("Document created")
      router.push(`/documents/${id}`)

    });
  }

  return (
    <div>
      <nav className="flex itmes-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
          </Link>
          <div className="flex flex-col">
            <DocumentInput title={data.title} id={data._id} />
            <div className="flex">
              <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-mouted h-auto">
                    File
                  </MenubarTrigger>
                  <MenubarContent className="print:hidden">
                    <MenubarSub>
                      <MenubarSubTrigger>
                        <FileIcon className="size-4 mr-2" />
                        Save
                      </MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem onClick={onSaveJSON}>
                          <FileJsonIcon className="size-4 mr-2" />
                          JSON
                        </MenubarItem>
                        <MenubarItem onClick={onSaveHTML}>
                          <GlobeIcon className="size-4 mr-2" />
                          HTML
                        </MenubarItem>
                        <MenubarItem onClick={()=>window.print()}>
                          <BsFilePdf className="size-4 mr-2" />
                          PDF
                        </MenubarItem>
                        <MenubarItem onClick={onSaveTEXT}>
                          <FileTextIcon className="size-4 mr-2" />
                          Text
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem onClick={onNewDocument}>
                      <FilePlusIcon className="size-4 mr-2" />
                      New Document
                    </MenubarItem>
                    <MenubarSeparator />
                    <RenameDialog documentId={data._id} initialTitle={data.title}>
                    <MenubarItem
                       onClick={(e)=>e.stopPropagation()}
                        onSelect={(e)=>e.preventDefault()}>
                      <FilePlayIcon className="size-4 mr-2" />
                      Rename
                    </MenubarItem>
                    </RenameDialog>
                    <RemoveDialog documentId={data._id}>
                    <MenubarItem 
                        onClick={(e)=>e.stopPropagation()}
                        onSelect={(e)=>e.preventDefault()}>
                      <TrashIcon className="size-4 mr-2" />
                      Remove
                    </MenubarItem>
                    </RemoveDialog>
                    <MenubarSeparator />
                    <MenubarItem onClick={() => window.print()}>
                      <PrinterIcon className="size-4 mr-2" />
                      Print <MenubarShortcut>ctrl+P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-mouted h-auto">
                    Edit
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem onClick={()=>editor?.chain().focus().undo().run()} >
                      <UndoIcon className="size-4 mr-2" />
                      Undo <MenubarShortcut>ctrl+Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem onClick={()=>editor?.chain().focus().redo().run()}>
                      <RedoIcon className="size-4 mr-2" />
                      Redo <MenubarShortcut>ctrl+Y</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-mouted h-auto">
                    Insert
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarSub>
                      <MenubarSubTrigger>Table</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem onClick={()=>insertTable({rows:1 , cols:1})}>1 x 1</MenubarItem>
                        <MenubarItem onClick={()=>insertTable({rows:2 , cols:2})}>2 x 2</MenubarItem>
                        <MenubarItem onClick={()=>insertTable({rows:3 , cols:3})}>3 x 3</MenubarItem>
                        <MenubarItem onClick={()=>insertTable({rows:4 , cols:4})}>4 x 4</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-mouted h-auto">
                    Format
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarSub>
                      <MenubarSubTrigger>
                        <TextIcon className="size-4 mr-2" />
                        Text
                      </MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem onClick={()=>editor?.chain().focus().toggleBold().run()}>
                          <BoldIcon className="size-4 mr-2" />
                          Bold <MenubarShortcut>ctrl+B</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={()=>editor?.chain().focus().toggleItalic().run()}>
                          <ItalicIcon className="size-4 mr-2" />
                          Italic <MenubarShortcut>ctrl+I</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={()=>editor?.chain().focus().toggleUnderline().run()}>
                          <UnderlineIcon className="size-4 mr-2" />
                          Underline <MenubarShortcut>ctrl+U</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={()=>editor?.chain().focus().toggleStrike().run()}>
                          <Strikethrough className="size-4 mr-2" />
                         <span> Strikethrough  &nbsp; &nbsp;  </span>
                          <MenubarShortcut>shift+S</MenubarShortcut>
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem onClick={()=>editor?.chain().focus().unsetAllMarks().run()}>
                        <RemoveFormattingIcon className="size-4 mr-2" />
                        Clear Formatting
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </div>
         <div className="flex gap-3 items-center pl-4">
                    <OrganizationSwitcher
                    
                    afterCreateOrganizationUrl="/"
                    afterLeaveOrganizationUrl="/"
                    afterSelectOrganizationUrl="/"
                    afterSelectPersonalUrl="/"
                    />
                    <UserButton/>
                </div>
      </nav>
    </div>
  );
};
