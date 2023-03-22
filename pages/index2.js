import dynamic from "next/dynamic";
import About from "../src/components/About";
import Copyright from "../src/components/Copyright";
import CounterSection from "../src/components/CounterSection";
import Home from "../src/components/Home";
import Partners from "../src/components/Partners";
import Head from "next/head";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileHeader from "../src/layouts/MobileHeader";
import ScrollTop from "../src/layouts/ScrollTop";
import Join from "../src/components/Join_our";
import Courses from "../src/components/Courses";
import MediaSection from "../src/components/MediaSection";
import ServiceList from "../src/components/ServiceList";

import {
  headerLogo,
  homeData,
  aboutData,
  counterDataBanner,
  serviceData,
  courseData,
  testimonailData,
  partnerLogoData,
  VideoSectionData,
  JoinCommunitySection
} from "../src/components/data/Samplejson1";


// for Data Store

const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout >
      {/* for external Library like font icon , google font family */}
      <Head> 
        <title>Portfolio | Home</title>
      </Head>
      {/* at mobile view Header */}
      <MobileHeader headerLogo={headerLogo} />

      {/* Destop Header  */}
      <Header headerLogo={headerLogo} />

      {/* Hero section  */}
      <Home homeData={homeData} />

      {/* About Section  */}
      <About aboutData={aboutData} />

      {/* social Folllwer  */}
      <CounterSection counterDataBanner={counterDataBanner} />

      {/* Service  */}
      {/* <Service/> */}

      <ServiceList serviceData={serviceData} />

      {/* <ServiceBox/> */}

      {/* Courses  */}
      <Courses courseData={courseData} />

      {/* Testimonials  */}
      <Testimonials testimonailData={testimonailData} />

      {/* featured on  */}
      <Partners partnerLogoData={partnerLogoData} />

      {/* Media section  */}
      <MediaSection VideoSectionData={VideoSectionData} />

      {/* Join Our Community  */}
      <Join JoinCommunitySection={JoinCommunitySection}/>

      {/* Footer  */}
      <Copyright />

      {/* ScrollTop   */}
      <ScrollTop />
    </Layout>
  );
};
export default Index;
