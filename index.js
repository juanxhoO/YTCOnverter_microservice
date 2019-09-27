const express = require('express');
const app = express();
const port = 9008;
const youtubedl = require('youtube-dl');

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

//Audio Only Download
app.get('/audio_only', function (req, res) {
  var url = req.query.url_video;

  youtubedl.exec(url, ['-x', '--audio-format', 'mp3'], {}, function (err, output) {
    if (err) throw err
    console.log(output.join('\n'))
    res.send(200);
    res.download('./Calvin Harris, Rag\'n\'Bone Man - Giant (Official Video)-ir6nk2zrMG0.mp3')
  })

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));