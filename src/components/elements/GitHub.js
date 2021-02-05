import { useState, useEffect } from 'react'
import axios from 'axios'

const appServer = process.env.REACT_APP_SERVER_URL
const link = 'https://github.com/'

function GitHub() {
    const [commits, setCommits] = useState([])

    async function getCommits() {
        try {
            const result = await axios.get(
                appServer + '/github'
            )
            const resultArray = result.data.commits.map((commit, index) => {
                if (commit.payload.commits) {
                    return (
                        <div key={index}>
                            COMMIT: {commit.payload.commits[0].message}
                            DATE: {commit.created_at}
                            LINK: {link}{commit.repo.name}
                        </div>
                    )
                } else {
                    return null
                }
            })
            setCommits(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }

    useEffect(() => {
        getCommits()
    }, [])
    
    return (
        <div>
            {commits}
        </div>
    )
}

export default GitHub