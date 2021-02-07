import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import extractPostPortions from '../../utilities/post'
import convertTime from '../../utilities/time'

const appServer = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [thoughts, setThoughts] = useState([])
    const [notes, setNotes] = useState([])

    async function getThoughts() {
        try {
            const result = await axios.get(
                appServer + '/tumblr/thoughts'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const body = post.body
                const date = post.date
                const textSubstrings = extractPostPortions(body)
                const correctTime = convertTime(date)
                return (
                    <div 
                        key={index}
                    >
                        <Card 
                            image={textSubstrings.image}
                            title={post.title}
                            danger={true}
                            text={textSubstrings.body}
                            source={false}
                            cloud={false}
                            link={post.post_url}
                            button="View full post"
                            otherLink={false}
                            otherButton={false}
                            time={correctTime}
                        />
                    </div>
                )
            })
            setThoughts(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    async function getNotes() {
        try {
            const result = await axios.get(
                appServer + '/tumblr/notes'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const body = post.body
                const date = post.date
                const textSubstrings = extractPostPortions(body)
                const correctTime = convertTime(date)
                return (
                    <div 
                        key={index}
                    >
                        <Card 
                            image={false}
                            title={post.title}
                            danger={true}
                            text={textSubstrings.body}
                            source={false}
                            cloud={false}
                            link={post.post_url}
                            button="View full post"
                            otherLink={false}
                            otherButton={false}
                            time={correctTime}
                        />
                    </div>
                )
            })
            setNotes(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getThoughts()
    }, [])
    
    useEffect(() => {
        getNotes()
    }, [])
    
    return (
        <div>
            <div className="posts">
                <div className="thoughts">
                    <h3>Thoughts</h3>
                    {thoughts}
                </div>
                <div className="notes">
                    <h3>Notes</h3>
                    {notes}
                </div>
            </div>
            <a 
                href="https://programming10101.tumblr.com" 
                target="_blank" 
                rel="noreferrer"
            >
                <button
                    className="btn btn-primary center"
                >
                    Read more posts
                </button>
            </a>
        </div>
    )
}

export default Tumblr