import './box.css';
import Xlogo from "./XImage.png";
import Ologo from "./OImage.png";

function Box(props) {
    console.log("value", props.value);
    return (
        <div className='each-box' onClick={props.actionClick}>
            {
                (props.value != null) && (
                    (props.value == 1) ?
                        <img src={Xlogo} alt="not found" width="100px" /> :
                        <img src={Ologo} alt="not found1" width="100px" />
                )

            }
        </div>
    );
}

export default Box;
