var urlField = "https://streamtp2.com/";
var dataField = "";
var outputField = "";

channels={
    "ESPN 1": "https://streamtp2.com/global1.php?stream=espn1",
    "ESPN 2": "https://streamtp2.com/global1.php?stream=espn2",
    "ESPN 3": "https://streamtp2.com/global1.php?stream=espn3",
    "ESPN 4": "https://streamtp2.com/global1.php?stream=espn4",
    "ESPN 5": "https://streamtp2.com/global1.php?stream=espn5",
    "ESPN 6": "https://streamtp2.com/global1.php?stream=espn6",
    "ESPN 7": "https://streamtp2.com/global1.php?stream=espn7",
    "Win Sports +": "https://streamtp2.com/global1.php?stream=winplus",
    "Win Sports + (Op2)": "https://streamtp2.com/global1.php?stream=winplus2",
    "Win Sports": "https://streamtp2.com/global1.php?stream=winsports",
    "Win Play +": "https://streamtp2.com/global1.php?stream=winplusonline1",
    "Fox Sports 1 (Argentina)": "https://streamtp2.com/global1.php?stream=fox1ar",
    "Fox Sports 2 (Argentina)": "https://streamtp2.com/global1.php?stream=fox2ar",
    "Fox Sports 3 (Argentina)": "https://streamtp2.com/global1.php?stream=fox3ar",
    "Dsports": "https://streamtp2.com/global1.php?stream=dsports",
    "Dsports 2": "https://streamtp2.com/global1.php?stream=dsports_2",
    "Dsports +": "https://streamtp2.com/global1.php?stream=dsports_plus",
    "TNT Sports Chile": "https://streamtp2.com/global1.php?stream=tnt_chile",
    "TNT Sports Argentina": "https://streamtp2.com/global1.php?stream=tntsports_argentina",
    "ESPN Premium Argentina": "https://streamtp2.com/global1.php?stream=espn_premium",
    "TyC Sports": "https://streamtp2.com/global1.php?stream=tyc_sports",
    "Telefe": "https://streamtp2.com/global1.php?stream=telefe",
    "TV Pública": "https://streamtp2.com/global1.php?stream=tv_publica",
    "Liga 1 MAX": "https://streamtp2.com/global1.php?stream=l1max",
    "GolTV": "https://streamtp2.com/global1.php?stream=goltv",
    "VTV +": "https://streamtp2.com/global1.php?stream=vtvplus",
    "GolPeru": "https://streamtp2.com/global1.php?stream=golperu",
    "ESPN Deportes USA": "https://streamtp2.com/global1.php?stream=espn_deportes",
    "TUDN USA": "https://streamtp2.com/global1.php?stream=tudn_usa",
    "Fox Sports 1 USA": "https://streamtp2.com/global1.php?stream=fox_1_usa",
    "Fox Sports 2 USA": "https://streamtp2.com/global1.php?stream=fox_2_usa",
    "Universo USA": "https://streamtp2.com/global1.php?stream=universo_usa",
    "Univisíon USA": "https://streamtp2.com/global1.php?stream=univision_usa",
    "Fox Deportes USA": "https://streamtp2.com/global1.php?stream=fox_deportes_usa",
    "Azteca Deportes MX": "https://streamtp2.com/global1.php?stream=azteca_deportes",
    "Fox Sports 1 MX": "https://streamtp2.com/global1.php?stream=foxsportsmx",
    "Fox Sports 2 MX": "https://streamtp2.com/global1.php?stream=foxsports2mx",
    "Fox Sports 3 MX": "https://streamtp2.com/global1.php?stream=foxsports3mx",
    "Fox Sports Premium": "https://streamtp2.com/global1.php?stream=foxsportspremium",
    "ESPN MX": "https://streamtp2.com/global1.php?stream=espnmx",
    "ESPN 2 MX": "https://streamtp2.com/global1.php?stream=espn2mx",
    "ESPN 3 MX": "https://streamtp2.com/global1.php?stream=espn3mx",
    "TVC Deportes MX": "https://streamtp2.com/global1.php?stream=tvc_deportes",
    "HI! Sports MX": "https://streamtp2.com/global1.php?stream=hisports",
    "DAZN 1 ES": "https://streamtp2.com/global1.php?stream=dazn1",
    "DAZN 2 ES": "https://streamtp2.com/global1.php?stream=dazn2",
    "DAZN 3 ES (Solo eventos)": "https://streamtp2.com/global1.php?stream=dazn3",
    "DAZN 4 ES (Solo eventos)": "https://streamtp2.com/global1.php?stream=dazn4",
    "DAZN LaLiga": "https://streamtp2.com/global1.php?stream=dazn_laliga",
    "Movistar+ LaLiga": "https://streamtp2.com/global1.php?stream=movistarlaliga",
    "Movistar Liga de Campeones": "https://streamtp2.com/global1.php?stream=movistarligadecampeones",
    "Movistar Liga de Campeones 2": "https://streamtp2.com/global1.php?stream=movistarligadecampeones2",
    "Movistar Liga de Campeones 3": "https://streamtp2.com/global1.php?stream=movistarligadecampeones3",
    "Caracol TV": "https://streamtp2.com/global1.php?stream=caracoltv",
    "RCN CO": "https://streamtp2.com/global1.php?stream=rcnco",
    "TNT 1 GB": "https://streamtp2.com/global1.php?stream=tnt_1_gb",
    "TNT 2 GB": "https://streamtp2.com/global1.php?stream=tnt_2_gb",
    "TNT 3 GB": "https://streamtp2.com/global1.php?stream=tnt_3_gb",
    "TNT 4 GB": "https://streamtp2.com/global1.php?stream=tnt_4_gb",
    "Sky Sports Bundesliga 1": "https://streamtp2.com/global1.php?stream=sky_bundesliga1",
    "Sky Sports Bundesliga 2": "https://streamtp2.com/global1.php?stream=sky_bundesliga2",
    "Sky Sports Bundesliga 3": "https://streamtp2.com/global1.php?stream=sky_bundesliga3",
    "Sky Sports Bundesliga 4": "https://streamtp2.com/global1.php?stream=sky_bundesliga4",
    "Sky Sports Bundesliga 5": "https://streamtp2.com/global1.php?stream=sky_bundesliga5",
    "DAZN 1 DE": "https://streamtp2.com/global1.php?stream=dazn1de",
    "DAZN 2 DE": "https://streamtp2.com/global1.php?stream=dazn2de",
    "Eleven Sports 1 PT": "https://streamtp2.com/global1.php?stream=eleven_sports_1_pt",
    "Eleven Sports 2 PT": "https://streamtp2.com/global1.php?stream=eleven_sports_2_pt",
    "Eleven Sports 3 PT": "https://streamtp2.com/global1.php?stream=eleven_sports_3_pt",
    "Eleven Sports 4 PT": "https://streamtp2.com/global1.php?stream=eleven_sports_4_pt",
    "Eleven Sports 5 PT": "https://streamtp2.com/global1.php?stream=eleven_sports_5_pt",
    "Canal 11 PT": "https://streamtp2.com/global1.php?stream=canal11_portugal",
    "Sport TV 1 PT": "https://streamtp2.com/global1.php?stream=sportv_1pt",
    "Sport TV 2 PT": "https://streamtp2.com/global1.php?stream=sportv_2pt",
    "Sport TV 3 PT": "https://streamtp2.com/global1.php?stream=sportv_3pt",
    "Sport TV 4 PT": "https://streamtp2.com/global1.php?stream=sportv_4pt",
    "Sport TV 5 PT": "https://streamtp2.com/global1.php?stream=sportv_5pt",
    "Sport TV 6 PT": "https://streamtp2.com/global1.php?stream=sportv_6pt",
    "Sport TV 1 BR": "https://streamtp2.com/global1.php?stream=sporttvbr1",
    "Sport TV 2 BR": "https://streamtp2.com/global1.php?stream=sporttvbr2",
    "Sport TV 3 BR": "https://streamtp2.com/global1.php?stream=sporttvbr3",
    "Premiere 1 BR": "https://streamtp2.com/global1.php?stream=premiere1",
    "Premiere 2 BR": "https://streamtp2.com/global1.php?stream=premiere2",
    "Premiere 3 BR": "https://streamtp2.com/global1.php?stream=premiere3",
    "Premier Sports 1 Irlanda": "https://streamtp2.com/global1.php?stream=premiersports1_irl",
    "Premier Sports 2 Irlanda": "https://streamtp2.com/global1.php?stream=premiersports2_irl"
}

var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
  }

  // Bind event
  (function() {
    
   doCORSRequest({
        method: this.id === 'post' ? 'POST' : 'GET',
        url: urlField,
        data: dataField
      }, function printResult(result) {
        outputField = result;
        console.log(result);
      });
    
  })();
  if (typeof console === 'object') {
    console.log('// To test a local CORS Anywhere server, set cors_api_url. For example:');
    console.log('cors_api_url = "http://localhost:8080/"');
  }



for (let key in channels) {
    if (channels.hasOwnProperty(key)) {
        value = channels[key];
        console.log(key, value);
    }


m=document.createElement("div");
m.id="mySidenav3"
m.className="sidenav"
// <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> ×</a>
a=document.createElement("a"); 
a.href="javascript:void(0)";
a.class="closebtn";
a.onclick=a.onclick=function(){closeNav(1)};
a.innerHTML="&times;"


    
    document.getElementById("player").after(m)
