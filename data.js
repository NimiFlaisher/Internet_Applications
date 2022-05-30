const ads = [
    ad_1 = {
        id : "ad_1",
        template: "3",
        photos : ["./Images/platter-gfca0cb4d4_1920.jpg","./Images/urban-g4f67e2ab6_1920.jpg"],
        texts : ["This is an example",
        "of an ad",
        "that has",
        "four lines"
        ],
        screens: ["1","2"],
        dates: {
            range: [new Date("2022-01-01"), new Date("2022-12-30")],
            daysAndHours: { 1: [6, 12], 3: [6, 12] },
        }      
    },
    ad_2 = {
        id : "ad_2",
        template: "2",
        photos : ["./Images/ecommerce-g954d55082_1920.jpg"],
        texts : ["This is an example",
        "of an ad",
        "that has",
        "not one,",
        "not two,",
        "NOT THREE,",
        "this ad",
        "has",
        "TEN",
        "LINES!"], //10 text lines
        screens: ["1","3"],
        dates: {
            range: [new Date("2022-03-01"), new Date("2022-04-30")],
            daysAndHours: { 2: [10, 16], 3: [10, 16] },
          }
    },
    ad_3 = {
        id : "ad_3",
        template: "3",
        photos : [],
        texts : [], //no text lines
        screens: ["2","3"],
        dates: {
            range: [new Date("2022-05-01"), new Date("2022-06-15")],
            daysAndHours: {
              0: [8, 22],
              1: [8, 22],
              2: [8, 22],
              3: [8, 22],
              4: [8, 22],
              5: [8, 22],
              6: [8, 22],
            },
          },
    },
    ad_4 = {
        id : "ad_4",
        template: "1",
        photos : [],
        texts : ["This is an example of a",
            "two text lines ad"], //2 text lines
            screens: ["1"],
            dates: {
                range: [new Date("2022-03-29"), new Date("2022-04-15")],
                daysAndHours: { 1: [15, 19] },
              },
    },
    ad_5 = {
        id : "ad_5",
        template: "2",
        photos : ["./Images/shopping-mall-g9d167b359_1920.jpg","./Images/freestocks-_3Q3tsJ01nc-unsplash.jpg"],
        texts : ["Here we go",
            "we're starting off with a two line story",
            "but wait,",
            "there's more!",
            "we're already at like..",
            "six lines?",
            "make it a seven"], //7 text lines
            screens: ["3"],
            dates: {
                range: [new Date("2022-04-01"), new Date("2022-06-30")],
                daysAndHours: { 1: [1, 23], 2: [1, 23], 3: [1, 23] },
              },
}
];

module.exports = ads;