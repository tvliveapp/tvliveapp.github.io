//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://tyg2mnl9.fubohd.com/espn2/mono.m3u8?token=87bed6eaf0084f5791a74c933789dab87947f649-f0-1771392487-1771374487";
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
