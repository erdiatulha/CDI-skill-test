import Axios from "axios";
import React, { useState } from "react";
import './alphabetSort.css'

function AlphabetSortApp() {
    const [word, setWord] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("word", word)
        Axios.post('http://localhost:8000/digital/castellum/api/alphabet/sort', {
            words: 'hai'
        })
            .then(res => {
                console.log(res.data.result)
            })
            .catch(err => {
                console.log(err.response)
            })
    }
    return (
        <div className="center">
            <div className="alphasort-card">
                <h2>Alphabet Sort</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="input-string"
                        placeholder="input your words here"
                        type="text"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}

                    />
                    <input
                        className="sort-btn"
                        type="submit"
                        value="sort word"
                    />
                </form>

            </div>

        </div>
    );
};

export default AlphabetSortApp;



