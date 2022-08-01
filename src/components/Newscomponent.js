import React, { useState } from 'react'
import News from './News';

function Newscomponent(props) {
    const [shariq,setshariq]=useState([]);
    const[loading,setloading]=useState(false);
    const [ttlart,setttlart]=useState('')
 var c=1;
   const genFunction = async () => {
       
        let url = (`https://gnews.io/api/v4/search?q=${props.country}&token=5d4dad04c03e1dc0246c44d90f9a6334&page=${c}&pageSize=${props.psize}`)
        // let url = (`https://newsapi.org/v2/everything?q=${this.props.country}&apiKey=f5b74c03f49640bf8f366e6ba2c5af06&page=${this.c}&pageSize=${this.props.psize}`);
        setloading(true);
       
        const response = await fetch(url);
      
        const data = await response.json()
      
       setloading(false);
        setshariq(data.articles)
        setttlart(data.totalResults)
   }
       
     
        try {
        genFunction();


        } catch (error) {


        }
       const eprev = async () => {
            if (c > 1) c--;
           genFunction();
        }
       const enext = async () => {
            c++;
            genFunction();
    
        }

    console.log(shariq)
  return (
    <>

                
    <div className="text-center " style={{marginTop:"100px"}}> <h1>Top  Headlines of {props.country} </h1></div>
    {/* <div className="text-center"> <h1>{loading && <Spinner />}</h1></div> */}
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
    {/* <div class="container d-flex justify-content-around">
        <button disabled={c <= 1} type="button" class="btn btn-dark" onClick={eprev}>&larr;Previous</button>

        <button disabled={c >= Math.ceil((ttlart / props.psize))} type="button" class="btn btn-dark" onClick={enext}>Next&rarr;</button>

    </div> */}

</>

   
  )
}

export default Newscomponent