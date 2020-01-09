function projectile () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 . . . 2 2 2 . . . 
. . . 2 2 3 2 2 . 2 2 3 2 2 . . 
. . . 2 3 3 3 2 2 2 3 3 3 2 . . 
. . . 2 3 3 3 3 2 3 3 3 3 2 . . 
. . . 2 3 3 3 3 3 3 3 3 3 2 . . 
. . . 2 2 3 3 3 3 3 3 3 2 2 . . 
. . . . 2 2 3 3 3 3 3 2 2 . . . 
. . . . . 2 2 3 3 3 2 2 . . . . 
. . . . . . 2 2 3 2 2 . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, player_awesome, 50, 0)
    projectile2.setPosition(0, Math.randomRange(0, 120))
}
function player () {
    player_awesome = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
3 1 1 1 1 1 1 1 1 1 1 1 3 . . . 
3 3 3 3 3 3 3 3 f f f f 3 3 . . 
3 3 3 3 3 3 3 f 4 4 4 4 f f f . 
3 1 1 1 1 1 f 2 . . . . . . . . 
3 1 1 1 1 1 f 2 . . . . . . . . 
3 3 3 3 3 3 3 f 4 4 4 4 f f f . 
3 3 3 3 3 3 3 3 f f f f 3 3 3 . 
3 1 1 1 1 1 1 1 1 1 1 1 1 3 . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . 
. . . . . 3 3 3 3 3 3 3 3 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    player_awesome.setPosition(78, 100)
    controller.moveSprite(player_awesome)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile2: Sprite = null
let player_awesome: Sprite = null
scene.cameraFollowSprite(player_awesome)
info.setScore(0)
player()
game.onUpdate(function () {
    projectile()
})
