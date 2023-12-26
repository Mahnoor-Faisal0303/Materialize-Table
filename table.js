 let commentsArray = [];
 fetch('https://jsonplaceholder.typicode.com/comments') //fetch the daata, it returns promise

 .then(response => response.json()) //then( ) is called on the promise returned by fetch, it extracts JSON data, and also returns promise
 .then(data => {                     // another then is called of above promise
    commentsArray = data;
    //console.log(data)  
     const tableContent = document.getElementById('table-content');
     commentsArray.forEach(comments => {
         const row = document.createElement('tr');
         row.innerHTML = `
             <td>${comments.postId}</td>
             <td>${comments.id}</td>
             <td>${comments.name}</td>
             <td>${comments.email}</td>
             <td>${comments.body}</td>
         `;
         tableContent.appendChild(row);
     });
 })
 .catch((error) => {
    console.log("Error in data: ",error);
  });
 
 
