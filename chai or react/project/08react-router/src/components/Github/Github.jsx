// import { useEffect, useState } from "react";
import {useLoaderData} from "react-router-dom"
// import { GithubInfoLoader } from './GithubInfoLoader';


function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState("")
    // useEffect(() => {
    //     fetch("https://api.github.com/users/Sahilkumar87")
    //     .then(response => response.json())
    //     .then(setData)
    //     console.log(data);

    // }, [data])
  return (
    <div className='text-center m-4 bg-gray-600 
    text-white p-4 text-3xl'>Github Followers : 
    {data.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300}/></div>
    


  )
}



export default Github



// bhoot time laga error ko samjhne me another file me daal diye 
// kyuki react clash generate ker tha or application crash ho rha tha.
// export const githubInfoLoader = async () => {
//     const response = await fetch("https://api.github.com/users/Sahilkumar87")
//     return response.json()
// }

