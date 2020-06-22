  class GerarScript{

    constructor(spriteDeSaidaX, spriteDeSaidaY, spriteFrameCount, spriteFrameLine){

        let a = [];
        
        for(let y = 0; y<(spriteFrameCount/spriteFrameLine);y++){
            for(let x = 0; x<spriteFrameLine; x++){  

                a.push([spriteDeSaidaX * (x == spriteFrameLine?0:x), 
                    spriteDeSaidaY * (y == spriteFrameCount/spriteFrameLine?0:y)]);

            }
        }
        this.SpriteArray = a;
        
    }
}