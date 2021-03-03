import {BrowserRouter,Route,Switch} from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Services from './Services';
import ContactUs from './ContactUS';
import Home from './Home';
import Footer from './Footer';
function Router(){
    return(
         <BrowserRouter>
            <NavBar />
            <div className='body-content'>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/~about' component={About}/>
                <Route path='/~services' component={Services}/>
                <Route path='/~contactUs' component={ContactUs}/>
            </Switch>
            </div>  
            <Footer/> 
        </BrowserRouter>
    )
}

export default Router;