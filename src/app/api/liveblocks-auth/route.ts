import {Liveblocks} from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import {auth,currentUser} from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
    secret:process.env.LIVEBLOCKS_SECRET_KEY!,
});


export async function POST(req:Request){
    const{sessionClaims }= await auth();
    if(!sessionClaims){
         console.log("❌ Missing sessionClaims");
        return new Response("Unauthorized",{status:401});
    }

    const user = await currentUser();
    if(!user){
        console.log("❌ Missing user");
        return new Response("Unauthorized",{status:401});
    }

    const {room } = await req.json();
    console.log("Requested room:", room);
    const document = await convex.query(api.documents.getById,{id:room});

    if(!document){
        console.log("❌ Document not found in Convex");
        return new Response("Unauthorized",{status:401});

    }
    const isOwner = document.ownerId === user.id;
    const isOrganizationMember = !!(document.organizationId && document.organizationId === sessionClaims?.org_id);

    if(!isOwner && !isOrganizationMember){
        console.log("❌ User is not owner or organization member");
        // return new Response("Unauthorized",{status:401});
    }
    const session = liveblocks.prepareSession(user.id,{
            userInfo:{
                name:user.fullName ?? user.primaryEmailAddress?.emailAddress ??  "Anonymous",
                avatar:user.imageUrl,
            },
        }
    );
    session.allow(room, session.FULL_ACCESS);
    const {body,status}=await session.authorize();



// console.log({
//   userId: user?.id,
//   orgId: sessionClaims?.org_id,
//   docOwner: document?.ownerId,
//   docOrg: document?.organizationId,
// });

    return new Response(body,{status});
}

