import './HomePage.css';
import moment from 'moment'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Page = (props) =>{
    let blog = props.blog;
    const navigator = useNavigate()
    const [index, setIndex] = useState(0)

    let Bloglist_length = blog.length

    let div1 = blog[index%Bloglist_length]
    let div2 = blog[(index+1)%Bloglist_length]
    let div3 = blog[(index+2)%Bloglist_length]


    return(
        <div className='container'>
        <button className='b2' id='btu2' onClick={()=>{setIndex((index+1))}}><i class="fa-solid fa-circle-chevron-right fa-2xl"></i></button>
            <div className = "blog2">
                <div className= "image">
                    <img src={div1.image} alt=""></img>
                </div>
                <div className='body'>
                    <div className = "header">
                       {div1.title} 
                    </div>
                    <div className = "footer">
                        {div1.author}
                        <span class="postTime"><i class="fa-solid fa-calendar-days"></i> {moment(div1.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                    <br></br>
                    <div className = "contain">
                        {div1.desc}
                    </div>
                </div>
            </div>
            <div className = "blog" onClick = {()=>navigator("/blog/"+div2._id)}>
                <div className= "image">
                    <img src={div2.image} alt=""></img>
                </div>
                <div className='body'>
                    <div className = "header">
                       {div2.title} 
                    </div>
                    <div className = "footer">
                        {div2.author}
                        <span class="postTime"><i class="fa-solid fa-calendar-days"></i> {moment(div2.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                    <br></br>
                    <div className = "contain">
                        {div2.desc}
                    </div>
                </div>
            </div>
            <div className = "blog2">
                <div className= "image">
                    <img src={div3.image} alt=""></img>
                </div>
                <div className='body'>
                    <div className = "header">
                       {div3.title} 
                    </div>
                    <div className = "footer">
                        {div3.author}
                        <span class="postTime"><i class="fa-solid fa-calendar-days"></i> {moment(div3.createdAt).format('MMM DD, YYYY')}</span>
                    </div>
                    <br></br>
                    <div className = "contain">
                        {div3.desc}
                    </div>
                </div>
            </div>
            <button className='b1' id='btu1' onClick={()=>{if(index === 0){setIndex(Bloglist_length-1);} else{setIndex(index-1)}}}><i class="fa-solid fa-circle-chevron-left fa-2xl"></i></button>
        </div>
    )

}

const HomePage = (blogdata) =>{
    if(blogdata.blog.length > 0){
        return(
            <Page blog = {blogdata.blog}/>)
    }
    
}

export default HomePage;