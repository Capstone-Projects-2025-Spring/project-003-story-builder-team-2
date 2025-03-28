import React from "react";
 // agent card component needs logic to fetch image from respective agent choice
 // needs logic such that when pressed it will display its respective story/generation
const fetchImages = async () => {
  try {
    const docRef = doc(db, "FrontendImages", );
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data().imageUrl;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
const AgentCard = () => {
const [imageUrl, setImageUrl] = useState(null);
   useEffect(() => {
       const loadImage = async () => {
         const url = await fetchImages();
         setImageUrl(url);
       };
       loadImage();
     }, []); 
    return(

    )
}