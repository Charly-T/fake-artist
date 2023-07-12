import { useState } from "react";
import PlayerList from "../PlayerList/PlayerList";
import Round from "../Round/Round";
import "./Game.css";
import WordRounds from "./WordList";

const unusedWords = JSON.parse(JSON.stringify(WordRounds));
const usedWords = [];

const getRandomPlayerIndex = (players) => {
  return Math.floor(Math.random() * players.length);
};

const buildRound = (players, roundNumber) => {
  const XIndex = getRandomPlayerIndex(players);
  const randomRoundWordIndex = Math.floor(Math.random() * unusedWords.length);

  const randomRoundWord = unusedWords[randomRoundWordIndex];
  unusedWords.splice(randomRoundWordIndex, 1);
  usedWords.push(randomRoundWord);

  if (unusedWords.length === 0) {
    unusedWords.push(...usedWords);
    usedWords.splice(0, usedWords.length);
  }

  return {
    roundNumber,
    category: randomRoundWord.category,
    roundPlayers: players.map((player, index) => {
      return {
        player,
        word: index === XIndex ? "X" : randomRoundWord.word,
      };
    }),
  };
};

const savePlayers = (players) => {
  localStorage.setItem("players", JSON.stringify(players));
};

const loadPlayers = () => {
  const players = localStorage.getItem("players");
  return players ? JSON.parse(players) : [];
};

export default function Game() {
  const [game, setGame] = useState({
    players: loadPlayers(),
    gameState: "settingUp",
  });

  const [round, setRound] = useState(buildRound(game.players));

  const MIN_PLAYERS = 3;

  const addPlayer = (player) => {
    const newPlayers = [...game.players, player];
    setGame({ ...game, players: newPlayers });
  };

  const removePlayer = (name) => {
    const newPlayers = game.players.filter((player) => player.name !== name);
    setGame({ ...game, players: newPlayers });
  };

  const startGame = () => {
    savePlayers(game.players);
    setGame({ ...game, gameState: "playing" });
    setRound(buildRound(game.players, 1));
  };

  const getRound = () => round;

  const nextRound = () => {
    setRound(buildRound(game.players, round.roundNumber + 1));
  };

  return (
    <div className="Game">
      {game.gameState === "settingUp" && (
        <PlayerList
          players={game.players}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          startGame={startGame}
          minPlayers={MIN_PLAYERS}
        />
      )}
      {game.gameState === "playing" && (
        <Round round={getRound()} nextRound={nextRound} />
      )}
    </div>
  );
}
