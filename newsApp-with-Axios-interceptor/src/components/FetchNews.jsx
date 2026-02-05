import React, { useState } from "react";
import TopHeadlines from "../api/newsService";
import "bootstrap/dist/css/bootstrap.min.css";

const FetchNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const getNews = async () => {
    try {
      setLoading(true);
      const articles = await TopHeadlines();
      setNews(articles);
    } catch (error) {
      console.log(error);
    }finally {
      setLoading (false);
    }
  };
  if (loading) {
    return (
      <div className="text-center d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="text-center mb-4">
        <button className="btn btn-danger px-4" onClick={getNews} disabled={loading}>
          Fetch News
        </button>
      </div>

      <div className="row g-4">
        {news.map((newsItems, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={newsItems.urlToImage}
                className="card-img-top"
                alt="News"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{newsItems.title}</h5>
                <p className="card-text">{newsItems.description}</p>

                <a
                  href={newsItems.url}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FetchNews;
