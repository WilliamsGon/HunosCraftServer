// command "/kjs custom_command heal"
ServerEvents.customCommand('heal', event => {
    // Cura al jugador que ejecuta el comando
    event.player.heal()
})

// command "/kjs custom_command diamonds"
ServerEvents.customCommand('diamonds', event => {
    // Da 64 diamantes al jugador que ejecuta el comando
    event.player.give(Item.of('minecraft:diamond', 64))
})

//command "/fly"
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('fly') // El nombre del comando
        .requires(s => s.hasPermission(2)) // Verifica si el jugador tiene privilegios de operador
        .executes(c => fly(c.source.player)) // Activa o desactiva el vuelo para el jugador que ejecutó el comando si no se incluye el argumento `target`
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
            .executes(c => fly(Arguments.PLAYER.getResult(c, 'target'))) // Activa o desactiva el vuelo para el jugador incluido en el argumento `target`
        )
    )

    // Función auxiliar
    let fly = (player) => {
        console.log(player)
        if (player.abilities.mayfly) {
            player.abilities.mayfly = false
            player.abilities.flying = false
            player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
        } else {
            player.abilities.mayfly = true
            player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
        }
        player.onUpdateAbilities()
        return 1
    }
})

//command "/nivel1"
ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event

    event.register(Commands.literal('nivel1') // El nombre del comando
        // .requires(s => s.hasPermission(2)) // Verifica si el jugador tiene privilegios de operador
        .executes(c => nivelCompleto(c.source.player)) // Completa la misión para el jugador que ejecutó el comando si no se incluye el argumento `target`
        .then(Commands.argument('target', Arguments.PLAYER.create(event))
            .executes(c => fly(Arguments.PLAYER.getResult(c, 'target'))) // Completa la misión para el jugador incluido en el argumento `target`
        )
    )

    // Función auxiliar
    let nivelCompleto = (player) => {

        // console.log('Player Object:', player); // Imprime el objeto completo
        // console.log('Player Keys:', Object.keys(player)); // Lista las propiedades enumerables
        console.log('Player hasPermissions:', player.hasPermissions); // Imprime el objeto abilities completo
        // console.log('Player.Abilities:', player.abilities); // Imprime el objeto abilities completo
        // console.log('Player.Abilities Keys:', Object.keys(player.abilities)); // Lista las propiedades enumerables
        
        player.runCommand("ftbquests change_progress @s complete '227612ECB56E9350'") // Completa la misión "nivel1"
        return 1 //Siempre devuelve 1 para indicar que se ejecutó correctamente
    }
})