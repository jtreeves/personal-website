import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../elements/Card'

import extractFromPost from '../../utilities/post'
import convertTime from '../../utilities/time'

import Square from '../elements/Square'
import SectionHeading from '../sections/SectionHeading'
import Button from '../elements/Button'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL

function Tumblr() {
    const [posts, setPosts] = useState([])

    async function getPosts() {
        try {
            const result = await axios.get(
                REACT_APP_SERVER_URL + '/tumblr'
            )
            const resultArray = result.data.posts.map((post, index) => {
                const date = post.date
                const correctTime = convertTime(date)
                if (index < 3) {
                    return (
                        <div 
                            key={index}
                            className="resource-blog-card"
                        >
                            

                            
                                <div className="resource-blog-card-body">
                                    <h4>
                                        <a 
                                            href={post.post_url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {post.title}
                                        </a>
                                    </h4>

                                    <div 
                                        dangerouslySetInnerHTML={{
                                            __html: post.description
                                        }} 
                                    />
                                </div>

                                <div className="resource-blog-card-footer">
                                    <div 
                                        className="resource-blog-card-button"
                                    >
                                        <Button 
                                            link={post.post_url}
                                            text="Read more"
                                        />
                                    </div>

                                    <div 
                                        className="resource-blog-card-date"
                                    >
                                        <a 
                                            href={post.post_url} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {correctTime}
                                        </a>
                                    </div>
                                </div>
                            
                        </div>
                        // <div 
                        //     key={index}
                        // >
                            /* <Card 
                                image={false}
                                title={post.title}
                                subtitle={false}
                                lead={false}
                                danger={true}
                                list={false}
                                text={post.description}
                                source={false}
                                cloud={false}
                                link={post.post_url}
                                button="View full post"
                                otherLink={false}
                                otherButton={false}
                                time={correctTime}
                            /> */

                            /* <Square 
                                main={post.title}
                                link={post.post_url}
                                overlay="View Post"
                            /> */
                        /* </div> */
                    )
                } else {
                    return null
                }
            })
            setPosts(resultArray)
        } catch (error) {
            alert(error.response.data.msg)
        }
    }
    
    useEffect(() => {
        getPosts()
    }, [])
    
    return (
        <main>
            <SectionHeading heading="Recent Resources" />
            
            <div className="projects-list">
                {posts}
            </div>

            <div className="blank-space" />

            <div className="center">
                <Button 
                    link="https://jacksonreeves.tumblr.com/"
                    text="Read more posts"
                />
            </div>
        </main>
    )
}

export default Tumblr