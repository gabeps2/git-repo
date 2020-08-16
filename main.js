
var colors = '#FFE76A'
var javascriptIcon = `/public/images/icons/csharpicon.jpg`


class Api {
    static async getUserInfo(username) {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        const repositoryData = await axios.get(` https://api.github.com/users/${username}/repos`)

        console.log(response);
    }
}



Api.getUserInfo('gabeps2');