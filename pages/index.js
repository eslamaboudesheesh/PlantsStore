import Head from "next/head";
import LandingPage from "../component/Home-Component/LandingPage";
import { NavigationMock , dataDemo} from "../lib/demo/demo"



export async function getStaticProps() {
  const navigationMock = NavigationMock();
  const  dataDemom = await dataDemo();
  return {
    props: {
      navigationMock,
      dataDemom
    }
  }
}



const Index = ({navigationMock,dataDemom}) => {
  console.log(navigationMock , dataDemom)
  return (
    <>
    <Head>
    <title>Plants Store</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  
      <LandingPage/>
      {/* <PlantsList/> */}
      </>
  )

} 

export default Index;