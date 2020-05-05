/**
 * 
 *  OVERVIEW
 * 
 *  Async Await is a more elegant way to handle responses
 *  It's not a way to write the functions for them so  
 *  createPost() remains the same 
 * 
 */

// Init array to store posts
const posts = [];

/**
 *  
 *  EXACTLY SAME CODE AS BEFORE (PROMISES)
 * 
 *  Writing Async / Await functions remain the same
 *  Only the way we handle the response changes
 *  
 */

function createPost( post ) {
  return new Promise( (resolve, reject) => { 
    setTimeout( () => {
      posts.push(post);

      const error = true;

      if(!error) {
        resolve();
      } else {
        reject('something went wrong' );
      }
    } , 2000);
  });
}
  

/**
 *  
 *  ASYNC / AWAIT  with fetch()
 * 
 *  1) async and await are used together
 *  2) async keyword is required in front of a function declaration to turn it into an async function
 *  3) await waits for an asynchronous process to complete 
 *  4) then() nolonger is chained like it is for a promise
 * 
 */

async function fetchUsers() {
  // Use fetch, we want it stored in a response variable 
  // because we are returning a promise
  const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');

  // The fetch api requires an additional response. The first 
  // response returns only the fetch function and its info, and the
  // second response (this one) parses it into a readable format
  const data = await res.json();

  console.log(data);

  // outputHTML was not taught by Traversy. This is me adding to the project

  let outputHTML = ``;
  
  data.forEach( user => {
    outputHTML += `
        <li>
          <b>ID:</b> ${user.id}<BR>
          <b>Name:</b> ${user.name}<BR>
          <b>Company:</b> ${user.company.name}<BR>
          <b>Email:</b> ${user.email}<BR>
          <b>Website:</b> ${user.company.website}
        
        </li>
    `;
  });
  document.querySelector('#users').innerHTML = outputHTML;
}

// Invoke function to get users list
fetchUsers();