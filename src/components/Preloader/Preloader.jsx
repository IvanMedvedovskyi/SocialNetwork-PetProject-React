import {Puff} from "react-loader-spinner";

const Preloader = () => {
    return (
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{ display: 'flex', alignItems: 'center' }}
            wrapperClass=""
            visible={true}
        />
    )
}

export default Preloader