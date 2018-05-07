/*
NIDE BUILD INFO:
  dir: dev
  target: main.js
  files: 2
*/



// file: define all.js

//Define ALL
    //PC version 2.0.2c
    //IDRegistry.genItemID
//Crystals
IDRegistry.genItemID("litherite");
IDRegistry.genItemID("erodium");
IDRegistry.genItemID("kyronite");
IDRegistry.genItemID("pladium");
IDRegistry.genItemID("ionite");
IDRegistry.genItemID("aethium");
//Items
IDRegistry.genItemID("assembler");
IDRegistry.genItemID("photovoltaic");
IDRegistry.genItemID("diode");
IDRegistry.genItemID("connector");
IDRegistry.genItemID("lonsdaleite");
IDRegistry.genItemID("nugget");
IDRegistry.genItemID("ender_stabilized");
IDRegistry.genItemID("digital_guide");
IDRegistry.genItemID("dust");
IDRegistry.genItemID("lens_item");




    //IDRegistry.genBlockID
        //modifier
IDRegistry.genBlockID("null_modifier");
IDRegistry.genBlockID("speed_modifier");
IDRegistry.genBlockID("piezo_modifier"); 
IDRegistry.genBlockID("accuracy_modifier"); 
        //structure frame tiers
IDRegistry.genBlockID("st_f_t1");
IDRegistry.genBlockID("st_f_t2");
IDRegistry.genBlockID("st_f_t3");
IDRegistry.genBlockID("st_f_t4");
IDRegistry.genBlockID("st_f_t5");
IDRegistry.genBlockID("st_f_t6");
//structure frame
IDRegistry.genBlockID("st_f");
IDRegistry.genBlockID("c_st_f");
//solar panels.controllers
IDRegistry.genBlockID("lsp"); 
IDRegistry.genBlockID("esp"); 
IDRegistry.genBlockID("ksp"); 
IDRegistry.genBlockID("psp"); 
IDRegistry.genBlockID("isp"); 
IDRegistry.genBlockID("asp"); 
//light rod
IDRegistry.genBlockID("l_r"); 
IDRegistry.genBlockID("i_l_r"); 
//solar panels
IDRegistry.genBlockID("lsp"); 
IDRegistry.genBlockID("esp"); 
IDRegistry.genBlockID("ksp"); 
IDRegistry.genBlockID("psp"); 
IDRegistry.genBlockID("isp"); 
IDRegistry.genBlockID("asp");
//laser core
IDRegistry.genBlockID("laser_core");
//laser_lens
IDRegistry.genBlockID("laser_lens_clear");
IDRegistry.genBlockID("laser_lens_white");
IDRegistry.genBlockID("laser_lens_orange");
IDRegistry.genBlockID("laser_lens_magenta");
IDRegistry.genBlockID("laser_lens_light_blue");
IDRegistry.genBlockID("laser_lens_yellow");
IDRegistry.genBlockID("laser_lens_lime");
IDRegistry.genBlockID("laser_lens_pink");
IDRegistry.genBlockID("laser_lens_gray");
IDRegistry.genBlockID("laser_lens_light_gray");
IDRegistry.genBlockID("laser_lens_cyan");
IDRegistry.genBlockID("laser_lens_purple");
IDRegistry.genBlockID("laser_lens_blue");
IDRegistry.genBlockID("laser_lens_brown");
IDRegistry.genBlockID("laser_lens_green");
IDRegistry.genBlockID("laser_lens_red");
IDRegistry.genBlockID("laser_lens_black");
//interconnect
IDRegistry.genBlockID("interconnect");

//PC version 2.0.9c
    //modifier
IDRegistry.genBlockID("regen_modifier");
IDRegistry.genBlockID("absorption_modifier");
IDRegistry.genBlockID("haste_modifier");
IDRegistry.genBlockID("resistance_modifier");
IDRegistry.genBlockID("water_modifier");
IDRegistry.genBlockID("jump_modifier");
IDRegistry.genBlockID("night_modifier");
IDRegistry.genBlockID("saturation_modifier");
IDRegistry.genBlockID("luck_modifier");
IDRegistry.genBlockID("flight_modifier");
IDRegistry.genBlockID("health_boost_modifier");
IDRegistry.genBlockID("fire_modifier");
IDRegistry.genBlockID("invisibility_modifier");
IDRegistry.genBlockID("strngth_modifier");
        //SOLAR
IDRegistry.genBlockID("sact1");
IDRegistry.genBlockID("sact2");
IDRegistry.genBlockID("sact3");
IDRegistry.genBlockID("sact4");
IDRegistry.genBlockID("sact5");
IDRegistry.genBlockID("sact6");
    //MINERS
        //ore miner
IDRegistry.genBlockID("vomct1");
IDRegistry.genBlockID("vomct2");
IDRegistry.genBlockID("vomct3");
IDRegistry.genBlockID("vomct4");
IDRegistry.genBlockID("vomct5");
IDRegistry.genBlockID("vomct6");
        //resource miner
IDRegistry.genBlockID("vrmct1");
IDRegistry.genBlockID("vrmct2");
IDRegistry.genBlockID("vrmct3");
IDRegistry.genBlockID("vrmct4");
IDRegistry.genBlockID("vrmct5");
IDRegistry.genBlockID("vrmct6");
        //botanic miner
IDRegistry.genBlockID("vbmct1");
IDRegistry.genBlockID("vbmct2");
IDRegistry.genBlockID("vbmct3");
IDRegistry.genBlockID("vbmct4");
IDRegistry.genBlockID("vbmct5");
IDRegistry.genBlockID("vbmct6");
    //Lightning
IDRegistry.genBlockID("lct1");
IDRegistry.genBlockID("lct2");
IDRegistry.genBlockID("lct3");
IDRegistry.genBlockID("lct4");
IDRegistry.genBlockID("lct5");
IDRegistry.genBlockID("lct6");
    //Personal Nano Bot Beacon
IDRegistry.genBlockID("pnbbt1");
IDRegistry.genBlockID("pnbbt2");
IDRegistry.genBlockID("pnbbt3");
IDRegistry.genBlockID("pnbbt4");
IDRegistry.genBlockID("pnbbt5");
IDRegistry.genBlockID("pnbbt6");










/* 
//Block.registerDropFunction
//Litherite
Block.registerDropFunction(
"lspc", function(coords, blockID, blockData, level){if(level > 3){ return [[blockID, 1, 0]]} return [];}, 0);

Block.registerDropFunction(
"lsp", function(coords, blockID, blockData, level){if(level > 3){ return [[blockID, 1, 0]]}return []; }, 0);


//MachineRegistry.registerPrototype
if (World.getBlockID(x, y, z).id==lspc){
        MachineRegistry.registerPrototype(BlockID.lspc, {isGenerator: function() {return true;},
        energyTick: function(type, src){
            if (nativeGetLightLevel(this.x, this.y + 2, this.z) == 15)
{src.add(1);}}});}
*/





// file: create.js

importLib("ToolType","*");
var base_block_envtech = Block.createSpecialType({
 base: 20,
 lightopacity: 15,
 destroytime: 1
});

//ALL Create
        //Crystal.createItem
Item.createItem("litherite", "Litherite", {name: "litherite_crystal", meta: 0}, {stack: 64});
Item.createItem("erodium", "Erodium", {name: "erodium_crystal", meta: 0}, {stack: 64});
Item.createItem("kyronite", "Kyronite", {name: "kyronite_crystal", meta: 0}, {stack: 64});
Item.createItem("pladium", "Pladium", {name: "pladium_crystal", meta: 0}, {stack: 64});
Item.createItem("ionite", "Ionite", {name: "ionite_crystal", meta: 0}, {stack: 64});
Item.createItem("aethium", "Aethium", {name: "aethium_crystal", meta: 0}, {stack: 64});
        //Items.createItem
Item.createItem("assembler", "Multiblock Assembler", {name: "m_assembler", meta: 0}, {stack: 1});
Item.createItem("photovoltaic", "Photovoltaic Cell", {name: "photovoltaic_cell", meta: 0}, {stack: 64});
Item.createItem("diode", "Diode", {name: "diode", meta: 0}, {stack: 64});
Item.createItem("connector", "Connector", {name: "connetor", meta: 0}, {stack: 64});



//Block.createBlock
        //modifiers.Block.createBlock
Block.createBlock("null_modifier", [{name: "Null modifier", texture: [["modifier_null", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("speed_modifier", [{name: "Speed modifier", texture: [["modifier_speed", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("piezo_modifier", [{name: "Piezo modifier", texture: [["modifier_piezo", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("accuracy_modifier", [{name: "Accuracy modifier", texture: [["modifier_accuracy", 0]], inCreative: true}], base_block_envtech);
            //NEW
Block.createBlock("regen_modifier", [{name: " modifier", texture: [["modifier_regen", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("absorption_modifier", [{name: " modifier", texture: [["modifier_absorption", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("haste_modifier", [{name: " modifier", texture: [["modifier_haste", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("resistance_modifier", [{name: " modifier", texture: [["modifier_resistance", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("water_modifier", [{name: " modifier", texture: [["modifier_water", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("jump_modifier", [{name: " modifier", texture: [["modifier_jump", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("nigth_modifier", [{name: " modifier", texture: [["modifier_night", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("saturation_modifier", [{name: " modifier", texture: [["modifier_saturation", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("luck_modifier", [{name: " modifier", texture: [["modifier_luck", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("flight_modifier", [{name: " modifier", texture: [["modifier_flight", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("health_boost_modifier", [{name: " modifier", texture: [["modifier_health", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("fire_modifier", [{name: " modifier", texture: [["modifier_fire modifier", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("invisiblity_modifier", [{name: " modifier", texture: [["modifier_invisibility", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("strength_modifier", [{name: " modifier", texture: [["modifier_strength", 0]], inCreative: true}], base_block_envtech);

        //structure.tiers.frames.Block.createBlock
Block.createBlock("st_f_t1", [{name: "Structure frame tier 1", texture: [["structure_frame_1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t2", [{name: "Structure frame tier 2", texture: [["structure_frame_2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t3", [{name: "Structure frame tier 3", texture: [["structure_frame_3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t4", [{name: "Structure frame tier 4", texture: [["structure_frame_4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t5", [{name: "Structure frame tier 5", texture: [["structure_frame_5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f_t6", [{name: "Structure frame tier 6", texture: [["structure_frame_6", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("st_f", [{name: "Structure frame", texture: [["st_f", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("c_st_f", [{name: "Clear Structure frame", texture: [["c_st_f", 0]], inCreative: true}], base_block_envtech);
        //crystal.solar.panels.Block.createBlock
Block.createBlock("lsp", [{name: "Litherite solar panel", texture: [["lsp", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("esp", [{name: "Erodium solar panel", texture: [["esp", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("ksp", [{name: "Kyronite solar panel", texture: [["ksp", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("psp", [{name: "Pladium solar panel", texture: [["psp", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("isp", [{name: "Ionite solar panel", texture: [["isp", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("asp", [{name: "Aethium solar panel", texture: [["asp", 0]], inCreative: true}], base_block_envtech);
        //light.rod.Block.createBlock
Block.createBlock("l_r", [{name: "Light Rod", texture: [["l_r", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("i_l_r", [{name: "Insulated Light Rod", texture: [["i_l_r", 0]], inCreative: true}], base_block_envtech);
        //laser.core.Block.createBlock
Block.createBlock("laser_core", [{name: "Laser core", texture: [["laser_core", 0]], inCreative: true}], base_block_envtech);
        //laser.lens.Block.createBlock
Block.createBlock("laser_lens_clear", [{name: "Laser Lens clear", texture: [["laser_lens_clear", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_white", [{name: "Laser Lens white", texture: [["laser_lens_white", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_orange", [{name: "Laser Lens orange", texture: [["laser_lens_orange", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_magenta", [{name: "Laser Lens magenta", texture: [["laser_lens_magenta", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_light_blue", [{name: "Laser Lens light blue", texture: [["laser_lens_light_blue", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_yellow", [{name: "Laser Lens yellow", texture: [["laser_lens_yellow", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_lime", [{name: "Laser Lens lime", texture: [["laser_lens_lime", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_pink", [{name: "Laser Lens pink", texture: [["laser_lens_pink", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_gray", [{name: "Laser Lens gray", texture: [["laser_lens_gray", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_light_gray", [{name: "Laser Lens light_gray", texture: [["laser_lens_light_gray", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_cyan", [{name: "Laser Lens cyan", texture: [["laser_lens_cyan", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_purple", [{name: "Laser Lens purple", texture: [["laser_lens_purple", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_blue", [{name: "Laser Lens blue", texture: [["laser_lens_blue", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_brown", [{name: "Laser Lens brown", texture: [["laser_lens_brown", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_green", [{name: "Laser Lens green", texture: [["laser_lens_green", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_red", [{name: "Laser Lens red", texture: [["laser_lens_red", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("laser_lens_black", [{name: "Laser Lens black", texture: [["laser_lens_black", 0]], inCreative: true}], base_block_envtech);
        //interconnect.Block.createBlock
Block.createBlock("interconnect", [{name: "Interconnect", texture: [["interconnect", 0]], inCreative: true}], base_block_envtech);
//NEW
//controllers
        //SOLAR
Block.createBlock("sact1", [{name: "Solar Array Controller Tier 1", texture: [["sact1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("sact2", [{name: "Solar Array Controller Tier 2", texture: [["sact2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("sact3", [{name: "Solar Array Controller Tier 3", texture: [["sact3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("sact4", [{name: "Solar Array Controller Tier 4", texture: [["sact4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("sact5", [{name: "Solar Array Controller Tier 5", texture: [["sact5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("sact6", [{name: "Solar Array Controller Tier 6", texture: [["sact6", 0]], inCreative: true}], base_block_envtech);
//MINERS
        //ore miner
Block.createBlock("vomct1", [{name: "Void Ore Miner Controller Tier 1", texture: [["vomct1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vomct2", [{name: "Void Ore Miner Controller Tier 2", texture: [["vomct2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vomct3", [{name: "Void Ore Miner Controller Tier 3", texture: [["vomct3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vomct4", [{name: "Void Ore Miner Controller Tier 4", texture: [["vomct4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vomct5", [{name: "Void Ore Miner Controller Tier 5", texture: [["vomct5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vomct6", [{name: "Void Ore Miner Controller Tier 6", texture: [["vomct6", 0]], inCreative: true}], base_block_envtech);
        //resource miner
Block.createBlock("vrmct1", [{name: "Void Resource Miner Controller Tier 1", texture: [["vrmct1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vrmct2", [{name: "Void Resource Miner Controller Tier 2", texture: [["vrmct2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vrmct3", [{name: "Void Resource Miner Controller Tier 3", texture: [["vrmct3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vrmct4", [{name: "Void Resource Miner Controller Tier 4", texture: [["vrmct4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vrmct5", [{name: "Void Resource Miner Controller Tier 5", texture: [["vrmct5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vrmct6", [{name: "Void Resource Miner Controller Tier 6", texture: [["vrmct6", 0]], inCreative: true}], base_block_envtech);
        //botanic miner
Block.createBlock("vbmct1", [{name: "Void Botanic Miner Controller Tier 1", texture: [["vbmct1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vbmct2", [{name: "Void Botanic Miner Controller Tier 2", texture: [["vbmct2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vbmct3", [{name: "Void Botanic Miner Controller Tier 3", texture: [["vbmct3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vbmct4", [{name: "Void Botanic Miner Controller Tier 4", texture: [["vbmct4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vbmct5", [{name: "Void Botanic Miner Controller Tier 5", texture: [["vbmct5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("vbmct6", [{name: "Void Botanic Miner Controller Tier 6", texture: [["vbmct6", 0]], inCreative: true}], base_block_envtech);

        //Lightning
Block.createBlock("lct1", [{name: "Lightning Controller Tier 1", texture: [["lct1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("lct2", [{name: "Lightning Controller Tier 2", texture: [["lct2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("lct3", [{name: "Lightning Controller Tier 3", texture: [["lct3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("lct4", [{name: "Lightning Controller Tier 4", texture: [["lct4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("lct5", [{name: "Lightning Controller Tier 5", texture: [["lct5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("lct6", [{name: "Lightning Controller Tier 6", texture: [["lct6", 0]], inCreative: true}], base_block_envtech);


        //Personal Nano Bot Beacon
Block.createBlock("pnbbt1", [{name: "Personal Nano Bot Beacon Tier 1", texture: [["pnbbt1", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("pnbbt2", [{name: "Personal Nano Bot Beacon Tier 2", texture: [["pnbbt2", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("pnbbt3", [{name: "Personal Nano Bot Beacon Tier 3", texture: [["pnbbt3", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("pnbbt4", [{name: "Personal Nano Bot Beacon Tier 4", texture: [["pnbbt4", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("pnbbt5", [{name: "Personal Nano Bot Beacon Tier 5", texture: [["pnbbt5", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("pnbbt6", [{name: "Personal Nano Bot Beacon Tier 6", texture: [["pnbbt6", 0]], inCreative: true}], base_block_envtech);
//






/*
//Colored_lines_inCreative: false
Block.createBlock("lith", [{name: "Зеленый", texture: [["lith", 0]], inCreative: false}]);
Block.createBlock("erod", [{name: "Фиолетовый", texture: [["erod", 0]], inCreative: false}]);
Block.createBlock("kyro", [{name: "Розоавто-фиолетовый", texture: [["kyro", 0]], inCreative: false}]);
Block.createBlock("plad", [{name: "Темно-синий", texture: [["plad", 0]], inCreative: false}]);
Block.createBlock("ioni", [{name: "Голубой", texture: [["ioni", 0]], inCreative: false}]);
Block.createBlock("aeth", [{name: "Черный", texture: [["aeth", 0]], inCreative: false}]);
//Colored_lines_inCreative: false*/