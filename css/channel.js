fetch('https://json.daaverageminnisotan.com/data.json', {cache: "no-cache"})
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }
        return response.json();
    })
    .then(jsonData => {
        document.getElementById("channelicon").src = jsonData["Channel"]["snippet"]["thumbnails"]["high"]["url"];
        document.getElementById("channelname").innerText = jsonData["Channel"]["snippet"]["title"];
        document.getElementById("channeldescription").innerText = jsonData["Channel"]["snippet"]["description"];
        document.getElementById("subs").innerText = jsonData["Channel"]["statistics"]["subscriberCount"];
        document.getElementById("views").innerText = jsonData["Channel"]["statistics"]["viewCount"];
        document.getElementById("VideoURL").setAttribute("onclick", "window.open('https://youtube.com/watch?v=" + jsonData["Upload"]["resourceId"]["videoId"]+ "', '_blank');");
        document.getElementById("VideoThumbnail").src = jsonData["Upload"]["thumbnails"]["high"]["url"];
        document.getElementById("VideoTitle").innerText = jsonData["Upload"]["title"];
        document.getElementById("TrailerURL").setAttribute("onclick", "window.open('https://youtube.com/watch?v=" + jsonData["Channel"]['brandingSettings']['channel']['unsubscribedTrailer']+ "', '_blank');");
        document.getElementById("TrailerThumbnail").src = jsonData["Trailer"]["thumbnails"]["high"]["url"];
        document.getElementById("TrailerTitle").innerText = jsonData["Trailer"]["title"];
    })
    .catch(error => {
        console.error('There was an error getting the data json file:', error);
    })