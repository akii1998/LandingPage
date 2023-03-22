import "../styles/globals.css";
// import '@fortawesome/fontawesome-svg-core/styles.css'
// import 'font-awesome/css/font-awesome.min.css'
// import "@fortawesome/fontawesome-free/js/fontawesome";
// import "@fortawesome/fontawesome-free/js/solid";
// import "@fortawesome/fontawesome-free/js/regular";
// import "@fortawesome/fontawesome-free/js/brands";

function MyApp({ Component, pageProps }) {
  return (
    <section>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.css">
</link>
      {/* <link
 href="static/plugin/font-awesome/css/all.min.css"
 rel="stylesheet"
/>
<link href="static/plugin/et-line/style.css" rel="stylesheet" /> */}
      {/* <link
 href="static/plugin/themify-icons/themify-icons.css"
 rel="stylesheet"
/> */}
      {/* <link
          href="static/plugin/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </section>
  );
}

export default MyApp;
