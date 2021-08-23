import { faChevronLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import Image from "./Image";
import ImageDot from "./ImageDot";
import mouse from "../../Assets/mouse.png"
import Review from "./Review";

export interface ItemDetailsProps {
    currentImage:number,
}
 
const ItemDetails = () => {

    const [currentImage, setCurrentImage] = useState(0);

    const [product, setProduct] = useState({
        name : 'Xtrfy M4',
        shortDescription: 'Ultra-light gaming mouse',
        description: 'The M4 is the first ultra-light gaming mouse with an ergonomic, right-handed design – uniquely constructed to weigh less without compromising on shape and feel. Formed by feedback from professional esporters as well as casual gamers, the result is a brand new shape and size.',
        price:'49.99€',
        inStock: '42',
        rating: '4.9',
        images:[
            mouse,
            mouse,
            mouse,
        ],
        reviews:[
        {  
            customer:'Janusz Tracz',
            rate: '4',
            added: '3 days ago',
            opinion:'Mauris finibus lorem sit amet urna congue lacinia. Sed pharetra metus non risus facilisis, sed bibendum orci malesuada. Quisque orci lectus, porta quis malesuada sit amet, consequat quis purus. Vestibulum non ex ac nisi cursus mollis quis sit amet risus. Quisque id hendrerit ligula, quis fermentum libero.',
        },
        {  
            customer:'John',
            rate: '2',
            added: '23 days ago',
            opinion:'Vestibulum non ex ac nisi cursus mollis quis sit amet risus@!@!@!',
        },
        {  
            customer:'Uvuvwevwevwe',
            rate: '5',
            added: 'a year ago',
            opinion:'ok',
        },

        ]
    })


    const swipeable = useSwipeable({
        onSwipedRight: ()=>{ 
            setCurrentImage(prev=>{
                if(prev > 0){
                    return prev - 1
                }else{
                    return prev
                }
            })

        },
        onSwipedLeft: ()=>{ 
            setCurrentImage(prev=>{
                if(prev < product.images.length -1){
                    return prev + 1
                }else{
                    return prev
                }
            })
        },
      });


      if(!product) return false


    const handleChangeImage = (e:any) =>{
        setCurrentImage(Number(e.target.dataset.index));
    }

    const createImages = product.images.map((image,index)=> {
    if(index === currentImage){
        return <Image src={image} key={index} current/>
    }else{
        return <Image src={image} key={index}/>

    }
    
})


    const createImageDots = product.images.map((image,index)=> {
        if(currentImage === index){
            return <ImageDot active  key={index} index={index} onClick={handleChangeImage} />
        }else{
            return <ImageDot key={index} index={index} onClick={handleChangeImage} />
        }
    })

    const createReviews = product.reviews.map((review,index) => <Review data={review} key={index} />)

    return ( 
        <>
            <div className="w-auto h-20 border-2 border-red-500" >
                NAVBAR
            </div>
            <div className="text-grey-light overflow-hidden px-10 flex flex-col gap-4 font-bold max-w-md md: mx-auto" >
    

                <Link to="/" >
                    <div className="flex gap-5 items-center text-base font-medium"> 
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Back to mice
                    </div>
                </Link>



                <div {...swipeable} className={` h-36 my-3 flex transition duration-300 transform`}

                style={{transform:`translateX(-${currentImage *100}%)`}}
                
                >
                {createImages}
                </div>


                <div className="flex justify-center gap-3 w-auto" >
                {createImageDots}
                </div>


              

                <div className="flex flex-col  gap-1">

                    {/* PRODUCT NAME */}


                    <h1 className="text-3xl" >
                        {product.name}
                    </h1>

                    {/* SHORT DESCRIPTION */}

                    <p className="opacity-30" >
                        {product.shortDescription}
                    </p>
                </div>
               

                {/* DESCRIPTION */}

                <p className="tracking-tighter text-base font-bold" >
                    {product.description}
                </p>

                <div className="flex justify-between mt-4">

                    {/* PRICE */}

                    <div className="flex flex-col ">
                        <p className="opacity-30" >Price:</p>
                        <h1 className="text-3xl">{product.price}</h1>
                    </div>


                    {/* RATING */}

                    <div className="flex flex-col justify-between text-right">
                        <p>{product.inStock} in stock</p>
                        <p className="opacity-30"> 
                            Reviews {" "}
                            <span className="opacity-100">{product.rating}</span>
                            /5 
                        </p>
                    </div>

                </div>

                {/* BUY BUTTON */}

                <div className="flex mx-auto rounded-full bg-grey-light p-4 text-white text-xl w-min mt-5 mb-5 shadow ">
                    <FontAwesomeIcon icon={faShoppingCart}/>
                </div>


                {/* REVIEWS  */}

                <div className="flex flex-col" >
                    <h2 className="text-xl" >Reviews ({product.reviews.length})</h2>
                    {createReviews}
                </div>



                {/* FOOTER */}
                <div className="flex flex-col gap-5 my-4">
                     <div className="flex flex-col font-normal" >
                        <h2 className="font-bold mb-3 text-xl">Stragan</h2>
                        <p>About us</p>
                        <p>Cookies</p>
                        <p>Privacy policy</p>
                        <p>Some shit</p>
                    </div>

                    <div className="flex flex-col font-normal" >
                        <h2 className="font-bold mb-3 text-xl">Social media</h2>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>

                </div>
                   



             



            </div>
        </>
     );
}
 
export default ItemDetails;