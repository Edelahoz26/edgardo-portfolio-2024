import iconPage from "../../assets/images/icon_page_3.svg"
const LoadingScreen = () => {
  return (
    <div className="bg-[#111418] h-screen w-screen flex justify-center items-center">
      <img src={iconPage} alt="iconPage"  />
      <h2 >Loading...</h2>
    </div>
  )
}

export default LoadingScreen
