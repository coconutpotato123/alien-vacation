
//spawn ship
let ship = sprites.create(img`
    ........feebbbef........
    ........f24bdb2e........
    .......ce2222222e.......
    ......cbc22bb22e6cf.....
    ......b962e99e2b6dc.....
    ......c6b2e69e2e6bf.....
    ...cccee222ab222eeeccc..
    .fbbbddddb4eeebbbbbbbbcf
    febbddbcdddbbdddbcbbbbbf
    fe2bddcbdddcbddddccbb42f
    .f24bddddddbbdddbbbb42f.
    ..ff24bddddddddbbbb22f..
    ....fee244bbbb4444ee....
    .....fbbe2222e22ebbf....
    ......ffffbbbbfffff.....
    ..........fffff.........
`, SpriteKind.Player)

//set position
ship.setPosition(20, 60)

//move ship
controller.moveSprite(ship, 0, 100)

//stay in screen
ship.setStayInScreen(true)

//set score to 0
info.setScore(0)
//create rocks
game.onUpdateInterval(1000, function() {
    //spawn rock
    let rock = sprites.create(img`
    . . . . . c c b b b . . . . . .
    . . . . c b d d d d b . . . . .
    . . . . c d d d d d d b b . . .
    . . . . c d d d d d d d d b . .
    . . . c b b d d d d d d d b . .
    . . . c b b d d d d d d d b . .
    . c c c c b b b b d d d b b b .
    . c d d b c b b b b b b b b d b
    c b b d d d b b b b b d d b d b
    c c b b d d d d d d d b b b d c
    c b c c c b b b b b b b d d c c
    c c b b c c c c b d d d b c c b
    . c c c c c c c c c c c b b b b
    . . c c c c c b b b b b b b c .
    . . . . . . c c b b b b c c . .
    . . . . . . . . c c c c . . . .
`, SpriteKind.Enemy)
    //set position
    rock.setPosition(160, randint(0, 120))
    //variable score
   let score = info.score()
    //rock moves off screen and gets destroyed
    rock.setFlag(SpriteFlag.AutoDestroy, true)
    //speed up rocks
    if (score <= 5) {
        rock.setVelocity(-40, 0)
    
    
    } else {
rock.vx=-100
    }
})

//add score when rock moves off screen 
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
info.changeScoreBy(1)

})