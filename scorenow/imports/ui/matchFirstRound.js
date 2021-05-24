//import {ReactiveCountdown} from 

import './matchFirstRound.html'

var countdown = new ReactiveCountdown(30);

countdown.start(function() {
	
	// do something when this is completed

});

Template.matchFirstRound.helpers({
	getCountdown() {
		return countdown.get();
	},
   
	

});

