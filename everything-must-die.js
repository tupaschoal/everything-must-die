everythingMustDie = {};

// #3526: Make vandalism
var destroyAllFootpathItems = function() {
    for (var y = 0; y < map.size.y; y++) {
        for (var x = 0; x < map.size.x; x++) {
            var tile = map.getTile(x, y);

            for (var i = 0; i < tile.numElements; i++) {
                var element = tile.getElement(i);

                if (element.type === 'footpath') {
                    element.isAdditionBroken = true;
                }
            }
        }
    }
}

// Exact replication of the EXPLODE!!! cheat.
var explode = function() 
{
    for (var i = 0; i < map.numEntities; i++) 
    {
        var entity = map.getEntity(i);
        if (!entity)
        {
            continue;
        }
        
        var entityIsGuest = entity.type === 'peep' && entity.peepType === "guest";
        
        if (entityIsGuest && context.getRandom(0, 6) === 0) 
        {
            entity.setFlag("explode", true);
        }
    }
}

var main = function() {
    ui.registerMenuItem("Destroy path furniture", destroyAllFootpathItems);
    ui.registerMenuItem("Explode guests", explode);
};

registerPlugin({
    name: 'Everything must die',
    version: '0.1.0',
    authors: ['Gymnasiast'],
    licence: 'MIT',
    type: 'remote',
    main: main
});