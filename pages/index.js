// import dynamic from "next/dynamic";
// import About from "../src/components/About";
// import Copyright from "../src/components/Copyright";
// import CounterSection from "../src/components/CounterSection";
// import Home from "../src/components/Home";
// import Partners from "../src/components/Partners";
// import Head from "next/head";
// import Header from "../src/layouts/Header";
// import Layout from "../src/layouts/Layout";
// import MobileHeader from "../src/layouts/MobileHeader";
// import ScrollTop from "../src/layouts/ScrollTop";
// import Join from "../src/components/Join_our";
// import Courses from "../src/components/Courses";
// import MediaSection from "../src/components/MediaSection";
// import ServiceList from "../src/components/ServiceList";

// import { useRouter } from "next/router";
// import Layout from "../src/layouts/Layout";
// import ScrollTop from "../src/layouts/ScrollTop";

// import {
//   homeData,
//   aboutData,
//   serviceData,
//   courseData,
//   testimonailData,
//   partnerLogoData,
//   counterDataBanner,
//   VideoSectionData,
//   headerLogo, JoinCommunitySection ,
// } from "../src/components/data/DataManager";


// // for Data Store

// const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
//   ssr: false,
// });
// const Index = () => {
//   return (
//     <Layout>
//       {/* for external Library like font icon , google font family */}
//       <Head> 
//         <title>Portfolio | Home</title>
//       </Head>
//       {/* at mobile view Header */}
//       <MobileHeader headerLogo={headerLogo} />

//       {/* Destop Header  */}
//       <Header headerLogo={headerLogo} />

//       {/* Hero section  */}
//       <Home homeData={homeData} />

//       {/* About Section  */}
//       <About aboutData={aboutData} />

//       {/* social Folllwer  */}
//       <CounterSection counterDataBanner={counterDataBanner} />

//       {/* Service  */}
//       {/* <Service/> */}

//       <ServiceList serviceData={serviceData} />

//       {/* <ServiceBox/> */}

//       {/* Courses  */}
//       <Courses courseData={courseData} />

//       {/* Testimonials  */}
//       <Testimonials testimonailData={testimonailData} />

//       {/* featured on  */}
//       <Partners partnerLogoData={partnerLogoData} />

//       {/* Media section  */}
//       <MediaSection VideoSectionData={VideoSectionData} />

//       {/* Join Our Community  */}
//       <Join JoinCommunitySection={JoinCommunitySection}/>

//       {/* Footer  */}
//       <Copyright />

//       {/* ScrollTop   */}
//       <ScrollTop />
//     </Layout>
//   );
// };
// export default Index;




// const Index=()=>{
  
//   const route =useRouter();
// return(
//   <Layout>
//   <h1>Dymanic Pages</h1>
//   <button onClick={()=>{route.push('/index1')}}>Click to Sample Page First</button><br/><br/>
//   <button onClick={()=>{route.push('/index2')}}>Click to Sample Second First</button><br/><br/>
//   <button onClick={()=>{route.push('/index3')}}>Click to Sample Third First</button><br/><br/>
//   <ScrollTop/>
//   </Layout>
// )
// }

// export default Index;


import dynamic from "next/dynamic";
// import About from "../src/components/About";
// import Copyright from "../src/components/Copyright";
// import CounterSection from "../src/components/CounterSection";
// import Home from "../src/components/Home";
// import Partners from "../src/components/Partners";
import Head from "next/head";
// import Header from "../src/layouts/Header";
// import Layout from "../src/layouts/Layout";
// import MobileHeader from "../src/layouts/MobileHeader";
// import ScrollTop from "../src/layouts/ScrollTop";
// import Join from "../src/components/Join_our";
// import Courses from "../src/components/Courses";
// import MediaSection from "../src/components/MediaSection";
// import ServiceList from "../src/components/ServiceList";

import {
  homeData,
  aboutData,
  serviceData,
  courseData,
  testimonailData,
  partnerLogoData,
  counterDataBanner,
  VideoSectionData,
  headerLogo,
  JoinCommunitySection,
} from "../src/components/data/DataManager";

// for Data Store

const Testimonials = dynamic(() => import("../src/components/Testimonials"), {
  ssr: false,
});
const Layout = dynamic(() => import("../src/layouts/Layout"), {
  ssr: false,
});
const MobileHeader = dynamic(() => import("../src/layouts/MobileHeader"), {
  ssr: false,
});
const Header = dynamic(() => import("../src/layouts/Header"), {
  ssr: false,
});

const Home = dynamic(() => import("../src/components/Home"), {
  ssr: false,
});

const About = dynamic(() => import("../src/components/About"), {
  ssr: false,
});

const CounterSection = dynamic(
  () => import("../src/components/CounterSection"),
  {
    ssr: false,
  }
);

const ServiceList = dynamic(() => import("../src/components/ServiceList"), {
  ssr: false,
});

const Courses = dynamic(() => import("../src/components/Courses"), {
  ssr: false,
});

const Partners = dynamic(() => import("../src/components/Partners"), {
  ssr: false,
});

const MediaSection = dynamic(() => import("../src/components/MediaSection"), {
  ssr: false,
});

const Join = dynamic(() => import("../src/components/Join_our"), {
  ssr: false,
});

const Copyright = dynamic(() => import("../src/components/Copyright"), {
  ssr: false,
});
const ScrollTop = dynamic(() => import("../src/layouts/ScrollTop"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
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
      <Join JoinCommunitySection={JoinCommunitySection} />

      {/* Footer  */}
      <Copyright />

      {/* ScrollTop   */}
      <ScrollTop />
    </Layout>
  );
};
export default Index;

