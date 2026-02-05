import axiosInstance from "./axios-Instance";


const TopHeadlines = async() =>{

    const response = await axiosInstance.get("/top-headlines",

        {
            params: {
                country: "us"
            }

        }
    );
    return response.data.articles;
}

export default TopHeadlines;
