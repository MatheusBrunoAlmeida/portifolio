import {SocialContainer, SocialIcons} from "./SocialMedia.styles";
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from "react-icons/ai";
import {CgMail} from "react-icons/cg";

export default function SocialMedia({inFooter}) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com/MatheusBrunoAlmeida"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/matheus-bruno-almeida-437942187/"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="mailto://matheusbrunoalmeida@gmail.com"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <CgMail size="3rem"/>
      </SocialIcons>
      <SocialIcons
        href="https://api.whatsapp.com/send?phone=5562996845012"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <AiOutlineWhatsApp size="3rem"/>
      </SocialIcons>
    </SocialContainer>
  )}