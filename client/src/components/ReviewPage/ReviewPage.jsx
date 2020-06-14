import React from "react";
import Navbar from "../Layout/Navbar"
import {Animated} from "react-animated-css";
import styled from 'styled-components';
import { Card, Button, Container, Row, Col, Spinner ,ListGroup,ListGroupItem} from 'react-bootstrap';
import Swiper from 'react-id-swiper';

const TitleReview = styled.div`
    margin-left:600px;
    margin-top:20px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    width:300px;
    text-align: center;
	justify-content: center;
    font-size: 50px;
    font-weight:bolder;
 
`
const TitleReviewTwo = styled.div`
    
    margin-top:-10px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    text-align: center;
	justify-content: center;
    font-size: 23px;
    font-weight:bolder;
`
const TitleReviewThree = styled.div`
    margin-top:-5px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    text-align: center;
	justify-content: center;
    font-size: 23px;
    font-weight:bolder;
 
`
const CustomCardNew = styled(Card)`
margin-left:200px;
  width:22rem;
  height:28rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const TextCardReview = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
    
 &:hover {
		color: #5226FF;
		cursor: pointer;
	}
`;
const TextCardNewTwo = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #A6009B;
		cursor: pointer;
	}
`;
const CustomCardArticle = styled(Card)`
margin-left:200px;
  width:22rem;
  height:28rem;
  margin-top:-30px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const CustomCardReview = styled(Card)`
margin-left:200px;
  width:22rem;
  height:26rem;
  margin-top:-20px;
  font-family: 'Kanit', sans-serif;
  background-color:black;
  color:white;
  transition: transform .10s;
    transition: 300ms ;
 &:hover {
    transform: scale(1.1);
		cursor: pointer;
    }
`;
const TextCardNewThree = styled(Card.Text)`
    transition: transform .10s;
    transition: 300ms ;
 &:hover {
		color: #39C741;
		cursor: pointer;
	}
`;
const CustomCol = styled(Col)`
  margin-bottom:50px;

`;
const CustomColTwo = styled(Col)`
  margin-bottom:50px;
  margin-left:-100px;

`;
const CustomRow = styled(Row)`
margin-top:50px;
`;

const FooterHome = styled.div`
background-color:black;
  width: 100%;
  transition: 100ms;
  height:15vh;
  font-family: 'IM Fell French Canon SC', serif;
	font-size: 50px;
  color: white;
  margin-top:20px;

`
const ButtonNext = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:650px;
margin-top:40px;
&:hover {
   
    cursor: pointer;
    color:#A6009B;
    
    }
`;

const ButtonNextTwo = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
   
   cursor: pointer;
   color:#A6009B;
   
   }
`;
const ButtonNextThree = styled(Button)`
border-radius:50px;
background-color:black;
color:white;
width:50px;
height:7vh;
margin-left:30px;
margin-top:40px;
&:hover {
   
   cursor: pointer;
   color:#A6009B;
   
   }
`;
const BackgroundBody = styled.div`
background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);

	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
  background-size: cover;
  width: '100vw';
        height: '100vh' ;
`;
class ReviewPage extends React.Component{
    readReview(){
        console.log("Fetch")
        this.props.history.push("/reviewone")
    }
    readReviewTwo(){
      console.log("Fetch")
      this.props.history.push("/reviewtwo")
    }
    readReviewThree(){
      console.log("Fetch")
      this.props.history.push("/reviewthree")
    }
    readReviewFour(){
      console.log("Fetch")
      this.props.history.push("/reviewfour")
    }
    state = {
      likes: 0
    };
    addLike = () => {
      let newCount = this.state.likes + 1;
        this.setState({
        likes: newCount
      });
    };
    addLikeTwo = () => {
      let newCount = this.state.likes + 1;
        this.setState({
        likes: newCount
      });
    };
    render(){
        return (
           
       <div>
         <BackgroundBody>
           <Navbar/>
           <TitleReview>Review</TitleReview>
           <TitleReviewTwo>รวบรวมรีวิวเกี่ยวกับเกม อุปกรณ์คอมพิวเตอร์</TitleReviewTwo>
           <TitleReviewThree>ครบถ้วน รีวิวจริง ไว้ที่นี้เเล้ว</TitleReviewThree>
           <CustomRow>
            <CustomCol md={4}>
              <CustomCardReview  >
                 <Card.Img  onClick={()=> this.readReview()} variant="top" src="https://steamcdn-a.akamaihd.net/steam/apps/341940/capsule_616x353.jpg?t=1558373076" />
                 <Card.Body onClick={()=> this.readReview()} >
                       <Card.Title >Hatred – ศาลเตี้ยล้างบางผู้คน กับเนื้อหาสุดดาร์ค</Card.Title>
                       <TextCardReview  >วันนี้เรามาพบกับรีวิวเกมที่เป็นหนึ่งในเกมที่ถูกแบนจากหลายๆประเทศ ด้วยความรุนแรงและเนื้อหาที่มืดมน ของชายผู้บ้าคลั่งออกไล่ฆ่าผู้คนด้วยเหตุผลที่เข้าใจได้อย่าง Hatred . . .</TextCardReview>
                 </Card.Body>
                 <button onClick={this.addLikeTwo}>❤️Likes: {this.state.likes} </button>
              </CustomCardReview> 
             
             
           </CustomCol>

            <CustomColTwo md={4}>  
              <CustomCardReview >
                 <Card.Img onClick={()=> this.readReviewTwo()} variant="top" src="https://images.gog-statics.com/35cd661ed60c46beb5a99a744f6e70ab12c0b4055a92028ef0b2460ff09e6962_product_card_v2_mobile_slider_639.jpg" />
                  <Card.Body onClick={()=> this.readReviewTwo()} >
                       <Card.Title>Bioshock Infinite – ดำดิ่งสู่ความลับของเมืองลอยฟ้าแห่ง Columbia</Card.Title>
                       <TextCardReview>สำหรับรีวิวในครั้งนี้ คือเกม FPS จากปี 2013 ที่ผสมผสานความเป็น Action กับ RPG ไว้อย่างลงตัว และเนื้อเรื่องที่ซับซ้อนน่าติดตามกับ Bioshock Infinite . . .</TextCardReview>
                  </Card.Body>
                  
              </CustomCardReview> 
            </CustomColTwo>



            <CustomColTwo md={4}>
              <CustomCardReview onClick={()=> this.readReviewThree()} >
                <Card.Img variant="top" src="https://i.ytimg.com/vi/0Wb3qffszQY/maxresdefault.jpg" />
                 <Card.Body>
                    <Card.Title>HyperX cloud earbuds – Earbuds ใส่สบายจากค่าย HyperX</Card.Title>
                    <TextCardReview>วันนี้ทางเราขอนำเสนอรีวิวหนึ่งในหูฟังจากทาง HyperX ที่ไม่ได้มีดีเพียงแค่เสียง แต่รวมไปถึงการสวมใส่ที่ออกแบบมา . . .</TextCardReview>
                         
                 </Card.Body>
              </CustomCardReview> 
              </CustomColTwo>

            </CustomRow>
<CustomRow>
<CustomCol md={4}>
<CustomCardReview onClick={()=> this.readReviewFour()} >
  <Card.Img variant="top" src="https://www.nintendo.com/content/dam/noa/en_US/games/switch/n/no-time-to-relax-switch/no-time-to-relax-switch-hero.jpg" />
  <Card.Body>
    <Card.Title>No time to relax เกมบอร์ดสุดป่วนจำลองการใช้ชีวิต</Card.Title>
    <TextCardNewTwo>
    วันนี้เรามาพบกับรีวิวเกม ‘No time to relax’ เกมกระดานจำลองชีวิตสุดป่วนที่พร้อมให้เราและเพื่อได้แข่งขันกันพัฒนาชีวิตให้สมบูรณ์ที่สุด . . .
    </TextCardNewTwo>
  </Card.Body>
</CustomCardReview>
</CustomCol>
<CustomColTwo md={4}>  
              <CustomCardArticle>
                 <Card.Img variant="top" src="https://www.themacho.co/wp-content/uploads/2018/11/%E0%B8%81%E0%B8%81.jpg" />
                  <Card.Body>
                       <Card.Title>Article</Card.Title>
                         <TextCardNewTwo> ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ ปั้นกระดาษให้เป็น ‘103paper’ เป็นแจกัน Thai Heritage เปลี่ยนภาพขนมไทยด้วยจานลายครามและฝาชี</TextCardNewTwo>
                         
                  </Card.Body>
              </CustomCardArticle> 
            </CustomColTwo>
</CustomRow>
            
            
<CustomCol md={4}></CustomCol>
<CustomCardReview>
  <Card.Img variant="top" src="https://i.pinimg.com/236x/90/d1/22/90d122f66983b3941213c8e27eeff04d--oasis-band-oasis-live.jpg" />
  <Card.Body>
    <Card.Title>New</Card.Title>
    <TextCardNewThree>
      ข่าวเรื่องที่ 1 กดปุ่มข้างล่างเพื่ออ่านต่อ
    </TextCardNewThree>
   
  </Card.Body>
</CustomCardReview>
<ButtonNext variant="dark">1</ButtonNext>{' '}<ButtonNextTwo variant="dark">2</ButtonNextTwo>{' '}<ButtonNextThree variant="dark">3</ButtonNextThree>{' '}

<FooterHome>ITDismember</FooterHome>
</BackgroundBody>
        </div>
        )
    }
}

export default ReviewPage;