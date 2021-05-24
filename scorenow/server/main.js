import { Meteor } from 'meteor/meteor';

import { TeamsLuve } from "../imports/api/datasets.js"
import { MatchesLuve } from "../imports/api/datasets.js"
import { PlayersLuve } from "../imports/api/datasets.js"

if (Meteor.isServer) {
    Meteor.publish("allTeamsLuve", function(){
        return TeamsLuve.find({});
    });
    
    Meteor.publish("allMatchesLuve", function(){
        return MatchesLuve.find({});
    });
    
    Meteor.publish("allPlayersLuve", function() {
        return PlayersLuve.find({});
    });
}

Meteor.startup(() => {
  // code to run on server at startup
});