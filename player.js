//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://cad99.pricesaskeloadsc.com/nba05/tracks-v1a1/mono.m3u8?token=3608b1764f462f72ab808ecabeb6cf1ea16a0989-18-1735558289-1735522289";
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
