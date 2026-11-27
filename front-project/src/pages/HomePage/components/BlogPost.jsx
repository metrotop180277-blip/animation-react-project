import React from "react";
import burgera from '../../../assets/MainPageImage/burgera.jpg'
import ImagePlaceholder from '../../../assets/MainPageImage/ImagePlaceholder.png'
import taco from '../../../assets/MainPageImage/taco.png'

function BlogPost() {
    return (
        <section id="1">
        <h2 className="text35">Blog Post</h2>
        <h1 className="text36"><span className="colortext8">La</span>test News & Blog</h1>
        <div className="divblock1">
            <div className="divblock2">
                <img src={burgera} alt="burger" width="423" height="349" />
                <p className="textcolor">10 February 2022 </p>
                <h1 className="text-block">Pellentesque Non Efficitur Mi <br /> Aliquam Convallis Mi Quis</h1>
                <p className="div-text">Learn More</p>
            </div>
            <div className="divblock3">
                <img src={ImagePlaceholder} alt="pizza" width="423" height="349" />
                <p className="textcolor">10 February 2022 </p>
                <h1 className="text-block">Morbi Sodales Tellus Elit, In <br /> Blandit Risus Suscipit A</h1>
                <p className="div-text">Learn More</p>
            </div>
            <div className="divblock4">
                <img src={taco} alt="taco" width="423" height="349" />
                <p className="textcolor">10 February 2022 </p>
                <h1 className="text-block">Curabitur rutrum velit ac <br /> congue malesuada</h1>
                <p className="div-text">Learn More</p>
            </div>
        </div>
    </section>
    )
}

export default BlogPost