import { prismaClient } from "db/client";
import { server } from "typescript";

Bun.serve({
    port :8081,
    fetch(req,server){
        if(server.upgrade(req)){
            return;
        }
        return new Response("Upgrade to WebSocket Failed",{status: 500} );

    },
    websocket: {
        message(ws, message) {
            prismaClient.user.create({
                data:{
                    username: Math.random().toString(36).substring(7),
                    password: Math.random().toString(36).substring(7)
                }
            })

            
            ws.send(`Echo: ${message}`);
        }
    }
})