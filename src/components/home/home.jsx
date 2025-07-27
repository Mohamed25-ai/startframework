import homeCss from './home.module.css';
import homeImg from '../../assets/imgs/avataaars (1).svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
export default function Home() {    
    return (
        <>
            <section className={homeCss.home +" d-flex justify-content-center align-items-center mt-5 pt-5 "} >
                <div className=" d-flex justify-content-center align-items-center flex-column py-5 mt-3 ">
                    <div className="homeImg w-75 ">
                        <img src={homeImg} alt="Developerphoto" className='w-100 rounded-circle' />
                    </div>
                    <div className="homeText text-center mt-4">
                        <h1 className={ homeCss.devName+ " text-white"}>START FRAMEWORK</h1>
                        <div className="textIcon">
                            <div className={homeCss.starIcon } >
                                <FontAwesomeIcon icon={faStar} className='text-white' />
                            </div>
                        </div>
                        <p className='text-white mt-2'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </section>
        </>
    )
}