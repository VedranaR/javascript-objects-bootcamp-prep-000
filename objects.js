var playlist = {
  artistName: "title",
};

function updatePlaylist(playlist, artistName, title){
  playlist[artistName]=title;
  return playlist;
  //should add the song and artist as a key-value pair to the playlist object. The function should return the whole playlist.
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
  //delete the key-value pair from the playlist and return the updated playlist.
}