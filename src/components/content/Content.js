import React from 'react'
import "./content.css"
import RowData from '../../constants/URLS'
import Row from '../row/Row'


function Content() {
  // const [movies, setMovies] = useState([])

  // const getMovies = async() => {
  //   const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
  //     params: {
  //       api_key: "3d17118668a367ee70a12ad05e56d8f4"
  //     }
  //   })
  //   setMovies(response.data.results);
  // }

  // useEffect(() => {
  //   getMovies()
  // }, [])


  return (
    <div className='content-wrapper'>
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}

// 3d17118668a367ee70a12ad05e56d8f4
export default Content