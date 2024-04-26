import React from 'react'
import './NewsContent.css'

function NewsContent(props) {
  const {title, description, imgUrl, url, author, date, source} = props;
  return (
    <div>
      <div className="card mt-4 mx-4" style={{width: "18rem;"}}>
        <div style={{display:'flex', justifyContent:'flex-end', right:'0', position:'absolute'}}><span class="badge rounded-pill bg-danger">{source}</span></div>

         <img src={!props.imgUrl?'https://d.newsweek.com/en/full/881613/33-bbc-breaking-news.jpg':props.imgUrl} className="card-img-top" height={'170px'} alt="..."/>

            <div className="card-body">
              <h5 className="card-title">{title}...</h5>

              <p className="card-text">{!props.description?' Get the latest news and breaking news updates on Business, Politics, Sports, Entertainment news around the world from The Hindu.'.slice(0,50):props.description.slice(0,50)}..</p>

              <p className='headline'><small>By {!props.author?'Gopikrishna'.slice(0,10):props.author.slice(0,9)} on{new Date(date).toGMTString()}</small> ..</p>
              
              <a href={url} target='_blank' className="btn btn-primary" >Read more</a>
            </div>
      </div>
    </div>
  )
}

export default NewsContent





















// import React, { useEffect, useState } from 'react';

// function NewsContent(props) {
//   const { title, description, imgurl } = props;
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     fetch('https://newsapi.org/v2/top-headlines?apiKey=0b6165cb6cb14f6c9cdbb44de489296b&q=health')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => setArticles(data.articles))
//       .catch(error => console.error('Error fetching articles:', error));
//   }, []);

//   return (
//     <div className='container-fluid mt-3'>
      {/* <div className='row'>
        <div className="card mx-" style={{ width: "18rem" }}>
          <img src={'https://i.cbc.ca/1.7139936.1710131524!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/2074757416.jpg'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Read More..</a>
          </div>
        </div>
      </div> */}

//       {articles.map(article => (
      
//         <div key={article.title}>
//           {/* <h6>{article.title}</h6> */}
//           {/* <p>{article.description}</p> */}

//           <div className='row'>

//           <div className="card mx-1 mt-3" style={{ width: "25rem" }}>
//           <img src={article.urlToImage} className="card-img-top" alt="" />
//           <div className="card-body">
//             <h5 className="card-title">{article.title}</h5>
//             <p className="card-text">{article.description}</p>
//             <a href="#" className="btn btn-primary">Read More..</a>
//           </div>
//         </div>
//         </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default NewsContent;

