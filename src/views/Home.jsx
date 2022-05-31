import Post from '../components/Post.jsx'
function Home() {
    return (
        <div style={{display: 'flex', flexWrap : 'wrap'}}> 
            <Post author={'Janice'} date={'31.05.2022'} img={'test.jpg'} header={'New school year 2021-22'} body= {'We are so pleased to be able to reopen the school and hope to see you on Enrolment Day, September 15th 2021, any time between 10 am and 12 noon at St Martin of Tours Church, Epsom.Classes are designed for adults  (18 yrs +).  You  can come and improve your language skills for business or professional purposes, or work towards passing Cambridge English exams including IELTS.  The Beginners course focuses on conversational and basic functional skills.  Classes are small, with 4-7 learners, and some may choose to study by zoom.Boost Post'}/>
            <Post author={'Eleonora'} date={'15.02.2022'} img={'autumn.jpg'} header={'Autumn Country Walk'}
             body= {`Autumn Country Walk, Epsom Downs, September 2015 more Photo: <a href="localhost:3000/gallery>here</a>"}`}/>
            <Post author={'Admin'} date={'01.11.2021'} img={''}   header={'No image Post'} body= {'No img Text'}/>
        
            
        </div>
 
    )
}

export default Home;