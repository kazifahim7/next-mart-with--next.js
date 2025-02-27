import style from './Banner.module.css'

const Banner = ({title,path}:{title:string,path:string}) => {
    return (
        <div className={`${style.banner} my-3 rounded-3xl flex justify-center items-center`}>
           <div>
                <h2 className='text-2xl text-center font-bold'>{title}</h2>
                <h6 className='text-xl text-center'>{path}</h6>
           </div>
            
        </div>
    );
};

export default Banner;