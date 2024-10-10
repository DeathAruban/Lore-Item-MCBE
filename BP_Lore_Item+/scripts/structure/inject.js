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

const AruCube_0x11fa72=AruCube_0xbf37;(function(_0x4795db,_0x89b531){const _0x5be374=AruCube_0xbf37,_0x1c3b38=_0x4795db();while(!![]){try{const _0x3b910e=-parseInt(_0x5be374(0xd8))/0x1+parseInt(_0x5be374(0xca))/0x2*(parseInt(_0x5be374(0xd1))/0x3)+-parseInt(_0x5be374(0xdc))/0x4+parseInt(_0x5be374(0xd0))/0x5*(parseInt(_0x5be374(0xda))/0x6)+-parseInt(_0x5be374(0xc9))/0x7*(parseInt(_0x5be374(0xd2))/0x8)+-parseInt(_0x5be374(0xc8))/0x9*(-parseInt(_0x5be374(0xdd))/0xa)+-parseInt(_0x5be374(0xe0))/0xb;if(_0x3b910e===_0x89b531)break;else _0x1c3b38['push'](_0x1c3b38['shift']());}catch(_0x2a2006){_0x1c3b38['push'](_0x1c3b38['shift']());}}}(AruCube_0x308d,0xedcd6));import{world,system}from'@minecraft/server';import{items,blocks}from'./function/items';function AruCube_0x308d(){const _0x13c519=['968019khZuRJ','subscribe','18GlRTaO','function','2411424NPmxOq','19030pkvKom','cancel','playerSpawn','1071906vVtNii','2826kZDlPY','119jLRJfP','70FWCDBJ','itemStack','sendMessage','typeId','afterEvents','itemUse','1600700Yfjjhd','164886slcJLT','394952LkRsrY','playerInteractWithBlock','now','§f[\x20§b§lLore\x20Item+§r§f\x20]\x20§ahas\x20been\x20activated\x20successfully!','source','hasOwnProperty'];AruCube_0x308d=function(){return _0x13c519;};return AruCube_0x308d();}import{config}from'../config';const {state:isActive}=config;function AruCube_0xbf37(_0x5543a8,_0x44aa30){const _0x308d7b=AruCube_0x308d();return AruCube_0xbf37=function(_0xbf379a,_0x2da766){_0xbf379a=_0xbf379a-0xc8;let _0x5a2909=_0x308d7b[_0xbf379a];return _0x5a2909;},AruCube_0xbf37(_0x5543a8,_0x44aa30);}world[AruCube_0x11fa72(0xce)][AruCube_0x11fa72(0xdf)][AruCube_0x11fa72(0xd9)](({initialSpawn:_0x28b2cb,player:_0x51d605})=>{const _0x3acad9=AruCube_0x11fa72;if(!_0x28b2cb||!isActive)return;_0x51d605[_0x3acad9(0xcc)]({'rawtext':[{'translate':_0x3acad9(0xd5)}]});}),world['afterEvents'][AruCube_0x11fa72(0xcf)][AruCube_0x11fa72(0xd9)](_0x21f7eb=>{const _0x361881=AruCube_0x11fa72,_0x42c412=_0x21f7eb[_0x361881(0xcb)],_0x3d592a=_0x21f7eb[_0x361881(0xd6)];for(const _0x7a29a0 in items){items[_0x361881(0xd7)](_0x7a29a0)&&(_0x42c412[_0x361881(0xcd)]==items[_0x7a29a0]['Id']&&items[_0x7a29a0][_0x361881(0xdb)](_0x3d592a));}});let lastInteraction=Date[AruCube_0x11fa72(0xd4)]();world['beforeEvents'][AruCube_0x11fa72(0xd3)][AruCube_0x11fa72(0xd9)](_0x3edc02=>{const _0x13c647=AruCube_0x11fa72,_0x42ddf=_0x3edc02['block'],_0x548d69=_0x3edc02['player'],_0x3bb081=Date[_0x13c647(0xd4)]();if(_0x3bb081-lastInteraction>=0x64){lastInteraction=_0x3bb081;for(let _0x5ab986 in blocks){_0x42ddf[_0x13c647(0xcd)]==blocks[_0x5ab986]['Id']&&system['run'](()=>{const _0x2a3ae7=_0x13c647;blocks[_0x5ab986][_0x2a3ae7(0xdb)](_0x548d69);});}}else _0x3edc02[_0x13c647(0xde)]=!![];});