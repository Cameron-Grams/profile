const ProjectsList = [
    {
        title: "Analyst Timeline Project",
        content: "This is a research tool I built using React, Redux, Node and MongoDB.  I find a timeline useful when learning about new situations. Topics can be organized into individual timelines with events represented by the time they occur.  The MongoDB, hosted on mLab, maintains collections of users, timelines, and events. Each timeline is populated into the global state of the application managed by Redux as required.",
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/analystTimeline2.png",
        demonstration: "https://amazing-davinci-10dc21.netlify.com/login",
        sourceCode: "https://github.com/Cameron-Grams/third_timeline_client"
    },
    {
        title: "532 Packard Street Apartment Rentals",
        content: "This is a site for an apartment rental business at the University of Michigan.  The site was built with React and uses a Google Maps component. There is a contact form using AWS SES with a Node endpoint. The main goal was for the land lord to have a way to show prospective tenants photos of the apartments easily with minimal coordination.  The photos are hosted by AWS S3.",
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/532packard.png",
        demonstration: "https://www.532packard.com",
        sourceCode: "https://github.com/Cameron-Grams/532Packard"
    },
    {
        title: "Math Dojo",
        content: "I built this site to help my nephew practice his basic math.  It is a straight-foward Node project written with JQuery and employs MongoDB to maintain user records. The application is hosted on Heroku.",
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/demo_screen.png",
        demonstration: "https://warm-badlands-54373.herokuapp.com/math-dojo.html",
        sourceCode: "https://github.com/Cameron-Grams/MathDojo"
    },
    {
        title: "Languages in the United States",
        content: "I built this because I have always found languages fascinating.  The application uses US Census data from 2013 that was cleaned and configured into JSON from the US Census web site. The language data was then added as layers to the US map using the MapBox API. The application uses JQuery to reach the MapBox API.", 
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/langDist.png",
        demonstration: "https://cameron-grams.github.io/USLanguageDistribution/",
        sourceCode: "https://github.com/Cameron-Grams/USLanguageDistribution"
    },
    {
        title: "Simon",
        content: "This is a web-version of the 1980s game \"Simon\".  I built this because it was fun and provided a good exercise for working with SVG files and JQuery to manage both the graphics and the audio files driven by events.",
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/simon.png",
        demonstration: "https://cameron-grams.github.io/Simon/",
        sourceCode: "https://github.com/Cameron-Grams/Simon"
    },
    {
        title: "Pomodoro Clock",
        content: "I built this as a tool; I find it easy to lose track of time and drift into less productive work. Breaks help. The clock is in the lower right so the browser page can be behind other work and leave the clock visible. The clock was built with JQuery.",
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/pomodoro.png",
        demonstration: "https://cameron-grams.github.io/Pomodoro_Clock/",
        sourceCode: "https://github.com/Cameron-Grams/Pomodoro_Clock"
    },
    {
        title: "Real Automotive",
        content: "I built this site because I like the garage.  We traded some work on my car for her site. The site itself is plain HTML and CSS with some JQuery to manage the Google Maps location feature.",
        projectImage: "https://s3.us-east-2.amazonaws.com/cameronprofilephotos/realAuto.png",
        demonstration: "http://www.realautomotive-nc.com",
        sourceCode: "https://github.com/Cameron-Grams/RealAutomotive"
    }
];

module.exports = ProjectsList;