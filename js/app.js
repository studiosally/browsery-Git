window.onload = function() {

let xhr = ""

document.getElementById("profile").addEventListener('click', gitprofileRequest)

function gitprofileRequest() {

    var xhr = new XMLHttpRequest()

    username = document.getElementById("username").value
    var userURL = "https://api.github.com/users/" + username

    xhr.open('GET', userURL)
    xhr.send(null)

    xhr.onreadystatechange = function() {
        var DONE = 4
        var OK = 200

        if (xhr.readyState === DONE) {
            if (xhr.status === OK){
                var profile = JSON.parse(xhr.responseText)

                fullName.innerHTML = profile.name
                user.innerHTML = profile.login
                bio.innerHTML = +profile.bio
                followers.innerHTML = 'Followers' + ' ' + profile.followers
                follows.innerHTML = 'Following' + ' ' + profile.following
                var img = profile.avatar_url
                document.getElementById('profile-img').style = `background-image: url("${img}")`
                console.log(profile.name)
                console.log(profile.login)
                console.log(profile.bio)
                console.log(profile.followers)
                console.log(profile.following)
                console.log(profile.avatar_url)

}
              else if (xhr.status === 404) 
                alert("Ups!! We could not find the profile you're searching. Try again with an exisiting Git user")
        } else {
            console.log('Status: ' + xhr.status)
        }

    }




  }

document.getElementById("btn").addEventListener('click', gitReposRequest)

function gitReposRequest() {

    xhr = new XMLHttpRequest()
    let username = document.getElementById("username").value
    let reposURL = `https://api.github.com/users/${ username }/repos`

    xhr.open('GET', reposURL)
    xhr.send(null)

    xhr.onreadystatechange = function() {
        let DONE = 4
        let OK = 200
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                let gitdata = JSON.parse(xhr.responseText)
                gitresults.innerHTML = gitdata.map((repo) => `<li>${ repo.name }</li>`).join('')
               
            } else if (xhr.status === 404)
                alert("Ups!! We could not find the profile you're searching. Try again with an exisiting Git user")
        } else {
            console.log('Status: ' + xhr.status)
        }
    }


}

}

