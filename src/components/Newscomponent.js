import React, { useEffect, useState } from 'react'
import News from './News';
import axios from 'axios';
import Spinner from "./Spinner";

function Newscomponent(props) {
    
    const [shariq,setshariq]=useState([]);
    const[lg,setlg]=useState(true);
    const [ttlart,setttlart]=useState('')
 const[c,setc]=useState(1);

 // using axios
    //   componentDidMount()
    let url=`//newsapi.org/v2/everything?q=${props.country}&apiKey=f5b74c03f49640bf8f366e6ba2c5af06`
    const genFunction=()=>
      {
        axios.get(url).then(response=>{
         console.log(response)
    setshariq(response.data.articles)
    setttlart(response.data.totalResults)
   setlg(false);
        }) 

      };
 
   


//    const genFunction = async () => {
       
//         let url = (`//newsapi.org/v2/everything?q=${props.country}&apiKey=f5b74c03f49640bf8f366e6ba2c5af06&page=${c}&pageSize=${props.psize}`)
//         // let url = (`https://newsapi.org/v2/everything?q=${this.props.country}&apiKey=f5b74c03f49640bf8f366e6ba2c5af06&page=${this.c}&pageSize=${this.props.psize}`);

//         // https://newsapi.org/v2/everything?q=bitcoin&apiKey=f5b74c03f49640bf8f366e6ba2c5af06
//         setloading(true);
       
//         const response = await fetch(url);
      
//         const data = await response.json()
      
//        setloading(false);
//         setshariq(data.articles)
//         setttlart(data.totalResults)
//    }
        //   setloading(true);
useEffect(()=>
      { 
         genFunction()
      },[url]);
    //   setloading(false);
       
       const eprev =  () => {
            if (c > 1) setc(c--);
           genFunction();
        }
       const enext = () => {
            setc(c++);
            genFunction();
    
        }

    console.log(shariq)
   
  return (
    <>

                
    <div className="text-center " style={{marginTop:"100px"}}> <h1>Top  Headlines of {props.country} </h1></div>
    <div className="text-center"> <h1>{lg && <Spinner />}</h1></div>
    {/* <div class="nav-item">
        <input type='text' value={this.search} onChange={(e) => this.setState({ search: e.target.value })} />

    </div> */}
    <div className="row  ">
        {
        shariq.map((element) => {
                return (

                    <div className="col-md-4 " key={element.urlToImage}>
                        <News

                            title={element.title}
                            source={element.source.name}

                            description={element.description}
                            imgurl={element.image}
                            newsurl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                        />

                    </div>
                );
            })}

    </div>
    <div class="container d-flex justify-content-around">
        <button disabled={c <= 1} type="button" class="btn btn-dark" onClick={eprev}>&larr;Previous</button>

        <button disabled={c >= Math.ceil((ttlart / props.psize))} type="button" class="btn btn-dark" onClick={enext}>Next&rarr;</button>

    </div>

</>

   
  )
}

export default Newscomponent