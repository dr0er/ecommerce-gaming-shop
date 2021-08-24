export interface ImageWrapperProps {
    swipeable:object,
    currentImage:number,
    createImages:any,
    createImageDots:any,
}
 
const ImageWrapper: React.SFC<ImageWrapperProps> = ({swipeable,currentImage,createImages,createImageDots}) => {
    return ( 
        <>
            <div {...swipeable} className={` h-36 my-3 flex transition duration-300 transform`}

            style={{transform:`translateX(-${currentImage *100}%)`}}
            
            >
            {createImages}
            </div>


            <div className="flex justify-center gap-3 w-auto" >
            {createImageDots}
            </div>
        </>
     );
}
 
export default ImageWrapper;