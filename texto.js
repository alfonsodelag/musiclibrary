//musicTrack
rowResults.append(
    `<div class="col-3">
        <img src="${album.getCover()}"></img>
        <p>Song Name: ${todo.trackName}</p>
        <p>Artist Name: ${todo.artistName}</p>
        <p>Album Name: ${todo.collectionName}</p>
        <p>Country: ${todo.country}</p>
        <p>Price: ${todo.trackPrice}</p>
        <p>Release Date: ${todo.releaseDate}</p>
        <p>Song Length: ${todo.trackTimeMillis}</p>
        <p>Genre: ${todo.primaryGenreName}</p>
        <p>Audio Sample: ${todo.previewUrl}</p>
        <p>Itunes Song Link: ${todo.trackViewUrl}</p>
    </div>`)


//Album
rowResults.append(
    `<div class="col-3">
        <img src="${todo.artworkUrl100}"></img>
        <p>Album Name: ${todo.collectionName}</p>
        <p>Artist Name: ${todo.artistName}</p>
        <p>Album Price: ${todo.collectionPrice}</p>
        <p>Number of Songs: ${todo.trackCount}</p>
        <p>Release Date: ${todo.releaseDate}</p>
        <p>Musical Genre: ${todo.primaryGenreName}</p>
    </div>`)


//Music Video
rowResults.append(
    `<div class="col-3">
        <img src="${todo.artworkUrl100}"></img>
        <p>Song Name: ${todo.trackName}</p>
        <p>Artist Name: ${todo.artistName}</p>
        <p>Track Price: ${todo.trackPrice}</p>
        <p>Release Date: ${todo.releaseDate} </p>
        <p>Song Length: ${todo.trackTimeMillis}</p>
        <p>Genre: ${todo.primaryGenreName}</p>
        <p>Video Sample: ${todo.trackViewUrl}</p>
        <p>Itunes Video Link: ${todo.previewUrl}</p>
    </div>`)

//Music Artist
rowResults.append(
    `<div class="col-3">
        <p>Artist Name:${getArtistName}</p>
        <p>Genre: ${getMusicalGenre}</p>
        <p>Link: ${getArtistLink}</p>
    </div>`)