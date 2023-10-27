const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const box = document.getElementById('box');

btn.addEventListener('click', () => {
  let url = `https://api.github.com/users/${inp.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      box.innerHTML = `
      <li>Login: ${data.login}</li>
      <li>Name: ${data.name}</li>
      <li>Id: ${data.id}</li>
     <li>Followers:  ${data.followers}</li>
     <li>Following: ${data.following}</li>
      `
    })
})
