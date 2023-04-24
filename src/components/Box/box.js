import './box.css';

function Box(props) {
    return (
        <div className='each-box' onClick={props.actionClick}>
            <h5>{props.value}</h5>
        </div>
    );
}

export default Box;
