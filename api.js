$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    method: 'GET',
    dataType: 'jsonp',
    contentType: 'application/json; charset=UTF-8',
    data: {
        q: 'Vilnius',
        APPID: '7c36d9a28b814aaef5bbb1f7d5c49368'
    },
    success: handleResults,
    error: handleError,
});

function handleResults(response_body) {
    response_body.weather.forEach(function(item) {
        console.log(response_body);
        var weather = item.main;
        var desc = item.description;
        var heading = $(document.createElement('h2'));
        var description = $(document.createElement('p'));
        var url = 'http://openweathermap.org/img/w/' + item.icon + '.png';
        var icon = $(document.createElement('img'));
        icon.attr('src', url);
        icon.appendTo('#weather-icon');
        heading.text(weather);
        heading.appendTo('#forecast');
        description.text(desc);
        description.appendTo('#description');

    });  
    var kelvin = response_body.main.temp;
    var celsius = kelvin - 272.15;
    var temp = $(document.createElement('div'));
    temp.text(celsius + ' C');
    temp.appendTo('#weather-icon');
}

function handleError(err) {
    console.log("deja...");
}