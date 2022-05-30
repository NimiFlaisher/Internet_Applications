let ads = [];
            fetch("/data")
            .then((data) => {
                return data.json();
            })
            .then((res) => {
            console.log(res);
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
                            new Date(ads[i].dates.range[0]) <= Date.pDate() && new Date(ads[i].dates.range[1]) >= Date.pDate()
                        ) {
                            if (Object.keys(ads[i].daysAndHours).includes(pWeekDay.toString()))
                            {
                                if (
                                    ads[i].daysAndHours[pWeekDay][0] <= pHour &&
                                    ads[i].daysAndHours[pWeekDay][1] >= pHour
                                ) 
                                adArray.push(ads[i]);
                            }

                        }
                    })

                    adArray.push("ad_2");
                    adArray.push("ad_1");

                var currentAd = -1;
                $("button#btn").click(function(){
                    console.log('here')
                    $( "#root" ).load( "./Loading/Loading.html" );
                    var renew = setInterval(function(){
                        currentAd++;
                        if (currentAd == adArray.length)
                            currentAd = 0;
                        localStorage.setItem('adNum',adArray[currentAd]);
                        var stringo = "./Template"+ ads[adArray[currentAd]].template +"/Template" + ads[adArray[currentAd]].template + ".html";
                        $( "#root" ).load(stringo);
                    },5000);
                });
                
            })
        })