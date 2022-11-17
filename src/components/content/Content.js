import React from 'react'
import "./content.css"
import RowData from '../../constants/URLS'
import Row from '../row/Row'


function Content() {
  // const [movies, setMovies] = useState([])

  // const getMovies = async() => {
  //   const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated", {
  //     params: {
  //       api_key: ""
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

// 
export default Content