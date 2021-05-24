import { Mongo } from 'meteor/mongo';
 
export const TeamsA = new Mongo.Collection('teamsA');
export const TeamsB = new Mongo.Collection('teamsB');
export const Matches = new Mongo.Collection('matches');
export const MatchesFinals = new Mongo.Collection('matchesFinals');