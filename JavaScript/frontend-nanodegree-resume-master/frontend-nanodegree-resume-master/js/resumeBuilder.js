/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /* adding string to a div with id tag in html using jquery selectors 
 $("#main").append("Chakri");

 var awesomeThoughts = "<br>I am chakri and I am AWESOME!";

 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")

 $("#main").append(funThoughts);*/

 /*creating new variables formattedName and formattedRole and replace 
 data in helper.js
 then append to header in the index.html
  */

 var formattedName = "SRI CHAKRI", formattedRole = "Web Developer";

 var newHTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
 var newHTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

 $("#header").prepend(newHTMLheaderRole);
 $("#header").prepend(newHTMLheaderName);


/*udacity array example
var arr1 = [1,2,3,4,5];
$("#main").append(arr1);
console.log("returned value "+arr1.push(arr1.pop() + 1));
$("#main").append(arr1);
var arr2;
arr2 = arr1;
$("#main").append(arr2);

var oldName= "sRI Chakri"
var arr = oldName.split(" ");
finalName = arr[0].slice(0,1).toUpperCase() + arr[0].slice(1, arr[0].length).toLowerCase()+" "+ arr[1].toUpperCase();
$("#main").append(finalName);*/

/*creating bio object */

var bio = {"name" : "sri chakri",
    "role": "Web Developer",
    "contact":{"mobile":"615-509-4737", "email": "chakri.malathi@gmail.com", "github":"chakri25"},
    "url": "www.google.com",
    "welcomeMessgae": "Hey Hi buddy, how are you doing? Its great to see you",
    "skills": ["Python", "JavScript", "Java", "Html", "CSS"] }

//$("#main").append(bio.name);

/*creating work object with current job position, employer, year worked and city using dot notation*/

var work = {};
/*
work.currentJob = "WebDeveloper";
work.employer = "Amensys";
work.yearsWorked = 8;
work.city = "Dallas";*/

work = {"jobs": [{"employer": "United Airlines", "title": "Web Developer"},
                 {"employer": "Kent State University", "title": "Application Developer"},
                 {"employer": "Pacific Link Property Service", "title": "Frontend Developer"}]
       }


/*creating validate json and validating using https://jsonlint.com/ */
var education = {
    "schools": [
        {
            "city": "Ponnur",
            "majors": ["math", "computers", "science", "social", "telugu", "engligh"],
            "years": "1999-2009"
        },
        {
            "city": "Vizayawada",
            "majors": ["math", "science", "telugu", "engligh"],
            "years": "2009-2011"
        },
        {
            "city": "Guntur",
            "majors": ["math", "computers", "engligh"],
            "years": "2011-2015"
        }
    ],
    "onlineCourses" : ["edx", "udemy", "udacity", "tutorialspoint", "w3schools"]
}

var projects={
    "projects":[
        {
            "title": "sample project 1",
            "dates": "Feb 2017 - Till Date",
            "location" : "Chicago",
            "description":"This is sample sentence. This is sample sentence. This is sample sentence. This is sample sentence.This is sample sentence.\
				This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.\
				This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.",
            "images": ["url1", "url2"]
        },
        {
            "title": "sample project 2",
            "dates": "Sep 2015 - Dec 2016",
            "location": "Kent, OH",
            "description":"This is sample sentence. This is sample sentence. This is sample sentence. This is sample sentence.This is sample sentence.\
				This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.\
				This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.",
            "images": ["url1", "url2"]
        },
        {
            "title": "sample project 3",
            "dates": "May 2013 - July 2015",
            "location": "Hyderabad, India",
            "description":"This is sample sentence. This is sample sentence. This is sample sentence. This is sample sentence.This is sample sentence.\
				This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.\
				This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.This is sample sentence.",
            "images": ["url1", "url2"]
        }
        ]

};

//checking skills in bio object

if(bio["skills"] != undefined){
	$("#header").append(HTMLskillsStart);

	for(var i=0; i < bio["skills"].length; i++)
    {
        var newHTMLskills = HTMLskills.replace("%data%", bio["skills"][i]);
        $("#skills").append(newHTMLskills);
    }
	//console.log(bio["skills"].length);
}

//work - location, dates and description
var formattedWorkDate;
var formattedWorkLocation;
var formattedWorkDescription;

function displayWork(){
    for(k in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        console.log(work.jobs[k].employer);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[k].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[k].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        formattedWorkDate = HTMLworkDates.replace("%data%", projects.projects[k].dates);
        formattedWorkLocation = HTMLworkLocation.replace("%data%", projects.projects[k].location);
        formattedWorkDescription = HTMLworkDescription.replace("%data%", projects.projects[k].description);

        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkDate);
        $(".work-entry:last").append(formattedWorkDescription);


    }
}

displayWork();

//clicks at particular location

$(document).click(function(loc)
{
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
})

//captializing lastname 
function isName(name){
    name = name.split(" ");
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1, name[0].length);
    name[1] = name[1].toUpperCase();
    name = name[0] + " " + name[1];
    //console.log(name);
    return name;
}

//////$("#main").append(internalizationlizeButton);

console.log(isName("sri chakri") === "Sri CHAKRI");