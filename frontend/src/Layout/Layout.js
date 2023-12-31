// import Footer from "./Footer";
import Header from "./Header.js";
import {Helmet} from "react-helmet";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = ({children,title,description,author,keywords}) => {
    return ( 
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>{title}</title>
            </Helmet>
            <Header/>
            <main style={{minHeight:'90vh'}}>
                <ToastContainer autoClose={1000} />
                {children}
                </main>
            {/* <Footer/> */}
        </div>
    );
}

Layout.defaultProps = {
    title:"Blog Page",
    description:'MERN STACK',
    keywords:"MongoDB,Express,React,Node",
    author:'Anuj Vaid',

};
 
export default Layout;