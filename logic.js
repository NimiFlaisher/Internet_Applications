            let ads = [];
            let testRes = [];
            fetch("/data")
            .then((data) => {
                return data.json();
            })
            .then((res) => {
            ads = res;

            const pDate = new Date();
            const pHour = pDate.getHours();
            const pMonth = pDate.getMonth();
            const pDay = pDate.getDay();
            const pYear = pDate.getFullYear();

                $(document).ready(function(){
                    var pDate = new Date();
                    var pHour = pDate.getHours();
                    var pMonth = pDate.getMonth();
                    var pWeekDay = pDate.getDay();
                    var pDay = pDate.getDate();
                    var pYear = pDate.getFullYear();
                    
                    const adArray = [];
                    
                    ads.forEach( ad => {
                        if (
                            new Date(ad.dates.range[0]) <= pDate && new Date(ad.dates.range[1]) >= pDate
                        ) {
                            if (Object.keys(ad.dates.daysAndHours).includes(pWeekDay.toString()))
                            {
                                if (
                                    ad.dates.daysAndHours[pWeekDay][0] <= pHour &&
                                    ad.dates.daysAndHours[pWeekDay][1] >= pHour
                                ) 
                                adArray.push(ad);
                            }
                        }
                    })
                testRes = adArray;
                var currentAd = -1;
                $("button#btn").click(function(){
                    $( "#root" ).load( "./Loading/Loading.html" );
                    var renew = setInterval(function(){
                        currentAd++;
                        if (currentAd == adArray.length)
                            currentAd = 0;
                        if (adArray.length == 0)
                            console.log("No ads to show")
                            else {
                                localStorage.setItem('adNum',adArray[currentAd].id);
                                var stringo = "./Template"+ adArray[currentAd].template +"/Template" + adArray[currentAd].template + ".html";
                            }
                        $( "#root" ).load(stringo);
                    },5000);
                });
                
            })
        })