"use client";

import { useEditor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import  TaskList from '@tiptap/extension-task-list'
import { TaskItem } from '@tiptap/extension-task-item'
import  Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row'
import Image from '@tiptap/extension-image'
import ImageResize from 'tiptap-extension-resize-image';
import { useEditorStore } from '@/store/use-editor-store';
import Underline from "@tiptap/extension-underline"
import FontFamily from "@tiptap/extension-font-family"
import TextStyle from "@tiptap/extension-text-style"
import Heading from '@tiptap/extension-heading';
import {Color} from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight"
import Link from "@tiptap/extension-link";
import TextALign from "@tiptap/extension-text-align"
import { FontSizeExtension } from '@/extension/font-size';
import { LineHeightExtension } from '@/extension/line-height';
import Ruler from './ruler';

const Editor = () => {
  const {setEditor}= useEditorStore();

  const editor = useEditor({
    onCreate({editor}) {
      setEditor(editor);
    },
    onDestroy(){
      setEditor(null);
    },
    onUpdate({editor}){
      setEditor(editor);
    },
    onSelectionUpdate({editor}){
      setEditor(editor);
    },
    onTransaction({editor}){
      setEditor(editor);
    },
    onBlur({editor}){
      setEditor(editor);
    },
    onContentError({editor}){
      setEditor(editor);
    },

    editorProps:{
      attributes:{
        style:"padding-left:56px; padding-right:56px",
        class:"focus:outline-none print:border-0 bg-white border-[#C7C7C7] flex flex-col min-h-[1024px] w-[816px] pt-10 pr-14 pb-10 cursor-text "
      }
    },
    extensions: [
      StarterKit,
      LineHeightExtension,
      FontSizeExtension,
      TextALign.configure({
        types:["heading","paragraph"]
      }),
      Color,
      Highlight.configure({
        multicolor:true,
      }),
      Link.configure({
        openOnClick:false,
        autolink:true,
        defaultProtocol:"https"
      }),
      TextStyle,
      FontFamily,     
      Heading,
      TaskItem.configure({ nested:true,}),
      TaskList, 
      Table,
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize,
      Underline],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  return (
  <div className=' size-full px-4 bg-[#d4e5f8c2] overflow-x-auto print:p-0 print:bg-white print:overfloe-visible'>
    <Ruler/>
    <div className='flex justify-center w-[816px] mx-auto min-w-max py-4 print:py-0 print:w-full print:min-w-0 '>

  <EditorContent editor={editor} />
    </div>
  </div>)
}

export default Editor