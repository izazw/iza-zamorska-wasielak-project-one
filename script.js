//vertical  menu

const burgerMenu = document.querySelector(".main-nav i");
const myUl = document.querySelector(".main-nav ul");

   // event listener
const slidingTrigger = burgerMenu.addEventListener("click", function(event) {

myUl.classList.toggle("js-menu");
});



// ADDING COMMENTS;

const commentForm = document.getElementById("comment");

//event listener on submit

commentForm.addEventListener("submit", function(event) {

   // preventing default refreshing 
   event.preventDefault();
   
   //selecting comments-container
   const commentContainer = document.getElementsByClassName("comments-container")[0];
   
   //building html structer of comment
   const commentDiv = commentDivConstruction();

   //building h4 in comment
   const nameInput = document.getElementById("user-name")
   
   const nameValue = nameInput.value;
   // console.log(nameInput);
   nameInput.value = "";

   const h4 = commentDiv.getElementsByTagName("h4")[0];
   h4.append(`${dateCreator()}, by ${nameValue}`);

   //building p in comment
   const p = commentDiv.getElementsByTagName("p")[0];
   console.log(p);
   
   //selecting comment input
   const commentInput = document.getElementById("comment-text");
   console.log (commentInput);
   
   const commentTextValue = commentInput.value;
   console.log(commentTextValue);
   
   //resetting value
   commentInput.value = "";

   //appending comment text to p 
   p.append(commentTextValue);

   //resetting email value
   //building h4 in comment
   const emailInput = document.getElementById("user-email");
   
   const emailValue = emailInput.value;
   // console.log(nameInput);
   emailInput.value = "";



   //appending cinnebt div to the comment container
   commentContainer.append(commentDiv);

} 
);

//div comment construction 
const commentDivConstruction = function () {

   //creating comment img div


   const commentImgDiv = document.createElement("div");
   commentImgDiv.classList.add("comment-img");

   //creating and adding img div content

   const commentImage = document.createElement("img");
   commentImage.src = "https://placebear.com/100/100";
   commentImage.alt = "user photo placeholder"
   // console.log(commentImage);
   commentImgDiv.append(commentImage);


   //creating comment text div 

   const commentText = document.createElement("div");
   commentText.classList.add("comment-text");
   const h4 = document.createElement("h4");
   const p = document.createElement("p");
   commentText.append(h4);
   commentText.append(p);
   // console.log(commentText); 
   commentImgDiv.append(commentText);

   //creating comment div containing comment text div and comment img div
   const commentDiv = document.createElement("div");
   commentDiv.classList.add("comment-box");
   commentDiv.append(commentImgDiv);
   commentDiv.append(commentText);

   return commentDiv;
};





const dateCreator = function () {

   const date = new Date();
   
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





//alternative function commentDivConstruction


   //creating comment-box container v1 


   // const commentDiv = document.createElement("div");
   // commentDiv.classList.add("comment-box");

   // commentDiv.insertAdjacentHTML("afterbegin", 
   // `<div class="comment-img">
   //    <img 
   //       src="https://placebear.com/100/100" 
   //       alt="user profile photo">
   //    </div>
   //    <div class="comment-text">
   //       <h4></h4>
   //       <p></p>
   // </div>`)

   // return commentDiv;




