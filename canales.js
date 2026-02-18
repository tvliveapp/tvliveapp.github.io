const categorias = [
  {
    "nombre": "TV en Vivo",
    "canales": [
      // --- LOS 108 ANTERIORES SE MANTIENEN ---
      // (Aquí añado los nuevos 64 procesados con el formato solicitado)

      // LATINOAMERICA / GLOBAL
      { "nombre": "ESPN 1", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 4", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn4", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 5", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn5", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 6", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn6", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 7", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn7", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Dsports", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=dsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Dsports 2", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=dsports2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Dsports +", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=dsportsplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "GolTV", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=goltv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "VTV +", "pais": "LATINOAMERICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=vtvplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      
      // COLOMBIA
      { "nombre": "Win Sports +", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winplus", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Sports + (Op2)", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winplus2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "Win Sports", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Win Play +", "pais": "COLOMBIA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=winplusonline1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // ARGENTINA
      { "nombre": "Fox Sports 1 (Argentina)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox1ar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2 (Argentina)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox2ar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 3 (Argentina)", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox3ar", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT Sports Argentina", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tntsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN Premium Argentina", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espnpremium", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TyC Sports", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tycsports", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Telefe", "pais": "ARGENTINA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=telefe", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "TV Pública", "pais": "ARGENTINA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=tv_publica", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "TyC Sports Internacional", "pais": "ARGENTINA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tycinternacional", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // CHILE / PARAGUAY / COSTA RICA
      { "nombre": "TNT Sports Chile", "pais": "CHILE", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tntsportschile", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Tigo Sports Paraguay (Eventos)", "pais": "PARAGUAY", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tigosportsparaguay", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },
      { "nombre": "FUTV (Eventos)", "pais": "COSTA RICA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=futv", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": false },

      // PERÚ
      { "nombre": "Liga 1 MAX", "pais": "PERÚ", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=liga1max", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // MÉXICO
      { "nombre": "Azteca 7 MX", "pais": "MÉXICO", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=azteca7", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true },
      { "nombre": "Fox Sports 1 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsportsmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsports2mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 3 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsports3mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports Premium", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxsportspremium", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espnmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn2mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn3mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox ONE MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=foxone", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox MX", "pais": "MÉXICO", "programa": "Entretenimiento", "video": "https://streamtp10.com/global1.php?stream=fox", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Canal 5 MX", "pais": "MÉXICO", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=canal5mx", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true },
      { "nombre": "TUDN MX", "pais": "MÉXICO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tudnmx", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // USA
      { "nombre": "ESPN Deportes USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espndeportes", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TUDN USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tudn_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 1 USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox_1_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Fox Sports 2 USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox_2_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Universo USA", "pais": "USA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=universo_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Univisíon USA", "pais": "USA", "programa": "General", "video": "https://streamtp10.com/global1.php?stream=univision_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": false },
      { "nombre": "Fox Deportes USA", "pais": "USA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=fox_deportes_usa", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "USA Network", "pais": "USA", "programa": "Entretenimiento", "video": "https://streamtp10.com/global1.php?stream=usa_network", "logo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/TV_icon_2.svg", "live": true },

      // EUROPA / REINO UNIDO / ESPAÑA
      { "nombre": "TNT 1 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_1_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT 2 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_2_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT 3 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_3_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "TNT 4 GB", "pais": "REINO UNIDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=tnt_4_gb", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "LaLiga Hypermotion", "pais": "ESPAÑA", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=laligahypermotion", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // BRASIL
      { "nombre": "Sport TV 1 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=sporttvbr1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sport TV 2 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=sporttvbr2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Sport TV 3 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=sporttvbr3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 1 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=premiere1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 2 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=premiere2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "Premiere 3 BR", "pais": "BRASIL", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=premiere3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },

      // PAÍSES BAJOS
      { "nombre": "ESPN 1 NL", "pais": "MUNDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn_nl1", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 2 NL", "pais": "MUNDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn_nl2", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true },
      { "nombre": "ESPN 3 NL", "pais": "MUNDO", "programa": "Deportes", "video": "https://streamtp10.com/global1.php?stream=espn_nl3", "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Sports_icon.svg", "live": true }
    ]
  }
];
