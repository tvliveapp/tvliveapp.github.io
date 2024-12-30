//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://24a.pricesaskeloadsc.com:443/global/nba06/index.m3u8?token=8d539af8f48c0a9839a52861065f1ad8166efd81-ee-1735558498-1735522498";
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
