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
        screens: ["1","2"]
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
    },
    ad_3 = {
        id : "ad_3",
        template: "3",
        photos : [],
        texts : [], //no text lines
        screens: ["2","3"]
    },
    ad_4 = {
        id : "ad_4",
        template: "1",
        photos : [],
        texts : ["This is an example of a",
            "two text lines ad"], //2 text lines
            screens: ["1"]
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
            screens: ["3"]
}
];

module.exports = ads;