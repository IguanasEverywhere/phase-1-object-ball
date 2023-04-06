function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },

    },

  }

}

console.log(gameObject());
function homeTeamName() {
  return gameObject()['home']['teamName'];
}
console.log(homeTeamName());

// NUMPOINTS SCORED
function numPointsScored(playerName) {
  let homePlayers = gameObject().home.players;
  let awayPlayers = gameObject().away.players;
  for (let key in homePlayers) {
    if (key === playerName) {
      return homePlayers[key].points;
    }
  }
  for (let key in awayPlayers) {
    if (key === playerName) {
      return awayPlayers[key].points;
    }
  }
  return 'Player not found';
}

console.log(numPointsScored('Reggie Evans'));

// SHOESIZE
function shoeSize(playerName) {
  let homePlayers = gameObject().home.players;
  let awayPlayers = gameObject().away.players;
  for (let key in homePlayers) {
    if (key === playerName) {
      return homePlayers[key].shoe;
    }
  }
  for (let key in awayPlayers) {
    if (key === playerName) {
      return awayPlayers[key].shoe;
    }
  }
  return 'Player not found';
}

console.log(shoeSize('Ben Gordon'));

// TEAM COLORS
function teamColors(teamName) {
  if (teamName === gameObject().home.teamName) {
    return gameObject().home.colors;
  } else if (teamName === gameObject().away.teamName) {
    return gameObject().away.colors;
  } else {
    return 'Team not found.';
  }
}

console.log(teamColors('Charlotte Hornets'));

// TEAMNAMES
function teamNames() {
  let teamNames = [];

  teamNames.push(gameObject().home.teamName);
  teamNames.push(gameObject().away.teamName);

  return teamNames;
}

console.log(teamNames());

// PLAYERNUMBERS
function playerNumbers(teamName) {
  let jerseyNumbers = [];

  if (gameObject().home.teamName === teamName) {
    let playerRoster = gameObject().home.players
    for (let player in playerRoster) {
      jerseyNumbers.push(playerRoster[player].number);
    }
  }
  if (gameObject().away.teamName === teamName) {
    let playerRoster = gameObject().away.players
    for (let player in playerRoster) {
      jerseyNumbers.push(playerRoster[player].number);
    }
  }

  return jerseyNumbers;
}

console.log(playerNumbers('Charlotte Hornets'));

// PLAYERSTATS
function playerStats(playerName) {
  let homeRoster = gameObject().home.players;
  let awayRoster = gameObject().away.players;

  for (player in homeRoster) {
    if (player === playerName) {
      return {
        ...homeRoster[player],
      }
    }
  }
  for (player in awayRoster) {
    if (player === playerName) {
      return {
        ...awayRoster[player],
      }
    }
  }

}

console.log(playerStats('Alan Anderson'));

// BIGSHOEREBOUNDS
function bigShoeRebounds() {
  let biggestShoeSize = 0;
  let playerWithBiggestShoe = null;

  let homeRoster = gameObject().home.players;
  let awayRoster = gameObject().away.players;

  for (let player in homeRoster) {
    if (homeRoster[player].shoe > biggestShoeSize) {
      biggestShoeSize = homeRoster[player].shoe;
      playerWithBiggestShoe = homeRoster[player];
    }
  }
  for (let player in awayRoster) {
    if (awayRoster[player].shoe > biggestShoeSize) {
      biggestShoeSize = awayRoster[player].shoe;
      playerWithBiggestShoe = awayRoster[player];
    }
  }

  return playerWithBiggestShoe.rebounds;

}

console.log(bigShoeRebounds());

// MOSTPOINTSSCORED
function mostPointsScored() {
  let mostPoints = 0;
  let highestScoringPlayer = null;

  let homeRoster = gameObject().home.players;
  let awayRoster = gameObject().away.players;

  for (let player in homeRoster) {
    if (homeRoster[player].points > mostPoints) {
      mostPoints = homeRoster[player].points;
      highestScoringPlayer = player;
    }
  }
  for (let player in awayRoster) {
    if (awayRoster[player].points > mostPoints) {
      mostPoints = awayRoster[player].points;
      highestScoringPlayer = player;
    }
  }

  return highestScoringPlayer;

}

console.log(mostPointsScored());

// WINNINGTEAM

function winningTeam() {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;

  let homeRoster = gameObject().home.players;
  let awayRoster = gameObject().away.players;

  for (let player in homeRoster) {
    homeTeamPoints += homeRoster[player].points;
  }
  for (let player in awayRoster) {
    awayTeamPoints += awayRoster[player].points;
  }

  return homeTeamPoints > awayTeamPoints ? gameObject().home.teamName : gameObject().away.teamName;
}

console.log(winningTeam());

// PLAYERWITHLONGESTNAME
function playerWithLongestName() {
  let longestName = '';

  let homeRoster = gameObject().home.players;
  let awayRoster = gameObject().away.players;

  for (let player in homeRoster) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  for (let player in awayRoster) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }

  return longestName;
}

console.log(playerWithLongestName());

// DOESLONGNAMESTEALATON

function doesLongNameStealATon() {
  let longNamePlayer = playerWithLongestName();
  let playerWithLongestNameSteals;

  let homeRoster = gameObject().home.players;
  let awayRoster = gameObject().away.players;

  for (let player in homeRoster) {
    if (player === longNamePlayer) {
      playerWithLongestNameSteals = homeRoster[player].steals;
    }
  }
  for (let player in awayRoster) {
    if (player === longNamePlayer) {
      playerWithLongestNameSteals = awayRoster[player].steals;
    }
  }

  for (let player in homeRoster) {
    if (homeRoster[player].steals > playerWithLongestNameSteals) {
      return false;
    }
  }
  for (let player in awayRoster) {
    if (awayRoster[player].steals > playerWithLongestNameSteals) {
      return false;
    }
  }

  return true;

}

console.log(doesLongNameStealATon());