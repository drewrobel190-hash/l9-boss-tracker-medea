// ================= CONTINENT MAP SYSTEM =================

window.continents = {
  elsera: {
    Dien: [
  { name: "Dien Port", level: "", img: "Maps/Dien/Dient Port.png" },
  { name: "Northern Dien", level: "Lv. 1-9", img: "Maps/Dien/Nothern Dien.png" },
  { name: "Gray Ruins", level: "Lv. 11-19", img: "Maps/Dien/Gray Ruins.png" },
  { name: "Corrupted Basin", level: "Lv. 20-30", img: "Maps/Dien/Corrupted Basin.png" },
  { name: "Secret Laboratory", level: "Lv. 32-55", img: "Maps/Dien/Secret Laboratory.png" }
],


    Lindris: [
      { name: "Lindris", level: "", img: "Maps/Lindris/Lindris.png" },
      { name: "Crescent Lake", level: "Lv. 37-41", img: "Maps/Lindris/Cresendent Lake.png" },
      { name: "Twilight Hill", level: "Lv. 43-48", img: "Maps/Lindris/Twilight Hill.png" },
    ],

    Ulan: [
      { name: "Ulan", level: "", img: "Maps/Ulan/Ulan .png" },
      { name: "Ulan Canyon", level: "Lv. 50-56", img: "Maps/Ulan/Ulan Canyon.png" },
      { name: "Protector's Ruins", level: "Lv. 55-59", img: "Maps/Ulan/Protector's Ruins.png" },
      { name: "Desert of the Screaming", level: "Lv. 62-68", img: "Maps/Ulan/Desert of the Screaming.png" },
      { name: "Lower Tomb of Tyriosa 1F", level: "Lv. 65-70", img: "Maps/Ulan/Lower Tomb of Tyriosa 1F.png" },
      { name: "Lower Tomb of Tyriosa 2F", level: "Lv. 74-82", img: "Maps/Ulan/Lower Tomb of Tyriosa 2F.png" },
      { name: "Lower Tomb of Tyriosa 3F", level: "Lv. 88-102", img: "Maps/Ulan/Lower Tomb of Tyriosa 3F.png" }
    ],

    Serbis: [
      { name: "Serbis", level: "", img: "Maps/Serbis/Serbis.png" },
      { name: "Land of Glory", level: "Lv. 70-78", img: "Maps/Serbis/Land of Glory.png" },
      { name: "Battlefield of Templar", level: "Lv. 76-88", img: "Maps/Serbis/Battlefield of Templar.png" },
      { name: "Plateau of Revolution", level: "Lv. 85-94", img: "Maps/Serbis/Plateau of Revolution.png" },
      { name: "Ruins of the War", level: "Lv. 91-100", img: "Maps/Serbis/Ruins of the War.png" },
      { name: "Silvergrass Field", level: "Lv. 101-108", img: "Maps/Serbis/Silvergrass Field.png" },
      { name: "Barbas", level: "Lv. 105-115", img: "Maps/Serbis/Barbas.png" },
      { name: "Deadman's Land District 1", level: "Lv. 87-92", img: "Maps/Serbis/Deadman's Land District 1.png" },
      { name: "Deadman's Land District 2", level: "Lv. 95-100", img: "Maps/Serbis/Deadman's Land District 2.png" },
      { name: "Deadman's Land District 3", level: "Lv. 105-113", img: "Maps/Serbis/Deadman's Land District 3.png" }
]

  },

  kransia: {
  "Ashen Haven": [
    { 
      name: "Ashen Haven",
      level: "",
      img: "Maps/Kransia/Ashen Haven.png"

      
    },

     { 
      name: "Fallen Wasteland",
      level: "",
      img: "Maps/Kransia/Fallen Wasteland.png"
    }
  ],

  
}

};

// ===== MAP BOSS LOCATIONS =====
const mapBossData = {

    "Maps/Dien/Dient Port.png": [
      { name: "Dien Port Plaza", type: "portal", x: 763, y: 474 }
    ],

    "Maps/Dien/Corrupted Basin.png": [
      { name: "Venatus", x: 939, y: 428 },
      { name: "Clemantis", x: 636, y: 111 },

        //  Portals teshi
        { name: "Fetid Puddle", type: "portal", x: 702, y: 455 },
        { name: "In Front of Secret Laboratory", type: "portal", x: 602, y: 227 },
        { name: "Reeking Land", type: "portal", x: 647, y: 728 },

      
        { name: "Secret Laboratory", type: "dungeon", level: "Lv. 32-55",x: 612, y: 156},


        //  Elites teshi
        { name: "Corrupted ShellBug", type: "Unique Monster", level: "Lv. 30", x: 636, y: 566 },
        { name: "Brutal Butcher", type: "Unique Monster", level: "Lv. 35", x: 364, y: 452 }

    ],

    "Maps/Dien/Nothern Dien.png": [

        { name: "Deligeon Ranger Hideout", type: "portal", x: 660, y: 81 },
        { name: "Deligeon Ranger Post 2", type: "portal", x: 604, y: 481 },

        { name: "Outlaw Kaiser", type: "Unique Monster", level: "14", x: 597, y: 310 },
        { name: "Screaming Wings", type: "Unique Monster", level: "Lv. 8", x: 952, y: 422 }

        
    ],

    "Maps/Dien/Gray Ruins.png": [
        { name: "Abandoned Camp", type: "portal", x: 780, y: 383 },
        { name: "Execution Ground", type: "portal", x: 543, y: 476 },
        
        { name: "Dark Apparition", type: "Unique Monster", level: "Lv. 23", x: 445, y: 316 },
        { name: "Suspicious Wizard", type: "Unique Monster", level: "Lv. 19", x: 1008, y: 430 },

    ],

    "Maps/Dien/Secret Laboratory.png": [
        { name: "Undomiel", x: 816, y: 242}, 

        { name: "Magic Puppet", type: "Unique Monster", level: "Lv. 60", x: 890, y: 455 },
        { name: "Wizards Pet", type: "Unique Monster", level: "Lv. 60", x: 789, y: 536 },
        { name: "Secret Creation", type: "Unique Monster", level: "Lv. 40", x: 627, y: 174 }
    ],

    "Maps/Lindris/Lindris.png": [
        { name: "FLoating Tower", type: "portal", x: 422, y: 625 }
    ],

    "Maps/Lindris/Cresendent Lake.png": [
        { name: "Saphirus", x: 693, y: 436 },
        { name: "Viorent", x: 439, y: 340 },

        { name: "Twitching Darkness", type: "portal", x: 506, y: 417 },
        { name: "Silent Moonlight", type: "portal", x: 659, y: 356 },
        { name: "Moonlight Wave", type: "portal", x: 785, y: 569 },

        { name: "Lamia Shaman", type: "Unique Monster", level: "Lv. 46", x: 900, y: 439 },
        { name: "Angusto", type: "Unique Monster", level: "Lv. 46", x: 558, y: 223 },

    ],

    "Maps/Lindris/Twilight Hill.png": [
        { name: "Ratan", x: 873, y: 287 },

        { name: "Lady Dalia", x: 470, y: 277 },
        { name: "Thymele", x: 507, y: 595 },

        { name: "Precarious Transport Route", type: "portal", x: 652, y: 623 },
        { name: "Daybreak Hill", type: "portal", x: 613, y: 399 },
        { name: "Twilight Way", type: "portal", x: 716, y: 214 },

        { name: "Charging Thardus", type: "Unique Monster", level: "Lv. 53", x: 403, y: 528 },
        { name: "Ancient Thardus", type: "Unique Monster", level: "Lv. 49", x: 622, y: 255 },
        { name:  "Berserk Thardus", type: "Unique Monster", level: "Lv. 54", x: 892, y: 497 },
    ],

    "Maps/Ulan/Ulan .png": [
        { name: "Plaza of Liberation", type: "portal", x: 583, y: 460 },  
    ],

    "Maps/Ulan/Ulan Canyon.png": [
        { name: "Ego", x: 319, y: 484 },

        { name: "Rocky Mountain", type: "portal", x: 545, y: 542 },
        { name: "Farmyard", type: "portal", x: 697, y: 288 },
        { name: "Canyon Entrance", type: "portal", x: 837, y: 517 },
        
        { name: "Ancient Turtle", type: "Unique Monster", level: "Lv. 58", x: 769, y: 686 },
        { name: "Desert Golem", type: "Unique Monster", level: "Lv. 57", x: 556, y: 312 },
        { name: "Alarak", type: "Unique Monster", level: "Lv. 49", x: 407, y: 468 },
    ],

     "Maps/Ulan/Protector's Ruins.png": [
        { name: "Parto", x: 652, y: 189 },

        { name: "Livera", x: 764, y: 282 },

        { name: "Acient Traces", type: "portal", x: 383, y: 363 },
        { name: "Nesha's Holy Site", type: "portal", x: 632, y: 443 },
        { name: "Acient Kingdom's Garden", type: "portal", x: 964, y: 427 },

        { name: "Protector of the Ruins", type: "Unique Monster", level: "Lv. 61", x: 396, y: 511 },
        { name: "Black Hand", type: "Unique Monster", level: "Lv. 64", x: 872, y: 410 },
        { name: "Acient Protector", type: "Unique Monster", level: "Lv. 64", x: 726, y: 575 },
    ],

    "Maps/Ulan/Desert of the Screaming.png": [
        { name: "Neutro", x: 564, y: 641 },

        { name: "Travelers's Sanctuary", type: "portal", x: 524, y: 292 },
        { name: "Sand Pit", type: "portal", x: 469, y: 446 },
        { name: "Land of the Haze", type: "portal", x: 746, y: 399 },
        { name: "Tomb of Tyriosa Entrance", type: "portal", x: 608, y: 742 },

        { name: "Tomb of Tyriosa", type: "Dungeon", x: 622, y: 716 },

        { name: "Initikam", type: "Unique Monster", level: "Lv. 71", x: 669, y: 404 },
        { name: "Black Wedge", type: "Unique Monster", level: "Lv. 70", x: 802, y: 577 },
        { name: "Desert Protector", type: "Unique Monster", level: "Lv. 70", x: 898, y: 410 },

    ],

    "Maps/Ulan/Lower Tomb of Tyriosa 1F.png": [
        { name: "Araneo", x: 519, y: 493 },

        { name: "Move to the Lower Tomb of Tyriosa 2F", type: "Dungeon", x: 554, y: 417 },
        { name: "Move to the Lower Tomb of Tyriosa 2F", type: "Dungeon", x: 640, y: 594 },

        { name: "Blood Mother", type: "Unique Monster", level: "Lv. 75", x: 574, y: 254 },
        { name: "Decoy", type: "Unique Monster", level: "Lv. 75", x: 584, y: 526 },
    ],

    "Maps/Ulan/Lower Tomb of Tyriosa 2F.png": [
        { name: "General Aquleus", x: 524, y: 360 },

        { name: "Move to the Lower Tomb of Tyriosa 1F", type: "Dungeon", x: 405, y: 152 },
        { name: "Move to the Lower Tomb of Tyriosa 1F", type: "Dungeon", x: 621, y: 485 },

        { name: "Move to the Lower Tomb of Tyriosa 3F", type: "Dungeon", x: 429, y: 417 },
        { name: "Move to the Lower Tomb of Tyriosa 3F", type: "Dungeon", x: 630, y: 576 },

        { name: "Ghost Webber", type: "Unique Monster", level: "Lv. 87", x: 346, y: 237 },
        { name: "Shadow Webber", type: "Unique Monster", level: "Lv. 87", x: 738, y: 492 },
    ],

    "Maps/Ulan/Lower Tomb of Tyriosa 3F.png": [
        { name: "Milavy", x: 558, y: 400 },

        { name: "Move to the Lower Tomb of Tyriosa 2F", type: "Dungeon", x: 602, y: 157 },
        { name: "Move to the Lower Tomb of Tyriosa 2F", type: "Dungeon", x: 568, y: 618 },

        { name: "Fortuneteller Ariel", type: "Unique Monster", level: "Lv. 103", x: 785, y: 384 },
        { name: "Priest Petroca", type: "Unique Monster", level: "Lv. 103", x: 369, y: 400 },
        { name: "Escort Leader Maximus", type: "Unique Monster", level: "Lv. 103", x: 576, y: 260 },

    ]
};