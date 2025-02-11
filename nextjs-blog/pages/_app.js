import '../styles/global.css'; // This can line can only be imported in the _app.js file
 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}