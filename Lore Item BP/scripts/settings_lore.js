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
            body:``,
            button:{
                name:{
                    a:`Edit`,
                    b:`Rules`,
                    c:`Credit`
                },
                img:{
                    a:'',
                    b:'',
                    c:''
                }
            }
        },
        regole:{
            title:`lore.admin_ui_rules.bg`,
            body:``,
            button:{
                name:`Back`,
                img:''
            }
        },
        crediti:{
            title:`lore.admin_ui_credits.bg`,
            body:``,
            button:{
                name:`Back`,
                img:''
            }
        },
        esci:{
            title:`lore.admin_ui_exit.bg`,
            body:``,
            button:{
                name:`Exit`,
                img:'',
            }
        }
    },

//Panello Utente Vanilla

    vanilla:{
        home:{
            title:`lore.admin_ui_home.bg`,
            body:``,
            button:{
                name:{
                    a:`Edit`,
                    b:`Rules`,
                    c:`Credit`
                },
                img:{
                    a:'',
                    b:'',
                    c:''
                }
            }
        },
        regole:{
            title:`lore.vanilla_ui_rules.bg`,
            body:``,
            button:{
                name:{
                    a:`Back`,
                    b:``,
                },
                img:{
                    a:'Back',
                    b:''
                }
            }
        },
        crediti:{
            title:`lore.admin_ui_credits.bg`,
            body:``,
            button:{
                name:`Back`,
                img:''
            }
        },
        esci:{
            title:`lore.admin_ui_exit.bg`,
            body:``,
            button:{
                name:`Exit`,
                img:'',
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
    }
}

export {impostazioni}

export function getxp (player) {
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
