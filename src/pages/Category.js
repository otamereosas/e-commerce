import { Link } from "react-router-dom";
import { categogyList } from '../components/data/categories'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { CategoryWrapper } from '../components/Products/ProductStyles'

const Category = () => {
    return (
        <div>
            <Navbar/>
            <h3>Category</h3>
            <CategoryWrapper>
            {categogyList.map((item, index)=>{
                return(
                    <Link to={item.link} key={index}>
                        <img src={item.image} alt="alt"/>
                        <p>{item.name}</p>
                    </Link>
                )
            })}
            </CategoryWrapper>
            <Footer/>
        </div>
    )
}

export default Category
