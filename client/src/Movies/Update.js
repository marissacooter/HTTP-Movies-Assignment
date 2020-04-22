import React, {useState ,useEffect} from 'react';
import axios from 'axios';

const intialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
  }

const Update = props => {
    const [movie, setmovie] = useState(initialMovie);
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/movies')
            .then(res => {
                setItem(res.data);
            })
            .catch(err => console.log('The data was not returned', err))
    }, [])
    return (
        <div>
            
        </div>
    )
}


export default Update;