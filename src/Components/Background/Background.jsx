import './Background.css'
import video1 from '../../assets/video1.mp4'
import Img1 from '../../assets/Img1.png'
import Img2 from '../../assets/Img2.png'
import Img3 from '../../assets/Img3.png'
import Img4 from '../../assets/Img4.png'
import Img5 from '../../assets/Img5.png'


const Background = ({playStatus,heroCount}) => {
    if (playStatus){
        return(
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={Img1} className='background fade-in' alt="" />
    }
    else if(heroCount===1)
    {
        return <img src={Img2} className='background fade-in' alt="" />
    }
    else if(heroCount===2)
    {
        return <img src={Img3} className='background fade-in' alt="" />
    }
    else if(heroCount===3)
    {
        return <img src={Img4} className='background fade-in' alt="" />
    }
    else if(heroCount===4)
    {
        return <img src={Img5} className='background fade-in' alt="" />
    }
  
}

export default Background