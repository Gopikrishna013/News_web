import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsContent from './NewsContent';

import Spinner from './Spinner.gif';

function News({ category, setProgress }) {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const pageSize = 15;



  useEffect(() => {
    setInfo([]);
    setLoading(true);
    setPage(1);
    getInfo();
  }, [category,setProgress]);

  async function getInfo() {
    try{
      setProgress(30);
    let ele;
    if (category === 'Home') {
      ele = `https://newsapi.org/v2/top-headlines?country=us&apiKey=cbd4e9fa00ab40dca9e649632868782a&page=${page}&pageSize=${pageSize}`;
    } else {
      ele = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cbd4e9fa00ab40dca9e649632868782a&page=${page}&pageSize=${pageSize}`;
    }

    let res = await fetch(ele);
    let data = await res.json();
    if (data.articles && Array.isArray(data.articles)) {
      setInfo(prevInfo => [...prevInfo, ...data.articles]);
      setPage(prevPage => prevPage + 1);
    }
  }catch (error){
    console.error('Error fetching data:',error);
  }finally{
    setProgress(100);
    setLoading(false);
  }
      // if (data.articles.length < pageSize) {
      //   setLoading(false); 
      // }
    //  else {
    //   setLoading(false); 
    // }
  }

  return (
    <div className='container '>
      <h1 className='text-center'>NEWSWEB - {category} Headlines</h1>

      <InfiniteScroll
        dataLength={info.length}
        next={getInfo}
        hasMore={true}
        loader={<div className='text-center'><img src={Spinner} alt='Loading...' /></div>}
         endMessage={loading ? null : <p className='text-center'>No more articles to load</p>}
        scrollThreshold={0.9}
      >
        <div className='container-fluid'>
        <div className='row'>
          {info.map((x, index) => (
            <div className='col-md-4' key={index}>
              <NewsContent title={x.title.slice(0, 35)} description={x.description} author={x.author} imgUrl={x.urlToImage} url={x.url} date={x.publishedAt} source={x.source.name}/>
            </div>
          ))}
        </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default News;
















   // endMessage={loading ? null : <p className='text-center'>No more articles to load</p>}
        // scrollThreshold={0.9}


// import React, { useEffect, useState } from 'react'
// import Scroll from 'react-infinite-scroll-component'

// import NewsContent from './NewsContent'

// import Spinner from './Spinner.gif'

// function News({category}) {
// const [info, setInfo] = useState([]);

// const [loading, setLoading] = useState(true);

// const [page,setPage] = useState(1)
// const pageSize = 15;


// const categoryNames = {
//   Home: 'Main Headlines',
//   Business: 'Business Headlines',
//   Entertainment: 'Entertainment Headlines',
//   General: 'General Headlines',
//   Health: 'Health Headlines',
//   Science: 'Science Headlines',
//   Sports: 'Sports Headlines',
//   Technology: 'Technology Headlines'
// };
 
// // useEffect (()=>{
// //   getInfo()
// // },[page])


// useEffect(() => {
//   setTimeout(() => {
//     getInfo();
//   }, 1000);
// }, [page,category]);


// async function getInfo(){
//   let ele;
//   if (category === 'Home') {
//     ele = `https://newsapi.org/v2/top-headlines?country=us&apiKey=83a8ecbd7e2841c89981b5fb03c3313d&page=${page}&pageSize=${pageSize}`;
   
// } else {
//     ele = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=83a8ecbd7e2841c89981b5fb03c3313d&page=${page}&pageSize=${pageSize}`;
    
// }


//   // let ele = `https://newsapi.org/v2/top-headlines?country=us&apiKey=83a8ecbd7e2841c89981b5fb03c3313d&page=${page}&pageSize=${pageSize}`;
//   let res = await fetch(ele)
//   let data = await res.json();
//   if(data.articles&&Array.isArray(data.articles)){
//     setInfo(data.articles);
//     setLoading(false);
//   }
// }

// const prev = ()=>{
//   setPage(page-1)
// }

// const nxt = ()=>{
//   setPage(page+1)
// }

//   return (
//     <div className='container-fluid'>
//       <h1 className='text-center'>NEWSWEB- {categoryNames[category]}</h1>

//       {loading ? (
//         <div className='d-flex justify-content-center align-items-center mt-5' style={{ height: '100px' }}>
//           <img src={Spinner} alt='Loading...' />
//         </div>
//       ) : (

//       <div className='row'>
//         {info.map((x)=> (
//           <div className='col-md-3 '>
//             <NewsContent title={x.title.slice(0,35)} description={x.description} author={x.author.slice(0,10)} imgUrl={x.urlToImage} url={x.url} />
//           </div>
//         ))}
//       </div>

// )}

//       <div className= 'd-flex justify-content-between'>
//       <button type="button" class="btn btn-dark " onClick={prev} disabled={page===1}>&larr;Previous</button>
//       <button type="button" class="btn btn-dark" onClick={nxt} disabled={page===6}>Next&rarr;</button>
//       </div>


//     </div>
//   )
// }

// export default News
