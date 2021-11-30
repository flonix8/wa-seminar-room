/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
let miroMessage : any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onLeaveZone('clock', closePopUp)

console.log("Hello World")

WA.onEnterZone('miro-board', () => {
    miroMessage = WA.ui.displayActionMessage({
        message: "LEERTASTE drücken um Miro-Board in neuem Tab zu öffnen",
        callback: () => WA.nav.openTab("https://miro.com/welcomeonboard/T3MwQ1RJS2NOTnlsSEdXSEJWbjFnRUNXSUtMQjJxOU5jaktneG03U01EY011VjNRRHJSeXVrY2JLc2ZnN0FTVXwzMDc0NDU3MzUyNTA4NTU1MjUz?invite_link_id=726956168519")
    })
})
WA.onLeaveZone('miro-board', () => miroMessage.remove())


function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
