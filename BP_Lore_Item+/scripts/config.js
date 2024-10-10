/**
 * ||========================================================================================================================||
 * ||                                                                                                                        ||
 * ||  ________  _______   ________  _________  ___  ___  ________  ________  ___  ___  ________  ________  ________         ||
 * || |\   ___ \|\  ___ \ |\   __  \|\___   ___\\  \|\  \|\   __  \|\   __  \|\  \|\  \|\   __  \|\   __  \|\   ___  \       ||
 * ||  \ \  \_|\ \ \   __/|\ \  \|\  \|___ \  \_\ \  \\\  \ \  \|\  \ \  \|\  \ \  \\\  \ \  \|\ /\ \  \|\  \ \  \\ \  \     ||
 * ||   \ \  \ \\ \ \  \_|/_\ \   __  \   \ \  \ \ \   __  \ \   __  \ \   _  _\ \  \\\  \ \   __  \ \   __  \ \  \\ \  \    ||
 * ||    \ \  \_\\ \ \  \_|\ \ \  \ \  \   \ \  \ \ \  \ \  \ \  \ \  \ \  \\  \\ \  \\\  \ \  \|\  \ \  \ \  \ \  \\ \  \   ||
 * ||     \ \_______\ \_______\ \__\ \__\   \ \__\ \ \__\ \__\ \__\ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\ \__\\ \__\  ||
 * ||      \|_______|\|_______|\|__|\|__|    \|__|  \|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\|__| \|__|  ||
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 * ||                                                                                                                        ||  
 * ||                                               ★ Please do not modify this code ★                                      ||  
 * ||                                   ► This Mod was created for Minecraft Bedrock Edition ◄                               || 
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 */

/**
* @made_by Death_Aruban
* @version [4.0.4]
* @link [https://discord.com/invite/NKy9A9RAe8]
*/

export const config = {
    
    /**
     * true = Enable the correct warning of the Loot Bag component
     * false = Disable the warning of the Loot Bag component
     * default settings is >> true <<
     */

    state: true,

    
    /**
     * put the tag you want to use the floating text component
     * to add other tags ["admin","mod","example"]
     * default tag is >> admin and mod <<
     */

	permission:{
        tags:["admin","mod"]
    },

    /**
     * here you can decide how the player must pay 
     * for the name and lore change
     */

    items:{
        state:false,
        id:'minecraft:diamond'
    },

    scores:{
        state:false ,
        score_name:'money',
        score_remove:10,
        display_name:'Money'
    },

    xp:{
        state:true,
        xp_remove:3
    }


}