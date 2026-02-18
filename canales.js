const categorias = [
  {
    nombre: "TV en Vivo",
    canales: [
      // ===== LATINOAMERICA =====
      { nombre: "ESPN", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn", logo: "", live: true },
      { nombre: "ESPN 2", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn2", logo: "", live: true },
      { nombre: "ESPN 3", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn3", logo: "", live: true },
      { nombre: "ESPN 4", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn4", logo: "", live: true },
      { nombre: "ESPN 5", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn5", logo: "", live: true },
      { nombre: "ESPN 6", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn6", logo: "", live: true },
      { nombre: "ESPN 7", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "espn7", logo: "", live: true },
      { nombre: "DSports", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "dsports", logo: "", live: true },
      { nombre: "DSports 2", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "dsports2", logo: "", live: true },
      { nombre: "DSports Plus", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "dsportsplus", logo: "", live: true },
      { nombre: "GOLTV", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "goltv", logo: "", live: true },
      { nombre: "ECDF LigaPro (eventos)", pais: "LATINOAMERICA", programa: "Deportes en directo", video: BASE_URL + "ecdf_ligapro", logo: "", live: true },

      // ===== ARGENTINA =====
      { nombre: "Fox Sports", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "foxsports", logo: "", live: true },
      { nombre: "Fox Sports 2", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "foxsports2", logo: "", live: true },
      { nombre: "Fox Sports 3", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "foxsports3", logo: "", live: true },
      { nombre: "TNT Sports", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "tntsports", logo: "", live: true },
      { nombre: "ESPN Premium", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "espnpremium", logo: "", live: true },
      { nombre: "TyC Sports", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "tycsports", logo: "", live: true },
      { nombre: "TyC Sports Internacional (USA)", pais: "ARGENTINA", programa: "Deportes en directo", video: BASE_URL + "tycinternacional", logo: "", live: true },

      // ===== PERÚ =====
      { nombre: "Movistar Deportes", pais: "PERÚ", programa: "Deportes en directo", video: BASE_URL + "movistar", logo: "", live: true },

      // ===== COLOMBIA =====
      { nombre: "Win Sports Plus", pais: "COLOMBIA", programa: "Deportes en directo", video: BASE_URL + "winsportsplus", logo: "", live: true },
      { nombre: "Win Sports", pais: "COLOMBIA", programa: "Deportes en directo", video: BASE_URL + "winsports", logo: "", live: true },

      // ===== MÉXICO =====
      { nombre: "Fox Sports MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "foxsportsmx", logo: "", live: true },
      { nombre: "Fox Sports 2 MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "foxsports2mx", logo: "", live: true },
      { nombre: "Fox Sports 3 MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "foxsports3mx", logo: "", live: true },
      { nombre: "Fox Sports Premium", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "foxsportspremium", logo: "", live: true },
      { nombre: "ESPN MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "espnmx", logo: "", live: true },
      { nombre: "ESPN 2 MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "espn2mx", logo: "", live: true },
      { nombre: "ESPN 3 MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "espn3mx", logo: "", live: true },
      { nombre: "ESPN 4 MX", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "espn4mx", logo: "", live: true },
      { nombre: "Azteca 7", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "azteca7", logo: "", live: true },
      { nombre: "TVC Deportes", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "tvc_deportes", logo: "", live: true },
      { nombre: "Azteca Deportes", pais: "MÉXICO", programa: "Deportes en directo", video: BASE_URL + "azteca_deportes", logo: "", live: true },

      // ===== USA =====
      { nombre: "Fox Deportes", pais: "USA", programa: "Deportes en directo", video: BASE_URL + "foxdeportes", logo: "", live: true },
      { nombre: "ESPN Deportes", pais: "USA", programa: "Deportes en directo", video: BASE_URL + "espndeportes", logo: "", live: true },
      { nombre: "TUDN USA", pais: "USA", programa: "Deportes en directo", video: BASE_URL + "tudn", logo: "", live: true },
      { nombre: "BeIN Sports Xtra Español", pais: "USA", programa: "Deportes en directo", video: BASE_URL + "beinsport_xtra_espanol", logo: "", live: true },
      { nombre: "USAnetwork", pais: "USA", programa: "Deportes en directo", video: BASE_URL + "usanetwork", logo: "", live: true },

      // ===== BRASIL =====
      { nombre: "Premiere 1", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "premiere1", logo: "", live: true },
      { nombre: "Premiere 2", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "premiere2", logo: "", live: true },
      { nombre: "Premiere 3", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "premiere3", logo: "", live: true },
      { nombre: "Premiere 4", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "premiere4", logo: "", live: true },
      { nombre: "Premiere 5", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "premiere5", logo: "", live: true },
      { nombre: "Premiere 6", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "premiere6", logo: "", live: true },
      { nombre: "Sportv", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "sportv", logo: "", live: true },
      { nombre: "Sportv 2", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "sportv2", logo: "", live: true },
      { nombre: "Sportv 3", pais: "BRASIL", programa: "Deportes en directo", video: BASE_URL + "sportv3", logo: "", live: true }
    ]
  }
];
