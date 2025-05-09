export const companyInfo = `

  introduction: "Je suis le PolyBot officiel de l'École Polytechnique de Sousse ! Posez-moi vos questions sur les formations, l’admission, la vie étudiante, les clubs, les accréditations, et bien plus !", 

  presentation_generale: {
    annee_creation: 2009,
    description: "École privée d’enseignement supérieur et de recherche, accréditée EUR-ACE. Elle forme des ingénieurs et architectes hautement qualifiés selon des standards internationaux.",
    localisation: "Route Ceinture Sahloul, Entrée Kalaa Sghira, 4021 Sousse, Tunisie",
    contacts: {
      email: "contact@polytecsousse.tn",
      phones: ["+216 73 277 877", "+216 99 277 877", "+216 96 277 877", "+216 92 277 807"],
      site: "https://www.polytecsousse.tn"
    },
    reseaux_sociaux: {
      facebook: "https://www.facebook.com/PolytechSousse",
      instagram: "https://www.instagram.com/polytecsousse/",
      linkedin: "https://www.linkedin.com/company/polytechsousse/"
    }
  },

  accreditations: {
    eur_ace: {
      organisme: "CTI (Commission des Titres d’Ingénieur), membre du réseau ENAEE",
      avantages: [
        "Reconnaissance internationale",
        "Mobilité académique et professionnelle"
      ]
    }
  },

  formations: {
    ecole_preparatoire: {
      presentation: "Formation généraliste sur 2 ans pour bacheliers scientifiques.",
      specialites: {
        MTIC: "Modélisation et Technologie de l’Information et des Communications",
        ICCS: "Ingénierie de Construction, des Composants et des Systèmes",
        IPCB: "Ingénierie des Procédés Chimiques et Biologiques"
      }
    },

    ecole_ingenieurs: {
      admission: "Admission Bac+2 ou Bac+3 selon spécialité",
      specialites: [
        "Génie Biotechnologique",
        "Génie Civil",
        "Génie Electromécanique",
        "Génie Electrique et Automatique",
        "Génie Mécanique",
        "Génie Mathématiques appliquées"
      ],
      poly_digital: {
        description: "Cycle ingénieur avec parcours spécialisés accrédités EUR ACE",
        parcours: {
          genie_logiciel: {
            titre: "Génie Logiciel",
            admission: "Bac+3 en IT ou préparatoire TIC",
            objectifs: "Concevoir des solutions logicielles innovantes",
            debouches: [
              "Développeur logiciel",
              "Ingénieur DevOps",
              "Architecte logiciel",
              "Chef de projet informatique"
            ]
          },
          data_science_ai: {
            titre: "Data Science & AI",
            admission: "Bac+3 en IT ou 2 ans de préparatoire",
            objectifs: "Former des experts en IA et science des données",
            debouches: [
              "Data Scientist",
              "Machine Learning Engineer",
              "Chief Data Officer"
            ]
          },
          business_intelligence: {
            titre: "Business Intelligence",
            admission: "Bac+3 IT ou préparatoire TIC",
            objectifs: "Exploiter les données pour la prise de décision",
            debouches: [
              "Consultant BI",
              "Architecte BI",
              "Ingénieur BI"
            ]
          },
          iot: {
            titre: "Internet of Things (IoT)",
            admission: "Bac+3 IT ou préparatoire TIC",
            objectifs: "Concevoir des systèmes embarqués connectés",
            debouches: [
              "Ingénieur IOT",
              "Chef de projet IOT",
              "Consultant R&D IOT"
            ]
          },
          cyber_securite: {
            titre: "Cyber Sécurité",
            admission: "Bac+3 IT ou préparatoire TIC",
            objectifs: "Sécuriser les systèmes d’information",
            debouches: [
              "Ingénieur en Cybersécurité",
              "Auditeur en sécurité",
              "Consultant cloud sécurisé"
            ]
          }
        }
      }
    },

    ecole_architecture: {
      presentation: "Agréée par l’État en 2014, durée 6 ans.",
      debouches: [
        "Architecte",
        "Architecte paysagiste",
        "Cadre dans le public",
        "Enseignant universitaire"
      ]
    },

    poly_digital_school: {
      admission: "Accessible aux bacheliers scientifiques",
      parcours: {
        preparatoire_tic: "Préparatoire TIC",
        licence_gl: {
          titre: "Licence Génie Logiciel et Systèmes d’Information",
          conditions: "Bac scientifique ou reconversion",
          debouches: [
            "Développeur",
            "Chef de projet",
            "Consultant SI"
          ]
        },
        licence_bi: {
          titre: "Licence Business Intelligence",
          conditions: "Bac scientifique ou reconversion",
          debouches: [
            "Analyste BI",
            "Consultant BI",
            "Responsable de l’information"
          ]
        }
      }
    },

    formation_certification: {
      centre_polyfc: {
        description: "Centre privé de certification (PolyFC)",
        certifications: [
          "Microsoft", "Cisco", "Android", "Oracle", "CISSP", "ISO", "ICDL",
          "Java", "UNIX", "Autodesk", "AWS", "Huawei", "TOEIC", "DELF", "PMI", "Fortinet"
        ]
      }
    }
  },

  incubateur_gfi: {
    description: "Accompagnement de projets étudiants et alumni",
    objectifs: [
      "Développer l’esprit entrepreneurial",
      "Accès au réseau de mentors et investisseurs"
    ],
    services: [
      "Espaces coworking",
      "Formations ciblées",
      "Suivi personnalisé"
    ]
  },

  laboratoires: {
    nombre: 46,
    description: "Laboratoires équipés pour la pratique dans toutes les spécialités"
  },

  international: {
    partenariats: [
      "Polytech Montpellier", "CY Tech", "UTT Troyes",
      "Université de Sherbrooke", "Oakland University", "Institut Élite Montréal"
    ],
    opportunites: [
      "Semestres d’échange",
      "Double diplomation",
      "Stages internationaux (AIESEC)"
    ]
  },

  vie_etudiante: {
    slogan: "Ingénieur oui, mais citoyen d’abord !",
    clubs: [
      "IEEE EPS", "Enactus", "PolyRobots", "Microsoft Club", "Club Poly Nations",
      "Croissant Rouge", "PolyBio", "Tunivisions", "ARSII", "Google Club EPS",
      "CRIPES", "Poly ESTIM Sport", "ATAST", "Hult Prize", "E-Sports",
      "Poly Auto", "ACM EPS", "PolySecurinets"
    ],
    projets_societaux: ["santé", "écologie", "éducation", "innovation"]
  }

`;
