//Exports:
export { getRepositories };

const inputUserName = document.querySelector('#inputUserName');

async function getRepositories() {
  try {
      const resolve = await fetch(`https://api.github.com/users/${inputUserName.value}/repos`).then(res => res.json());
      const spanRepositories = document.querySelector('#repositories');
      spanRepositories.textContent = `Repositórios(${resolve.length}): ${resolve.map(res => ` ${res.name}`)}`;
  } catch(err) {
    document.querySelector('main').id = 'errorMain';
    setTimeout(() => {
      alert(`O usuário ${inputUserName.value} não foi encontrado, por favor, observe se o nome escrito está correto e tente novamente!`)
    }, 500)
  }
}