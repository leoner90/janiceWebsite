import './css/about.scss'
import { faCheck, faCircleDot , faHandshakeAngle , faGlobe , faTableList, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 

function About() {
    function fontAwesome(value,className) {
        return <FontAwesomeIcon className={className} icon={value} /> 
    }
    return (
        <div className="AboutWrapper"> 
        <h2 className='aboutHeaders' style={{textAlign :'center'}}>About English Class Epsom</h2>  
        <div className='aboutHeader'>
            <div className='aboutMainImg' style={{backgroundImage: 'url("aboutLogo.png")'}}>
                 
            </div>
            <div className='aboutMainText'>
            
                <div className='bulbWrapper'>{fontAwesome(faLightbulb,'faLightbulbAbout')} </div>
                <p>
                    There is a wide range of courses available, suitable for all ages and fluency levels. 
                </p>

                <p>
                    English language courses help international students gain entry onto vocational course,
                    foundation programme or undergraduate degree as well as improving the key skills of reading, writing, speaking and listening.
                </p>
            </div>
        </div>
      
       
    
        <div className='ProvidesList'>
            <h2 className='aboutHeaders'>  {fontAwesome(faTableList,'faHandShakeAbout')}  English Class Epsom Provides:</h2>
            <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')}  Summer School.</p>
            <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')}  One To One.</p> 
            <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} General English.</p>
            <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} English For Academic Purposes.</p>
            <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')}  Exam Preparation (PET, FCE, CAE, IELTS)</p>
        </div>

        <h2 className='aboutHeaders'> {fontAwesome(faGlobe,'faHandShakeAbout')}  Types of English Courses:</h2>
        <div className='typesOfCourses'>
            <p>        
                {fontAwesome(faCheck, 'AboutFontAwesome')}
                General English classes are ideal for those who need to improve their English language ability ahead of study or work.
                Classes take in all elements of everyday English and are designed to give you the
                fluency and confidence needed when working or 
                studying in an English speaking country.
            </p>

            <p>
                {fontAwesome(faCheck, 'AboutFontAwesome')}
                English for Academic Purposes classes aim to improve a student’s note taking, presentation and academic 
                reading and writing skills before study at a UK university. 
                Advanced classes are available for students who wish to study a masters degree.
            </p>

            <p>
                {fontAwesome(faCheck, 'AboutFontAwesome')}
                Exam Preparation Courses train students for examinations such as PET, FCE, CAE
                and IELTS. They focus on elements of each exam which the student may struggle with, training 
                them on the best methods and practices to pass.
            </p>
        </div>
            <h2 className='aboutHeaders'>   {fontAwesome(faHandshakeAngle , 'faHandShakeAbout')} Everyone Is Welcome  </h2>
            <div className='welcomeMsg'>  
                <p>Classes are appropriate for au pairs, adult students and learners new to the UK, here on business or as visitors or refugees.</p>
                <p>Our small friendly classes are held at St Martin’s Church Hall, Church Street, Epsom KT17 4PX .</p>
                <p>Sanctuary seekers are always welcome at all levels.</p>
            </div>
        </div>
    )
}

export default About;