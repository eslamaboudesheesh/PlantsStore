import Head from "next/head";
import HeaderCover from "../component/Home-Component/HeaderCover";
import Layout from "../component/Layout/Layout";
import Navcomponent from "../component/nav-component/navcomponent";
import PlantsList from "../component/plantsList/PlantsList";
import styles from "../styles/Home.module.css";

const Index = () => {
  
  return (
    <>
    <Head>
    <title>Plants Store</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <Layout>
      <HeaderCover/>
      <PlantsList/>
      </Layout>
      </>
  )

} 

export default Index;