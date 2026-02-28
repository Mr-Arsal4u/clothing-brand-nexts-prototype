 'use client';
 
 import Link from "next/link";
 import { useEffect } from "react";
 import { useRouter } from "next/navigation";
 
 export default function NotFound() {
   const router = useRouter();
   useEffect(() => {
     const id = setTimeout(() => {
       router.replace("/");
     }, 800);
     return () => clearTimeout(id);
   }, [router]);
 
   return (
     <div className="mx-auto max-w-6xl px-6 py-16 text-center">
       <h1 className="text-3xl text-ink">Page not found</h1>
       <p className="mt-2 text-ink/70">Redirecting you to the homepage…</p>
       <div className="mt-6">
         <Link href="/" className="rounded-md bg-ink px-4 py-2 text-sm text-offwhite hover:bg-ink/90">
           Go to Home
         </Link>
       </div>
     </div>
   );
 }
