function SocialIcons() {
    return (
        <ul className="social-icons">
            <li className="github-icon">
                <a 
                    href="https://github.com/jtreeves" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-github-square fa-2x" />
                </a>
            </li>
            
            <li id="linkedin-icon">
                <a 
                    href="https://www.linkedin.com/in/jacksonreeves/" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-linkedin fa-2x" />
                </a>
            </li>
            
            <li id="twitter-icon">
                <a 
                    href="https://twitter.com/JTReeves" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-twitter-square fa-2x" />
                </a>
            </li>
            
            <li id="dev-icon">
                <a 
                    href="https://dev.to/jtreeves" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-dev fa-2x" />
                </a>
            </li>
            
            <li id="medium-icon">
                <a 
                    href="https://jtreeves.medium.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="svg-container"
                >
                    <svg 
                        height="28" 
                        width="28" 
                        viewBox="0 0 512 512" 
                        fill="currentColor" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M512,62.747C512,28.116 483.884,0 449.253,0L62.747,0C28.116,0 0,28.116 0,62.747L0,449.253C0,483.884 28.116,512 62.747,512L449.253,512C483.884,512 512,483.884 512,449.253L512,62.747ZM283.546,256.002C283.546,323.438 229.249,378.105 162.275,378.105C95.301,378.105 41,323.438 41,256.002C41,188.566 95.296,133.895 162.275,133.895C229.253,133.895 283.546,188.566 283.546,256.002ZM416.584,256.002C416.584,319.478 389.436,370.957 355.947,370.957C322.457,370.957 295.309,319.478 295.309,256.002C295.309,192.526 322.453,141.048 355.942,141.048C389.432,141.048 416.58,192.509 416.58,256.002L416.584,256.002ZM471,256.002C471,312.861 461.453,358.983 449.674,358.983C437.894,358.983 428.351,312.874 428.351,256.002C428.351,199.13 437.898,153.021 449.674,153.021C461.449,153.021 471,199.126 471,256.002Z" />
                    </svg>
                </a>
            </li>
            
            <li id="tumblr-icon">
                <a 
                    href="https://jacksonreeves.tumblr.com" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-tumblr-square fa-2x" />
                </a>
            </li>
            
            <li id="youtube-icon">
                <a 
                    href="https://www.youtube.com/c/jacksonreeves" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fab fa-youtube-square fa-2x" />
                </a>
            </li>
            
            <li id="mail-icon">
                <a 
                    href="mailto:jr@jacksonreeves.com" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fas fa-envelope-square fa-2x" />
                </a>
            </li>
            
            <li id="resume-icon">
                <a 
                    href="/Jackson_Reeves_Resume.pdf" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <i className="fas fa-external-link-square-alt fa-2x" />
                </a>
            </li>
        </ul>
    )
}

export default SocialIcons