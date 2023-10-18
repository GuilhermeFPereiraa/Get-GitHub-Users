import { getGitHubUsers } from "./getUser.js";
import defaultEnter from './getUser.js';

//Chamando a função em caso de clique através do mouse
document.querySelector('#submitButton').addEventListener('click', () => getGitHubUsers());