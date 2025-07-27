import aboutCss from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function About() {
    return (
        <>
            <section className={aboutCss.about + " d-flex justify-content-center align-items-center mt-5 pt-5 "} >
                <div className="container d-flex justify-content-center align-items-center flex-column py-5 mt-5">
                        <header className="mt-5 about-header text-center">
                            <h2 className=' text-center'>ABOUT COMPONENT</h2>
                        </header>
                        <div className="about-star">
                            <div className={aboutCss.starAboutIcon}>
                                <FontAwesomeIcon icon={faStar} className='text-white' />
                            </div>
                        </div>
                        <div className="px-5 px-lg-0 about-caption d-lg-flex gap-4 px-lg-5 mx-lg-4 mb-5 pb-5 pt-4">
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    
                </div>
            </section>
        </>
    )
}