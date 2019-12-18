class Search{
    constructor(entity, term, country, explicit, limit){
        this.entity = entity;
        this.term= term;
        this.country= country;
        this.explicit= explicit;
        this.limit= limit;
    }
}

class song extends (artist, album) {
    constructor(cover, songName, artistName, albumName, songPrice, releaseDate, songLength, musicalGenre, audioSamples, songLink){
        super(artistName, albumName);
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
}

// class artist extends (song, album) {
//     constructor(firstName, musicalGenre, artistLink){
//         this.firstName= firstName;
//         this.musicalGenre= musicalGenre;
//         this.artistLink= artistLink;
//     }
// }


// class album extends (artist, song) {
//     constructor(cover, albumName, artistName, albumPrice, numberOfSongs, releaseDate, musicalGenre ){
//         this.cover= cover;
//         this.songName= songName;
//         this.artistName= artistName;
//         this.albumName= albumName;
//         this.songPrice= songPrice;
//         this.releaseDate= releaseDate;
//         this.songLength= songLength;
//         this.musicalGenre= musicalGenre;
//         this.audioSamples= audioSamples;
//         this.songLink= songLink;
//     }
// }

// class video extends (artist, song) {
//     constructor(cover, songName, artistName, songPrice, releaseDate, songLength, musicalGenre, videoSample, videoLink){
//         this.cover= cover;
//         this.songName= songName;
//         this.artistName= artistName;
//         this.albumName= albumName;
//         this.songPrice= songPrice;
//         this.releaseDate= releaseDate;
//         this.songLength= songLength;
//         this.musicalGenre= musicalGenre;
//         this.audioSamples= audioSamples;
//         this.songLink= songLink;
//     }
// }





