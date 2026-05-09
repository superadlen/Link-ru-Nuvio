const BASE_URL = "https://m.playimdb.com";

async function getSources(id) {
    const imdbId = id.imdb || id;
    const videoUrl = `${BASE_URL}/title/${imdbId}/`;

    return [{
        name: "Link-ru (Server)",
        url: videoUrl,
        type: "embed"
    }];
}
