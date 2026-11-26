import frame1 from "../images/IMG_3293.PNG";
import frame2 from "../images/IMG_3295.PNG";
import frame3 from "../images/IMG_6443.JPG.jpeg";

function PhotoGallery(){
   return(
    <div>
        <h1>Photo Gallery</h1>
       <img src={frame1} alt="Frame 1" width="300" />
       <img src={frame2} alt="Frame 2" width="300" />
       <img src={frame3} alt="Frame 3" width="300" />
    </div>
   );

}

export default PhotoGallery;