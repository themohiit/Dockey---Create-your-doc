
import { Button } from "@/components/ui/button";
import { Navbar } from "./navbar";
import { TemplateGallery } from "../document/template-galary";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col"> 
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar/>
      </div>
      <div className="mt-16">
    <TemplateGallery/>
    </div>
    </div>
  );
}
