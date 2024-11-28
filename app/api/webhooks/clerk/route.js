import { Webhook } from "svix";
import { headers } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      "Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error: Missing Svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);
  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });

    if (!evt) {
      console.log("Error: Event is null or undefined");
      return new Response("Error: Event verification failed", {
        status: 400,
      });
    }
  } catch (err) {
    console.error("Error: Could not verify webhook:", err);
    return new Response("Error: Verification error", {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === "user.created") {
    try {
      const googleId = evt.data?.id;
      const email = evt.data?.email_addresses?.[0]?.email_address;
      const firstName = evt.data?.first_name;
      const lastName = evt.data?.last_name;

      if (!googleId || !email || !firstName || !lastName) {
        console.log("Error: Missing required data in the event");
        return new Response("Error: Missing event data", { status: 400 });
      }
      const user = await prisma.userProfile.create({
        data: {
          googleId: googleId,
          emailId: email,
          firstName: firstName,
          lastName: lastName,
        },
      });
      return new Response("User created", { status: 200 });
    } catch (error) {
      console.log("Error: Could not process user creation:", error);
      return new Response("Error: Could not process user data", {
        status: 500,
      });
    }
  } else if (eventType === "session.created") {
    try {
      const user = await prisma.userProfile.findUnique({
        where: {
          googleId: evt.data?.user_id,
        },
      });
    //   console.log(user);
      
      if (!user) {
        console.log("Error: Could not find user for session");
        return new Response("Error: Could not find user for session", {
          status: 404,
        });
      } else if (!user.isCompleted) {
        console.log("User has not completed profile");
        return new Response(null, {
          status: 302, 
          headers: new Headers({
            Location: `/profile`,
          }),
        });
      }

    } catch (error) {
      console.log("Error: Could not find user for session:", error);
      return new Response("Error: Could not process session", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
