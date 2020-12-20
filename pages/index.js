import Head from "next/head";
import Layout from "../component/Layout/Layout";
import Navcomponent from "../component/nav-component/navcomponent";
import PlantsList from "../component/plantsList/PlantsList";
import styles from "../styles/Home.module.css";

const Index = () => {
  
  return (
    <>
    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

    <Layout>
      <PlantsList/>
      </Layout>
      </>
  )

} 

export default Index;