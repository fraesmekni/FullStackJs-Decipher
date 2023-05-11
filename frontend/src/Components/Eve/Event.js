import {useQuery,useMutation} from '@apollo/client'
import { delete_Event } from '../../Mutation/eventMutation';
import  {getEvent} from '../../Query/eventQuerry'
import { useParams } from 'react-router-dom'
import backg from "./backg.jpg";
import { Button,  Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Input from '../../page/Input';
import {  participateEvent,unparticipateEvent,getPart} from "../../redux/action";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TransactionContext } from '../../Context/Transaction';


const Event = () => {
  const [d,setD]=useState(false)
  const [b,setB]=useState(false)
  const {id}=useParams()
  const {loading,error,data,client,refetch} = useQuery(getEvent,{variables:{id:id}})

  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const unparticipateevent = useSelector((state) => state.unparticipateevent);
  const { part:unpart } = unparticipateevent;
  const participateevent = useSelector((state) => state.participateevent);
  const { part:partici } = participateevent;
  const dispatch =useDispatch()

  const getpart = useSelector((state) => state.getpart);
  const { success,part } = getpart;
  useEffect(() => {
    dispatch(getPart(id))
    
    
   }, [unpart]);

   useEffect(() => {
    dispatch(getPart(id))
    
    
   }, [partici]);

   
   const { connectWallet,connectedaccount,formdata,sendTransaction,handleChangeIput } = useContext(TransactionContext)
     const {addresto,amount,message,keyword} =formdata;
   
  const [deleteEvent] =useMutation(delete_Event)
  const deleteevent=(id)=>{
    deleteEvent({
      variables: { id: id },
    })
    console.log(id) 

  }
  const gotoupdate=(id)=>{
    navigate(`/updateevent/${id}`)

  }
  const unParticipate=(eventId,userId) =>{
    if (window.confirm('are you sure')){
      dispatch(
        dispatch(unparticipateEvent({eventId:eventId,userId:userId}))
       
      );
      setD(true)
      console.log('done')}else
      window.alert('cancled')
  }
  const gotomeet=(id)=>{
    navigate(`/video/${id}`)

  }
  const gotoparticipate=(idevent,userid)=>{
 
    if (window.confirm('are you sure')){
    dispatch(
      participateEvent(
        {eventId:idevent,userId:userid}
      )
      
    );
    setD(true)
    console.log('done')}else
    window.alert('cancled')
  }
    
    client.resetStore()
    console.log(amount)

  return (
    <>

<body style={{backgroundImage:`url(${backg})`}}>
               
               {data ? ( 
       <div className="containerdetail">
 <div className="images">
 <img className="img" src={`${process.env.PUBLIC_URL}/images/${data?.event?.imageUrl}`}  />
 </div>
 <div className="product1"> 
 
   <p className="pdetail"> {data?.event?.name}- by {data?.event?.projectCreator?.firstName} {data?.event?.projectCreator?.lastName}</p>
   {/* <h1 className="h1detail">{data?.event.data?.eventName}</h1> */}
   <h2 className="h2detail">{data?.event?.participantsnumber} Member </h2>
   <p className="desc pdetail">{data?.event?.description}</p>
   {userInfo && part?.ev?.participant.length ===0 && <Button variant='dark' className='btn-sm'onClick={() => {gotoparticipate(data?.event.id,userInfo._id)}} >
    Participate 
 </Button> }
   {part?.ev?.participant.map((e)=>
    
    e!==userInfo?._id ? <Button variant='dark' className='btn-sm'onClick={() => {gotoparticipate(data?.event.id,userInfo._id)}} >
    Participate 
 </Button> :<Button variant='dark' className='btn-sm'onClick={() => {unParticipate(data?.event.id,userInfo._id)}} >
    unParticipate
 </Button>
   )}
  
  {userInfo?.role?.name==='sponsorRole'&& <> <Button variant='light' className='btn-sm' onClick={() => {gotoupdate(data?.event.id)}}>
                         <i className='fas fa-edit'></i>
                     </Button>
                     <Button variant='success' 
                        className='btn-sm' 
                        onClick={() => {navigate('/addevent')}}
                        > add
                        <i class="fa-sharp fa-solid fa-plus"></i>
                        </Button>
                     
                     <Button variant='danger' 
                     className='btn-sm' 
                     onClick={() => {deleteevent(data?.event.id)}}
                     >
                      <i className='fas fa-trash'></i>
                     </Button>
                     <Button variant='info' className='btn-sm'onClick={() => {navigate(`/meet`)}} >
                     Create Meet
                  </Button>
                  </>}

  
</div>
<Row>  
            <Col style={{marginLeft:"50px" ,marginBottom:'50px'}}md={10}>
              
            <ProgressBar animated now={20 +amount*18.419329*3}   variant='info' style={{backgroundColor:"gold",height:"30px"}} />

            <h2>Donation</h2>
            
                {b? <Input/> :<Button variant='info' 
                     className='btn-sm' 
                     onClick={() => {setB(true)}}
                     > send money
                     </Button>}
            </Col>
  
            </Row>
          
   
           </div> ):<>not found</>}
</body> </>
      )
}

export default Event