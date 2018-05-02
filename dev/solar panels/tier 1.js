//solar-t1-litherite
if (World.getBlockID(x, y, z).id==sact1){
        MachineRegistry.registerPrototype(BlockID.sact1, { isGenerator: function() {return true;},
    energyTick: function(type, src)
    {
        
        if(
            //3x3
           light(this.x,this.y + 2,this.z) == 15 &&
           light(this.x,this.y + 2,this.z+1) == 15 &&
           light(this.x,this.y + 2,this.z-1) == 15 &&
                
           light(this.x+1,this.y + 2,this.z) == 15 &&
           light(this.x-1,this.y + 2,this.z) == 15 &&
           light(this.x+1,this.y + 2,this.z+1) == 15 &&
                
           light(this.x-1,this.y + 2,this.z-1) == 15 &&
           light(this.x-1,this.y + 2,this.z+1) == 15 &&
           light(this.x+1,this.y + 2,this.z-1) == 15 &&
//getblock
//solarpanels
           wgb(this.x, this.y+1, this.z) === BlockID.lsp &&
           wgb(this.x, this.y+1, this.z+1) === BlockID.lsp &&
           wgb(this.x, this.y+1, this.z-1) === BlockID.lsp &&
           
           wgb(this.x+1, this.y+1, this.z) === BlockID.lsp &&
           wgb(this.x-1, this.y+1, this.z) === BlockID.lsp &&
           wgb(this.x+1, this.y+1, this.z+1) === BlockID.lsp &&
           
           wgb(this.x-1, this.y+1, this.z-1) === BlockID.lsp &&
           wgb(this.x-1, this.y+1, this.z+1) === BlockID.lsp &&
           wgb(this.x+1, this.y+1, this.z-1) === BlockID.lsp &&
//frames
//z
           wgb(this.x,   this.y+1, this.z+2) === BlockID.st_f_t1 &&
           wgb(this.x+1, this.y+1, this.z+2) === BlockID.st_f_t1 &&
           wgb(this.x-1, this.y+1, this.z+2) === BlockID.st_f_t1 &&
           wgb(this.x+2, this.y+1, this.z+2) === BlockID.st_f_t1 &&
           wgb(this.x-2, this.y+1, this.z+2) === BlockID.st_f_t1 &&
           
           wgb(this.x,   this.y+1, this.z-2) === BlockID.st_f_t1 &&
           wgb(this.x+1, this.y+1, this.z-2) === BlockID.st_f_t1 &&
           wgb(this.x-1, this.y+1, this.z-2) === BlockID.st_f_t1 &&
           wgb(this.x+2, this.y+1, this.z-2) === BlockID.st_f_t1 &&
           wgb(this.x-2, this.y+1, this.z-2) === BlockID.st_f_t1 &&
//x
           wgb(this.x+2, this.y+1, this.z) === BlockID.st_f_t1 &&
           wgb(this.x+2, this.y+1, this.z-1) === BlockID.st_f_t1 &&
           wgb(this.x+2, this.y+1, this.z+1) === BlockID.st_f_t1 &&
           
           wgb(this.x-2, this.y+1, this.z) === BlockID.st_f_t1 &&
           wgb(this.x-2, this.y+1, this.z-1) === BlockID.st_f_t1 &&
           wgb(this.x-2, this.y+1, this.z+1) === BlockID.st_f_t1 &&
//modifiers
           wgb(this.x-1, this.y+1, this.z-1) === BlockID.null_modifier &&
           wgb(this.x+1, this.y+1, this.z+1) === BlockID.null_modifier &&
           wgb(this.x-1, this.y+1, this.z+1) === BlockID.null_modifier &&
           wgb(this.x+1, this.y+1, this.z-1) === BlockID.null_modifier)
{src.add(549);}
}});}