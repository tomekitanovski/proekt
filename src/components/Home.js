import React,{useState,useEffect} from "react";
import axios from "axios";


function Home() {
    const [data,setData] = useState ([])

    const getData = () => {
        setData([])
        axios.get("https://api.spoonacular.com/recipes/search?query=yogurt&apiKey=9bd87c0f8846411eb8007ed51e147ede")
             .then(res => {
                 setData(res.data.results);
             }).catch(err => {
                 console.error(err);
             })
         }

         useEffect(() => {
            getData()
        }, []);

           console.log(data)

    return (
        <div id="home">
            <h1>Home</h1>
            {data.length>0?
            <ul id="" >
                {data.map(x=>{ 
                    return(
                        <li key={x.id}>
                            {x.title}
                        </li>
                    )
                })} </ul>
        :<h2>LoadingRecepies</h2>}
        </div>
    )
}
export default Home