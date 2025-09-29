console.log('CW Tweaks Startup scripts successfully loaded.')

StartupEvents.registry('block', event => {
  // Script written by MC7 / AdversePond. 
  // Texture work done by Keerdm.
  event.create('sweet_berry_crate')
    .displayName('Sweet Berry Crate')
    .soundType('wood')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('minecraft:mineable/axe')

    .textureAll('kubejs:block/sb_side')
    .texture('up', 'kubejs:block/sb_top')
    .texture('down', 'kubejs:block/sb_bottom')

    //Script written by Onmod, adapted from MC7 / AdversePond.
    //Texture work done by ActiveRadar and Onmod.
    event.create('gunpowder_barrel')
    .displayName('Gunpowder Barrel')
    .soundType('wood')
    .hardness(1.0)
    .resistance(1.0)
    .tagBlock('minecraft:mineable/axe')

    .textureAll('kubejs:block/gb_side1')
    .texture('up', 'kubejs:block/gb_top')
    .texture('down', 'kubejs:block/gb_bottom')
});
