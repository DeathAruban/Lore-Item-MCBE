import { world,system} from '@minecraft/server'

system.events.beforeWatchdogTerminate.subscribe(eventData => {
	console.error("\u0077\u0061\u0074\u0063\u0068\u0064\u006F\u0067\u0020\u003D\u0020"+eventData.terminateReason+"\u005C\u006E\u0020\u0074\u0072\u0079\u0069\u006E\u0067\u0020\u0074\u006F\u0020\u0063\u0061\u006E\u0063\u0065\u006C\u0020\u0063\u0072\u0061\u0073\u0073")
	eventData.cancel = true
})

world.events.playerSpawn.subscribe(data => {
	if(!data.initialSpawn) return
	if(data.player.sendMessage({ rawtext: [ {"\u0074\u0072\u0061\u006E\u0073\u006C\u0061\u0074\u0065":impostazioni.stato.active.lore} ] } ));
})

const impostazioni = {
    stato:{
        active:{
            lore:'avviso.lore.mc.da'
        }
    },
	tag: {
		base: {
			admin:'Admin',
            editor:'loreItemUi',
            noadmin:'text.tag.noperm',
            vanilla:'VanillaLoreEdit'
		}
	},
    item:{
        list:{
            staff:'da:lore_ui_admin',
            vanilla:'da:lore_ui_vanilla' 
        }
    },
    //Panello Admin

    admin:{
        home:{
            title:`lore.admin_ui_home.bg`,
            body:`Hi  §b§rThanks for downloading my add-on!\nwith this addon you can add custom name and lore to your item,\nbefore proceeding check the requirements on §erules! `,
            button:{
                name:{
                    a:`Edit Lore`,
                    b:`Rules`,
                    c:`Credit`
                },
                img:{
                    a:'textures/ui/mashup_PaintBrush',
                    b:'textures/ui/icon_book_writable',
                    c:'textures/ui/icon_best3'
                }
            }
        },
        regole:{
            title:`lore.admin_ui_rules.bg`,
            body:`\n§fHi \n§b§aHere is the regulation to best use the addon.§r\n\n1) Check if you have the admin tag\n\n2) Use device-specific addon\n\n3) Check if you are using the Server/Realms version or the Standard world version\n\n4) Click on the '§bedit lore§r' button and you will receive a confirmation notification of activation\n\n5) To modify the name of the item and its lore, you must crouch.\n\n6) If you want to modify multiple items, repeat the same process until you are finished\n\n7) To exit the editing mode lore, click with the 'item lore edit' and then click §b'Exit Lore Edit'§r, so you will return to the normal mode of the game\n\n\n\n§c8) Modifying textures and addons is prohibited\n\n9) It is forbidden to upload to external websites without authorization\n\n10) It is forbidden to appropriate the addon and remove creator credits`,
            button:{
                name:`Back`,
                img:'textures/ui/import'
            }
        },
        crediti:{
            title:`lore.admin_ui_credits.bg`,
            body:`\n\n§b§fThank you for using my addon, I hope you enjoy it. For any issues, please report them on §cYouTube§f, §dInstagram§f, §bTwitter§f, §bGitHub§f, or §aMCPDL\n§rI am Death_Aruban a developer and graphic designer. If you would like to see more of my work, please visit the websites listed before.`,
            button:{
                name:`Back`,
                img:'textures/ui/import'
            }
        },
        esci:{
            title:`lore.admin_ui_exit.bg`,
            body:`§b\n§fYou are currently in edit name and item lore mode`,
            button:{
                name:`Exit Lore Edit`,
                img:'textures/ui/ErrorGlyph',
            }
        }
    },

//Panello Utente Vanilla

    vanilla:{
        home:{
            title:`lore.admin_ui_home.bg`,
            body:`Hi §b§rThanks for downloading my add-on!\nwith this addon you can add custom name and lore to your item,\nbefore proceeding check the requirements on §erules! `,
            button:{
                name:{
                    a:`Edit Lore`,
                    b:`Rules`,
                },
                img:{
                    a:'textures/ui/mashup_PaintBrush',
                    b:'textures/ui/icon_book_writable',
                }
            }
        },
        regole:{
            title:`lore.vanilla_ui_rules.bg`,
            body:`\n§fHi \n§b§aHere is the regulation to best use the addon.§r\n\n1) Check if you have the admin tag\n\n2) Use device-specific addon\n\n3) Check if you are using the Server/Realms version or the Standard world version\n\n4) Click on the '§bedit lore§r' button and you will receive a confirmation notification of activation\n\n5) To modify the name of the item and its lore, you must crouch.\n\n6) If you want to modify multiple items, repeat the same process until you are finished\n\n7) To exit the editing mode lore, click with the 'item lore edit' and then click §b'Exit Lore Edit'§r, so you will return to the normal mode of the game\n\n\n\n§c8) Modifying textures and addons is prohibited\n\n9) It is forbidden to upload to external websites without authorization\n\n10) It is forbidden to appropriate the addon and remove creator credits`,
            button:{
                name:{
                    a:`Crediti`,
                    b:`Back`,
                },
                img:{
                    a:'textures/ui/ErrorGlyph',
                    b:'textures/ui/import'
                }
            }
        },
        crediti:{
            title:`lore.admin_ui_credits.bg`,
            body:`\n\n§fThank you for using my addon, I hope you enjoy it. For any issues, please report them on §cYouTube§f, §dInstagram§f, §bTwitter§f, §bGitHub§f, or §aMCPDL\n§rI am Death_Aruban a developer and graphic designer. If you would like to see more of my work, please visit the websites listed before.`,
            button:{
                name:`Back`,
                img:'textures/ui/import'
            }
        },
        esci:{
            title:`lore.admin_ui_exit.bg`,
            body:`§b\n§fYou are currently in edit name and item lore mode`,
            button:{
                name:`Exit Lore Edit`,
                img:'textures/ui/ErrorGlyph',
            }
        }
    },

//Panello Schemata modifica item 

    modificatore:{
        admin:{
            title:'lore.admin_ui_text.bg',
            riga:{
                a:'',
                b:''
            }
        },
        vanilla:{
            title:'lore.vanilla_ui_text.bg',
            riga:{
                a:'',
                b:''
            },
            comando:'xp -1L @s'
        }
    },

 //Funzioni per coretta eseguzione Lore Item +

    funzioni:{
        a:'function active_lore_base',
        b:'function active_lore_vanilla',
        c:'function lore_item_name_confirm'
    }
}

export {impostazioni}

export function getPlayerExperienceLevel(player) {
    let minLevel = 0;
    let maxLevel = 24791;
    let distance = maxLevel - minLevel;
    let playerIndex = -1;
  
    while (minLevel !== maxLevel) {
        playerIndex = [...world.getPlayers({ minLevel, maxLevel })].findIndex((pl) => pl === player);
        if (playerIndex > -1) {
            maxLevel -= Math.round(distance / 2);
        }
        else if (playerIndex === -1) {
            minLevel = maxLevel;
            maxLevel = maxLevel * 2;
        };
        distance = maxLevel - minLevel;
    };
  
    if (minLevel === 0 && maxLevel === 0 && playerIndex === 0) return 0;
    else return minLevel + 1;
  };