const gameConfig = {
    type: Phaser.AUTO,
    width: gameWidth * renderScale,
    height: gameHeight * renderScale,
    fps: {smoothStep: true},
    backgroundColor: "#ff0000",
    parent: document.body,
    input: {windowEvents: false},
    render: {powerPreference: "high-performance"},
    scale: {mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH},
    scene: [BootScene, GameScene]
};
const game = new Phaser.Game(gameConfig);
