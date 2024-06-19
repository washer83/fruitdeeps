const defaultGearSets = [
    {
        name: "Max Melee",
        equipment: {
            cape: { 
                name: "Infernal cape", 
                slot: "cape", 
                bonuses: [4,4,4,1,1,12,12,12,12,12,8,0,0,2], 
                id: 21295 
            },
            head: { 
                name: "Sanguine torva full helm", 
                slot: "head", 
                bonuses: [0,0,0,-5,-5,59,60,62,-2,57,8,0,0,1], 
                id: 28254 
            },
            neck: {
                 name: "Amulet of torture", 
                 slot: "neck", 
                 bonuses: [15,15,15,0,0,0,0,0,0,0,10,0,0,2], 
                 id: 19553 
                },
            ammo: { 
                name: "Ghommal's lucky penny", 
                slot: "ammo", 
                bonuses: [0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
                id: 27544 
            },
            weapon: { 
                name: "Scythe of vitur",
                slot: "2h", 
                bonuses: [70,125,30,-6,0,-2,8,10,0,0,75,0,0,0], 
                id: 22325, 
                category: "Scythe", 
                speed: 5 
            },
            body: { 
                name: "Sanguine torva platebody", 
                slot: "body", 
                bonuses: [0,0,0,-18,-14,117,111,117,-11,142,6,0,0,1], 
                id: 28256
             },
            legs: { 
                name: "Sanguine torva platelegs", 
                slot: "legs", 
                bonuses: [0,0,0,-24,-11,87,78,79,-9,102,4,0,0,1], 
                id: 28258 
            },
            hands: { 
                name: "Ferocious gloves", 
                slot: "hands", 
                bonuses: [16,16,16,-16,-16,0,0,0,0,0,14,0,0,0], 
                id: 22981 
            },
            feet: {
                 name: "Primordial boots", 
                 slot: "feet", 
                 bonuses: [2,2,2,-4,-1,22,22,22,0,0,5,0,0,0], 
                 id: 13239 
                },
            ring: {
                 name: "Ultor ring", 
                 slot: "ring", 
                 bonuses: [0,0,0,0,0,0,0,0,0,0,12,0,0,0], 
                 id: 28307 
                }
        }
    },
    {
        name: "Void Range",
        equipment: {
            cape: {
                name: "Blessed dizana's quiver",
                slot: "cape",
                bonuses: [0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 3, 0, 0],
                id: 28955
            },
            head: {
                name: "Void ranger helm",
                slot: "head",
                bonuses: [0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 0, 0, 0, 0],
                id: 11664
            },
            neck: {
                name: "Necklace of anguish",
                slot: "neck",
                bonuses: [0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 5, 0, 2],
                id: 19547
            },
            ammo: {
                name: "Dragon arrow",
                slot: "ammo",
                bonuses: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 0, 0],
                id: 11212
            },
            weapon: {
                name: "Twisted bow",
                slot: "2h",
                bonuses: [0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 20, 0, 0],
                id: 20997,
                category: "Bow",
                speed: 6
            },
            body: {
                name: "Elite void top",
                slot: "body",
                bonuses: [0, 0, 0, 0, 0, 45, 45, 45, 45, 45, 0, 0, 0, 3],
                id: 13072
            },
            legs: {
                name: "Elite void robe",
                slot: "legs",
                bonuses: [0, 0, 0, 0, 0, 30, 30, 30, 30, 30, 0, 0, 0, 3],
                id: 13073
            },
            hands: {
                name: "Void knight gloves",
                slot: "hands",
                bonuses: [0, 0, 0, 0, 0, 6, 6, 6, 4, 6, 0, 0, 0, 0],
                id: 8842
            },
            feet: {
                name: "Pegasian boots",
                slot: "feet",
                bonuses: [0, 0, 0, -12, 12, 5, 5, 5, 5, 5, 0, 0, 0, 0],
                id: 13237
            },
            ring: {
                name: "Venator ring",
                slot: "ring",
                bonuses: [0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                id: 28310
            }
        }
    },
    {
        name: "Max Mage",
        equipment: {
            cape: {
                name: "Imbued guthix cape",
                slot: "cape",
                bonuses: [0, 0, 0, 15, 0, 3, 3, 3, 15, 0, 0, 0, 2, 0],
                id: 21793
            },
            head: {
                name: "Ancestral hat",
                slot: "head",
                bonuses: [0, 0, 0, 8, -2, 12, 11, 13, 5, 0, 0, 0, 3, 0],
                id: 21018
            },
            neck: {
                name: "Occult necklace",
                slot: "neck",
                bonuses: [0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2],
                id: 12002
            },
            weapon: {
                name: "Tumeken's shadow",
                slot: "2h",
                bonuses: [0, 0, 0, 35, 0, 0, 0, 0, 20, 0, 0, 0, 0, 1],
                id: 27275,
                category: "Powered Staff",
                speed: 5
            },
            body: {
                name: "Ancestral robe top",
                slot: "body",
                bonuses: [0, 0, 0, 35, -8, 42, 31, 51, 28, 0, 0, 0, 3, 0],
                id: 21021
            },
            legs: {
                name: "Ancestral robe bottom",
                slot: "legs",
                bonuses: [0, 0, 0, 26, -7, 27, 24, 30, 20, 0, 0, 0, 3, 0],
                id: 21024
            },
            hands: {
                name: "Tormented bracelet",
                slot: "hands",
                bonuses: [0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2],
                id: 19544
            },
            feet: {
                name: "Eternal boots",
                slot: "feet",
                bonuses: [0, 0, 0, 8, 0, 5, 5, 5, 8, 5, 0, 0, 1, 0],
                id: 13235
            },
            ring: {
                name: "Magus ring",
                slot: "ring",
                bonuses: [0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
                id: 28313
            }
        }
    }
    
];

export default defaultGearSets;
