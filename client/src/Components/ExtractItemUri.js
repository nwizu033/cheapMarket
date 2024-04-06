import { useState, useEffect } from "react";

const ExtractItemUri = ({metaUri}) => {
    const [metadata, setMetadata] = useState();
    const [image, setImage] = useState();

    async function getUri(){

        const  response = await fetch(metaUri);
        let metadatas = await response.json();
        setMetadata(metadatas);
        console.log("inside:",metadata);
        console.log("images:", metadata.images)
      }

      useEffect(() => { 
        getUri()
       }, []);

       return(
        <div>
            {
                metadata?
                    <div>
                        <img className=" rounded-lg" src={metadata.mainImage} width={300} height={300} alt="img"/>
                        <p>{metadata.location}</p> 
                    </div>: null
               

            }
           
        </div>
    )
   
}
export default ExtractItemUri