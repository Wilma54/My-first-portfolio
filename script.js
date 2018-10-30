

// ANCHORS
var myBody = document.querySelector('body');
var myHtml = document.querySelector('html');
var allLinks = document.getElementsByClassName('links');
var allatags = document.getElementsByClassName('a-tag');
var home = document.getElementById('home');
var aboutme = document.getElementById('about-me');
var skills = document.getElementById('skills');
var projects = document.getElementById('projects');
var contact = document.getElementById('contact');
var home = document.querySelector('#home');
var aboutme = document.querySelector('#about-me');
var skills = document.querySelector('#skills');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');
var home1 = document.querySelector('.home1');
var aboutme2 = document.querySelector('.about-me2');
var skills3 = document.querySelector('.skills3');
var projects4 = document.querySelector('.project4');
var post5 = document.querySelector('.post5');

//fields

var homeField = document.getElementById('home-field');
var aboutField = document.getElementById('about-field');
var skillsField = document.getElementById('skills-field');
var projectField = document.getElementById('project-field');
var postField = document.getElementById('post-field');


// EVENTLISTENERS

for( let i = 0; i < allatags.length; i++ ) {
   allatags[i].addEventListener('click', doStuff);
}

function resetField (hey) {
    myArr =[homeField, aboutField, skillsField, projectField, postField];
    for (let i=0; i < myArr.length; i++) {
        if (myArr[i].id !=hey) {
            myArr[i].style.display = "none";
        } else {
            myArr[i].style.display = "block";
        }
    }
}


home.addEventListener('click', doMore); 
aboutme.addEventListener('click', doMore); 
skills.addEventListener('click', doMore); 
projects.addEventListener('click', doMore); 
contact.addEventListener('click', doMore); 


// CALLBACKS
    
// we use event object and switch statement	
/*function doStuff(ev) {			
    // we get the 'id' of the clicked link
    var targetId = ev.target.id;
   console.log (targetId);
    switch(targetId) {					
        case ('home'):
        
        resetField(homeField.id);						
            home1.classList.toggle('home-hidden');
            break;
        case ('about-me'):
        aboutField.style.backgroundColor = "transparent";
        myBody.style.backgroundColor = "pink";
        resetField(aboutField.id);					
        aboutme2.classList.toggle('about-me-hidden');
            break;
        case ('skills'):	
        skillsField.style.backgroundColor = "transparent";
        myBody.style.backgroundColor = "light-green";
        resetField(skillsField.id);					
        skills3.classList.toggle('skills-hidden');
            break;
            case ('projects'):	
            projectField.style.backgroundColor = "transparent";
            myBody.style.backgroundColor = "light-blue";
            resetField(projectField.id);		
            project4.classList.toggle('projects-hidden');
            break;
            case ('contact'):	
            postField.style.backgroundColor = "transparent";
            myBody.style.backgroundColor = "lilac";
            resetField(postField.id);					
            post5.classList.toggle('contact-hidden');
            break;
        default:
            break;

    } 
}*/
// we use event object and switch statement    
function doStuff(ev) {
    // we get the ‘id’ of the clicked link
    var targetId = ev.target.id;

    switch (targetId) {
        case ('home'):
        home.style.backgroundColor ="transparent";
        myBody.style.backgroundColor ="2, 201,201";
            resetField(homeField.id);            
            home1.classList.toggle('home-hidden');
            break;
        case ('about-me'):
            resetField(aboutField.id);
            aboutField.style.backgroundColor = "transparent";
            myBody.style.backgroundColor = "pink";
            aboutme2.classList.toggle('about-me-hidden');
            break;
        case ('skills'):
            resetField(skillsField.id);
            skillsField.style.backgroundColor = "transparent";
            myBody.style.backgroundColor = "yellow";
            skills3.classList.toggle('skills-hidden');
            break;
        case ('projects'):
            resetField(projectField.id);
            projectField.style.backgroundColor = "transparent";
            myBody.style.backgroundColor = "light-blue";
            project4.classList.toggle('projects-hidden');
            break;
        case ('contact'):
            resetField(postField.id);
            postField.style.backgroundColor = "transparent";
            myBody.style.backgroundColor = "gray";
            post5.classList.toggle('contact-hidden');
            break;
        default:
            break;
    }
}

    
    jQuery(document).ready(function(){
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },6000);
        });
    });  


































/*
function openTab(tabName) {
    var i, x;
    x = document.getElementsByClassName("containerTab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}
*/