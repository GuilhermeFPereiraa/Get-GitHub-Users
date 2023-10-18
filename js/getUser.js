//Exports / Imports:
export { getGitHubUsers };
import { getRepositories } from "./getRepositories.js";

const inputUserName = document.querySelector('#inputUserName');
let imgUser = document.querySelector('#profilePicture');
let userName = document.querySelector('#userName');
let userBio = document.querySelector('#userBio');

async function getGitHubUsers() {
  try {
      const resolve = await fetch(`https://api.github.com/users/${inputUserName.value}`).then(res => res.json());
      imgUser.src = resolve.avatar_url;
      userName.textContent = resolve.name;
      userBio.textContent = resolve.bio;

      document.querySelector('main').removeAttribute('id')
      document.querySelector('main').id = 'main';
      getRepositories();
  } catch(err) {
    document.querySelector('main').id = 'errorMain';
    setTimeout(() => {
      alert(`O usuário ${inputUserName.value} não foi encontrado, por favor, observe se o nome escrito está correto e tente novamente!`)
    }, 500)
  }
}

//Pesquisar com o Enter do teclado
export default document.addEventListener('keypress', (ev) => {
  if (ev.key === 'Enter') {
      getGitHubUsers();
  }
})