import Image from "next/image";
import  Button from "../components/Button";
export default function lenders () {
    return(
        <div  className= "digital-loans">
        <div className= "content-wrapper1">
        <div className= "content-container1">
        <div className= "text-section">
        <h1>Powering digital home loan</h1>
        <p>
            Middle allows lenders to instantly launch and manage digital
            loan
        </p>
        <div className="alert-box">
            <Image
             className="alert-image"
             src="/finger-middle.webp"
             height={40}
             width={40}
             alt="hand-pic"
             />
             <span>Coming soon Get in touch for more details.</span>
             </div>
             <Button className="contact-button"text="Get in touch" />
             <div>
                <Image
                 className="bank-image"
                 src="/bank-middle.webp"
                 height={700}
                 width={700}
                 alt="Bank Pic"
                 priority={true}
                 />
             </div>
             </div>
             </div>
             </div>
             </div>
    );
    
}