tellraw @s[tag=loreItemUi] {"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.attivato.lore.mc.da"}]}
tellraw @s[tag=Admin] {"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.disattivato.lore.mc.da"}]}
playsound bubble.pop @s[tag=loreItemUi] ~ ~ ~ 3 1 3
playsound break.amethyst_block @s[tag=Admin] ~ ~ ~ 3 1 3