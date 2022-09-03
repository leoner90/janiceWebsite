import './css/fees.scss'
import { faCheck, faCircleDot , faSackDollar  , faCircleInfo,faGears, faCircle , faScaleBalanced} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Fees() {
    function fontAwesome(value,className) {
        return <FontAwesomeIcon className={className} icon={value} /> 
    }

    return (
        <div className='feesPageWrapper'> 
           
            <h2 className='feesMainHeader' >  {fontAwesome(faCircleInfo,'faHandShakeAbout')}   FEES &amp; EXAM BOOKING</h2>
        
           <div className='feesSection'>
                <h3 className = "feesPageHeaders"> {fontAwesome(faSackDollar,'faHandShakeAbout')} Fees and Payment</h3>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} Free for refugee and asylum seeker.</p>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} Advanced and Intermediate courses cost £6 per hour.</p>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} Functional English courses cost £5 per hour.</p>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} Please note: Fees do not include course books which cost between £26 and £36  and exam fees</p>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} You must pay promptly at the start of each term.  </p>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} If you are not responsible for paying your fees, please ask your  employer, Job Centre adviser or sponsor for a letter or email to confirm that your fees will be paid.</p>
                <p> {fontAwesome(faCircleDot, 'AboutFontAwesome')} You can pay in cash, bank transfer, or cheque.</p>
            </div>
            <div className='howToBookExamSection'>
            <h3 className = "feesPageHeaders">{fontAwesome(faGears,'faHandShakeAbout')} HOW TO BOOK &amp;  PAY FOR EXAMS</h3>
                <p>  {fontAwesome(faCheck, 'AboutFontAwesome')} Book early to be sure of a place.</p>
                <p>  {fontAwesome(faCheck, 'AboutFontAwesome')} Please tell your teacher your exam dates.</p>
                <p>  {fontAwesome(faCheck, 'AboutFontAwesome')}For Cambridge exams, follow the links and apply to any OPEN CENTRE at:  
                    <a className='FeesLinks' href="http://cambridgeesol-centres.org" target={'blanck'}>Click here</a>
                </p>
                <p>  {fontAwesome(faCheck, 'AboutFontAwesome')}
                    For an IELTS test, follow the links at: 
                    <a className='FeesLinks' href="http://ielts.org" target={'blanck'} >Click here</a>
                </p>
            </div>
            <div className='TermsAndCondions'>
                <h3 className = "feesPageHeaders"> {fontAwesome(faScaleBalanced,'faHandShakeAbout')} Terms and Conditions</h3> 
                <p> {fontAwesome(faCircle, 'AboutFontAwesome')} English Class Epsom reserves the right to transfer you to a different class if the teacher believes this will improve your learning.</p>
                <p> {fontAwesome(faCircle, 'AboutFontAwesome')} English Class Epsom reserves the right to change a class teacher or timetable, and to merge small classes when necessary.</p>
                <p> {fontAwesome(faCircle, 'AboutFontAwesome')} If you ask to transfer to a different class, you must accept the teacher’s decision as final.</p>
            </div>
        </div>
    )
}

export default Fees;