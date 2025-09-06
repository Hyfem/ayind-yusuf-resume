import './index.css'

function resume (){
    return(
        <div className='w-full flex  justify-center'>
            <div className='w-[90%] items-center justify-center '>
                <div className='border-b border-black'>
                    <div>
                      <h1>AYINDE YUSUF IFEMI.</h1>
                      <h3> <b>FRONTEND WEB DEVELOPER</b></h3>
                   </div>
                   <div className=' flex item-center justify-center gap-8 '>
                     <div><p> +2348138867930</p></div>
                     <div><p> ayindeyusufifemi@gmail.com</p></div>
                     <div><p>Magodo GRA Lagos</p></div>
                   </div>
                </div>

                <div className='w-full m-4 text-left'>
                    <h2 className='border-b border-black w-fit'> PROFESSIONAL SUMARY </h2>
                    <p className='m-8'>
                        Creative and detail-focused Frontend Web Developer 
                        skilled in building responsive websites with React
                        . Passionate
                        about turning UI designs into smooth, user-friendly 
                        web experiences. Strong team player, fast learner, 
                        and always eager to grow.
                    </p>

                </div>
                <div className='w-full m-4 text-left'>
                    <h2 className='border-b border-black'>WORK EXPERIENCE</h2>
                    

                    <div className='w-full mt-8 flex gap-10 ml-10'>
                        <div className='w-[250px] h-fit'>
                            <ul className='list-disc '>
                                <li>
                                    2025 <br />WEB DEVELOPER <br /> BAKES N CRAVE
                                </li>
                            </ul>

                        </div>
                        <div className='w-[800px] h-fit'>
                           <ul>
                             <li className='list-disc'>
                            Developed and managed a full eCommerce platform 
                            for Bakes N Crave using React and Tailwind CSS for
                            the frontend, and currently building backend 
                            services with Python (Django) and MySQL.
                            </li>
                           </ul>

                        </div>

                    </div>
                    <div className='w-full mt-8 flex gap-10 ml-10'>
                        <div className='w-[250px] h-fit'>
                           <ul className='list-disc '>
                            <li>
                             2024 <br />FRONTEND WEB DEVELOPER <br /> SPACEAIR
                           
                            </li>
                           </ul>
                        </div>
                        <div className='w-[800px] h-fit'>
                           <ul>
                             <li className='list-disc'>
                                Designed and developed responsive landing 
                                pages and frontend interfaces for various startups
                                and e-commerce platforms using React, JavaScript,
                                Tailwind CSS, and other modern frontend tools. 
                                One notable project was SPACEAIR, 
                                where I built the entire frontend 
                                experience for their startup platform.
                                
                            </li>
                           </ul>
                        </div>
                    
                    </div>
                    <div className='w-full mt-8 flex gap-10 ml-10'>
                        <div className='w-[250px] h-fit'>
                            <ul className='list-disc '>
                                <li>
                                    2017-2018 <br /> IT SUPPORT SPECIALIST <br /> EKO FM
                                </li>
                            </ul>
                        </div>
                        <div className='w-[800px] h-fit'>
                            <ul className='list-disc '>
                                <li>
                                    Initially joined Eko FM as part of a 6-month 
                                    Student Work Experience Scheme (SIWES) during 
                                    OND in Mass Communication.
                                </li>
                                <li>
                                    Demonstrated strong technical ability and adaptability,
                                    leading to being retained as an IT Support Specialist.
                                </li>
                                <li>
                                    Provided technical support for on-air systems,
                                    office hardware, and software troubleshooting.
                                </li>
                                <li>
                                    Assisted with setting up live broadcasts, 
                                    maintaining system uptime, and resolving 
                                    network-related issues.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='w-full m-8 text-left'>
                    <h2 className='border-b border-black'>EDUCATION</h2>
                    <ul className='w full flex mt-4 gap-20'>
                        <li className='list-disc ml-10'><h4>National Diploma</h4></li>
                        <li><h4>Mass Communication</h4></li>
                        <li><p>Kwara State Polytechnic Nigeria</p></li>
                        <li><p>2016-2018</p></li>

                    </ul>
                </div>

                <div className='w-full text-left mt-8 gap-4'>
                    <h2 className='border-b border-black'>RELEVANT SKILL</h2>
                    <div className='w-full flex m-4'>
                        <div className='w-[200px] mt-4'>
                        <h3><b>FRONTEND</b></h3>
                        <ul className='list-disc list-inside'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>JavaScript</li>
                            <li>React Js</li>
                            <li>Tailwind Css</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className='w-[200px] mt-4'>
                        <h3><b>BACKEND</b></h3>
                        <ul className='list-disc list-inside'>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Sql/MySql</li>
                        </ul>
                    </div>
                    <div className='w-[250px] mt-4'>
                        <h3><b>REFERENCE</b></h3>
                        <p>BAKES N CRAVE</p>
                        <p>+2348134697642</p>
                    </div>
                    <div className='w-[350px] mt-4'>
                        <h3><b>PORTFOLIO</b></h3>
                        <p>https://yusufproport.vercel.app/</p>
                    </div>
                </div>
                    </div>
                
                
                
            
            
            </div>

        </div>
    )
}
export default resume;