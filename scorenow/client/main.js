import { Template } from 'meteor/templating';

import { TeamsLuve } from "../imports/api/datasets.js"
import { MatchesLuve } from '../imports/api/datasets.js';
import { PlayersLuve } from '../imports/api/datasets.js';


import './main.html';
//import '../imports/ui/matchFirstRound.html';
import '../imports/ui/matchTable.html';
import '../imports/ui/groupTable.html';
import '../imports/ui/lineTableClassification.html';
import '../imports/ui/lineTableGoals.html';
import '../imports/ui/lineTableCards.html';
import '../imports/ui/matchFirstRound.js';

Meteor.subscribe("allTeamsLuve");
Meteor.subscribe("allMatchesLuve");
Meteor.subscribe("allPlayersLuve");



Template.body.helpers({
  //JOGOS AO VIVO
  matchesLiveCCA(){//Retorna cada partida no banco de dados da collection 'matches' por meio da variável Maths
    return MatchesLuve.find({data: "05/22", centro: "CCA"},{ sort: { nJogo: 1 } });//AQUI DEVE-SE MUDAR A DATA PARA PEGAR AS PARTIDAS DO DIA
  },
   matchesLiveCCB(){//Retorna cada partida no banco de dados da collection 'matches' por meio da variável Maths
    return MatchesLuve.find({data: "05/22", centro: "CCB"},{ sort: { nJogo: 1 } });//AQUI DEVE-SE MUDAR A DATA PARA PEGAR AS PARTIDAS DO DIA
  },
  matchesLiveCCE(){//Retorna cada partida no banco de dados da collection 'matches' por meio da variável Maths
    return MatchesLuve.find({data: "05/22", centro: "CCE"},{ sort: { nJogo: 1 } });//AQUI DEVE-SE MUDAR A DATA PARA PEGAR AS PARTIDAS DO DIA
  },
  matchesLiveCCH(){//Retorna cada partida no banco de dados da collection 'matches' por meio da variável Maths
    return MatchesLuve.find({data: "05/22", centro: "CCH"},{ sort: { nJogo: 1 } });//AQUI DEVE-SE MUDAR A DATA PARA PEGAR AS PARTIDAS DO DIA
  },//JOGOS AO VIVO END
  //TABELAS
  matchesInTableCCARodada1(){//CCA
    return MatchesLuve.find({rodada: 1,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCARodada2(){
    return MatchesLuve.find({rodada: 2,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCARodada3(){
    return MatchesLuve.find({rodada: 3,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCARodada4(){
    return MatchesLuve.find({rodada: 4,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCARodada5(){
    return MatchesLuve.find({rodada: 5,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCARodada6(){
    return MatchesLuve.find({rodada: 6,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCARodada7(){
    return MatchesLuve.find({rodada: 7,centro: "CCA"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada1(){//CCB
    return MatchesLuve.find({rodada: 1,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada2(){
    return MatchesLuve.find({rodada: 2,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada3(){
    return MatchesLuve.find({rodada: 3,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada4(){
    return MatchesLuve.find({rodada: 4,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada5(){
    return MatchesLuve.find({rodada: 5,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada6(){
    return MatchesLuve.find({rodada: 6,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCBRodada7(){
    return MatchesLuve.find({rodada: 7,centro: "CCB"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada1(){//CCE
    return MatchesLuve.find({rodada: 1,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada2(){
    return MatchesLuve.find({rodada: 2,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada3(){
    return MatchesLuve.find({rodada: 3,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada4(){
    return MatchesLuve.find({rodada: 4,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada5(){
    return MatchesLuve.find({rodada: 5,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada6(){
    return MatchesLuve.find({rodada: 6,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCERodada7(){
    return MatchesLuve.find({rodada: 7,centro: "CCE"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada1(){//CCH
    return MatchesLuve.find({rodada: 1,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada2(){
    return MatchesLuve.find({rodada: 2,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada3(){
    return MatchesLuve.find({rodada: 3,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada4(){
    return MatchesLuve.find({rodada: 4,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada5(){
    return MatchesLuve.find({rodada: 5,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada6(){
    return MatchesLuve.find({rodada: 6,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  matchesInTableCCHRodada7(){
    return MatchesLuve.find({rodada: 7,centro: "CCH"},{ sort: { nJogo: 1 } });//conseguir ordenar por horário de jogo
  },
  //TABELAS
  /*
  teams(){
    var allTeams = Teams.find({},{ sort: { grupo: 1 , posicao: 1} });
    //console.log(allTeams);
    return allTeams;
      //return Teams.find({grupo:"A"},{ sort: { grupo: 1 } }); //conseguir ordenar todos os critérios em sequência
  },*/
  teamsCCAchaveA(){//CCA
    return TeamsLuve.find({centro: "CCA", grupo: "A"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCAchaveB(){
    return TeamsLuve.find({centro: "CCA", grupo: "B"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCAchaveC(){
    return TeamsLuve.find({centro: "CCA", grupo: "C"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCBchaveA(){//CCB
    return TeamsLuve.find({centro: "CCB", grupo: "A"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCEchaveA(){//CCE
    return TeamsLuve.find({centro: "CCE", grupo: "A"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCEchaveB(){
    return TeamsLuve.find({centro: "CCE", grupo: "B"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCEchaveC(){
    return TeamsLuve.find({centro: "CCE", grupo: "C"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCEchaveD(){
    return TeamsLuve.find({centro: "CCE", grupo: "D"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCHchaveA(){//CCH
    return TeamsLuve.find({centro: "CCH", grupo: "A"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCHchaveB(){
    return TeamsLuve.find({centro: "CCH", grupo: "B"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  teamsCCHchaveC(){
    return TeamsLuve.find({centro: "CCH", grupo: "C"},{ sort: { pontosG: -1, saldoG: -1, golsM: -1, golsC: 1, cartoesA: 1, cartoesV: 1 } });
  },
  //Artilharia e cartões
  playersCCAgoals(){//CCA
    return PlayersLuve.find({centro: "CCA"},{sort: {totalGoals: -1}});//tirar ordenamento por equipe
  },
  playersCCAcards(){
    return PlayersLuve.find({centro: "CCA"},{sort: {equipe: -1,yCardsFirstRound: -1, rCardsFirstRound: -1 }});//tirar ordenamento por equipe
  },
  playersCCBgoals(){//CCB
    return PlayersLuve.find({centro: "CCB"},{sort: {totalGoals: -1}});
  },
  playersCCBcards(){
    return PlayersLuve.find({centro: "CCB"},{sort: {equipe: -1,yCardsFirstRound: -1, rCardsFirstRound: -1 }});
  },
  playersCCEgoals(){//CCE
    return PlayersLuve.find({centro: "CCE"},{sort: {totalGoals: -1}});
  },
  playersCCEcards(){
    return PlayersLuve.find({centro: "CCE"},{sort: {equipe: -1, yCardsFirstRound: -1, rCardsFirstRound: -1 }});//tirar ordenamento por equipe
  },
  playersCCHgoals(){//CCH
    return PlayersLuve.find({centro: "CCH"},{sort: {totalGoals: -1}});
  },
  playersCCHcards(){
    return PlayersLuve.find({centro: "CCH"},{sort: {equipe: -1,yCardsFirstRound: -1, rCardsFirstRound: -1 }});
  },
});


//Template.body.events({
//});

//$('#someTab').tab('show')

//$('#home a').click(function (e) {
//  e.preventDefault()
//  $(this).tab('show')
//})