
import { Button } from "@/components/ui/button";
import Link from 'next/link';
export default function Home() {
  return (
    <div className="h-[100vh] px-auto flex items-center justify-center w-[100vw] bg-yellow-600"> <Link href="http://localhost:3000/document">
    <Button> click me</Button> 
    </Link>
    </div>
  );
}
