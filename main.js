import {textInput} from '/index.js';
console.log(textInput);

var colors = ['#FFE146', '#6A1577'];
var languageIcons = ['/public/images/icons/javascript_icon_130900.png', '/public/images/icons/csharpicon.png']

function getDownloadLink(repoName) {
    return `https://codeload.github.com/gabeps2/${repoName}/zip/master`
}

var getBox = document.querySelector('#repositories')
var newBox = getBox.innerHTML;


class Api {
    static async getUserInfo(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response;
    }
    static async getRepoInfo(username) {
        try {
            const repositoryData = await axios.get(` https://api.github.com/users/${username}/repos`);
            return repositoryData;
        } catch (error) {
            console.warn('Algo deu errado!')
        }
    }
}

async function getUserData() {
    const userData = await Api.getUserInfo('gabeps2');
    const repoData = await Api.getRepoInfo('gabeps2')

    let avatarImg = document.querySelector('#avatar-img')
    let newImg = document.createElement('img');
    newImg.setAttribute('src', repoData.data[0].owner.avatar_url)
    avatarImg.appendChild(newImg);

    for (var i = 0; i < repoData.data.length; i++) {
        let repoAtual = document.querySelectorAll('.box')[i];
        let imgLanguages = document.querySelectorAll('.img-languages')[i];
        let dateDiv = document.querySelectorAll('.date')[i];
        let nameDiv = document.querySelectorAll('.repository-name')[i]
        let downloadDiv = document.querySelectorAll('.download')[i];
        let descriptionDiv = document.querySelectorAll('.description')[i];



        if (repoData.data[i].language == "C#") {

            //Definindo imagem e cor de fundo
            let newImg = document.createElement('img');
            document.querySelectorAll('.box')[i].style.backgroundColor = colors[1];

            newImg.setAttribute('src', languageIcons[1]);
            imgLanguages.appendChild(newImg);
        } else if (repoData.data[i].language == "JavaScript") {
            let newImg = document.createElement('img');
            document.querySelectorAll('.box')[i].style.backgroundColor = colors[0];

            newImg.setAttribute('src', languageIcons[0]);
            imgLanguages.appendChild(newImg);
        }

        //Definindo a data
        let newP = document.createElement('p');
        newP.appendChild(document.createTextNode(repoData.data[i].created_at));
        dateDiv.appendChild(newP)

        //Definindo o nome
        let textName = repoData.data[i].name
        nameDiv.appendChild(document.createTextNode(textName));
        nameDiv.setAttribute('href',repoData.data[i].html_url)
        nameDiv.setAttribute('target','_blank')

        //Definindo link para dowload
        downloadDiv.setAttribute('href', getDownloadLink(textName))

        //Definindo a descrição
        let newPDescription = document.createElement('p');
        newPDescription.appendChild(document.createTextNode(repoData.data[i].description));
        descriptionDiv.appendChild(newPDescription)


        if (i < repoData.data.length - 2) {
            getBox.innerHTML += newBox;
        }

        console.log(repoData)
    }
}

getUserData();



