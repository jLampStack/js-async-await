/**
 *  PROMISES
 * 
 *  1) Part 1: new Promise( (resolve, reject) => {} )
 *  2) Part 2: Promise.all([])
 *  3) Part 3: fetch()
 */

const posts = [
  { title: 'Post One', body: 'This is post one '},
  { title: 'Post Two', body: 'This is post two' }
];

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
    // console.log(output);
    document.querySelector('#posts').innerHTML = output;
  } , 1000);
}

/**
 *  PART 1: Refactor from callback to promise
 * 
 *  1) Remove callback param from create post e.g.) createPost( post, cb )
 *  2) return a promise 
 *  3) Nest setTimeout in promise
 */

function createPost( post ) {
  return new Promise( (resolve, reject) => { 
    setTimeout( () => {
      posts.push(post);

      const error = true;

      if(!error) {
        resolve();
      } else {
        // catch() is chained after .then when using createPost()
        // scroll down to see
        reject('Error: something went wrong' );
      }
      // cb();
    } , 2000);
  });
}
  

getPosts();

/**
 *  Refactor callback by removing the callback and chaining .then to the post which mimics a callback. .then is used with promises
 * 
 *  @param1 - Post Object
 * 
 * @process - .then
 *  
 */

// Code before refactored using a callback
// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts );

// Refactored code using .then
createPost({ title: 'Post Three', body: 'This is post three' } )
  // mimics a callback
  .then( getPosts )
  // mimics try catch 
  // allows us to use a nicer, cleaner custom err msg 
  // scroll up to view err msg we defined using reject()
  // catch uses a cb function, err is an arbitrary name
  // Posts 4 - 9 use variations, check to see other approaches
  // All are acceptable approaches
  .catch( err => console.log( err )); 
  
  
createPost({ title: 'Post Four', body: 'This is post four' } )
  .then( getPosts )
  .catch( error => console.log( error ));

createPost({ title: 'Post Five', body: 'This is post five' } )
  .then(getPosts)
  .catch( e => console.log( e ));

createPost({ title: 'Post Six', body: 'This is post six' } )
  .then( getPosts )
  .catch( err => console.log( err + ' ... some random text' ));

createPost({ title: 'Post Seven', body: 'This is post seven' } )
  .then( getPosts )
  .catch( e => console.error( Error(e) ));

createPost({ title: 'Post Eight', body: 'This is post eight' } )
  .then( getPosts )
  .catch( e => console.error( Error(e.message) ));

  createPost({ title: 'Post Eight', body: 'This is post eight' } )
  .then( getPosts )
  .catch( e => console.error( Error(e.name )));


/**
 *  Read more about error handling:
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 * 
 */


/**
 *  PART 2: Promise.all( [promise1, promise2, etc.] ) 
 * 
 *  Accepts an array
 */


 const promise1 = Promise.resolve('Hello World');
 const promise2 = 12345;
 const promise3 = new Promise( (resolve, reject) => setTimeout(resolve, 3250, 'Adios Amigo!') );

/**
 *  PART 4: fetch()
 * 
 *  res is common shorthand for response
 * 
 *  IMPORTANT: fetch alone only returns info about the function that is used
 *  to format JSON. It still works but doesn't return the info we're after
 *  To parse it to be readable we must chani .then()
 * 
 */
 const promise4 = fetch
    ('https://jsonplaceholder.typicode.com/users')
        .then(  res => res.json() );
    


 // Takes however long the longest promise is to return all the values which is 3250
 Promise.all([ promise1, promise2, promise3, promise4 ])
  .then( (values) => console.log(values));


  /**
   *  PART 4: fetch
   * 
   *  Need to chain 2 fetches in a row to use fetch
   */


