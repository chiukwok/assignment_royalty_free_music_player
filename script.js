
// Create song constructor:
// - Status: Play/Pause/Stop
// - Song Title
// - Song artists
// - Song index
// Do I need to 'store' a music list?

// Actions
// - If song status is play,
// 	copy song title
// 	copy song artists
// 	copy song status
// - Click sequence from play to pause to Stop
// - Next or Previous song will move with song index (array style?)
// 	clicking next will change song status to stop and play for the next one

class song {

	constructor(){ //incl artist and title?
		this.$title = $("<div>").addClass(".list-title").html(); // need something in the html...
		this.artist = ;
		this.index = []; //???
		this.songStatus = ; // to default to stop?
	}

}

class musicPlayer {

	songStatus() {
		//default to stop - show play icon
		//if play - show play icon
			//if .click on play status => update status to pause
			//show pause icon
	}

	//instance of song

}

// within musicPlayer construct we'll have
// var song = new Song kinda thing going on

$(document).ready(function(){

list of songs here
maybe like add song or just through constructor

});


// A list of songs with their names, artists, and sound URLs (the URLs will not be displayed, but are necessary for audio playback).
// The user can start playing a track.
// When the track is playing, one should actually be able to hear the track.
// The currently playing track should somehow indicate that it is indeed the currently playing track.
// Once a track is selected, it should appear in the status bar.
// The track should remain in the status bar when it is paused.
// The user can pause the currently playing track.
// When the track is paused, one should not be able to hear the track—with the exception of auditory hallucinations caused by particularly catchy songs (though this is highly unlikely due to our reliance upon RFM).
// The user can press the next and previous track buttons, and when they do this, the respective track should become the active track.
// Any play/pause buttons should visually toggle between their play and pause states, depending upon the current state of the music player.