export interface ImageDotProps {
    active?:boolean;
    onClick:any;
    index:number;
    
}


 
const ImageDot: React.SFC<ImageDotProps> = ({active, onClick,index}) => {


    
    return ( 
        <div onClick={onClick} data-index={index} className={`bg-gray-300 rounded h-2 w-2 transition duration-300 ease-linear ${active && 'w-4 bg-gray-600'}`} >
            
        </div>
     );
}
 
export default ImageDot;