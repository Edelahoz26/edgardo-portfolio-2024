import iconPage from "../../assets/images/icon_page_3.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
const LoadingScreen = () => {
  return (
    <div className="bg-[#111418] h-screen w-screen flex justify-center items-center">
      <LazyLoadImage src={iconPage} alt="iconPage"  effect="blur"/>
      <h2 >Loading...</h2>
    </div>
  )
}

export default LoadingScreen
