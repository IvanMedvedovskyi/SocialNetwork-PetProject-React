import {useState} from "react";
import {updateStatus} from "../../assets/api/profile-api.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../assets/redux/store";

const Status = (props) => {
    const spanStyles = {
        color: 'var(--black, #000)',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 'normal',
        marginBottom: '35px',
    };
    const dispatch: AppDispatch = useDispatch()
    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatusText] = useState("");

    return (
        <div>
            <div style={{marginBottom: '30px', marginTop: "5px"}}>
                {editMode ?
                    <input
                        placeholder='Press ENTER to change status'
                        autoFocus={true}
                        onBlur={() => {
                            setEditMode(false)
                            setStatusText("")
                        }}
                        onKeyPress={(e) =>{
                            if(e.key === 'Enter') {
                                dispatch(updateStatus(statusText))
                                setEditMode(false)
                                setStatusText("")
                            }
                        }
                        }
                        onChange={(e) =>setStatusText(e.target.value)}
                        value={statusText}/> :
                    <span
                        onDoubleClick={() => {
                            setEditMode(true)
                            setStatusText(props.status)
                        }
                        }
                        style={spanStyles}>@{props.status ? props.status : 'No status'}</span>
                }
            </div>
        </div>
    );
};

export default Status;
