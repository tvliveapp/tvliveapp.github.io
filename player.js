//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://doc1.crackstreamslivehd.com/espn/tracks-v1a1/mono.m3u8?ip=45.225.44.89&token=e59c46e2ae6eddd4262de709b95287b2ff3308e4-78-1753709012-1753655012";
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
