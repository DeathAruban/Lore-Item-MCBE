tellraw @s[tag=VanillaLoreEdit] {"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.attivato.lore.mc.da"}]}
tellraw @s[tag=!VanillaLoreEdit] {"rawtext":[{"text":" §6§l"},{"selector":"@s"},{"text":"\n"},{"translate":"avviso.disattivato.lore.mc.da"}]}
playsound bubble.pop @s[tag=VanillaLoreEdit] ~ ~ ~ 3 1 3
playsound break.amethyst_block @s[tag=!VanillaLoreEdit] ~ ~ ~ 3 1 3