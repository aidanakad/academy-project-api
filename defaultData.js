const shortid = require("shortid");

module.exports ={
    guides: [
        {
            id:"1",
            name: "Asel Kerimova",
            age:"23 y.o.",
            languages: "russian, english",
            transport: "yes",
            quantity: "2-5 tourists",  
            about:"Dear tourist, I will be very glad to show you beatifull gorges in Chui region, I promisse, you will enjoy our hike day",
            available:"weekends only",
            tours:[{
                id: shortid,
                place: "Gorges in Chui region",
                day:"one day",
                price:"$35 (transportation only)",
            },
            {
                id: shortid,
                place: "Bishkek city and ethnical resort Supara",
                day:"one day",
                price:"$25 (transportation only)",
            }]

        },
        {
            id:"2",
            name: "Aibek Belekov",
            age:"29 y.o.",
            languages: "russian, english, turkish",
            transport: "yes",
            quantity: "2-7 tourists",  
            about:"Hello, I can show you the best Kyrgyzstan's attractions. Choose suitaavailable pack and let's go to explore. Check out my instagram.",
            available:"any day",
            tours:[{
                id: shortid,
                place: "Burana tower",
                day:"one day",
                price:"$50 (transportation + museum fee)",
            },
            {
                id: shortid.generate,
                place: "Tash-Rabat minaret",
                day:"two days",
                price:"$250 (transportation, accomodation, museum fee)",
            },
            {
                id: shortid.generate,
                place: "Saimaly Tash",
                day:"one day",
                price:"$120 (transportation only)",
            }],
            contacts:{
                WhatsApp: "+996555678945",
                Telegram:"belekov",
                Istagram: "@aibek_b"
            },

        },
        {
            id:"3",
            name: "Linara Yunusova",
            age:"22 y.o.",
            languages: "russian, english, french",
            transport: "none",
            quantity: "1-3 tourists",  
            about:"Hi there, I will show all beauties of Bishkek city, will give you advices about local city life and can show you best place for eat, according to you preffers. Also we will visit local bazar, where you can buy some traditional stuffs. ",
            available:"weekends only",
            tours:[{
                id: shortid.generate,
                place: "Bishkek city",
                day:"one day",
                price:"$30 (fee for taxi included)",
            }]

        },
        {
            id:"4",
            name: "Andrei Lim",
            age:"32 y.o.",
            languages: "russian, english, korean",
            transport: "yes",
            quantity: "5-8 tourists",  
            about:" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ea reiciendis vero odit eveniet ratione sit magni quia impedit! Neque ",
            available:"any days",
            tours:[{
                id: shortid.generate,
                place: "Jeti Oguz + Issyk-Kul lake",
                day:"two days",
                price:"$400 (transportation + accomadation)",
            },
            {
                id: shortid.generate,
                place: "Sulaiman Too",
                day:"two days",
                price:"$500 (transportation, accomadation + museum fee)",
            },
            {
                id: shortid.generate,
                place: "Sary Chelek",
                day:"two days",
                price:"$500 (transportation + accomadation)",
            }]

        }
    ]
}
    