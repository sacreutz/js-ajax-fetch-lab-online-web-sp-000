const baseURL = 'https://api.github.com';
const user = 'sacreutz';

const token = '';
 
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/sacreutz/${repo}/forks`, 
  {
    method: 'POST',
    headers: {
      Authorization: `token ${token}`
    }
    
    }
  ).then(res => showResults(res));
}

function showResults(json) {
  //use this function to display the results from forking via the API
  let json2 = json.html_url
  let results = document.getElementById("results")
  results.appendChild(json)

  var a = document.createElement('a');
  var linkText = document.createTextNode("json");
  a.appendChild(linkText);
  a.title = "json";
  a.href = json2;
  document.body.appendChild(a);
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
