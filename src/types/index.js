/**
 * @typedef Player
 * @property {string} name
 * @property {string} color
 *
 * @typedef RoundPlayer
 * @property {Player} player
 * @property {string} word
 *
 * @typedef Round
 * @property {number} roundNumber
 * @property {string} category
 * @property {RoundPlayer[]} roundPlayers

 * @typedef {'settingUp' | 'playing'} GameState
 *
 * @typedef Game
 * @property {Player[]} players - List of players
 * @property {GameState} gameState - Current game state
 *
 * @typedef {Object} GameContext
 * @property {Game} game - Current game state
 * @property {(player: Player) => void} addPlayer - Add a player to the game
 * @property {() => void} startGame - Start the game
 * @property {() => Round} getRound - Get the current round
 * @property {() => void} nextRound - Set the current round
 *
 * @typedef {Object} WordRound
 * @property {string} word
 * @property {string} category
 */
