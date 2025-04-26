priority: 300

ServerEvents.recipes(event => {
    event.remove({input: 'minecraft:cobblestone'})// Remove cobblestone from the recipe list
    event.remove({input: 'minecraft:raw_copper'})// Remove raw copper from the recipe list
    event.remove({input: 'minecraft:copper_ingot'})// Remove copper ingot from the recipe list
    event.remove({input: 'minecraft:raw_iron'})// Remove raw iron from the recipe list
    event.remove({input: 'minecraft:iron_ingot'})// Remove iron ingot from the recipe list
    event.remove({input: 'minecraft:raw_gold'})// Remove raw gold from the recipe list
    event.remove({input: 'minecraft:gold_ingot'})// Remove gold ingot from the recipe list
    event.remove({input: 'minecraft:diamond'})// Remove diamond from the recipe list
    event.remove({input: 'minecraft:netherite_ingot'})// Remove netherite ingot from the recipe list
    event.remove({input: 'create:brass_ingot'})// Remove brass ingot from the recipe list
    event.remove({input: 'create:brass_block'})// Remove brass block from the recipe list

    
    event.remove({input: 'minecraft:potato'})// Remove brass block from the recipe list
})