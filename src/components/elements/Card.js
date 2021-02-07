function Card(props) {
    return (
        <div 
            className="card card-lock card-connect"
        >
            {props.image !== false && 
                <img 
                    className="card-img-top" 
                    src={props.image}
                    alt={props.title}
                />
            }
            <div 
                className="card-body"
            >
                {props.title !== false &&
                    <h4
                        className="card-title"
                    >
                        {props.title}
                    </h4>
                }
                {props.danger
                    ? <div 
                        dangerouslySetInnerHTML={{
                            __html: props.text
                        }} 
                    />
                    : props.text
                }
                <div
                    className="blockquote-footer"
                >
                    {props.source}
                </div>
            </div>
            <div 
                className="card-footer"
            >
                <a 
                    href={props.link} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <button 
                        className="btn btn-primary float-left"
                    >
                        {props.button}
                    </button>
                </a>
                <div 
                    className="float-right text-muted card-footer-connect"
                >
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Card