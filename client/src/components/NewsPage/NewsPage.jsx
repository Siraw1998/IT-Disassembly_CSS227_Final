import React from "react";
import Navbar from "../Layout/Navbar";
import {Animated} from "react-animated-css";
import styled from 'styled-components';
import { Card, Button, Container, Row, Col, Spinner ,ListGroup,ListGroupItem} from 'react-bootstrap';
import Swiper from 'react-id-swiper';

const TitleNew = styled.div`
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
const TitleNewTwo = styled.div`
    
    margin-top:-10px;
	text-decoration: none;
	color: black;
    font-family: 'Kanit', sans-serif;
    text-align: center;
	justify-content: center;
    font-size: 23px;
    font-weight:bolder;
`
const TitleNewThree = styled.div`
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
  height:25rem;
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
const TextCardNew = styled(Card.Text)`
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
  height:25rem;
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

const TextArticle = styled.div`
color:black;
font-family: 'Source Sans Pro', sans-serif;
font-size:50px;
margin-left:200px;
margin-top:-15px;
opacity:0.8;
`
const TextReview= styled.div`
color:black;
font-family: 'Source Sans Pro', sans-serif;
font-size:50px;
margin-left:200px;
margin-top:-20px;
opacity:0.8;
`
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
class NewsPage extends React.Component{
    readNew(){
        console.log("Fetch")
        this.props.history.push("/newsone")
    }
    readNewTwo(){
      console.log("Fetch")
      this.props.history.push("/newstwo")
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
    render(){
        return (
           
       <div>
          <BackgroundBody>
           <Navbar/>
           <TitleNew>News</TitleNew>
           <TitleNewTwo>รวบรวมข่าวสารเกี่ยวกับอุปกรณ์คอมพิวเตอร์</TitleNewTwo>
           <TitleNewThree>ที่น่าสนใจทั้งหมดไว้ที่นี้แล้ว</TitleNewThree>
           <CustomRow>
            <CustomCol md={4}>
              <CustomCardNew  >
                 <Card.Img onClick={()=> this.readNew()} variant="top" src="https://i.ytimg.com/vi/I0rRrXq0Y4Y/maxresdefault.jpg" />
                 <Card.Body onClick={()=> this.readNew()} >
                       <Card.Title>เปิดเผยข้อมูล Playstation 5 กับ Controller “Dualsense”</Card.Title>
                       <TextCardNew>ช่วงเวลาในวันที่ 8 เมษายน ที่ผ่านมา ทาง Playstation บริษัทเจ้าของเครื่องเล่นเกมชั้นนำของโลก ก็ได้เปิดเผยข้อมูลสำคัญ . . . </TextCardNew>
                 </Card.Body>
                 <button onClick={this.addLike}>❤️Likes: {this.state.likes} </button>
              </CustomCardNew> 
           </CustomCol>

            <CustomColTwo md={4}>  
              <CustomCardNew onClick={()=> this.readNewTwo()} >
                 <Card.Img variant="top" src="https://gameworldobserver.com/wp-content/uploads/2019/12/Epic-Games.jpeg" />
                  <Card.Body>
                       <Card.Title>Epic game store เตรียมแจกเกมฟรี ภายในวันที่ 11 มิถุนายนนี้</Card.Title>
                       <TextCardNew>เรียกได้ว่าแทบจะกลายเป็นกิจวัตรประจำสัปดาห์ไปแล้วสำหรับบริษัทอย่าง Epic game เจ้าของ engine ชื่อดังอย่าง Unreal engine ที่จะแจกเกมฟรี . . .</TextCardNew>
                         
                  </Card.Body>
              </CustomCardNew> 
            </CustomColTwo>



            <CustomColTwo md={4}>
              <CustomCardNew>
                <Card.Img variant="top" src="https://3.bp.blogspot.com/-IEQXM8Y_QaU/W_aTiSja_oI/AAAAAAAABNQ/dVoN3ly8TNoYYsSMUe9C1ahE004C_PR_QCLcBGAs/s1600/118839789.jpg" />
                 <Card.Body>
                    <Card.Title>Newest</Card.Title>
                    <TextCardNew>ช่วงกักตัวฉันนั่งเซฟที่เที่ยวทุกวัน โควิดจบเมื่อไหร่ฉันจะไปเที่ยว แต่ที่ไปแน่ๆ คือไปกินอาหารเกาหลี</TextCardNew>
                         
                 </Card.Body>
              </CustomCardNew> 
              </CustomColTwo>

            </CustomRow>
<CustomRow>
<CustomCol md={4}>
<CustomCardArticle >
  <Card.Img variant="top" src="https://static.wixstatic.com/media/5d23ce_2d9f6226623f49cd93e045bcf92d5be7.jpg" />
  <Card.Body>
    <Card.Title>News</Card.Title>
    <TextCardNewTwo>
    ปั้นกระดาษให้เป็น ‘103paper’ แบรนด์ที่ชุบชีวิตกระดาษเหลือทิ้งให้เกิดใหม่เป็นแจกัน Thai Heritage แบรนด์ออนไลน์มือใหม่ที่ตั้งใจเปลี่ยนภาพขนมไทยด้วยจานลายครามและฝาชี
    </TextCardNewTwo>
  </Card.Body>
</CustomCardArticle>
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

export default NewsPage;