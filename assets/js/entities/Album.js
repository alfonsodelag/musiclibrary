
class Album  {
    constructor(cover, albumName, artistName, albumPrice, songNumber, releaseDate, musicalGenre){
        this.cover= cover;
        this.albumName= albumName;
        this.artistName= artistName;
        this.albumPrice= albumPrice;
        this.songNumber= songNumber;
        this.releaseDate= releaseDate;
        this.musicalGenre= musicalGenre;
    }
    getCover(){
        return this.cover;
    }
    getSongName(){
        return this.getsongName;
    }
    getArtistName(){
        return this.artistName;
    }
    getAlbumName(){
        return this.albumName;
    }
    getSongPrice(){
        return this.songPrice;
    }
    getReleaseDate(){
        return this.releaseDate;
    }
    getSongLength(){
        return this.songLength;
    }
    getMusicalGenre(){
        return this.musicalGenre;
    }
    getAudioSamples(){
        return this.audioSamples;
    }
    getSongLink(){
        return this.songLink;
    }
}
