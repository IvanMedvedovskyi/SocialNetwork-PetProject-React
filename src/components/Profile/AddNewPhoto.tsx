import addPhoto from '../../assets/GlobalImage/newPhoto.svg';
import s from '../Profile/Profile.module.scss'

type OnMainPhotoSelectedType = {
    onMainPhotoSelected: () => void
}

const AddNewPhoto:React.FC<OnMainPhotoSelectedType>= ({ onMainPhotoSelected }) => {
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