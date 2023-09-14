import {copyrightSign} from "../assets/icons"
import {footerLogo} from "../assets/images"
import {footerLinks, socialMedia} from "../constants"

function Footer() {
    return (
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img src={footerLogo} height={46} width={150} alt="footerLogo" />
                    </a>
                    <p className="mt-6 text-base leading-7 text-white-400 font-montserrat sm:max-w-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi nihil enim voluptatem</p>
                    <div className="mt-8 flex gap-5 items-center">
                        {socialMedia.map(social => (
                        <div className="flex justify-center items-center w-12 h-12 rounded-full bg-white">
                            <img src={social.src} alt={social.alt} height={24} width={24} />
                        </div>
                        ))}
                    </div>
                </div>
                
                <div className="flex flex-1 justify-between lg:gap-10 flex-wrap">
                    {footerLinks.map(section => (
                        <div key={section}>
                            <h4 className="text-white font-montserrat text-2xl font-medium mb-6">{section.title}</h4>
                            {section.links.map(link => (
                                <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-none hover:text-slate-gray ">
                                    <a href="#">{link.name}</a>
                                </li>
                            ))}
                        </div>
                    ))}
                </div>
                
            </div>
            
            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center g-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copy right sign" height={20} width={20} className="rounded-full m-0" />
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & conditions</p>
            </div>
        </footer>
    )
}

export default Footer
