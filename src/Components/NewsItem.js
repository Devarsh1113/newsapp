import React from "react";

const NewsItem =(props)=>{
  
    let {title, description,imageUrl,newsUrl,date,author} = props;
    return (
      <div className='block my-3'>
        <div className="card" >
          <img src={imageUrl?imageUrl:"https://www.financialexpress.com/wp-content/uploads/2024/02/mathew-macquarrie-lzcKZlVPYaU-unsplash-1.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-body-secondary"> {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
             Read More..
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
