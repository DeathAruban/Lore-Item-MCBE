import * as lore from '@minecraft/server-ui'
import { world,system} from '@minecraft/server'
import { ModalFormData } from "\u0040\u006D\u0069\u006E\u0065\u0063\u0072\u0061\u0066\u0074\u002F\u0073\u0065\u0072\u0076\u0065\u0072\u002D\u0075\u0069"
import {impostazioni} from './settings_lore.js'
import {getPlayerExperienceLevel} from './settings_lore.js'
import './settings_lore.js'

world.events.beforeItemUse.subscribe(ev => {
    const item = ev.item
    const player = ev.source
      if(item.typeId == impostazioni.item.list.staff){
        if(player.hasTag(impostazioni.tag.base.admin)){general(player)}
        if(!player.hasTag(impostazioni.tag.base.admin)){
          if(!player.hasTag(impostazioni.tag.base.editor)){
          player.runCommandAsync("\u0070\u006C\u0061\u0079\u0073\u006F\u0075\u006E\u0064\u0020\u0063\u006F\u0070\u0070\u0065\u0072\u002E\u0077\u0061\u0078\u002E\u006F\u0066\u0066\u0020\u0040\u0073\u0020\u007E\u0020\u007E\u0020\u007E\u0020\u0033\u0020\u0031\u0020\u0033");
          player.sendMessage({rawtext:[{"\u0074\u0072\u0061\u006E\u0073\u006C\u0061\u0074\u0065":impostazioni.tag.base.noadmin}]})
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
              player.runCommandAsync("\u0074\u0061\u0067\u0020\u0040\u0073\u0020\u0061\u0064\u0064\u0020\u006C\u006F\u0072\u0065\u0049\u0074\u0065\u006D\u0055\u0069");
              player.runCommandAsync("\u0074\u0061\u0067\u0020\u0040\u0073\u0020\u0072\u0065\u006D\u006F\u0076\u0065\u0020\u0041\u0064\u006D\u0069\u006E");
              player.runCommandAsync(impostazioni.funzioni.a);
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
              player.runCommandAsync("\u0074\u0061\u0067\u0020\u0040\u0073\u0020\u0072\u0065\u006D\u006F\u0076\u0065\u0020\u006C\u006F\u0072\u0065\u0049\u0074\u0065\u006D\u0055\u0069");
              player.runCommandAsync("\u0074\u0061\u0067\u0020\u0040\u0073\u0020\u0061\u0064\u0064\u0020\u0041\u0064\u006D\u0069\u006E");
              player.runCommandAsync(impostazioni.funzioni.a);
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
    form.button(impostazioni.vanilla.regole.button.name.a,impostazioni.vanilla.regole.button.img.a)  

        form.show(player).then(result => {
            if (result.selection === 0) {
              player.runCommandAsync("\u0074\u0061\u0067\u0020\u0040\u0073\u0020\u0061\u0064\u0064\u0020\u0056\u0061\u006E\u0069\u006C\u006C\u0061\u004C\u006F\u0072\u0065\u0045\u0064\u0069\u0074");
              player.runCommandAsync(impostazioni.funzioni.b);
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
              player.runCommandAsync("\u0074\u0061\u0067\u0020\u0040\u0073\u0020\u0072\u0065\u006D\u006F\u0076\u0065\u0020\u0056\u0061\u006E\u0069\u006C\u006C\u0061\u004C\u006F\u0072\u0065\u0045\u0064\u0069\u0074");
              player.runCommandAsync(impostazioni.funzioni.b);
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
             let {container} = player.getComponent("\u006D\u0069\u006E\u0065\u0063\u0072\u0061\u0066\u0074\u003A\u0069\u006E\u0076\u0065\u006E\u0074\u006F\u0072\u0079")
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
                player.runCommandAsync(impostazioni.funzioni.c);
                Item.setLore([text.replace(/-n/g,`\n`)]);
                container.setItem(player.selectedSlot,Item);
              }
            }
          )
        }
      }
      if (player.hasTag(impostazioni.tag.base.vanilla)){
        if(player.isSneaking == true){
          const playerLevel = getPlayerExperienceLevel(player)
        if (playerLevel > 0) {
         let {container} = player.getComponent("\u006D\u0069\u006E\u0065\u0063\u0072\u0061\u0066\u0074\u003A\u0069\u006E\u0076\u0065\u006E\u0074\u006F\u0072\u0079")
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
            player.runCommandAsync(impostazioni.funzioni.c);
            player.runCommandAsync(impostazioni.modificatore.vanilla.comando);
            Item.setLore([text.replace(/-n/g,`\n`)]);
            container.setItem(player.selectedSlot,Item);
          }
         }
        )
       }
       else
       {
        player.sendMessage({rawtext:[{"\u0074\u0072\u0061\u006E\u0073\u006C\u0061\u0074\u0065":"\u006C\u006F\u0072\u0065\u002E\u0069\u0074\u0065\u006D\u002E\u0065\u0078\u0070\u002E\u0075\u0073\u0065\u002E\u0064\u0061"}]})
        player.runCommandAsync("\u0070\u006C\u0061\u0079\u0073\u006F\u0075\u006E\u0064\u0020\u0063\u006F\u0070\u0070\u0065\u0072\u002E\u0077\u0061\u0078\u002E\u006F\u0066\u0066\u0020\u0040\u0073\u0020\u007E\u0020\u007E\u0020\u007E\u0020\u0033\u0020\u0031\u0020\u0033");
       }
      }
     }
    }
   }
  )