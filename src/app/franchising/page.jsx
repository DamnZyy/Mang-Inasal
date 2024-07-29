import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Background1 from '@/images/Background/background-1.png'
import Background2 from '@/images/Background/background-2.png'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: 'Franchising'
}

const Qualifications = [
    { title: 'Good Corporate or Individual Standing and Reputation', description: 'a candidate must have a good business track record, complies with government and industry regulations and has a good reputation in the industry.' },
    { title: 'Corporate Values and Strategic Fit with Mang Inasal', description: 'a candidate must have qualities and capabilities that are aligned with our values as an organization and comp lement our way of doing business.' },
    { title: 'Shared Belief and Commitment in the Brand', description: 'a candidate must bring high levels of commitment to partner with us in growing the business.' },
    { title: 'Capability to fund and successfully operate the business', description: 'a candidate must have a strong financial capability to build and maintain the store. This also includes being able to acquire resources and work with competent personnel to be able to run the business successfully.' },
    { title: 'Capability to acquire sites and manage leases', description: 'a candidate must have the capacity and resources to acquire and provide appropriate sites for expansion.' }
  ];

const FAQs = [
    { id: 1, question: 'What is the Estimated Capital Investment?', requirements: 'Php 15 to 30 Miliion', answer: 'The capital investmment is highly dependent on the Type of Stores' },
    { id: 2, question: 'What is the Store Floor Area Requirement?', requirements: '220-280 SQM', answer: 'Store frontage is 13 meters. This is exclusive of parking space.' },
    { id: 3, question: 'What type of franchise is available?', answer: 'A: Mang Inasal offers the following type of stores: This is a stand-alone and a two-level store with sufficient parking space.' },
    { id: 4, question: 'How long is the payback period?', answer: 'A: Payback period is dependent on several factors such as sales, market potential investment & ability of the franchisee to control the operating expenses. Theoritical financial analysis will be provided once the site is approved.' },
    { id: 5, question: 'What are the requirements in selecting a location?', answer: 'A: The location of the site is one of the major factors in the success of the store. The site should be located preferably in high traffic commercial/residential areas accessible to both pedestrians and motorist. Proposed site with complete site requirements will undergo site evaluation and assessment' },
    { id: 6, question: 'Who will do the store design and construction', answer: 'A: Mang Inasal shall provide the store design through its design partner. The design fee, however, shall be at the expense of the Franchisee. In terms of construction, Franchisee shall construct or build its own store following the approved store design. Upon request, Mang Inasal may provide accredited or recognized contractors to Franchisee. Further, Franchisee may also opt to engage its own contractor, subject to approval of Mang Inasal.' },
    { id: 7, question: 'Does the Mang Inasal provide the site?', answer: 'A: No. The application is site-specific which means that the applicant will look for the site subject to our site assessment and approval.' },
    { id: 8, question: 'Can an applicant still apply even without a specific site?', answer: 'A: No. We will only process application with a specific site of the store and complete requirements. However, should an applicant decide to submit application without a site, we will include it in our data bank of interested applications without applied sites.' },
    { id: 9, question: 'Who does the selection and hiring of manpower to operate the Mang Inasal store?', answer: 'A: Mang Inasal will assist in the recruitment and training of the restaurant management team. The team will then become employees of the franchisee, who will be responsible for their compensation and benefits.' },
    { id: 10, question: 'Does the Mang Inasal provide training franchisees', answer: 'A: Yes. After signing the franchise agreement, the franchisee is required to go through a training program in order that the franchisee can operate the store in accordance with the Franchise Business System of Mang Inasal. The program includes classroom courses, seminars and hands-on training in an existing store.' },
    { id: 11, question: 'Does Mang Inasal provide continued support and guidance from start of operations until the end of franchise term?', answer: 'A: Yes. To be assigned to a Franchisee is Mang Inasal’s Operations Team who will act as field consultants throughout the duration of the franchise term. It should be stressed, however, that the responsibility and accountability of managing store operations rest on the Franchisee.' },
    { id: 12, question: 'What type of bussiness entity is allowed to adopt by the franchisee as the operating company of a Mang Inasal Store?', answer: 'A: Franchisee is only allowed to adopt a Corporation business entity as the operating company of a Mang Inasal Store. Further, the Franchisee-Principal of the Corporation is required to own at least 20% of shares and 67% voting rights.' }
  ];
  
export default function page() {

  return (
    <div>
      <div className="mb-12">

        <div className='max-w-[1500px] h-[290px] relative mb-10 m-auto'>
          <Image src={Background1} fill alt="Picture of the author" objectFit="cover" quality={100} className='hidden almost:block'></Image>
          <Image src={Background2} fill alt="Picture of the author" objectFit="cover" quality={100} className='block almost:hidden'></Image>
        </div>

        <div className='max-w-[1200px] m-auto px-5'>
          <p className="text-[#2d9751] font-bold text-[30px] sm:text-[35px] md:text-[40px] tracking-tight">Grow with us!</p>
          <p className='text-gray-500'>Mang Inasal is the leading chicken inasal restaurant chain in the Philippines. Part of the Jollibee Foods Corporation (JFC) family, we’ve adapted an existing Franchise Business System that ensures high-quality food and exemplary customer service. JFC’s vast resources and experiences have allowed us to successfully expand our gratifying grilled food across strategic locations within the country. <br /> <br /> We now proudly operate over 500 stores in the Philippines. And the Department of Trade and Industry and the Philippine Franchise Association have even recognized Mang Inasal as a Hall of Fame Awardee for Outstanding Filipino Franchising in the Food and Large-Scale Category.</p>
        </div>

        <div className='max-w-[1200px] m-auto px-5'>
          <p className="text-[#2d9751] font-bold mt-10 text-[30px] sm:text-[35px] md:text-[40px] tracking-tight">Who can apply?</p>
          <p className='font-semibold text-xl py-5'>We are looking for an interested individual with the following qualifications:</p>
          <ul>
            {Qualifications.map((qualified, index) => 
            <li key={index} className='mb-3'>
              <p className='font-semibold text-[18px] text-[#2d9751]'>{qualified.title}</p>
              <p className='text-gray-500'>{qualified.description}</p>
            </li>
          )}
          </ul>
        </div>

        <div className='max-w-[1200px] m-auto px-5'>
          <p className="text-[#2d9751] font-bold mt-10 text-[30px] sm:text-[35px] md:text-[40px] tracking-tight">Frequently Ask Questions (FAQs)</p>
            <Accordion type="single" collapsible>
              {FAQs.map((ask,index) => 
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-[#2d9751] text-start">{ask.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-0">{ask.requirements}</AccordionContent>
                  <AccordionContent className="text-gray-600">{ask.answer}</AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
        </div>

        <div className='max-w-[1200px] m-auto px-5'>
          <p className="text-[#2d9751] font-bold mt-10 text-[30px] sm:text-[35px] md:text-[40px] tracking-tight">Franchise Application Process</p>
          <p className='font-semibold py-5'>Just follow these two steps:</p>
          <p className='font-semibold'>1. Complete the following initial requirements:</p>
          <div className='text-gray-600 mt-3 gap-y-3 flex flex-col'>
              <p>a. Signed Letter of Intent (LOI) – Download LOI Template <Link href='https://docs.google.com/document/d/1Wre2GFH-4kFX8yIohZPw_amqdHvqY52O/edit' target='_blank' className='hover:text-green-600 transition-colors'>here</Link></p>
              <p>b. Site References</p>
              <p className='indent-9'>Site Map – Indicate Lot and nearby Landmarks (Google Maps Screen Shot of Map & Satellite View at 100m Scale) – ensure to mark on the map your proposed location</p>
              <p className='indent-9'>Photos of Proposed Site – 360 degrees view: front view (100m away & 300m away)/across street/ both sides of Street</p>
              <p className='indent-9'>– Lot Plan plus Layout indicating the area for lease with measurements/dimensions</p>
              <p className='indent-9'>– Site Development Map/ Floor Layout (Applicable to Malls only)</p>
              <p className='indent-9'>– Lease Offer/Details (if available)</p>
          </div>

          <p className='font-semibold mt-5'>2. Submit these documents through any of the following:</p>
          <div className='text-gray-600 mt-3 gap-y-3 flex flex-col'>
            <p>a. Mail</p>
            <p className='indent-9'>– Franchising Division Unit 407, 4th Floor Jollibee Plaza, 10 F. Ortigas Jr. Avenue, Ortigas Center, Pasig City, Metro Manila, Philippines</p>
            <p>b. Electronic Mail</p>
            <p className='indent-9'>– Email the scanned copy of all document at mi.franchising@manginasal.com</p>
          </div>
        </div>

      </div>

  </div>
  )
}
