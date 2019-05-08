const giphyAPI = "JXkpKRAmyWWfdABgWzYBU3qlPkzbVD2q"

var gif = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=" + giphyAPI + "&limit=1");
gif.done(function(data) { console.log("success got data", data); });

