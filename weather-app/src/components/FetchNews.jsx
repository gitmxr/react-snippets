import axios from "axios";
import React from "react";
import instance from "../api/axiosInstance";

export const FetchNews = () => {
  const [news, setNews] = React.useState([]);

  const getCurrentWeather = async () => {
    try {
      const response = await instance.get("/top-headlines", {
        params: {
          country: "us",
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.log("Error fetching news:", error);
    }
    // axios
    //   .get(
    //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=c4ac371a834e4515845eda40b0a1ae1d",
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setNews(res.data.articles);
    //   });
    // //  console.log('clicked')
  };

  return (
    <div className="container my-3 d-flex justify-content-center flex-wrap">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-danger" onClick={getCurrentWeather}>
            Fetch News
          </button>
          <div className="contianer ">
            <div className="row">
              {news.map((newsItems, index) => {
                return (
                  <div className="col-12">
                    <div
                      className="card"
                      key={index}
                      style={{
                        width: "18rem",
                        border: "2px solid grey",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src={newsItems.urlToImage}
                        className=" card-img-top"
                        width={"288px"}
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{newsItems.title}</h5>
                        <p className="card-text">{newsItems.description}</p>
                        <a href="#" className="btn btn-primary">
                          Read More...
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
