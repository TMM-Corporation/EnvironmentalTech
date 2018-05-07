var base_block_envtech = Block.createSpecialType({
 base: 20,
 lightopacity: 15,
 destroytime: 3
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
Block.createBlock("regen_modifier", [{name: "Regen modifier", texture: [["modifier_regen", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("absorption_modifier", [{name: "Absorption modifier", texture: [["modifier_absorption", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("haste_modifier", [{name: "Haste modifier", texture: [["modifier_haste", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("resistance_modifier", [{name: "Resistance modifier", texture: [["modifier_resistance", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("water_modifier", [{name: "Water modifier", texture: [["modifier_water", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("jump_modifier", [{name: "Jump modifier", texture: [["modifier_jump", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("night_modifier", [{name: "Night modifier", texture: [["modifier_night", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("saturation_modifier", [{name: "Saturation modifier", texture: [["modifier_saturation", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("luck_modifier", [{name: "Luck modifier", texture: [["modifier_luck", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("flight_modifier", [{name: "Flight modifier", texture: [["modifier_flight", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("health_boost_modifier", [{name: "Health Boost modifier", texture: [["modifier_health", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("fire_modifier", [{name: "Fire immunity modifier", texture: [["modifier_fire modifier", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("invisibility_modifier", [{name: "Invisibility modifier", texture: [["modifier_invisibility", 0]], inCreative: true}], base_block_envtech);
Block.createBlock("strength_modifier", [{name: "Strength modifier", texture: [["modifier_strength", 0]], inCreative: true}], base_block_envtech);

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