import { Link } from "react-router-dom";
import { FooterWrapper } from "./FooterStyles"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMenuUnfold} from 'react-icons/ai'
import {CgShoppingCart} from 'react-icons/cg'
import {VscAccount} from 'react-icons/vsc'

const Footer = () => {
    return (
        <FooterWrapper>
            <Link to="/">
            <div>
            <span><AiOutlineHome/></span>
                <p>Home</p>
            </div>
            </Link>
            <Link to="/category">
            <div>
                <span><AiOutlineMenuUnfold/></span>
                 <p>Category</p>
            </div>
            </Link>
            <div>
                <span><VscAccount/></span>
                 <p>Account</p>
            </div>
            <div>
            <Link to="/checkout">
            <div className="cart">
                <h1><CgShoppingCart/></h1>
            </div>
            </Link>
            </div>

        </FooterWrapper>
    )
}

export default Footer

