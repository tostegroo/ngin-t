import DisplayObject from '../DisplayObject';

/**
  * The Sprite to use with html div elements in dom TILES2D
  *
  * @class
  * @memberof TILES2D
  * @author Fabio Toste
*/
export default class DomSprite extends DisplayObject
{
    /**
     *
     * @param [x=0] x - The x position of the sprite
     * @param [y=0] y - The y position of the sprite
     * @param [width=10] width - The width of the sprite
     * @param [height=10] height - The height of the sprite
     * @param [color='#000'] color - The color of the sprite
     *
     */
    constructor(x = 0 , y = 0, width = 10, height = 10, color = '#000')
    {
        super();

        this.domElement = document.createElement("DIV");
        this.domElement.style.position = 'Absolute';

        let transformOrigin = '50% 50%';
        this.domElement.style.webkitTransformOrigin = transformOrigin;
        this.domElement.style.MozTransformOrigin = transformOrigin;
        this.domElement.style.msTransformOrigin = transformOrigin;
        this.domElement.style.OTransformOrigin = transformOrigin;
        this.domElement.style.transformOrigin = transformOrigin;

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;
        this.color = color;
        this._initialColor = color;
        this.alpha = 1;

        if(window._tiles2dcontainer)
            window._tiles2dcontainer.appendChild(this.domElement);
    }

    addChild(domElement)
    {
        this.domElement.appendChild(domElement);
    }

    set x(value)
    {
        super.x = value;

        let transform = 'translate3d('+value+'px, '+super.y+'px, 0px)';
        if(this.domElement)
        {
            this.domElement.style.webkitTransformOrigin = transform;
            this.domElement.style.MozTransform = transform;
            this.domElement.style.msTransform = transform;
            this.domElement.style.OTransform = transform;
            this.domElement.style.transform = transform;
        }
    }

    get x()
    {
        return super.x;
    }

    set y(value)
    {
        super.y = value;

        let transform = 'translate3d('+super.x+'px, '+value+'px, 0px)';
        if(this.domElement)
        {
            this.domElement.style.webkitTransform = transform;
            this.domElement.style.MozTransform = transform;
            this.domElement.style.msTransform = transform;
            this.domElement.style.OTransform = transform;
            this.domElement.style.transform = transform;
        }
    }

    get y()
    {
        return super.y;
    }

    set width(value)
    {
        super.width = value;

        if(this.domElement)
            this.domElement.style.width = value + 'px';
    }

    get width()
    {
        return super.width;
    }

    set height(value)
    {
        super.height = value;

        if(this.domElement)
            this.domElement.style.height = value + 'px';
    }

    get height()
    {
        return super.height;
    }

    set color(value)
    {
        super.color = value;

        if(this.domElement)
            this.domElement.style.backgroundColor = value;
    }

    get color()
    {
        return super.color;
    }

    set alpha(value)
    {
        super.alpha = value;

        if(this.domElement)
        {
            this.domElement.style.opacity = value;
            this.domElement.style['-ms-filter'] = 'progid:DXImageTransform.Microsoft.Alpha(Opacity='+(value*100)+')';
	        this.domElement.style.filter = 'alpha(opacity='+(value*100)+')';
	        this.domElement.style['-moz-opacity'] = value;
	        this.domElement.style['-khtml-opacity'] = value;
        }
    }

    get alpha()
    {
        return super.alpha;
    }

    draw(deltatime = 0)
    {

    }
}
