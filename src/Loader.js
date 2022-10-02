import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
    <div className='loaderDiv'>
        <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#003B7C"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
            }}
            wrapperClassName=""
            visible={true}
        />  </div>
);