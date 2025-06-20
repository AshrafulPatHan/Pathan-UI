import React from 'react';
import Desktop from '../../../assets/UI/Background.svg';
import { GoChevronRight } from "react-icons/go";
import { FaFigma } from "react-icons/fa";
import { CgTemplate } from "react-icons/cg";
import { FaCloudMoon } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { FaRegSun } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";








const First = () => {
    return (
        <div className='pt-24 pb-24 '
            style={{
                backgroundImage: `url(${Desktop})`,
                backgroundSize: 'cover',
                // backgroundPosition: 'center',
                height: '100vh'
            }}>
            <main > 
                {/* left side section */}
                <div>
                    <button>Bay at 50% off <GoChevronRight/></button>
                    <h2>Budding a beautiful website is very hard an very beautiful to mack</h2>
                    <p>this is a random template for the website design we can mack the beautiful design using the template</p>
                    <div>
                        <div>
                            <button><FaFigma/></button>  
                            <button><CgTemplate/></button>  
                        </div>
                        <button><FaFigma/> View in figma</button>
                        <button><CgTemplate/> Figma template</button>
                    </div>
                </div>
                {/* the right side section */}
                <div>
                    {/* section 1 */}
                    <div>
                        {/* mode dark and withe */}
                        <div>
                            <button><FaCloudMoon/></button>
                            <button><FaDesktop/></button>
                            <button><TiWeatherSunny/></button>
                        </div>
                        {/* card 1 */}
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <div>
                                    <p><FaRegSun/> New Update</p>
                                    <p></p>
                                </div>
                                <div>
                                    <button><GoArrowLeft/></button>
                                    <button><GoArrowRight/></button>
                                </div>
                            </div>
                            <div>
                                <h3>UI Template</h3>
                                <p></p>
                                <button>Browse template</button>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div>
                            <div>
                                <div>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                                <div></div>
                                <div></div>
                                <div>
                                    <button></button>
                                    <button></button>
                                </div>
                                <div>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                </div>
                                <div>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                </div>
                                <div>
                                    <button></button>
                                    <button></button>
                                    <button></button>
                                </div>
                            </div>
                            <div>
                                <button>Monthly</button>
                                <button>yearly</button>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p></p>
                                <p></p>
                            </div>
                            <h3>Smart card</h3>
                            <p></p>
                            <div>
                                <button></button>
                                <div>
                                    <button></button>
                                    <button></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* section 2 */}
                    <div>
                        {/* card 1 */}
                        <div>
                            <div>
                                <button>choose</button>
                                <button>menu</button>
                            </div>
                            <div>
                                <div>Account</div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div>Sign out</div>
                            </div>
                            <div>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                        {/* card 2 */}
                        <div>
                            <div>
                                <button>Email address</button>
                                <button>Subscribe</button>
                            </div>
                            <div>
                                <div>
                                    <p>Notice</p>
                                    <div>
                                        <p></p>
                                        <p></p>
                                        <div>
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div>
                                    <p></p>
                                    <button>Mark all as read</button>
                                </div>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div>
                            <p>All-Access</p>
                            <div>
                                <p>$</p>
                                <h3>49</h3>
                                <sub>$ 99</sub>
                            </div>
                            <p></p>
                            <div></div>
                            <button></button>
                        </div>
                   </div>
                </div>
            </main>
            <code></code>
        </div>
    );
};

export default First;
