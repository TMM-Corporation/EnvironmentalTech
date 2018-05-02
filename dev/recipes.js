//recipes
//item
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.Litherite, count: 4, data: 0}, [
	"abc",
	"bdb",
	"cba"
	], ['a', 351, 10,
		'b', 318, 0, 
		'c', 351, 2, 
		'd', 264, 0]);
Recipes.addShaped({id: ItemID.connector, count: 4r, data: 0}, [
	"aba",
	"bab ",
	"aba"
	], ['a', 331, 10,
		'b', 265, 0]);
Recipes.addShaped({id: ItemID.photovoltaic, count: 1, data: 0}, [
	" a ",
	"aba",
	" a "
	], ['a', 351, 10,
		'b', 406, 0]);
Recipes.addShaped({id: ItemID.assembler, count: 1, data: 0}, [
	"  a",
	" b ",
	"b  "
	], ['a', ItemID.litherite, 10,
		'b', 49, 0]);
Recipes.addShaped({id: ItemID.diode, count: 1, data: 0}, [
	"aaa",
	"aba",
	"aca"
	], ['a', 95,  0,
		'b', 331, 0,
		'c', 265, 0]);

//block
Recipes.addShaped({id: BlockID.null_modifier, count: 1, data: 0}, [
	"aba",
	"bcb",
	"aba"
	], ['a', 265,  0,
		'b', 95, 0,
		'c', BlockID.interconnect, 0]);
Recipes.addShaped({id: BlockID.speed_modifier, count: 1, data: 0}, [
	"aba",
	"dcd",
	"aba"
	], ['a', 41,  0,
		'b', 152, 0,
		'c', BlockID.nullmodifier, 0,
		'd', BlockID.mica, 0]);
//structure frame tiers
Recipes.addShaped({id: BlockID.st_f_t1, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], ['a', 265,  0,
		'd', 351, 0,
		'c', BlockID.interconnect, 0,
		'b', ItemID.litherite_crystal, 0]);
Recipes.addShaped({id: BlockID.st_f_t2, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], ['a', 266,  0,
		'd', 351, 0,
		'c', BlockID.st_f_t1, 0,
		'b', ItemID.erodium_crystal, 0]);
Recipes.addShaped({id: BlockID.st_f_t3, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], ['a', 264,  0,
		'd', 406, 0,
		'c', BlockID.st_f_t2, 0,
		'b', ItemID.kyronite_crystal, 0]);
Recipes.addShaped({id: BlockID.st_f_t4, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], ['a', 388,  0,
		'd', 406, 0,
		'c', BlockID.st_f_t3, 0,
		'b', ItemID.pladium_crystal, 0]);
Recipes.addShaped({id: BlockID.st_f_t5, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], ['a', 399,  0,
		'd', 409, 0,
		'c', BlockID.st_f_t4, 0,
		'b', ItemID.ionite_crystal, 0]);
Recipes.addShaped({id: BlockID.st_f_t6, count: 1, data: 0}, [
	" a ",
	"bcb",
	" d "
	], ['a', 399,  0,
		'd', 399, 0,
		'c', BlockID.st_f_t5, 0,
		'b', ItemID.aethium_crystal, 0]);
//solar panel
Recipes.addShaped({id: BlockID.lsp, count: 1, data: 0}, [
	"aaa",
	"bbb",
	"cdc"
	], ['a', ItemID.litherite, 0,
		'b', ItemID.photovoltaic, 0,
		'c', 331, 0,
		'd', BlockID.interconnect, 0]);
Recipes.addShaped({id: BlockID.esp, count: 1, data: 0}, [
	"bbb",
	"cdc"
	], ['b', ItemID.erodium_crystal, 0,
		'c', ItemID.photovoltaic, 0,
		'd', BlockID.lsp, 0]);
Recipes.addShaped({id: BlockID.ksp, count: 1, data: 0}, [
	"bbb",
	"cdc"
	], ['b', ItemID.kyronite_crystal, 0,
		'c', ItemID.photovoltaic, 0,
		'd', BlockID.esp, 0]);
Recipes.addShaped({id: BlockID.psp, count: 1, data: 0}, [
	"bbb",
	"cdc"
	], ['b', ItemID.pladium_crystal, 0,
		'c', ItemID.photovoltaic, 0,
		'd', BlockID.ksp, 0]);
Recipes.addShaped({id: BlockID.isp, count: 1, data: 0}, [
	"bbb",
	"cdc"
	], ['b', ItemID.ionite_crystal, 0,
		'c', ItemID.photovoltaic, 0,
		'd', BlockID.psp, 0]);
Recipes.addShaped({id: BlockID.asp, count: 1, data: 0}, [
	"bbb",
	"cdc"
	], ['b', ItemID.aethium_crystal, 0,
		'c', ItemID.photovoltaic, 0,
		'd', BlockID.isp, 0]);

});