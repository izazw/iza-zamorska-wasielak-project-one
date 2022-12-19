//vertical  menu

const burgerMenu = document.querySelector(".main-nav i");
const myUl = document.querySelector(".main-nav ul");

   // event listener
const slidingTrigger = burgerMenu.addEventListener("click", function(event) {

myUl.classList.toggle("js-menu");
});



// ADDING COMMENTS;

const commentForm = document.getElementById("comment");
console.log(commentForm);

//event listener on submit

commentForm.addEventListener("submit", function(event) {

// preventing default refreshing 

   event.preventDefault();

   const nameInput = document.getElementById("user-name");
   // console.log(nameInput);

   const nameValue = nameInput.value;

   //creating div for comment
   const commentDiv = document.createElement("div");

   //adding class to div
   commentDiv.classList.add("comment-box");

   // console.log(commentDiv);

//STRUCTURE

   //selecting comments-container
   const commentContainer = document.getElementsByClassName("comments-container")[0];

   console.log(commentContainer);
   //appending new div to comments-container
   commentContainer.append(commentDiv);

//H4

   //creating h4 
   const commentHeader = document.createElement("h4");
   // console.log(commentHeader);
   
   //adding h4 to div with comment
   commentDiv.append(commentHeader); 
   
   
   //creating a string in h4  
   const commentHeaderText = commentHeader.append(`${dateCreator()}, by ${nameValue}`);


//P 
   //selecting comment input
   const commentInput = document.getElementById("comment-text");
   // console.log (commentInput);
   
   const commentTextValue = commentInput.value;
   // console.log(commentTextValue)

   //creating p element
   const commentParagraph = document.createElement("p");
   // console.log(commentParagraph);

   //appending comment text to p 
   commentParagraph.append(commentTextValue);
   // console.log(commentParagraph);

   //adding p to div
   commentDiv.append(commentParagraph); 

} 
);


//date function 

const date = new Date();

const dateCreator = function () {

   
   const day = date.getDate();
   const month = date.toLocaleDateString("default", {month: "long"});
   // console.log(month);
   const year = date.getFullYear();
   const dayOfWeekName = new Date().toLocaleString(
      "default", {weekday: "long"});
   // console.log (dayOfWeekName);

   const nth = function (i) {
      if (i > 3 && i < 21) return "th";
      if (i % 10 === 1) 
         return "st" 
      if (i % 10 === 2) return "nd";
      if (i % 10 === 3) return "rd";
      else return "th"  
   } 

   const currentDate = `${dayOfWeekName} ${month} ${day}${nth(day)}, ${year}`;
   return currentDate;
};





//pop up modal? adding images? image carousel? error handling to be run on form submission?