import portfolioCss from './portfolio.module.css';
import img1 from '../../assets/imgs/poert1.png';
import img2 from '../../assets/imgs/port2.png';
import img3 from '../../assets/imgs/port3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
export default function Portfolio() {
    return (
        <>
            <section className=''>
                <header className='portfolio-header pt-5 mt-5 text-center'>
                    <h2 className='mt-4'>PORTFOLIO COMPONENT</h2>
                </header>
                <div className="text-icon  mt-3">
                    <div className={portfolioCss.starPortfolioIcon + " text-center "} >
                        <FontAwesomeIcon icon={faStar} className='' />
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row g-1 ">
                        <div className="img-container col-md-4 p-2 p-lg-3  position-relative  rounded-2 ">
                            <div className="img-content w-100 rounded-2">
                                <img src={img1} alt="" className='w-100 rounded-3' />
                            </div>
                                <div data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-whatever="@getbootstrap"
                                className="p-2  p-lg-3  position-absolute  top-0 start-0 bottom-0 end-0">
                                <div className="plus-icon plus-img w-100 h-100  d-flex justify-content-center align-items-center rounded-2" >
                                    <FontAwesomeIcon icon={faPlus} className='fa-7x text-white' />
                                </div>
                            </div>
                            {/* //////////////////////////////////// */}
                            <div className="modal fade  " id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="new-width modal-dialog  h-100 d-flex align-items-center">
                                    <div className="modal-content ">
                                        
                                        <div className="modal-body p-0">
                                            <img src={img1} alt="" className='w-100' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-container col-md-4 p-2 p-lg-3 position-relative p-0 rounded-2">
                            <div className="img-content w-100 rounded-2">
                                <img src={img2} alt="" className='w-100 rounded-3' />
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap"
                                className="p-2 p-lg-3  position-absolute  top-0 start-0 bottom-0 end-0 ">
                                <div className="plus-icon plus-img w-100 h-100  d-flex justify-content-center align-items-center rounded-2" >
                                    <FontAwesomeIcon icon={faPlus} className='fa-7x text-white' />
                                </div>
                            </div>
                            {/* //////////////////////////////////// */}
                            <div className="modal fade  " id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="new-width modal-dialog  h-100 d-flex align-items-center">
                                    <div className="modal-content ">
                                        
                                        <div className="modal-body p-0">
                                            <img src={img2} alt="" className='w-100' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-container col-md-4 p-2 p-lg-3 position-relative p-0 rounded-2">
                            <div className="img-content w-100 rounded-2">
                                <img src={img3} alt="" className='w-100 rounded-3' />
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal3" data-bs-whatever="@getbootstrap"
                                className="p-2 p-lg-3  position-absolute  top-0 start-0 bottom-0 end-0 ">
                                <div className="plus-icon plus-img w-100 h-100  d-flex justify-content-center align-items-center rounded-2" >
                                    <FontAwesomeIcon icon={faPlus} className='fa-7x text-white' />
                                </div>
                            </div>
                            {/* //////////////////////////////////// */}
                            <div className="modal fade  " id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="new-width modal-dialog  h-100 d-flex align-items-center">
                                    <div className="modal-content ">
                                        
                                        <div className="modal-body p-0">
                                            <img src={img3} alt="" className='w-100' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-container col-md-4 p-2 p-lg-3 position-relative p-0 rounded-2">
                            <div className="img-content w-100 rounded-2">
                                <img src={img1} alt="" className='w-100 rounded-3' />
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal4" data-bs-whatever="@getbootstrap"
                                className="p-2 p-lg-3  position-absolute  top-0 start-0 bottom-0 end-0 ">
                                <div className="plus-icon plus-img w-100 h-100  d-flex justify-content-center align-items-center rounded-2" >
                                    <FontAwesomeIcon icon={faPlus} className='fa-7x text-white' />
                                </div>
                            </div>
                            {/* //////////////////////////////////// */}
                            <div className="modal fade  " id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="new-width modal-dialog  h-100 d-flex align-items-center">
                                    <div className="modal-content ">
                                        
                                        <div className="modal-body p-0">
                                            <img src={img1} alt="" className='w-100' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-container col-md-4 p-2 p-lg-3 position-relative p-0 rounded-2">
                            <div className="img-content w-100 rounded-2">
                                <img src={img2} alt="" className='w-100 rounded-3' />
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal5" data-bs-whatever="@getbootstrap"
                                className="p-2 p-lg-3  position-absolute  top-0 start-0 bottom-0 end-0 ">
                                <div className="plus-icon plus-img w-100 h-100  d-flex justify-content-center align-items-center rounded-2" >
                                    <FontAwesomeIcon icon={faPlus} className='fa-7x text-white' />
                                </div>
                            </div>
                            {/* //////////////////////////////////// */}
                            <div className="modal fade  " id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="new-width modal-dialog  h-100 d-flex align-items-center">
                                    <div className="modal-content ">
                                        
                                        <div className="modal-body p-0">
                                            <img src={img2} alt="" className='w-100' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="img-container col-md-4 p-2 p-lg-3 position-relative p-0 rounded-2">
                            <div className="img-content w-100 rounded-2">
                                <img src={img3} alt="" className='w-100 rounded-3' />
                            </div>
                            <div data-bs-toggle="modal" data-bs-target="#exampleModal6" data-bs-whatever="@getbootstrap"
                                className="p-2 p-lg-3  position-absolute  top-0 start-0 bottom-0 end-0 ">
                                <div className="plus-icon plus-img w-100 h-100  d-flex justify-content-center align-items-center rounded-2" >
                                    <FontAwesomeIcon icon={faPlus} className='fa-7x text-white' />
                                </div>
                            </div>
                            {/* //////////////////////////////////// */}
                            <div className="modal fade  " id="exampleModal6" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="new-width modal-dialog  h-100 d-flex align-items-center">
                                    <div className="modal-content ">
                                        
                                        <div className="modal-body p-0">
                                            <img src={img3} alt="" className='w-100' />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}