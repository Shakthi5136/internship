import './index.scss';
import React from 'react';
import cornerImage from './assets/corner.png';
import cornerImage1 from './assets/corner1.png';
import person1 from './assets/person1.png';
import person2 from './assets/person2.png';
import person3 from './assets/person3.png';
import person4 from './assets/person4.png';
import person5 from './assets/person5.png';
import person6 from './assets/person6.png';
import person7 from './assets/person7.png';
import person8 from './assets/person8.png';
import person9 from './assets/person9.png';
import person10 from './assets/person10.png';
import person11 from './assets/person11.png';
import person12 from './assets/person12.png';
import person13 from './assets/person13.png';
import person14 from './assets/person14.png';
import person15 from './assets/person15.png';
import person16 from './assets/person16.png';
import person17 from './assets/person17.png';
import person18 from './assets/person18.png';
import person19 from './assets/person19.png';
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'


const MyTeam = () => {
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);
      }, []);
    
      const [letterClass, setLetterClass] = useState('text-animate');

    return (
        <div className="index-page" >
            <img src={cornerImage} alt="Image" className="corner-image" />
            
            <div className='container' style={{ marginTop: '200px'}}>
            <h1>
               
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['G', 'C', 'E', 'C']}
            idx={15}
          />
        </h1>
        </div>
            
            <p className="p1">Welcome to GCEC, where a dedicated team of professionals works together to bring innovation, creativity, and expertise to the software industry. Get to know the individuals who make our company thrive.</p>
            
            <p className="separator">-------------------------------------------------------------------</p>    
            <div className='container'>
            <h1>
               
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['M', 'e', 'e', 't', ' ', 'O', 'u', 'r', ' ','T','e','a','m']}
            idx={15}
          />
        </h1>
        </div>

            <div className="container">
                <h1 className="headingbox">Leadership/Management Team</h1>
            </div>
            
            <div className="image-row">
                <div className="employee">
                    <img src={person1} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 1</p>
                        <p className="name">Employee Name 1</p>
                    </div>
                </div>

                <div className="employee">
                    <img src={person2} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 2</p>
                        <p className="name">Employee Name 2</p>
                    </div>
                </div>
            </div>

            <div className="image-row">
                <div className="employee">
                    <img src={person3} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 3</p>
                        <p className="name">Employee Name 3</p>
                    </div>
                </div>

                <div className="employee">
                    <img src={person4} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 4</p>
                        <p className="name">Employee Name 4</p>
                    </div>
                </div>

                <div className="employee">
                    <img src={person5} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 5</p>
                        <p className="name">Employee Name 5</p>
                    </div>
                </div>
            </div>
            
            <div className="container1">
                <h1 className="headingbox" style={{ marginTop: '3%' }}>Development team</h1>
                <img src={cornerImage1} alt="Image" className="corner-image-right" style={{ left: '0%', position: 'absolute' }} />
            </div>
            <div className="image-row">
                <div className="employee">
                    <img src={person6} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 6</p>
                        <p className="name">Employee Name 6</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person7} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 7</p>
                        <p className="name">Employee Name 7</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person8} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 8</p>
                        <p className="name">Employee Name 8</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person9} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 9</p>
                        <p className="name">Employee Name 9</p>
                    </div>
                </div>
            </div>
            <div className="image-row">
                <div className="employee">
                    <img src={person10} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 10</p>
                        <p className="name">Employee Name 10</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person11} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 11</p>
                        <p className="name">Employee Name 11</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person12} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 12</p>
                        <p className="name">Employee Name 12</p>
                    </div>
                </div>
            </div>
            <div className="container1">
                <h1 className="headingbox" style={{ marginTop: '4%' }}>Sales and Marketing team</h1>
                <img src={cornerImage} className="corner-image-right" alt="Image" style={{ right: '0%', position: 'absolute' }} />
            </div>
            <div className="image-row">
                <div className="employee">
                    <img src={person13} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 13</p>
                        <p className="name">Employee Name 13</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person14} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 14</p>
                        <p className="name">Employee Name 14</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person15} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 15</p>
                        <p className="name">Employee Name 15</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person16} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 16</p>
                        <p className="name">Employee Name 16</p>
                    </div>
                </div>
            </div>
            <div className="image-row">
                <div className="employee">
                    <img src={person17} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 17</p>
                        <p className="name">Employee Name 17</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person18} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 18</p>
                        <p className="name">Employee Name 18</p>
                    </div>
                </div>
                <div className="employee">
                    <img src={person19} alt="Image" className="people" />
                    <div className="employee-details">
                        <p className="position">Position 19</p>
                        <p className="name">Employee Name 19</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyTeam;
