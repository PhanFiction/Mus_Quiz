const songs = {
  "quiz_1": [
    {
      "id": 1,
      "title": "Blue Suede Shoes",
      "artist": "Carl Perkins",
      "link": "https://www.youtube.com/watch?v=mvsYRAc-BWA&ab_channel=CarlPerkins-Topic",
    },
    {
      "id": 2,
      "title": "Folsom Prison Blues",
      "artist": "Johnny Cash",
      "link": "https://www.youtube.com/watch?v=AeZRYhLDLeU&ab_channel=JohnnyCashVEVO",
    },
    {
      "id": 3,
      "title": "Rock Around the Clock",
      "artist": "Bill Haley and The Comets",
      "link": "https://www.youtube.com/watch?v=ZgdufzXvjqw&ab_channel=33Evenstar",
    },
    {
      "id": 4,
      "title": "That's All Right",
      "artist": "Elvis Presley",
      "link": "https://www.youtube.com/watch?v=k-5p5djJAZg&ab_channel=ElvisPresleyVEVO",
    },
    {
      "id": 5,
      "title": "Heartbreak Hotel",
      "artist": "Elvis Presley",
      "link": "https://www.youtube.com/watch?v=e9BLw4W5KU8&ab_channel=ElvisPresleyVEVO",
    },
    {
      "id": 6,
      "title": "Hound Dog",
      "artist": "Elvis Presley",
      "link": "https://www.youtube.com/watch?v=-eHJ12Vhpyc&ab_channel=ElvisPresleyVEVO",
    },
    {
      "id": 7,
      "title": "Hound Dog",
      "artist": "Big Mama Thornton",
      "link": "https://www.youtube.com/watch?v=yoHDrzw-RPg&ab_channel=warholsoup100",
    },
    {
      "id": 8,
      "title": "Whole Lotta Shakin’ Goin’ On",
      "artist": "Jerry Lee Lewis",
      "link": "https://www.youtube.com/watch?app=desktop&v=GN8VV8CHnrk&ab_channel=JerryLeeLewis-Topic",
    },
    {
      "id": 9,
      "title": "Great Balls of Fire",
      "artist": "Jerry Lee Lewis",
      "link": "https://www.youtube.com/watch?v=F569_t2jCio&ab_channel=ClassicHitsStudio",
    },
    {
      "id": 10,
      "title": "Only the Lonely",
      "artist": "Roy Orbison",
      "link": "https://www.youtube.com/watch?v=D6Aw3ZnqQrY&ab_channel=RoyOrbisonVEVO",
    },
    {
      "id": 11,
      "title": "Be-Bop-A-Lula",
      "artist": "Gene Vincent & His Blue Caps",
      "link": "https://www.youtube.com/watch?v=vDU9FP5_B2M&ab_channel=BienManger",
    },
    {
      "id": 12,
      "title": "Wallflower",
      "artist": "Etta James",
      "link": "https://www.youtube.com/watch?v=pejfmfRWBWs&ab_channel=EttaJames-Topic",
    },
    {
      "id": 13,
      "title": "Ain't That a Shame",
      "artist": "Fats Domino",
      "link": "https://www.youtube.com/watch?v=2FDYyf8Kqrs&ab_channel=ClassicHitsStudio",
    },
    {
      "id": 14,
      "title": "Tutti Frutti",
      "artist": "Pat Boone",
      "link": "https://www.youtube.com/watch?v=ZFxTvffJqOg&ab_channel=monpetitciel",
    },
    {
      "id": 15,
      "title": "Tutti Frutti",
      "artist": "Little Richard",
      "link": "https://www.youtube.com/watch?v=F13JNjpNW6c&ab_channel=Darwinner",
    },
    {
      "id": 16,
      "title": "Rocket 88",
      "artist": "Jackie Brenston and His Delta Cats",
      "link": "https://www.youtube.com/watch?v=WcFIj8OuIEI&ab_channel=BrooklynJoe",
    },
    {
      "id": 17,
      "title": "Take My Hand Precious Lord",
      "artist": "Mahalia Jackson",
      "link": "https://www.youtube.com/watch?v=uYUwO6_lysw&ab_channel=MahaliaJacksonVEVO",
    },
    {
      "id": 18,
      "title": "Up Above My Head",
      "artist": "Sister Rosetta Tharpe",
      "link": "https://www.youtube.com/watch?v=JeaBNAXfHfQ&ab_channel=Robo_Ant",
    },
    {
      "id": 19,
      "title": "Lovable",
      "artist": "Sam Cooke",
      "link": "https://www.youtube.com/watch?v=XGDLbo5xoWQ&ab_channel=JoseR.",
    },
    {
      "id": 20,
      "title": "Yellow Dog Blues",
      "artist": "W.C. Handy",
      "link": "https://www.youtube.com/watch?v=vjUFcqBEDVA&ab_channel=LouisArmstrong-Topic",
    },
    {
      "id": 21,
      "title": "Come On In My Kitchen",
      "artist": "Robert Johnson",
      "link": "https://www.youtube.com/watch?v=4up4VP8zjyc&ab_channel=O.H.",
    },
    {
      "id": 22,
      "title": "Cross Road Blues",
      "artist": "Robert Johnson",
      "link": "https://www.youtube.com/watch?v=Yd60nI4sa9A&ab_channel=shoguncoredump",
    },
    {
      "id": 23,
      "title": "Low Down Dirty Dog Blues",
      "artist": "Son House",
      "link": "https://www.youtube.com/watch?v=8uZnXhnS1EU&ab_channel=MyMoppet52",
    },
    {
      "id": 24,
      "title": "Rolling Stone",
      "artist": "Muddy Waters",
      "link": "https://www.youtube.com/watch?v=vIgYBs-2RjY&ab_channel=ClassicMoodExperience",
    },
    {
      "id": 25,
      "title": "Bo Diddley",
      "artist": "Bo Diddley",
      "link": "https://www.youtube.com/watch?v=3jrIK7YB0tE&ab_channel=Twodawgzz",
    },
    {
      "id": 26,
      "title": "I'm A Man",
      "artist": "Bo Diddley",
      "link": "https://www.youtube.com/watch?v=SaC5ZKRjLUM&ab_channel=John1948TwoA2",
    },
    {
      "id": 27,
      "title": "Evil Is Goin’ On",
      "artist": "Howlin' Wolf",
      "link": "https://www.youtube.com/watch?v=QF6CMQoYSsQ&ab_channel=JazzEveryday%21",
    },
    {
      "id": 28,
      "title": "Shake, Rattle, and Roll",
      "artist": "Big Joe Turner",
      "link": "https://www.youtube.com/watch?v=YhELpSeeipg&ab_channel=DefaultName",
    },
    {
      "id": 29,
      "title": "Wildwood Flower",
      "artist": "The Carter Family",
      "link": "https://www.youtube.com/watch?v=ewnfWoSQz3o&ab_channel=Hippekuln",
    },
    {
      "id": 30,
      "title": "Blue Moon of Kentucky",
      "artist": "Bill Monroe",
      "link": "https://www.youtube.com/watch?v=4syA9aNnNa0&ab_channel=BluegrassLibrary",
    },
  ],
  "quiz_2": [
    {
      "id": 31,
      "title": "Maybellene",
      "artist": "Chuck Berry",
      "link": "https://www.youtube.com/watch?v=75RiHJGfyUE&ab_channel=John1948ThreeA",
    },
    {
      "id": 32,
      "title": "Johnny B. Goode",
      "artist": "Chuck Berry",
      "link": "https://www.youtube.com/watch?v=6ROwVrF0Ceg&ab_channel=gaslightrecords"
    },
    {
      "id": 33,
      "title": "Peggy Sue",
      "artist": "Buddy Holly & The Crickets",
      "link": "https://www.youtube.com/watch?v=OUesbTObC9A&ab_channel=TheGrayCat"
    },
    {
      "id": 34,
      "title": "That'll Be the Day",
      "artist": "Buddy Holly & The Crickets",
      "link": "https://www.youtube.com/watch?v=9mDGcxbAusg&ab_channel=TheEdSullivanShow"
    },
    {
      "id": 35,
      "title": "Not Fade Away",
      "artist": "Buddy Holly & The Crickets",
      "link": "https://www.youtube.com/watch?v=NN2L84dvoag&ab_channel=MarvinPollei"
    },
    {
      "id": 36,
      "title": "Sh-Boom",
      "artist": "The Chords",
      "link": "https://www.youtube.com/watch?v=SBgQezOF8kY&ab_channel=BearWalken"
    },
    {
      "id": 37,
      "title": "Heart and Soul",
      "artist": "The Four Aces",
      "link": "https://www.youtube.com/watch?v=Pevk5swr0WU&ab_channel=Scout4Me1"
    },
    {
      "id": 38,
      "title": "Be My Baby",
      "artist": "The Ronettes",
      "link": "https://www.youtube.com/watch?v=AhzZIXvspI4&ab_channel=ClassicHitsStudio"
    },
    {
      "id": 39,
      "title": "Will You Love Me Tomorrow?",
      "artist": "The Shirelles",
      "link": "https://www.youtube.com/watch?v=cbxxkwBQk_o&ab_channel=l3liljokerl3"
    },
    {
      "id": 40,
      "title": "He's a Rebel",
      "artist": "The Crystals",
      "link": "https://www.youtube.com/watch?v=aF7V2dSvxpo&ab_channel=numberonesongs111"
    },
    {
      "id": 41,
      "title": "You've Lost That Lovin’ Feeling",
      "artist": "The Righteous Brothers",
      "link": "https://www.youtube.com/watch?v=xLiUp3-jCH0&ab_channel=ClassicHitsStudio"
    },
    {
      "id": 42,
      "title": "River Deep Mountain High",
      "artist": "Ike & Tina Turner",
      "link": "https://www.youtube.com/watch?v=uj0wPrN_Y_4&ab_channel=amajor2002"
    },
    {
      "id": 43,
      "title": "Miserlou",
      "artist": "Dick Dale and the Del-Tones",
      "link": "https://www.youtube.com/watch?v=sYjo__4COIo&ab_channel=DickDale-Topic"
    },
    {
      "id": 44,
      "title": "Surfin' USA",
      "artist": "The Beach Boys",
      "link": "https://www.youtube.com/watch?v=EDb303T-B1w&ab_channel=beatlettese"
    },
    {
      "id": 45,
      "title": "Wipe Out",
      "artist": "The Surfaris",
      "link": "https://www.youtube.com/watch?v=p13yZAjhU0M&ab_channel=SeedyEyes"
    },
    {
      "id": 46,
      "title": "The Tears of a Clown",
      "artist": "Smokey Robinson",
      "link": "https://www.youtube.com/watch?v=51B55OQysj8&ab_channel=SmokeyRobinsonVEVO"
    },
    {
      "id": 47,
      "title": "Stop! In the Name of Love",
      "artist": "The Supremes",
      "link": "https://www.youtube.com/watch?v=une981B7Q4Y&ab_channel=TheSupremesVEVO"
    },
    {
      "id": 48,
      "title": "My Girl",
      "artist": "The Temptations",
      "link": "https://www.youtube.com/watch?v=eepLY8J4E6c&ab_channel=Louis%2aJukebox.Productions%2a"
    },
    {
      "id": 49,
      "title": "Ain't Too Proud to Beg",
      "artist": "The Temptations",
      "link": "https://www.youtube.com/watch?v=crWSG6liT5Y&ab_channel=catman916"
    },
    {
      "id": 50,
      "title": "Louie Louie",
      "artist": "The Kingsmen",
      "link": "https://www.youtube.com/watch?v=xKt75jUuKJY&ab_channel=TheKingsmen-Topic"
    },
    {
      "id": 51,
      "title": "I Want to Hold Your Hand",
      "artist": "The Beatles",
      "link": "https://www.youtube.com/watch?v=KjSy6hNwFno&ab_channel=TheBeatles-Topic"
    },
    {
      "id": 52,
      "title": "I Saw Her Standing There",
      "artist": "The Beatles",
      "link": "https://www.youtube.com/watch?v=oxwAB3SECtc&ab_channel=TheBeatles-Topic"
    },
    {
      "id": 53,
      "title": "Tomorrow Never Knows",
      "artist": "The Beatles",
      "link": "https://www.youtube.com/watch?v=pHNbHn3i9S4&ab_channel=TheBeatles-Topic"
    },
    {
      "id": 54,
      "title": "Gimme Some Lovin’",
      "artist": "The Spencer Davis Group",
      "link": "https://www.youtube.com/watch?v=ko3m0NBbq1o"
    },
    {
      "id": 55,
      "title": "(I Can’t Get No) Satisfaction",
      "artist": "The Rolling Stones",
      "link": "https://www.youtube.com/watch?v=nrIPxlFzDi0"
    },
    {
      "id": 56,
      "title": "Get Off Of My Cloud",
      "artist": "The Rolling Stones",
      "link": "https://m.youtube.com/watch?v=QYgJZ79FmBo&pp=ygUJI291X2dlY2Fp"
    },
    {
      "id": 57,
      "title": "Sympathy for the Devil",
      "artist": "The Rolling Stones",
      "link": "https://www.youtube.com/watch?v=GgnClrx8N2k&ab_channel=ABKCOVEVO"
    },
    {
      "id": 58,
      "title": "For Your Love",
      "artist": "The Yardbirds",
      "link": "https://www.youtube.com/watch?v=HU5zqidlxMQ&ab_channel=Wolffishfish"
    },
    {
      "id": 59,
      "title": "My Generation",
      "artist": "The Who",
      "link": "https://www.youtube.com/watch?v=qN5zw04WxCc&ab_channel=TheBestOf-HomeOfClassicMusic"
    },
    {
      "id": 60,
      "title": "You Really Got Me",
      "artist": "The Kinks",
      "link": "https://www.youtube.com/watch?v=fTTsY-oz6Go&ab_channel=TheKinks"
    },
    {
      "id": 61,
      "title": "If I Had a Hammer",
      "artist": "Peter, Paul, and Mary",
      "link": "https://www.youtube.com/watch?v=I0hsIdJHsuQ&ab_channel=Peter%2CPaul%26Mary-Topic"
    },
    {
      "id": 62,
      "title": "Blowin’ in the Wind",
      "artist": "Bob Dylan",
      "link": "https://www.youtube.com/watch?v=MMFj8uDubsE&ab_channel=BobDylanVEVO"
    },
    {
      "id": 63,
      "title": "Only A Pawn In Their Game",
      "artist": "Bob Dylan",
      "link": "https://www.youtube.com/watch?v=8X0UmfBwA_U&ab_channel=BobDylanVEVO"
    },
    {
      "id": 64,
      "title": "Mr. Tambourine Man",
      "artist": "Bob Dylan",
      "link": "https://www.youtube.com/watch?v=oecX_1pqxk0&ab_channel=BobDylanVEVO"
    },
    {
      "id": 65,
      "title": "Like a Rolling Stone",
      "artist": "Bob Dylan",
      "link": "https://www.youtube.com/watch?v=IwOfCgkyEj0&ab_channel=BobDylanVEVO"
    },
    {
      "id": 66,
      "title": "Mr. Tambourine Man",
      "artist": "The Byrds",
      "link": "https://www.youtube.com/watch?v=Swqw5a8I4b4&ab_channel=TheByrdsVEVO"
    },
    {
      "id": 67,
      "title": "The Times They Are A-Changin’",
      "artist": "Bob Dylan",
      "link": "https://www.youtube.com/watch?v=90WD_ats6eE&ab_channel=BobDylanVEVO"
    },
    {
      "id": 68,
      "title": "House of the Rising Sun",
      "artist": "The Animals",
      "link": "https://www.youtube.com/watch?v=4-43lLKaqBQ&ab_channel=TheAnimalsTributeChannel%28unofficial%29"
    },
    {
      "id": 69,
      "title": "The Sound of Silence",
      "artist": "Simon and Garfunkel",
      "link": "https://www.youtube.com/watch?v=4fWyzwo1xg0&ab_channel=SimonGarfunkelVEVO"
    },
    {
      "id": 70,
      "title": "Big Yellow Taxi",
      "artist": "Joni Mitchell",
      "link": "https://www.youtube.com/watch?v=2595abcvh2M&ab_channel=JoniMitchell"
    },
    {
      "id": 71,
      "title": "Woodstock",
      "artist": "Joni Mitchell",
      "link": "https://www.youtube.com/watch?v=ZzZTSfXcHYI&ab_channel=JoniMitchell-Topic"
    },
    {
      "id": 72,
      "title": "What’s Going On",
      "artist": "Marvin Gaye",
      "link": "https://www.youtube.com/watch?v=H-kA3UtBj4M&ab_channel=SuperWhoopass"
    },
    {
      "id": 73,
      "title": "Dancing in the Street",
      "artist": "Martha and the Vandellas",
      "link": "https://www.youtube.com/watch?v=68Uv959QuCg&ab_channel=WarmerMusicVideos"
    },
    {
      "id": 74,
      "title": "Fortunate Son",
      "artist": "Creedence Clearwater Revival",
      "link": "https://www.youtube.com/watch?v=ZWijx_AgPiA&ab_channel=CCRVEVO"
    },
    {
      "id": 75,
      "title": "A Change Is Gonna Come",
      "artist": "Sam Cooke",
      "link": "https://www.youtube.com/watch?v=wEBlaMOmKV4&ab_channel=SamCookeVEVO"
    },
  ],
  "quiz_3": [
    [
      {
        "id": 76,
        "title": "What'd I Say",
        "artist": "Ray Charles",
        "link": "https://www.youtube.com/watch?v=6uTDa3771HM"
      },
      {
        "id": 77,
        "title": "In the Midnight Hour",
        "artist": "Wilson Pickett",
        "link": "https://www.youtube.com/watch?v=FGVGFfj7POA"
      },
      {
        "id": 78,
        "title": "Hey Jude",
        "artist": "Wilson Pickett",
        "link": "https://www.youtube.com/watch?v=0y8Q2PATVyI"
      },
      {
        "id": 79,
        "title": "Think",
        "artist": "Aretha Franklin",
        "link": "https://www.youtube.com/watch?v=P9yIoSpWWNE&ab_channel=ArethaFranklin"
      },
      {
        "id": 80,
        "title": "Respect",
        "artist": "Aretha Franklin",
        "link": "https://www.youtube.com/watch?v=6FOUqQt3Kg0"
      },
      {
        "id": 81,
        "title": "(You Make Me Feel Like) A Natural Woman",
        "artist": "Aretha Franklin",
        "link": "https://www.youtube.com/watch?v=8jCFzreP1ng&ab_channel=ArethaFranklin"
      },
      {
        "id": 82,
        "title": "I Got You (I Feel Good)",
        "artist": "James Brown",
        "link": "https://www.youtube.com/watch?v=pTdihu-mp90"
      },
      {
        "id": 83,
        "title": "Cold Sweat",
        "artist": "James Brown",
        "link": "https://www.youtube.com/watch?v=ij0KHfvvWVs&ab_channel=JamesBrown-Topic"
      },
      {
        "id": 84,
        "title": "Say It Loud – I'm Black And I'm Proud",
        "artist": "James Brown",
        "link": "https://www.youtube.com/watch?v=j0A_N-wmiMo"
      },
      {
        "id": 85,
        "title": "Green Onions",
        "artist": "Booker T and the MGs",
        "link": "https://www.youtube.com/watch?v=0oox9bJaGJ8"
      },
      {
        "id": 86,
        "title": "Try a Little Tenderness",
        "artist": "Otis Redding",
        "link": "https://www.youtube.com/watch?v=UnPMoAb4y8U"
      },
      {
        "id": 87,
        "title": "Satisfaction",
        "artist": "Otis Redding",
        "link": "https://www.youtube.com/watch?v=gmnZRBTPzg0&ab_channel=PerryCoxPF93"
      },
      {
        "id": 88,
        "title": "Proud Mary",
        "artist": "Solomon Burke",
        "link": "https://www.youtube.com/watch?v=tSIGwhFoZvE"
      },
      {
        "id": 89,
        "title": "Don't You Ever Get Tired (Of Hurting Me)",
        "artist": "Bettye Swann",
        "link": "https://www.youtube.com/watch?v=BS1dZQHZXwc&ab_channel=BettyeSwann-Topic"
      },
      {
        "id": 90,
        "title": "Signed, Sealed, Delivered, I'm Yours",
        "artist": "Stevie Wonder",
        "link": "https://www.youtube.com/watch?v=6To0fvX_wFA&ab_channel=StevieWonder-Topic"
      },
      {
        "id": 91,
        "title": "Good Vibrations",
        "artist": "The Beach Boys",
        "link": "https://www.youtube.com/watch?v=apBWI6xrbLY&ab_channel=TheBeachBoysVEVO"
      },
      {
        "id": 92,
        "title": "Wouldn't It Be Nice",
        "artist": "The Beach Boys",
        "link": "https://www.youtube.com/watch?v=lD4sxxoJGkA"
      },
      {
        "id": 93,
        "title": "A Day In The Life",
        "artist": "The Beatles",
        "link": "https://www.youtube.com/watch?v=usNsCeOV4GM"
      },
      {
        "id": 94,
        "title": "Lucy In The Sky With Diamonds",
        "artist": "The Beatles",
        "link": "https://www.youtube.com/watch?v=naoknj1ebqI"
      },
      {
        "id": 95,
        "title": "White Rabbit",
        "artist": "Jefferson Airplane",
        "link": "https://www.youtube.com/watch?v=pnJM_jC7j_4"
      },
      {
        "id": 96,
        "title": "For What It's Worth",
        "artist": "Buffalo Springfield",
        "link": "https://www.youtube.com/watch?v=80_39eAx3z8"
      },
      {
        "id": 97,
        "title": "Break On Through (To The Other Side)",
        "artist": "The Doors",
        "link": "https://www.youtube.com/watch?v=-r679Hhs9Zs"
      },
      {
        "id": 98,
        "title": "Wish You Were Here",
        "artist": "Pink Floyd",
        "link": "https://www.youtube.com/watch?v=IXdNnw99-Ic"
      },
      {
        "id": 99,
        "title": "Sunshine Of Your Love",
        "artist": "Cream",
        "link": "https://www.youtube.com/watch?v=zt51rITH3EA"
      },
      {
        "id": 100,
        "title": "Casey Jones",
        "artist": "The Grateful Dead",
        "link": "https://www.youtube.com/watch?v=d160GSGtPxY"
      },
      {
        "id": 101,
        "title": "All Along The Watchtower",
        "artist": "Jimi Hendrix",
        "link": "https://www.youtube.com/watch?v=TLV4_xaYynY"
      },
      {
        "id": 102,
        "title": "Purple Haze",
        "artist": "Jimi Hendrix",
        "link": "https://www.youtube.com/watch?v=WGoDaYjdfSg"
      },
      {
        "id": 103,
        "title": "Are You Experienced?",
        "artist": "Jimi Hendrix",
        "link": "https://www.youtube.com/watch?v=XxHS9lTUN4Y"
      },
      {
        "id": 104,
        "title": "Voodoo Child (Slight Return)",
        "artist": "Jimi Hendrix",
        "link": "https://www.youtube.com/watch?v=IZBlqcbpmxY"
      },
      {
        "id": 105,
        "title": "Gimme Shelter",
        "artist": "The Rolling Stones",
        "link": "https://www.youtube.com/watch?v=QeglgSWKSIY"
      }
    ]
    
  ],
  "quiz_4": [],
};

export default songs;