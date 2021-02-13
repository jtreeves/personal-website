function About() {
    return (
        <div>
            <h2>About</h2>

            <div className="contains-columns">
                <div className="left-column">
                    <img 
                        src="/images/headshot.jpg" 
                        alt="Jackson Reeves" 
                        className="headshot"
                    />
                </div>
                
                <div className="right-column">
                    <p className="card card-body">
                        In college, I was a humanities major, and that taught me how to think and how to express myself coherently. As a journalist, I learned how to deliver on deadline and internalize specific style guidelines. As a marketer, I learned how to track website traffic and how to customize specific content for different platforms and clientele. As a tutor, I learned how to guide others and got experience with challenges that arise in one-on-one situations in which one party knows drastically more than the other. Additionally, I think I can explain anything to a ten-year-old, which I think means that I should be able to explain anything that I understand to anyone. Now, I hope to parlay all of those skills to become a programmer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About