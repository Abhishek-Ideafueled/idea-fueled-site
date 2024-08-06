

const Services = () => {
  return (
    <div className="w-full bg-light-gray"> 
        <div className="main-container mx-auto flex flex-col py-10 lg:py-20 items-center gap-[60px]">

            <div className="flex flex-col items-center  text-center gap-6">
                <h2 className="heading-h2 max-w-[600px]">Your partner on <span className="text-custom-blue">the journey </span>
                from now to what next</h2>
                <span className="sub-heading2 text-custom-body">
                We blend business, design and technology to build better products.
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col max-w-[480px] bg-white shadow-services-card-shadow rounded-2xl">
                    <div className=" h-[250px] relative rounded-t-2xl">
                        <img src="/digital-advisory.jpg" alt="digital advisory stock image" className="w-full h-full rounded-t-2xl " />
                        <div className="absolute inset-0 bg-black/10 rounded-t-2xl">
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <h2 className="card-heading text-custom-heading">Digital Advisory</h2>
                        <span className="text-custom-body font-konsoleRegular text-sm md:text-base">
                            Our digital advisors offer fast, strategic advice to help you solve problems, uncover opportunities, and gain a competitive advantage.
                             It is a laser-focused workshop to help you move forward from problem to opportunities to profits.</span>
                   <div className="flex flex-wrap gap-2">
                        <div className="services-pill">
                        Agile Process Coaching
                        </div>
                        <div className="services-pill">
                        Data Advisory
                        </div>
                        <div className="services-pill">
                        Design Maturity Optimisation
                        </div>
                        <div className="services-pill">
                        SDLC Optimisation
                        </div>
                    </div> 
                     </div>
                   
                </div>
                <div className="flex flex-col max-w-[480px] bg-white shadow-services-card-shadow rounded-2xl">
                    <div className=" h-[250px] relative rounded-t-2xl">
                        <img src="/design-stock.jpg" alt="design stock image" className="w-full h-full rounded-t-2xl " />
                        <div className="absolute inset-0 bg-black/20 rounded-t-2xl">
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <h2 className="card-heading text-custom-heading">Design</h2>
                        <span className="text-custom-body font-konsoleRegular text-sm md:text-base">
                        Our design experts  work closely with you on your product to craft human-centered experience for customers and company success. We deliver engaging, intuitive applications and websites that make lives easier and businesses better.</span>
                   <div className="flex flex-wrap gap-2">
                        <div className="services-pill">
                        UI/UX Design
                        </div>
                        <div className="services-pill">
                        Web Design
                        </div>
                        <div className="services-pill">
                        Mobile Design
                        </div>
                        <div className="services-pill">
                        Landing Page Design
                        </div>
                        <div className="services-pill">
                        B2B SAAS Design
                        </div>
                    </div> 
                     </div>
                   
                </div>
                <div className="flex flex-col max-w-[480px] bg-white shadow-services-card-shadow rounded-2xl">
                    <div className=" h-[250px] relative rounded-t-2xl">
                        <img src="/development-stock.jpg" alt="development stock image" className="w-full h-full rounded-t-2xl " />
                        <div className="absolute inset-0 bg-black/10 rounded-t-2xl">
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <h2 className="card-heading text-custom-heading">Development</h2>
                        <span className="text-custom-body font-konsoleRegular">
                        Our engineers are builder at the core. No matter what problem you're trying to solve, what product you want to build, or what concept you have in mind, we'll help you connect the dots between idea and implementation.</span>
                   <div className="flex flex-wrap gap-2">
                        <div className="services-pill">
                        Web Development
                        </div>
                        <div className="services-pill">
                        Software Development
                        </div>
                        <div className="services-pill">
                        CMS Development
                        </div>
                        <div className="services-pill">No-code Development 
                        </div>
                    </div> 
                     </div>
                   
                </div>
                <div className="flex flex-col max-w-[480px] bg-white shadow-services-card-shadow rounded-2xl">
                    <div className=" h-[250px] relative rounded-t-2xl">
                        <img src="/marketing-stock.jpg" alt="marketing stock image" className="w-full h-full rounded-t-2xl " />
                        <div className="absolute inset-0 bg-black/20 rounded-t-2xl">
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6">
                        <h2 className="card-heading text-custom-heading">Marketing</h2>
                        <span className="text-custom-body font-konsoleRegular text-sm md:text-base">
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</span>
                   <div className="flex flex-wrap gap-2">
                        <div className="services-pill">
                        Pitch Deck Design
                        </div>
                        <div className="services-pill">
                        Content Marketing
                        </div>
                        <div className="services-pill">
                        SEO
                        </div>
                        <div className="services-pill">
                            Branding
                        </div>
                        <div className="services-pill">
                        Paid-Ad Campaigns
                        </div>
                    </div> 
                     </div>
                   
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Services
