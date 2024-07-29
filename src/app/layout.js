import { Inter } from "next/font/google";
import "./globals.css";

import React from 'react'
import Navbar from "@/components/navbar";
import Logo from "./icon.png";
import {Footer, FooterSection, FooterInfo, Description, SocialIcons, FooterLogo, Icons, ColumnLinks, FooterLink, EndContent, EndLink} from "@/components/footer";
import { FaTwitter } from "react-icons/fa";
import {FaFacebook, FaLinkedinIn} from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: 'Mang Inasal',
}

export default function Rootlayout({ children }) {
  return (
<html lang="en">
  <body className={`${inter.className} select-none`}>

    <Navbar logo={Logo}></Navbar>
    
    <section className='flex flex-col justify-center pt-20'>
        {children}
    </section>

    <Footer>
      <FooterSection>
        <FooterInfo>
            <Description>
                <FooterLogo image={Logo} />
                <p>Mang Inasal</p>
                <p>Philippines, Inc</p>
            </Description>

            <SocialIcons>
                <Icons href="#"><FaLinkedinIn /></Icons>
                <Icons href="#"><FaTwitter/></Icons>
                <Icons href="#"><FaFacebook /></Icons>
            </SocialIcons>
        </FooterInfo>

        <ColumnLinks content="Company Category">
            <FooterLink href="#">Inasal business</FooterLink>
            <FooterLink href="#">Financial Services</FooterLink>
            <FooterLink href="#">loT Service Provider</FooterLink>
            <FooterLink href="#">Educational institutions</FooterLink>
        </ColumnLinks>

        <ColumnLinks content="Individual Category">
            <FooterLink href="#">Cultivator</FooterLink>
            <FooterLink href="#">Agricultural Consumers</FooterLink>
            <FooterLink href="#">Agricultural Expert</FooterLink>
        </ColumnLinks>

        <ColumnLinks content="Services">
            <FooterLink href="#">Partner</FooterLink>
            <FooterLink href="#">Capital</FooterLink>
            <FooterLink href="#">Market</FooterLink>
            <FooterLink href="#">Smart Farming</FooterLink>
            <FooterLink href="#">Mang Inasal</FooterLink>
        </ColumnLinks>

        <ColumnLinks content="Company">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
        </ColumnLinks>
      </FooterSection>

      <EndContent credits='© 2024 Mang Inasal. All right reserved'>
        <EndLink href="#">Privacy Policy</EndLink>
        <EndLink href="#">Term Of Use</EndLink>
      </EndContent>
    </Footer>
  </body>
</html>
  )
}
