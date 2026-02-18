const categorias = [
  {
    "nombre": "TV en Vivo",
    "canales": [
      // ARGENTINA
      { "nombre": "ESPN Premium", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espnpremium", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN Premium Argentina", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espnpremium", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 1 (Argentina)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox1ar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsports2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2 (Argentina)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox2ar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 3", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsports3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 3 (Argentina)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox3ar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Telefe", "pais": "ARGENTINA", "programa": "Variedades", "video": "https://la14hd.com/vivo/canales.php?stream=telefe", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Telefe (Alt)", "pais": "ARGENTINA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=telefe", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "TNT Sports", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=tntsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT Sports Argentina", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tntsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TV Pública", "pais": "ARGENTINA", "programa": "General", "video": "https://la14hd.com/vivo/canales.php?stream=tvpublica", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "TV Pública (Alt)", "pais": "ARGENTINA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=tv_publica", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "TyC Sports", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=tycsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TyC Sports Internacional", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tycinternacional", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TyC Sports Internacional (USA)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=tycinternacional", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // BRASIL
      { "nombre": "Premiere 1", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 1 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=premiere1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 2", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 2 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=premiere2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 3", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 3 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=premiere3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 4", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere4", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 5", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere5", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 6", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere6", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 7", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere7", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Premiere 8", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=premiere8", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Sportv", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sportv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sportv 2", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sportv2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sportv 3", "pais": "BRASIL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sportv3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sport TV 1 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=sporttvbr1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sport TV 2 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=sporttvbr2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sport TV 3 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=sporttvbr3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // CHILE
      { "nombre": "TNT Sports Chile", "pais": "CHILE", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=eventos13", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "TNT Sports Chile (Alt)", "pais": "CHILE", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tntsportschile", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // COLOMBIA
      { "nombre": "Win Play +", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winplusonline1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Sports", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=winsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Sports (Alt)", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Sports Plus", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=winsportsplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Sports +", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Sports plus (2)", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=winsports2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Win Sports + (Op2)", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winplus2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // COSTA RICA
      { "nombre": "FUTV (Eventos)", "pais": "COSTA RICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=futv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // ESPAÑA
      { "nombre": "DAZN 1", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "DAZN 2", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "DAZN 3 (eventos)", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "DAZN 4 (eventos)", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn4", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "DAZN LaLiga", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn_laliga", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "La 1 TVE", "pais": "ESPAÑA", "programa": "General", "video": "https://la14hd.com/vivo/canales.php?stream=la1tve", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "LaLiga Hypermotion", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=laligahypermotion", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "LaLigaTV BAR", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=laligatvbar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Liga de Campeones 1", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=ligadecampeones1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Liga de Campeones 2", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=ligadecampeones2", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Liga de Campeones 3", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=ligadecampeones3", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "M+ LaLiga TV", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=m_laligatv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // LATINOAMERICA
      { "nombre": "DSports", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Dsports", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=dsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "DSports 2", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dsports2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Dsports 2", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=dsports2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "DSports Plus", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dsportsplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Dsports +", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=dsportsplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ECDF LigaPro (eventos)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=ecdf_ligapro", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 1", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 4", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn4", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 4 (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn4", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 5", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn5", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 5 (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn5", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 6", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn6", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 6 (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn6", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 7", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn7", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 7 (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn7", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "GOLTV", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=goltv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "GolTV (Alt)", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=goltv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "VTV Plus", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=vtvplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "VTV +", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=vtvplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // MÉXICO
      { "nombre": "Azteca Deportes", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=azteca_deportes", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Azteca 7", "pais": "MÉXICO", "programa": "General", "video": "https://la14hd.com/vivo/canales.php?stream=azteca7", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true },
      { "nombre": "Azteca 7 MX", "pais": "MÉXICO", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=azteca7", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true },
      { "nombre": "Canal 5", "pais": "MÉXICO", "programa": "General", "video": "https://la14hd.com/vivo/canales.php?stream=canal5", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Canal 5 MX", "pais": "MÉXICO", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=canal5mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true },
      { "nombre": "ESPN MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espnmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN MX (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espnmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn2mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 MX (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn2mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn3mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 MX (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn3mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsportsmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 1 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsportsmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsports2mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2 MX (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsports2mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 3 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsports3mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 3 MX (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsports3mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports Premium", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsportspremium", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports Premium (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsportspremium", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox MX", "pais": "MÉXICO", "programa": "Entretenimiento", "video": "https://streamtp10.com/global1.php?stream=fox", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Fox ONE MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxone", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TUDN MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=tudn_mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "TUDN MX (Alt)", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tudnmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // MUNDO / OTROS
      { "nombre": "DAZN 1 DE", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn1_de", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "DAZN 2 DE", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=dazn2_de", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "ESPN 1 NL", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn1_nl", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 1 NL (Alt)", "pais": "MUNDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn_nl1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 NL", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn2_nl", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 NL (Alt)", "pais": "MUNDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn_nl2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 NL", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espn3_nl", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 NL (Alt)", "pais": "MUNDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn_nl3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sky Bundesliga 1", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Sky Bundesliga 2", "pais": "MUNDO", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sky_bundesliga2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // PARAGUAY
      { "nombre": "Tigo Sports Paraguay (Eventos)", "pais": "PARAGUAY", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tigosportsparaguay", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // PERÚ
      { "nombre": "GOLPERU", "pais": "PERÚ", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=golperu", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Liga1 MAX", "pais": "PERÚ", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=liga1max", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Liga 1 MAX (Alt)", "pais": "PERÚ", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=liga1max", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Movistar Deportes", "pais": "PERÚ", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=movistar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // PORTUGAL
      { "nombre": "Canal 11", "pais": "PORTUGAL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=canal11_pt", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Sport TV 1", "pais": "PORTUGAL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sporttv1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Sport TV 6", "pais": "PORTUGAL", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=sporttv6", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // REINO UNIDO
      { "nombre": "TNT 1 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_1_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT 2 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_2_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT 3 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_3_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT 4 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_4_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // USA
      { "nombre": "BeIN Sports Español", "pais": "USA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=beinsportes", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "CBS Sports Network", "pais": "USA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=cbs_sports_network", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "ESPN Deportes", "pais": "USA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=espndeportes", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN Deportes USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espndeportes", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Deportes", "pais": "USA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxdeportes", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Deportes USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox_deportes_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 1 USA", "pais": "USA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=foxsports1_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Fox Sports 1 USA (Alt)", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox_1_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Telemundo", "pais": "USA", "programa": "General", "video": "https://la14hd.com/vivo/canales.php?stream=telemundo", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "TUDN USA", "pais": "USA", "programa": "Deportes", "video": "https://la14hd.com/vivo/canales.php?stream=tudn", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TUDN USA (Alt)", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tudn_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Universo USA", "pais": "USA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=universo_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Univisíon USA", "pais": "USA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=univision_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "USA Network", "pais": "USA", "programa": "Entretenimiento", "video": "https://streamtp10.com/global1.php?stream=usa_network", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true }
    ]
  }
];
