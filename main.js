//Variable declarations
var intervalid = 0;
var change = 100;

//The start funtion will disable the start button and start to move the image around the screen
function start() {
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;

    var image = document.getElementById('img');

    intervalid = setInterval(function() {
        if (change < 550) {
            image.style.left = change + 'px';
            //disabling the .top statement will make the img move only horizontally and vice versa with .left... feel free to play around!
            image.style.top = change + 'px';
            change += 50;
        }
        else {
            change = 100;
            image.style.left = change + 'px';
            image.style.top = change + 'px';
            change += 50;
        }
        document.getElementById('msg').innerHTML = 'X px = ' + image.style.left + ' | Y px = ' + image.style.top;
    }, 300);
}

//The stop funtion will simply disable the stop button and enable the start button, essentially pausing the flow of the program
function stop() {
    document.getElementById('stopButton').disabled = true;
    document.getElementById('startButton').disabled = false;

    clearInterval(intervalid)
}