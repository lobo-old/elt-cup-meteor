import { Template } from 'meteor/templating';

import { Matches } from '../imports/api/datasets.js';
import { MatchesFinals } from '../imports/api/datasets.js';
import { TeamsA } from '../imports/api/datasets.js';
import { TeamsB } from '../imports/api/datasets.js';

import './main.html';

Meteor.subscribe("allTeamA");
Meteor.subscribe("allTeamB");
Meteor.subscribe("allMatches");
Meteor.subscribe("allMatchesFinals");

Template.body.helpers({
  matches(){//Retorna cada partida no banco de dados da collection 'matches' por meio da variável Maths
    return Matches.find({},{ sort: { createdAt: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesFinals(){//Retorna cada partida no banco de dados da collection 'matches' por meio da variável Maths
    return MatchesFinals.find({},{ sort: { _id: -1 } });//conseguir ordenar por horário de jogo
  },
  teamsA(){//Retorna cada partida no banco de dados da collection 'teams' por meio da variável Teams
    return TeamsA.find({},{ sort: { posicao: 1 } });//conseguir ordenar todos os critérios em sequência
  },
  teamsB(){//Retorna cada partida no banco de dados da collection 'teams' por meio da variável Teams
    return TeamsB.find({},{ sort: { posicao: 1 } });//conseguir ordenar todos os critérios em sequência
  },
});