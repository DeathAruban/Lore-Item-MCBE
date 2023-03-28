replaceitem entity @s slot.hotbar 0 da:lore_ui 1
tag @s add Admin
gamerule sendcommandfeedback false
tag @s[tag=Admin] remove loreItemUi
tellraw @s[tag=Admin] {"rawtext":[{"text":"\n§6-------------------------\n §6§l"},{"selector":"@s"},{"text":" \n\u00a7\u0072\u00a7\u0032\u004c\u006f\u0072\u0065\u0020\u006d\u006f\u0064\u0065\u0020\u0061\u0063\u0074\u0069\u0076\u0065\u0021\n§6-------------------------\n\u00a7\u0066\u0066\u006f\u0072\u0020\u006d\u006f\u0072\u0065\u0020\u0069\u006e\u0066\u006f\u0020\u0075\u0073\u0065\u0020\u0074\u0068\u0065 \n\u004c\u006f\u0072\u0065\u0020\u0055\u0049\u0020\u0069\u0074\u0065\u006d\n\u0069\u006e\u0020\u0074\u0068\u0065\u0020\u0072\u0075\u006c\u0065\u0073\u0020\u0073\u0065\u0063\u0074\u0069\u006f\u006e\n§6-------------------------"}]}
playsound bubble.pop @s ~ ~ ~ 3 1 3