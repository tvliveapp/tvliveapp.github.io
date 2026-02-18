//document.location="https://shawon9324.github.io/apps/keytester/"
    var player="";
    var playbackURL = "https://x4bnd7lq.fubohd.com/disney11/mono.m3u8?token=0bdc71319b59177117a31bfeeb45871f35c4e273-cb-1771397729-1771379729";
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
