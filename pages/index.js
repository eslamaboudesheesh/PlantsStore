import Head from "next/head";
import LandingPage from "../component/Home-Component/LandingPage";
import Layout from "../component/Layout/Layout";


const Index = () => {
  
  return (
    <>
    <Head>
    <title>Plants Store</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <Layout>
      <LandingPage/>
      {/* <PlantsList/> */}
      </Layout>
      </>
  )

} 

export default Index;