import React, {useState ,useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';

const intialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
  }

const Update = props => {
    const {push} = useHistory();
    const [movie, setmovie] = useState(initialMovie);
    const {id} = useParams();
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/movies/${id}')
            .then(res => {
                setItem(res.data);
            })
            .catch(err => console.log('The data was not returned', err))
    }, [id]);

    const changeHandler = e => {
        e.persist();
       
        setmovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios
            .put('http://localhost:5000/api/movies/${id}', movie)
            .then(res => {
                props.setmovie(res.data);
                push(`/`);
            })
            .catch(err => console.log('The data was not returned', err))
    };

    return (
        <div>
            <h2>Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    onChange={changeHandler}
                    placeholder="id"
                    value={movie.id}
                />
                  <input
                    type="text"
                    name="title"
                    onChange={changeHandler}
                    placeholder="title"
                    value={movie.title}
                />
                  <input
                    type="text"
                    name="director"
                    onChange={changeHandler}
                    placeholder="director"
                    value={movie.director}
                />
                  <input
                    type="text"
                    name="metascores"
                    onChange={changeHandler}
                    placeholder="metascores"
                    value={movie.metascores}
                />
                  <input
                    type="text"
                    name="stars"
                    onChange={changeHandler}
                    placeholder="stars"
                    value={movie.stars}
                />

            </form>
           
            
        </div>
    )
}


export default Update;