const GithubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Sahilkumar87")
    return response.json()
}


export default GithubInfoLoader