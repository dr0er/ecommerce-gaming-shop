import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import ImageDot from "./ImageDot";

export interface ItemDetailsProps {
    
}
 
const ItemDetails: React.SFC<ItemDetailsProps> = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const images= [
        'https://lh3.googleusercontent.com/m_GKijc_aWLO9Qo_0wDAbIxBWX408Lol8kfGmCmbnzWfzd53SQvN8_emGtz2ivR3bnPs0ylKCuEy3J6eY0Sn=w1920-h937-rw',
        'https://lh3.googleusercontent.com/m_GKijc_aWLO9Qo_0wDAbIxBWX408Lol8kfGmCmbnzWfzd53SQvN8_emGtz2ivR3bnPs0ylKCuEy3J6eY0Sn=w1920-h937-rw',
        'https://lh3.googleusercontent.com/m_GKijc_aWLO9Qo_0wDAbIxBWX408Lol8kfGmCmbnzWfzd53SQvN8_emGtz2ivR3bnPs0ylKCuEy3J6eY0Sn=w1920-h937-rw'
    ]

    const handleChangeImage = (e:any) =>{
        setCurrentImage(Number(e.target.dataset.index));
    }

    const createImages = images.map(image=> <Image src={image}/>)


    const createImageDots = images.map((image,index)=> {
        if(currentImage === index){
            return <ImageDot active  key={index} index={index} onClick={handleChangeImage} />
        }else{
            return <ImageDot key={index} index={index} onClick={handleChangeImage} />
        }
    })



    return ( 
        <div className="text-grey-light overflow-hidden" >
            <div className="w-auto h-20 border-2 border-red-500" >
                NAVBAR
            </div>

            <Link to="/" >
                <div className="flex gap-5 items-center ml-5 text-base p-4 font-medium"> 
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Back to mice
                </div>
            </Link>



            <div className={`w-screen h-36 my-3 flex transition duration-300 transform`}
            
            style={{transform:`translateX(-${currentImage *100}%)`}}
            
            >
               {createImages}
            </div>


            <div className="flex justify-center gap-3 w-auto" >
               {createImageDots}
            </div>


        </div>
     );
}
 
export default ItemDetails;