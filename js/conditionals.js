'use strict';
var title = "How to create a hit YouTube video in just 10 minutes.";
var short_title = "Creating hit YouTube videos";
    var output = (title.length > 30) ? title: short_title;
        console.log(output);

    if (title.length > 30){
        console.log(short_title);
    } else {
        console.log(title);
    }
    var expression = "jan";
        switch(expression){
            case "jan":
                console.log(" January");
                break;
            case "feb":
                console.log(" February");
                break;
            default:
                console.log(" not found!");
        }
