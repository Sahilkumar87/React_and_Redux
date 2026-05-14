let CurrentTime = (() => {

    let time = new Date();
    return  <div className="current-time">
        <p>
        this is the current Date: {time.toLocaleDateString()}
    </p>
    <p>
        this is the current Time: {time.toLocaleTimeString()}
    </p>
    </div>

});

export default CurrentTime;