//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://cale.pricesaskeloadsc.com/eventos7/tracks-v1a1/mono.m3u8?token=811209c227c99f0c5b268d2b7b393e2e2072cb66-7c-1735553997-1735517997";
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
