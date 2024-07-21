import { BsFacebook } from "react-icons/bs"; 
import { AiOutlineGithub } from "react-icons/ai"; 
import { FcGoogle } from "react-icons/fc"; 
import { CgMail } from "react-icons/cg"; 
import { BiLock } from "react-icons/bi"; 
import SocialBtn from './SocialBtn'
import Input from './Input' 
import Button from './Button'
// import socialLink from '../../../constants/social-links'

const ElementsInput = [
    {
        key: 1,
        label: "Entrer votre nom",
        id: "email",
        type: "email",
        placeholder: "abc@example.com",
        icon: <CgMail width={24} height={24} color="black"/>
    },

    {
        key: 2,
        label: "Mot de passe",
        id: "password",
        type: "password",
        placeholder: "**********",
        icon: <BiLock width={24} height={24} color="black"/>
    }
]

function Form() {
  return (
    <div className='max-w-screen-md w-full'>
        {/* Couleur a l'en tete */}
        <div className="md:hidden w-full h-12 bg-primary border-b-2 border-b-blue-400/90"></div>

        {/* Container */}
        <div className="pt-10 md:pt-0 px-8">
            {/* Titre du formulaire */}
            <div className="mb-10">
                <h2 className="text-center md:text-left font-medium text-4xl text-dark">
                    Connexion à Blue Ocean
                </h2>
            </div>

            <form action="">
                {/* Inputs du formulaire */}
                <div className="flex flex-col gap-5">
                    {
                        ElementsInput.map((ele) => (
                            <Input 
                                key={ele.key} 
                                id={ele.id} 
                                type={ele.type} 
                                label={ele.label} 
                                placeholder={ele.placeholder}
                                icon={ele.icon}
                            />
                        ))
                    }
                </div>

                {/* Ligne de mot de passe  */}
                <a href='/forgot_pasword' target='_blank' className=" flex justify-end text-xs py-1 mb-6 text-primary hover:underline">
                    Mot de passe oublié ?
                </a>

                {/* Submit Button  */}
                <div className="mb-12">
                    <Button 
                        name="Connexion" 
                        type='submit'
                    />
                </div>
            </form>

            {/* Ligne */}
            <div className="flex items-center gap-5 mb-12">
                <div className="w-full h-2 border-b-2 border-gray"></div>
                <div><span className="text-base md:text-xl text-gray">ou</span></div>
                <div className="w-full h-2 border-b-2 border-gray"></div>
            </div>

            {/* Social Links */}

            <div className="px-8 flex items-center justify-between">
                {/* {
                    socialLink.map((link) => (
                        <SocialBtn key={link.id} href={link.ref} icon={link.icon}/>
                    ))
                } */}
                <SocialBtn href="/whatsapp" icon={<FcGoogle />}/>            
                <SocialBtn href="/facebook" icon={<BsFacebook color="blue"/>} />            
                <SocialBtn href="/github" icon={<AiOutlineGithub color="gray" />}/>            
            </div>
        </div>

    </div>
  )
}

export default Form