import { Meteor } from 'meteor/meteor';

import { TeamsA } from "../imports/api/datasets.js"
import { TeamsB } from "../imports/api/datasets.js"
import { Matches } from "../imports/api/datasets.js"
import { MatchesFinals } from "../imports/api/datasets.js"

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish("allTeamA", function(){
    return TeamsA.find({});
});

Meteor.publish("allTeamB", function(){
    return TeamsB.find({});
});

Meteor.publish("allMatches", function(){
    return Matches.find({});
});

Meteor.publish("allMatchesFinals", function(){
    return MatchesFinals.find({});
});