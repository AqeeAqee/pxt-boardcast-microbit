// Add your code here
//% color="#eeaaaa"
namespace broadcast {

    export interface BroadcastHandler {
        msg: string;
        handler: () => void;
    }

    let broadcastHandlers: BroadcastHandler[];


    /**
     * Run following code, when received the same Message String
     */
    //% block="When I receive $msg"
    //% blockAllowMultiple=1
    export function onEventWithArgs(msg: string, handler: () => void) {
        if (broadcastHandlers == null)
            broadcastHandlers = [];
        broadcastHandlers.push({ msg: msg, handler: handler });
    }

    /**
     * Send out Broadcast with Message String
     */
    //% block="Broadcast %msg"
    export function broadcast(msg: string) {
        broadcastHandlers
            .filter(h => h.msg == msg)
            //for micro:bit, runInBackground deprecated in Arcade
            .forEach(h => control.inBackground(h.handler));
            //for Arcade
            //.forEach(h => control.runInParallel(h.handler));
    }

}

