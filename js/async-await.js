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
 *  1) Loops thru posts[] grabbing its properties
 *  2) Stores each post to output
 *  3) Dom renders renders HTML output to screen
 * 
 */

function getPosts() {
  let output = ``;
  setTimeout( () => {
    posts.forEach( post => {
      output += 
        `<li>
          <span>
            ${post.title}
          </span><BR>
          ${post.body}<BR>
          </li>`;
    });
    document.querySelector('#posts').innerHTML = output;
  } , 1000);
}

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

      const error = false;

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
 *  ASYNC / AWAIT 
 * 
 *  1) async and await are used together
 *  2) async keyword is required in front of a function declaration to turn it into an async function
 *  3) await waits for an asynchronous process to complete 
 *  4) then() nolonger is chained like it is for a promise
 * 
 */

async function init() {
  // await for createPost() to complete before we call getPosts()
  await createPost({ title: 'Post One', body: 'This is post one' })
    // Traversy never used the catch but it appears they can be used together
    .catch( e => console.error( 'Error: ' + e ));

  getPosts();
} 

// Invoke function to grab user list
init();