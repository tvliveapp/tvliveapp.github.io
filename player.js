//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://gzlet.envivotv.live/espn2/tracks-v1a1/mono.m3u8?remote=45.225.44.89&token=b9e94bf42401b11ecdca594d953b5dd3fbb8e130-fd458e331677ca88c4dfa6acfbb96e9a-1755655580-1755644780";
    var p2pConfig = {
        live: true,
        trackerZone: 'us',    
    }
    P2PEngineHls.tryRegisterServiceWorker(p2pConfig).then(() => {
        player = new Clappr.Player({
            source: playbackURL,
            parentId: "#player",
            poster: '',
            width: '100%',
            height: '100%',
            autoPlay: true,
            plugins: [],
        });
        p2pConfig.hlsjsInstance = player.core.getCurrentPlayback()?._hls;
        var engine = new P2PEngineHls(p2pConfig);
    });

  function play(streamUrl){
      player.load(streamUrl);
  }  

play(playbackURL);
