
class Video {
    constructor(cover, songName, artistName, albumName, songPrice, releaseDate, songLength, musicalGenre, videoSample, videoLink){
        this.cover= cover;
        this.songName= songName;
        this.artistName= artistName;
        this.albumName= albumName;
        this.songPrice= songPrice;
        this.releaseDate= releaseDate;
        this.songLength= songLength;
        this.musicalGenre= musicalGenre;
        this.videoSample= videoSample;
        this.videoLink= videoLink;
    }
    getCover(){
        return this.cover;
    }
    getSongName(){
        return this.songName;
    }
    getArtistName(){
        return this.artistName;
    }
    getAlbumPrice(){
        return this.albumName;
    }
    getSongPrice(){
        return this.songPrice;
    }
    getreleaseDate(){
        return this.releaseDate;
    }
    getSongLength(){
        return this.songLength;
    }
    getmusicalGenre(){
        return this.musicalGenre;
    }
    getAudioSamples(){
        return this.audioSamples;
    }
    getsongLink(){
        return this.songLink;
    }
}