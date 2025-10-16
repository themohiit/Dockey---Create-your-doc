"use client";

import {ClerkProvider,useAuth,SignIn} from "@clerk/nextjs";
import { ConvexReactClient,Authenticated,Unauthenticated,AuthLoading } from "convex/react";
import { ReactNode } from "react";
import {ConvexProviderWithClerk} from "convex/react-clerk";
import { FullscreenLoader } from "./fullscreen-loader";
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
  <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
  <ConvexProviderWithClerk 
  useAuth={useAuth}
  client={convex}>
    <Authenticated>
    {children}
    </Authenticated>
    <Unauthenticated>
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* 
      due to SignIn component importing from nextjs it might throw error — in this case use routing="hash" as a prop in the SignIn component
    */}
            <SignIn routing="hash"/>  
        </div>

    </Unauthenticated>
    <AuthLoading>
       <FullscreenLoader label="Auth loading"/>
    </AuthLoading>
    </ConvexProviderWithClerk>
  </ClerkProvider>
)
}