export interface ImageProps {
    src:string,
    current?:boolean,
}
 
const Image: React.SFC<ImageProps> = ({src,current}) => {
    return ( 
        <img className={`object-cover w-screen transition duration-300 ${!current && "opacity-0"}`} src={src} alt="" />
     );
}
 
export default Image;