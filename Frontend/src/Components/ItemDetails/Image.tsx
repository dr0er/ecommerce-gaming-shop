export interface ImageProps {
    src:string,
}
 
const Image: React.SFC<ImageProps> = ({src}) => {
    return ( 
        <img className="object-cover w-screen" src={src} alt="" />
     );
}
 
export default Image;