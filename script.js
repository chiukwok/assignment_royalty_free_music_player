
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


// TO-DO
// find a way to edit/create song title and artist on the function
// register event when buttons are being clicked (i.e clicked! + register artist name and song title)

// $(".songIcon", newSong)  ->  returns ALL elements of class "songIcon" which are CHILDREN to the "newSong" element.


function createSongTemplate( artist, songTitle ) {
	var songTemplate = $("#song-list-template").clone();
	songTemplate.show();
	$(".panel-body").append(songTemplate);
	$(".list-title:last").append(songTitle);
	$(".list-artist:last").append(artist);

	$( ".col-md-1", songTemplate ).click(function() {

		var clickSong = $(".list-title", $(this).next()).text();
		var clickArtist = $(".list-artist", $(this).next()).text();

	 	//updates controller details
	 	var controllerTemplate = $("#controller-template").clone();
	 	$(".control-title").text(clickSong);
	 	$(".control-artist").text(clickArtist);
	 	$(".glyphicon-play:last").addClass("glyphicon-pause").removeClass("glyphicon-play")

	 	//this changes the song list icon
	 	$( ".glyphicon-play", songTemplate ).addClass("glyphicon-pause").removeClass("glyphicon-play")

	});
}

class musicPlayer {

	constructor(){
		this.songList = [];
		this.currentSongIndex = -1;//if between 0 and songlist.length, then song is being played, otherwise nothing is being selected
		// in reference to the footer
		// using sentinel value to know that 
		this.isCurrentSongPlaying = false; //convention to start boolean questions with 'is'
	}

	addSong(artistName, songName, songURL){
		let newSong = new song(artistName, songName, songURL);
		this.songList.push(newSong);
		let songIndex = this.songList.push(newSong) - 1; // here .push(newSong) acts like .length
		this.updateView(songIndex);
	}

	updateView(songIndex){
		var song = this.songList[songIndex];
		var songName = song.title;
		var artistName = song.artist;

		var songTemplate = $("#song-list-template").clone();
		
		songTemplate.show();
		$(".panel-body").append(songTemplate);
		$(".list-title:last").append(songName);
		$(".list-artist:last").append(artistName);

		// another option would be to remove all songs (with .remove) and loop through songList array to add back all the songs

	} 

}


class song {

	constructor(artistName, songName, songURL){
		this.title = songName;
		this.artist = artistName;
		this.url = songURL;
	}

}


$(document).ready(function(){

	let mpInstance = new musicPlayer;

	mpInstance.addSong("artist", "song", "url");
	mpInstance.addSong("artist1", "song1", "url1");


});


//HELPFUL LINKS//

// https://stackoverflow.com/questions/25385598/how-to-add-one-specific-html-block-with-jquery
// https://www.joezimjs.com/javascript/javascript-templating-adding-html-the-right-way/


//INSTRUCTIONS//

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