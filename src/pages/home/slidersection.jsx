

const SliderSection = () => {

    return (
        <div className="slider-area position-relative slider-bg1">
            <div className="slider-active">
                {/* <!-- Single Slider --> */}
                <div className="single-slider slider-height d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInUp" data-delay="0.2s">Build audience and grow your brand</h1>
                                    <p data-animation="fadeInUp" data-delay="0.4s">Content marketing is nothing but offering users value.
                                    It is not just about traffic minion customers.</p>
                                    <a href="#" className="btn_10 hero-btn" data-animation="fadeInUp" data-delay="0.7s">Explore Us</a>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
            <div className="hero-img">
                <img src="assets/img/hero/hero-img.png" alt=""/>
            </div>
            <div className="hero-shape">
                <img src="assets/img/gallery/hero-shape.png" alt=""/>
            </div>
        </div>
    );

}

export default SliderSection;