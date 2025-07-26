import React, { useEffect,useState} from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data =  useLoaderData();
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data);
    //         console.log(data);  
    //     })
    // }, []);
    return ( 
        <div className=" bg-gray-600 text-center text-3xl p-4 text-white">
            Githib Followers: {data ? data.followers : 'Loading...'}
            {/* <img src={data.avatar_url} alt="Github Avatar" width={300} /> */}
        </div>
        
        
     );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
    return response.json();
}