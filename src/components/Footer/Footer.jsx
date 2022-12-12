import {Link} from "react-router-dom";
import { FaInstagramSquare,FaFacebookSquare,FaTwitterSquare } from "react-icons/fa";
import "./FooterStyle.css"

export function Footer() {
    return (
        <>
        <footer className="body-footer">
            <h1 className="title"><Link to={"/"}>CintalapaYorkHotel</Link> </h1>
            <div className="redes">
                <FaInstagramSquare></FaInstagramSquare>
                <FaFacebookSquare></FaFacebookSquare>
                <FaTwitterSquare></FaTwitterSquare>
            </div>
        </footer>
        </>
    )
} 