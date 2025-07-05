//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://print.crackstreamslivehd.com/dsports/tracks-v1a1/mono.m3u8?ip=45.225.44.89&token=d860e3c18e69f55a20f4c22f143900b2cda6e1f1-d3-1751778134-1751724134";
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
