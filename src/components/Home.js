import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';

const Home = () => {
    const [movies, setMovies] = useState([]);
    var [newsTitleArr,setNewsTitle] = useState([]);
    const currentDate = new Date();
    const yesterdayDate = new Date(currentDate);
    yesterdayDate.setDate(currentDate.getDate() - 1);
    const year = yesterdayDate.getFullYear(); // 년도
    const month = String(yesterdayDate.getMonth() + 1).padStart(2, "0"); // 월 (0부터 시작하므로 +1을 해야 실제 월을 얻을 수 있고, 두 자리로 표현)
    const day = String(yesterdayDate.getDate()).padStart(2, "0"); // 일 (두 자리로 표현)
    const formattedDate = `${year}${month}${day}`;
    
    useEffect(() => {
    const movieApiKey = "bb29c5f11e4cb95242ccf1478645e826";
    const movieApiUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${movieApiKey}&targetDt=${formattedDate}&itemPerPage=10`;
    const newsApiUrl = `/v1/search/news.json?query=${encodeURI('이슈')}$display=10`;
    
      fetch(movieApiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.boxOfficeResult?.dailyBoxOfficeList) {
            setMovies(data.boxOfficeResult.dailyBoxOfficeList);
          } else {
            console.error("영화 순위를 가져오는데 실패하였습니다.");
          }
        })
        .catch((error) => {
          console.error("API 요청 에러:", error);
        });

        fetch(newsApiUrl,  {
          "method": "GET",
          "headers": {
                "X-Naver-Client-Id": "alLrdRyJQHsvdPk6zLNo",
                "X-Naver-Client-Secret": "qYhMukKp7a"
          }})
          .then(response=>response.json())
          .then((data)=>{
            
            const items = data.items;
            console.log(items);
            setNewsTitle(items);
            
          })
          .catch(error=>console.error("API 요청 에러:", error));
    }, []);
  

    return (
      <>
        <h4 className="homeHeader">Blog Home</h4>
        <div className="movieDiv">
          <Card variant='outlined' className='homeCard'>
          <h5>오늘의 영화 순위</h5>
            {movies.map((movie) => (
              <p key={movie.movieCd}>
                {movie.rank}. {movie.movieNm}
              </p>
            ))}
            </Card>
        </div>
        <div className="issueDiv"><Card className='homeCard' variant='outlined'>
          <h5>오늘의 뉴스</h5>
              {newsTitleArr.map((news)=>(
                <p><a href={news.link}>{news.title}</a></p>
              ))}
        </Card></div>
        <div className="weatherDiv"><Card className='homeCard' variant='outlined'><h5>오늘의 날씨</h5></Card></div>
        </>
    );
  };

  export default Home;