import Tile from '../dynamics/Tile';
import DomSprite from '../display/sprites/DomSprite';
import SETTINGS from '../settings';

/**
  * The TileLayer is the layer object to create level from tiled
  *
  * @class
  * @memberof TILES2D
  * @author Fabio Toste
*/
export default class TileLayer
{
    /**
     * @param {object.JSON} data - The tile data object with the level tile infomation
     *
     */
    constructor(tileData = null)
    {
        this.tileList = [];

        if(tileData)
            this.create(tileData);
    }

    create(tileData)
    {
        for (var i = 0, len = tileData.tiles.length; i < len; i++)
        {
            let t = tileData.tiles[i];

            let color = t.friction==1 ? "#c2c2c2" : "#d2d2d2";
            color = t.friction==0.1 ? "#dedaff" : color;

            //think about other type of sprite
            let sprite = new DomSprite(t.x * SETTINGS.TILE_SIZE, t.y * SETTINGS.TILE_SIZE, SETTINGS.TILE_SIZE, SETTINGS.TILE_SIZE, color);

            let tile = new Tile(sprite);
            tile.friction = t.friction;
            tile.bounciness = t.bounciness;

            this.tileList[t.name] = tile;
        }
    }
}
