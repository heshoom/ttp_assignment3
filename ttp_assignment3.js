
//Select the section with an id of container without using querySelector.
var one = getElementById("container");

//Select the section with an id of container using querySelector.
var two = document.querySelector("#container");

//Select all of the list items with a class of "second".
var three = document.querySelectorAll("li.second");

//Select a list item with a class of third, but only the list item inside of the ol tag.
var four = document.querySelector("ol li.third");

// Give the section with an id of container the text "Hello!".
container.textContent = "Hello!";

// Add the class main to the div with a class of footer.
var six = document.querySelector("div.footer");

//Remove the class main on the div with a class of footer.
footer.classlist.remove('main');

//Create a new li element.
var eight = document.createElement("li");

//Give the li the text "four".
eight.textContent = "four";

//Append the li to the ul element.
var ten = document.querySelector("ul");
ten.appendChild(eight);

//  Loop over all of the lis inside the ol tag and give them a background color of "green".
document.querySelector('ol').querySelectorAll('li').forEach(liEle => {liEle.style.backgroundcolor = 'green'})

//  Remove the div with a class of footer.
footer.parentNode.removeChild(footer)
