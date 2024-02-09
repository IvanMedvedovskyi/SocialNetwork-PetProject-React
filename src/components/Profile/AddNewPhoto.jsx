import addPhoto from '../../assets/GlobalImage/newPhoto.svg';
import s from '../Profile/Profile.module.scss'

const AddNewPhoto = ({ onMainPhotoSelected }) => {
    return (
        <>
            <label>
                <input type="file" onChange={onMainPhotoSelected}/>
                <img className={s.addPhotoImg} src={addPhoto} alt="addPhoto"/>
            </label>
        </>
    )
}

export default AddNewPhoto;