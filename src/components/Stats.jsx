function Stats(props) {
    const iconStyle = { color: props.icon_color };

    return (
        <div>
            <div className="info-box">
                <div className="box-icon">
                    <i className={props.icon} style={iconStyle}></i>
                </div>

                <div className="box-content">
                    <span className="big">{props.value}</span>
                    {props.title}
                </div>
            </div>  
        </div>
    );
};

export default Stats;