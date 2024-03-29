import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageList = [
    {
        'id':'staff001',
        'FirstName':'Obinna',
        'LastName':'Nwasike',
        'Position':'Faculty',
        'Gender':'Male',
        'Course':['Android', 'JSF', 'RWD', 'Spring Boot', 'JUnit', 'React.js'],
        'image':'MapImageList/001.jpg'
    }, 
    {
        'id':'staff002',
        'FirstName':'Derby',
        'LastName':'Skynet',
        'Position':'Faculty',
        'Gender':'Female',
        'Course':['Java', 'HTML5', 'JSP'],
        'image':'MapImageList/002.jpg'
    }, 
    {
        'id':'staff003',
        'FirstName':'Chinedu',
        'LastName':'Nwanosike',
        'Position':'Faculty',
        'Gender':'Male',
        'Course':['MS Excel', 'MS Word', 'MS Powerpoint'],
        'image':'MapImageList/003.jpg'
    }, 
    {
        'id':'staff004',
        'FirstName':'Frank',
        'LastName':'Wariebi',
        'Position':'Faculty',
        'Gender':'Male',
        'Course':['Python', 'Data Analytic','SQL'],
        'image':'MapImageList/004.jpg'
    }, 
    {
        'id':'staff005',
        'FirstName':'Dele',
        'LastName':'Momodi',
        'Position':'Faculty',
        'Gender':'Male',
        'Course':['Android', 'JSF', 'Java'],
        'image':'MapImageList/005.jpg'
    } , 
    {
        'id':'staff006',
        'FirstName':'Mercy',
        'LastName':'Sylvanus',
        'Position':'Faculty',
        'Gender':'Male',
        'Course':['Logic', 'SQL'],
        'image':'MapImageList/006.jpg'
    }    
]

 const StaffList = () =>(
    imageList.map((staff)=>(
        <>
            <li style={{
                listStyle:'none', 
                border:'1px solid #999',
                padding:'20px',
                float:'left',
                width:'200px',
                height:'300px'
                }}
            >
            <img
                style={{
                    borderRadius:'100px',
                    border:'2px solid #999'
                }}
                src={staff.image} 
                width='160px'
                height='170px'
            />
            <p>
                Full Name: {staff.FirstName} {staff.LastName}
                <br>
                </br>
                Gender: {staff.Gender}
                <br></br>
                Position: {staff.Position}
            </p>
            </li>
        </>
    ))
 )
 


 const DoArrow = () => "srvrsbvrsv"; 

export default function MapImageList(){
    return(
        <div>
            <ul>
                {StaffList()}
                {/* <StaffList/> */}
            </ul>
        </div>
    );
}