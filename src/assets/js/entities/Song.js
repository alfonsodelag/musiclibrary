class Song {
    constructor(cover, songName, artistName, albumName, songPrice, releaseDate, songLength, musicalGenre, audioSamples, songLink){
        this.cover= cover;
        this.songName= songName;
        this.artistName= artistName;
        this.albumName= albumName;
        this.songPrice= songPrice;
        this.releaseDate= releaseDate;
        this.songLength= songLength;
        this.musicalGenre= musicalGenre;
        this.audioSamples= audioSamples;
        this.songLink= songLink;
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

