
    var player="";
    var playbackURL = "https://vadp.pricesaskeloadsc.com:443/global/espn1/index.m3u8?token=e75232e6873dc8b1eb475a728352c51e8e5c8b78-67-1735286139-1735250139";
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

