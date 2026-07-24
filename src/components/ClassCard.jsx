function ClassCard(props) {
    let button;
    if (props.classData.slots > 0) {
        button = (
            <button 
                onClick={function () {
                    props.bookClass(props.classData.id);
                }}>
                Book
            </button>
        );
    } else {
        button = (
            <p>Fully Booked</p>
        );
    }

    return (
        <div className="card">
            <h2>{props.classData.name}</h2>
            <p>Trainer:</p> {props.classData.trainer}
            <p>Available Slots:</p> {props.classData.slots}
            {button}
        </div>
    );
}

export default ClassCard;