//solar-t1-litherite
if (World.getBlockID(x, y, z).id==sact1){
        MachineRegistry.registerPrototype(BlockID.sact1, { isGenerator: function() {return true;},
    energyTick: function(type, src)
    {
        
        if(
            
//modifiers
           wgb(this.x-1, this.y+1, this.z-1) === BlockID.null_modifier &&
           wgb(this.x+1, this.y+1, this.z+1) === BlockID.null_modifier &&
           wgb(this.x-1, this.y+1, this.z+1) === BlockID.null_modifier &&
           wgb(this.x+1, this.y+1, this.z-1) === BlockID.null_modifier)
{src.add(549);}
}});}