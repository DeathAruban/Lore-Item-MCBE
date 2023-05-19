//-----------------------------------------------------------------------------------------------------------------------//
//Please do not modify the code. It is important that the code remains unchanged to ensure that it functions as intended.//
//                                                  Thank you for your cooperation.                                      //
//-----------------------------------------------------------------------------------------------------------------------//
//   ____  _  _                                                                                                          //
//  (  _ \( \/ )                                                                                                         //
//   ) _ < \  /                                                                                                          //
//  (____/ (__)                                                                                                          //
//       ____                  __     __             ___                     __                                          //
//      / __ \  ____ _  ___   / /_   / /_           /   |   _____  __  __   / /_   ____ _   ____                         //
//     / / / / / __ `/ / _ \ / __/  / __ \         / /| |  / ___/ / / / /  / __ \ / __ `/  / __ \                        //
//    / /_/ / / /_/ / /  __// /_   / / / /        / ___ | / /    / /_/ /  / /_/ // /_/ /  / / / /                        //
//   /_____/  \__,_/  \___/ \__/  /_/ /_/  ______/_/  |_|/_/     \__,_/  /_.___/ \__,_/  /_/ /_/                         //
//                                        /_____/                                                                        //
//-----------------------------------------------------------------------------------------------------------------------//


import * as lore from '@minecraft/server-ui' //Form Lore
import { world,system} from '@minecraft/server'  
import { ModalFormData } from "@minecraft/server-ui"
import {impostazioni} from './settings_lore.js'  //import settings lore update
import {getxp} from './settings_lore.js'     //import system level update
import './settings_lore.js'

world.events.beforeItemUse.subscribe(ev => {
    const item = ev.item
    const player = ev.source
      if(item.typeId == impostazioni.item.list.staff){
        if(player.hasTag(impostazioni.tag.base.admin)){general(player)}
        if(!player.hasTag(impostazioni.tag.base.admin)){
          if(!player.hasTag(impostazioni.tag.base.editor)){
          player.runCommandAsync("playsound copper.wax.off @s ~ ~ ~ 3 1 3");
          player.sendMessage({rawtext:[{"translate":impostazioni.tag.base.noadmin}]})
          }
        }
        if(player.hasTag(impostazioni.tag.base.editor)){exit_ui(player)}
      }
      if(item.typeId == impostazioni.item.list.vanilla){
        if(!player.hasTag(impostazioni.tag.base.vanilla)){ui_vanilla(player)}
        if(player.hasTag(impostazioni.tag.base.vanilla)){exit_ui_vanilla(player)}
      }
   }
 )

//Form Ui Lore Item + Admin

 function general(player) {
    const form = new lore.ActionFormData()
    form.title(impostazioni.admin.home.title)
    form.body(impostazioni.admin.home.body)
    form.button(impostazioni.admin.home.button.name.a, impostazioni.admin.home.button.img.a) 
    form.button(impostazioni.admin.home.button.name.b, impostazioni.admin.home.button.img.b) 
    form.button(impostazioni.admin.home.button.name.c, impostazioni.admin.home.button.img.c)

        form.show(player).then(result => {
            if (result.selection === 0) {
              player.addTag(`loreItemUi`);
              player.removeTag(`Admin`);
              player.sendMessage({"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.attivato.lore.mc.da"}]});
              player.runCommandAsync("playsound bubble.pop @s ~ ~ ~ 3 1 3");
            }
            if (result.selection === 1) {
                const form = new lore.ActionFormData()
                form.title(impostazioni.admin.regole.title)
                form.body(impostazioni.admin.regole.body)
                form.button(impostazioni.admin.regole.button.name, impostazioni.admin.regole.button.img) 
              
                    form.show(player).then(result => {
                        if (result.selection === 0) {
                          general(player)
                        }
                     }
                  )
            }
            if (result.selection === 2) {
              const form = new lore.ActionFormData()
              form.title(impostazioni.admin.crediti.title)
              form.body(impostazioni.admin.crediti.body)
              form.button(impostazioni.admin.crediti.button.name, impostazioni.admin.crediti.button.img) 
            
                  form.show(player).then(result => {
                      if (result.selection === 0) {
                        general(player)
                      }
                   }
                )
            }
        }
    )
}

function exit_ui(player) {
    const form = new lore.ActionFormData()
    
    form.title(impostazioni.admin.esci.title)
    form.body(impostazioni.admin.esci.body)
    form.button(impostazioni.admin.esci.button.name, impostazioni.admin.esci.button.img) 
  
        form.show(player).then(result => {
            if (result.selection === 0) {
              player.addTag(`Admin`);
              player.removeTag(`loreItemUi`);
              player.sendMessage({"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.disattivato.lore.mc.da"}]});
              player.runCommandAsync("playsound break.amethyst_block @s ~ ~ ~ 3 1 3");
            }
         }
      )
  }

  //Form Ui Lore Item+ Vanilla

  function ui_vanilla(player) {
    const form = new lore.ActionFormData()
    form.title(impostazioni.vanilla.home.title)
    form.body(impostazioni.vanilla.home.body)
    form.button(impostazioni.vanilla.home.button.name.a,impostazioni.vanilla.home.button.img.a) 
    form.button(impostazioni.vanilla.home.button.name.b,impostazioni.vanilla.home.button.img.b)
    form.button(impostazioni.vanilla.home.button.name.c,impostazioni.vanilla.home.button.img.c)  

        form.show(player).then(result => {
            if (result.selection === 0) {
              player.addTag(`VanillaLoreEdit`);
              player.sendMessage({"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.attivato.lore.mc.da"}]});
              player.runCommandAsync("playsound bubble.pop @s~ ~ ~ 3 1 3");
            }
            if (result.selection === 1) {
                const form = new lore.ActionFormData()
                form.title(impostazioni.vanilla.regole.title)
                form.body(impostazioni.vanilla.regole.body)
                form.button(impostazioni.vanilla.regole.button.name.a,impostazioni.vanilla.regole.button.img.a) 
                form.button(impostazioni.vanilla.regole.button.name.b,impostazioni.vanilla.regole.button.img.b)  
                form.show(player).then(result => {
                  if (result.selection === 0) {
                      ui_vanilla(player)
                  }
               }
            )
            }
            if (result.selection === 2) {
              const form = new lore.ActionFormData()
              form.title(impostazioni.vanilla.crediti.title)
              form.body(impostazioni.vanilla.crediti.body)
              form.button(impostazioni.vanilla.crediti.button.name,impostazioni.vanilla.crediti.button.img)  
                  form.show(player).then(result => {
                      if (result.selection === 0) {
                          ui_vanilla(player)
                        }
                   }
                )
          }
        }
    )
}

function exit_ui_vanilla(player) {
    const form = new lore.ActionFormData()
    
    form.title(impostazioni.vanilla.esci.title)
    form.body(impostazioni.vanilla.esci.body)
    form.button(impostazioni.vanilla.esci.button.name,impostazioni.vanilla.esci.button.img) 
  
        form.show(player).then(result => {
            if (result.selection === 0) {
              player.removeTag(`VanillaLoreEdit`);
              player.sendMessage({"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.disattivato.lore.mc.da"}]});
              player.runCommandAsync("playsound break.amethyst_block @s ~ ~ ~ 3 1 3");
            }
         }
      )
  }

//Form Ui Edit Text Lore and Name

  system.runInterval(() => {
    let players = world.getAllPlayers();
    for (let player of players) {
       if (player.hasTag(impostazioni.tag.base.editor)){
            if(player.isSneaking == true){
             let {container} = player.getComponent("minecraft:inventory")
             let Item = container.getItem(player.selectedSlot)
             let Lore = Item.getLore();
             let Name = "";
             try{Name = Item.nameTag.replace(/\n/g,`-n`)}catch{};
       
             const form = new ModalFormData()
             form.title(impostazioni.modificatore.admin.title)
             form.textField(impostazioni.modificatore.admin.riga.a ,"", Name)
             form.textField(impostazioni.modificatore.admin.riga.b ,"", String(Lore).replace(/\n/g,`-n`));
             form.show(player).then(response => {
              if(response.canceled){
              } else {
                let playerNames = players.map(({name}) => name);
                Item.nameTag = response.formValues[0].replace(/-n/g,`\n`);
                let text = response.formValues[1]
                player.sendMessage({"rawtext":[{"text":"\n §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.modifica.lore.mc.da"}]});
                player.runCommandAsync("playsound bubble.pop @s ~ ~ ~ 3 1 3");
                Item.setLore([text.replace(/-n/g,`\n`)]);
                container.setItem(player.selectedSlot,Item);
              }
            }
          )
        }
      }
      if (player.hasTag(impostazioni.tag.base.vanilla)){
        if(player.isSneaking == true){
          const playerLevel = getxp(player)
        if (playerLevel > 0) {
         let {container} = player.getComponent("minecraft:inventory")
         let Item = container.getItem(player.selectedSlot)
         let Lore = Item.getLore();
         let Name = "";
         try{Name = Item.nameTag.replace(/\n/g,`-n`)}catch{};
   
         const form = new ModalFormData()
         form.title(impostazioni.modificatore.vanilla.title)
         form.textField(impostazioni.modificatore.vanilla.riga.a ,"", Name)
         form.textField(impostazioni.modificatore.vanilla.riga.b ,"", String(Lore).replace(/\n/g,`-n`));
         form.show(player).then(response => {
          if(response.canceled){
          } else {
            let playerNames = players.map(({name}) => name);
            Item.nameTag = response.formValues[0].replace(/-n/g,`\n`);
            let text = response.formValues[1]
            player.sendMessage({"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.modifica1.lore.mc.da"}]});
            player.runCommandAsync("playsound bubble.pop @s ~ ~ ~ 3 1 3");
            player.runCommandAsync(impostazioni.modificatore.vanilla.comando);
            Item.setLore([text.replace(/-n/g,`\n`)]);
            container.setItem(player.selectedSlot,Item);
          }
         }
        )
       }
       else
       {
        player.sendMessage({rawtext:[{"translate":"lore.item.exp.use.da"}]})
        player.runCommandAsync("playsound copper.wax.off @s ~ ~ ~ 3 1 3");
       }
      }
     }
    }
   }
  )

//-----------------------------------------------------------------------------------------------------------------------//
//Please do not modify the code. It is important that the code remains unchanged to ensure that it functions as intended.//
//                                                  Thank you for your cooperation.                                      //
//-----------------------------------------------------------------------------------------------------------------------//
//   ____  _  _                                                                                                          //
//  (  _ \( \/ )                                                                                                         //
//   ) _ < \  /                                                                                                          //
//  (____/ (__)                                                                                                          //
//       ____                  __     __             ___                     __                                          //
//      / __ \  ____ _  ___   / /_   / /_           /   |   _____  __  __   / /_   ____ _   ____                         //
//     / / / / / __ `/ / _ \ / __/  / __ \         / /| |  / ___/ / / / /  / __ \ / __ `/  / __ \                        //
//    / /_/ / / /_/ / /  __// /_   / / / /        / ___ | / /    / /_/ /  / /_/ // /_/ /  / / / /                        //
//   /_____/  \__,_/  \___/ \__/  /_/ /_/  ______/_/  |_|/_/     \__,_/  /_.___/ \__,_/  /_/ /_/                         //
//                                        /_____/                                                                        //
//-----------------------------------------------------------------------------------------------------------------------//