solar = function(id, itemid){
 BlockRenderer.addRenderCallback(BlockID[id], function(api, coords) {
            api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0, 0.1, (0.1 + 0.8), (0 + 0.1), (0.8 + 0.1), BlockID[id], 1);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.1, 0.3, (0.3 + 0.4), (0.1 + 0.1), (0.3 + 0.4), BlockID[id], 1);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.4, 0.2, 0.4, (0.4 + 0.2), (0.2 + 0.4), (0.4 + 0.2), BlockID.SP, 2);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.3, 0.3, (0.3 + 0.4), (0.3 + 0.1), (0.3 + 0.4), BlockID[id], 1);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.5, 0.3, (0.3 + 0.4), (0.5 + 0.1), (0.3 + 0.4), BlockID[id], 1);
            api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0.6, 0.1, (0.1 + 0.8), (0.6 + 0.1), (0.1 + 0.8), BlockID[id], 1);
            api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.7, 0, (0 + 1), (0.7 + 0.1), (0 + 1), BlockID[id], 0);    
            
        });

BlockRenderer.enableCustomRender(BlockID[id]);

Block.registerDropFunction(id, function(coords, blockID, blockData){
return [[BlockID[id], 1, 0]]
});
}



addSolarGenerator("SPL", "SPL");