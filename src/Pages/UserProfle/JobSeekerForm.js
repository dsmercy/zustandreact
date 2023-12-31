import React,{useEffect, useState} from 'react';
import { FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import benfit from '../../assets/images/Group 41634.png'
import Header from '../../components/Header/Header';
import { useForm } from "react-hook-form";
import Services from '../../services/Services';
import {  useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAccountStore from '../../store/useAccountStore';
import EducationForm from './EducationForm';


const JobSeekerForm = () => {

  const [validated, setValidated] = useState(false);
  const {email} = useParams();
  const [data, setData] = useState('');
  const[degree,setDegree]=useState([]);
  const[study,setStudy]=useState([]);
  const[university,setUniversity]=useState([]);
  const[year,setYear]=useState([]);
  const[skills,setSkills]=useState([]);
  const [degreeName, setDegreeName]=useState({});
  const [fieldOfStudy,setFieldOfStudy]=useState('');
  const[universityName,setUniversityName]=useState('');
  const[yearOfCompletion,setYearOfCompletion]=useState('')
  const jobSeekerData = useAccountStore((state) => state.jobSeekerData);
  const [eduData,setEduData]=useState([]);
  const [location, setLocation]=useState('');
  const[middleName,setMiddleName]=useState('');
  const [companyName, setCompanyName]= useState("");
 
  const defaultValues = {
    firstName: jobSeekerData.data.firstName,
    middleName: middleName,
    lastName: jobSeekerData.data.lastName,
    email: jobSeekerData.data.email,
    phoneNumber: jobSeekerData.data.phoneNumber,
    currentLocation: location,
    };
  const {register,formState: { errors },handleSubmit} = useForm({ defaultValues, mode: 'all' });

  useEffect(() => {
    getDegree();
    getStudy();
    getUniversity();
    getYear();
    getSkills();
  
  }, []);

const getDegree=()=>{
  Services.Profile.getDegree().then((response)=>{
       setDegree(response.data);
  }).catch((errors)=>{
    console.log (errors);
  })
}

const getStudy=()=>{
  Services.Profile.getFieldOfStudyList().then((response)=>{
    setStudy(response.data);
  }).catch((errors)=>{
    console.log (errors);
  })
}

const getUniversity=()=>{
  Services.Profile.getUniversity().then((response)=>{
    setUniversity(response.data);
  }).catch((errors)=>{
    console.log (errors);
  })
}

const getYear=()=>{
  Services.Profile.getComplitionYear().then((response)=>{
    setYear(response?.data);
    }).catch((errors)=>{
    console.log (errors);
  })
}

const getSkills=()=>{
  Services.Profile.getSkills().then((response)=>{
    setSkills(response?.data);
    }).catch((errors)=>{
    console.log (errors);
  })
}

const handleComplete = (data) => {
  // console.log("Form completed!", data);
};

    const handleFormSubmit = async () => {
      setValidated(true);
    }
    
    const tabChanged = ({
      
      prevIndex,
      nextIndex,
    }) => {
       console.log("prevIndex", prevIndex);
      console.log("nextIndex", nextIndex);
    };

const body =[{
  degreeName: degreeName.id,
  fieldOfStudy: fieldOfStudy.id,
  clgName: universityName.id,
  yearofCompletion: yearOfCompletion
}]
    const handleEductaion=()=>{
      Services.Profile.setJobSeekerDetails(body).then((response)=>{
        console.log(response);
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        
          Services.Profile.getJobSeekerDetails().then((resData)=>{
            // setEduData(resData?.data);
            setEduData([...eduData, ...resData?.data]);
          }).catch((errors)=>{
            console.log(errors);
          })
        
      }).catch((errors)=>console.log(errors))
    }

    const handleContinue = () => {
      Services.Profile.updateJobSeeker(defaultValues).then((response)=>{
          }).catch((errors)=>{
      console.log(errors)
    })
}
// const details=[
//   {
//     expTypes:expTypes,
//     currentEmployee: currentEmployee,
//     companyName: companyName,
//     jobTitle: jobTitle,
//     jobDescription:jobDescription,
//     startDate: startDate,
//     endDate: endDate,
//     salary: salary,
//     yearOfExperience: yearOfExperience,
//     skillId: skillId,
//     salaryTypeId: salaryTypeId
//   }
// ];

// console.log(details);
const handleAddPosition=()=>{
Services.Profile.setJobSeekerExperience(null).then((response)=>{
  console.log(response);
}).catch((errors)=>{
  console.log(errors)
})

}

   return (
     <>
       <Header />
       <div className="wizard-header">
         <Container>
           <Row>
             <Col lg={4} sm={12}>
               <div className="jobs-benefits">
                 <div className="jobs-benefits-inner">
                   <h4>Poppin’ Jobs Benefits</h4>
                   <img src={benfit} alt="image" />
                 </div>

                 <p>
                   <i className="fa fa-check-square"></i> Find your perfect
                   match using our patented Poppin Jobs.
                 </p>
                 <p>
                   <i className="fa fa-check-square"></i> Create, send and track
                   the lifecycle of your resume in real-time.
                 </p>
                 <p>
                   <i className="fa fa-check-square"></i> Get updates and
                   feedback delivered directly to your email and phone.
                 </p>
               </div>
             </Col>

             <Col lg={8} sm={12}>
               <div className="wizard-head">
                 <h4>
                   Tell us more about <span className="yourself">yourself</span>{" "}
                 </h4>
                 <p>This helps us tailor our suggestions for you.</p>

                 <Form
                   noValidate
                   validated={validated}
                   onSubmit={handleSubmit(handleFormSubmit)}
                 >
                   <FormWizard
                     shape="circle"
                     color="#1DA425"
                     onComplete={handleComplete}
                     onTabChange={tabChanged}
                     nextButtonTemplate={(handleNext) => (
                       <div
                         className="wizard-footer-right"
                         style={{
                           backgroundColor: "rgb(29, 164, 37)",
                           borderColor: "rgb(29, 164, 37)",
                           borderRadius: "4px",
                         }}
                       >
                         <button
                           className="wizard-btn"
                           type="submit"
                           onClick={() => {
                             handleContinue();
                             handleNext();
                           }}
                         >
                           Continue
                         </button>
                       </div>
                     )}
                   >
                     {/* -------------------------First Form---------------- */}

                     <FormWizard.TabContent
                       title="Basic Details"
                       icon="fa fa-check"
                     >
                       <h5>Basic Details</h5>
                       <span className="bord"></span>
                       <Row>
                         <Col lg={4} sm={12}>
                           <FormLabel>
                             First Name<span className="text-danger">*</span>
                           </FormLabel>
                           <InputGroup className="mb-3">
                             <Form.Control
                               type="text"
                               placeholder="First Name"
                               aria-label="Firstname"
                               aria-describedby="basic-addon1"
                               value={data.firstName}
                               {...register("firstName", { required: true })}
                               isInvalid={!!errors.firstName}
                             />
                           </InputGroup>
                         </Col>
                         <Col lg={4} sm={12}>
                           <FormLabel>Middle Name</FormLabel>
                           <InputGroup className="mb-3">
                             <Form.Control
                               type="email"
                               placeholder="Middle Name"
                               aria-label="Middlename"
                               aria-describedby="basic-addon1"
                               {...register("middleName")}
                               isInvalid={!!errors.middleName}
                               value={middleName}
                               onChange={(e) => setMiddleName(e.target.value)}
                             />
                           </InputGroup>
                         </Col>

                         <Col lg={4} sm={12}>
                           <FormLabel>
                             Last Name<span className="text-danger">*</span>
                           </FormLabel>
                           <InputGroup className="mb-3">
                             <Form.Control
                               type="text"
                               placeholder="Last Name"
                               aria-label="Lastname"
                               aria-describedby="basic-addon1"
                               value={data.lastName}
                               {...register("lastName", { required: true })}
                               isInvalid={!!errors.lastName}
                             />
                           </InputGroup>
                         </Col>
                       </Row>
                       <Row>
                         <Col>
                           <FormLabel>
                             Email<span className="text-danger">*</span>
                           </FormLabel>
                           <InputGroup className="mb-3">
                             <Form.Control
                               type="email"
                               placeholder="Email"
                               aria-label="Email"
                               aria-describedby="basic-addon1"
                               value={data.email}
                               {...register("email", {
                                 required: true,
                                 pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                               })}
                               isInvalid={!!errors.email}
                             />
                           </InputGroup>
                         </Col>
                       </Row>
                       <Row>
                         <Col>
                           <FormLabel>
                             Phone Number<span className="text-danger">*</span>
                           </FormLabel>
                           <InputGroup className="mb-3">
                             <Form.Control
                               type="phonenumber"
                               placeholder="Phone Number"
                               aria-label="PhoneNumber"
                               aria-describedby="basic-addon1"
                               value={data.phoneNumber}
                               {...register("phoneNumber", {
                                 required: true,
                                 maxLength: 10,
                                 pattern: {
                                   value: /^[0-9\b]+$/,
                                   message: "Invalid phone number",
                                 },
                               })}
                               isInvalid={!!errors.phoneNumber}
                             />
                           </InputGroup>
                         </Col>
                       </Row>
                       <Row>
                         <Col>
                           <FormLabel>
                             Current Location
                             <span className="text-danger">*</span>
                           </FormLabel>
                           <InputGroup className="mb-3">
                             <Form.Control
                               type="text"
                               placeholder="Current Location"
                               aria-label="Current Location"
                               aria-describedby="basic-addon1"
                               value={location}
                               {...register("location", { required: true })}
                               isInvalid={!!errors.location}
                               onChange={(e) => setLocation(e.target.value)}
                             />
                           </InputGroup>
                         </Col>
                       </Row>
                     </FormWizard.TabContent>

                     {/*-------------- Second Form------------*/}

                     <FormWizard.TabContent
                       title="Education & Skill"
                       icon="fa fa-check"
                     >
                       <h5>Education & Skills</h5>
                       <span className="bord"></span>
                       {eduData.length
                         ? eduData.map((edu) => <EducationForm eduData={edu} />)
                         : ""}
                       <Row>
                         <Col>
                           <FormLabel>
                             Degree <span className="text-danger">*</span>
                           </FormLabel>
                           <Form.Select
                             aria-label="Default select example"
                             className="mb-3"
                             {...register("degreeName", { required: true })}
                             isInvalid={!!errors.degreeName}
                             onChange={(e) => {
                               const selectedItem = degree.find(
                                 (item) => item.degreeName === e.target.value
                               );
                               setDegreeName({
                                 id: selectedItem.id,
                                 value: selectedItem.degreeName,
                               });
                             }}
                           >
                             <option value="">Open this select menu </option>
                             {degree?.map((item) => (
                               <option
                                 id={item.id}
                                 value={item?.degreeName}
                                 key={item?.id}
                               >
                                 {item?.degreeName}
                               </option>
                             ))}
                           </Form.Select>
                           <Form.Control.Feedback type="invalid">
                             Please select a degree.
                           </Form.Control.Feedback>
                         </Col>
                       </Row>

                       <Row>
                         <Col>
                           <FormLabel>
                             Field of study{" "}
                             <span className="text-danger">*</span>
                           </FormLabel>
                           <Form.Select
                             aria-label="Default select example"
                             className="mb-3"
                             {...register("fieldOfStudy", { required: true })}
                             isInvalid={!!errors.fieldOfStudy}
                             onChange={(e) => {
                               const selectedItem = study.find(
                                 (item) => item.fieldOfStudy === e.target.value
                               );
                               setFieldOfStudy({
                                 id: selectedItem.id,
                                 value: selectedItem.fieldOfStudy,
                               });
                             }}
                           >
                             <option value="">Open this select menu </option>
                             {study.map((item) => (
                               <option
                                 id={item.id}
                                 value={item.fieldOfStudy}
                                 key={item.id}
                               >
                                 {item.fieldOfStudy}
                               </option>
                             ))}
                           </Form.Select>
                           <Form.Control.Feedback type="invalid">
                             Please select field of study.
                           </Form.Control.Feedback>
                         </Col>
                       </Row>

                       <Row>
                         <Col>
                           <FormLabel>
                             School/University{" "}
                             <span className="text-danger">*</span>
                           </FormLabel>
                           <Form.Select
                             aria-label="Default select example"
                             className="mb-3"
                             {...register("universityName", { required: true })}
                             isInvalid={!!errors.universityName}
                             onChange={(e) => {
                               const selectedItem = university?.find(
                                 (item) => item.university === e.target.value
                               );
                               setUniversityName({
                                 id: selectedItem.id,
                                 value: selectedItem.university,
                               });
                             }}
                           >
                             <option value="">Open this select menu </option>
                             {university?.map((item) => (
                               <option
                                 id={item.id}
                                 value={item.university}
                                 key={item.id}
                               >
                                 {item.university}
                               </option>
                             ))}
                           </Form.Select>
                           <Form.Control.Feedback type="invalid">
                             Please select field of School/University.
                           </Form.Control.Feedback>
                         </Col>
                       </Row>

                       <Row>
                         <Col>
                           <FormLabel>
                             Year of Completion
                             <span className="text-danger">*</span>
                           </FormLabel>
                           <Form.Select
                             aria-label="Default select example"
                             className="mb-3"
                             {...register("yearOfCompletion", {
                               required: true,
                             })}
                             isInvalid={!!errors.yearOfCompletion}
                             onChange={(e) =>
                               setYearOfCompletion(e.target.value)
                             }
                           >
                             <option value="">Open this select menu </option>
                             {year.map((item, index) => (
                               <option
                                 value={item.yearOfCompletion}
                                 key={item.index}
                               >
                                 {item.yearOfCompletion}
                               </option>
                             ))}
                           </Form.Select>
                           <Form.Control.Feedback type="invalid">
                             Please select Year of Completion.
                           </Form.Control.Feedback>
                         </Col>
                       </Row>

                       <div className="add-position" onClick={handleEductaion}>
                         <h4>
                           <i className="fa fa-plus-circle"></i> Add Education
                         </h4>
                       </div>

                       <Row>
                         <Col>
                           <FormLabel>
                             Skills <span className="text-danger">*</span>
                           </FormLabel>
                           <Form.Select
                             aria-label="Default select example"
                             className="mb-3"
                             {...register("skillName", { required: true })}
                             isInvalid={!!errors.skillName}
                           >
                             <option>Open this select menu </option>
                             {skills?.map((item) => (
                               <option value={item.skillName} key={item.id}>
                                 {item.skillName}
                               </option>
                             ))}
                           </Form.Select>
                         </Col>
                       </Row>
                     </FormWizard.TabContent>

                     {/* ---------------Third Form -----------------*/}

                     <FormWizard.TabContent
                       title="Experience"
                       icon="fa fa-check"
                     >
                       <h5>Experience</h5>
                       <span className="bord"></span>
                       <div className="experience">
                         <Row>
                           <Col>
                             <div className="fresh">
                               <h4>
                                 <input
                                   className="form-check-input"
                                   type="checkbox"
                                   id="exper"
                                   name="exper"
                                   {...register('experience')}
                                 />{" "}
                                 <label for="exper">I'm Experienced</label>
                               </h4>
                               <p>
                                 I have work experienced (excluding internships)
                               </p>
                             </div>
                           </Col>
                           <Col>
                             <div className="fresh-second">
                               <h4>
                                 <input
                                   className="form-check-input"
                                   type="checkbox"
                                   id="fresher"
                                   name="exper"
                                   {...register('fresher')}
                                 />{" "}
                                 <label for="fresher">I’m a Fresher</label>{" "}
                               </h4>
                               <p>
                                 I‘m a Student Haven’t worked after graduation.
                               </p>
                             </div>
                           </Col>
                         </Row>

                         <div className="current-empl">
                           <h5>Is this your current employment?</h5>
                           <input
                             className="form-check-input"
                             type="radio"
                             id="eyes"
                             name="current"
                             {...register('yes')}
                           />
                           <label for="eyes">Yes </label>
                           <input
                             className="form-check-input"
                             type="radio"
                             id="eno"
                             name="current"
                             {...register('no')}
                           />
                           <label for="eno">No </label>
                         </div>

                         <FormLabel>
                           Company Name <span className="text-danger">*</span>
                         </FormLabel>
                         <InputGroup className="mb-3">
                           <Form.Control
                             type="text"
                             placeholder="Company name"
                             aria-label="Company"
                             aria-describedby="basic-addon1"
                             value={data.companyName}
                             {...register("companyName", { required: true })}
                             isInvalid={!!errors.companyName}
                           />
                         </InputGroup>

                         <FormLabel>
                           Job Title<span className="text-danger">*</span>
                         </FormLabel>
                         <InputGroup className="mb-3">
                           <Form.Control
                             type="text"
                             placeholder="Job Title"
                             aria-label="JobTitle"
                             aria-describedby="basic-addon1"
                             value={data.jobTitle}
                             {...register("jobTitle", { required: true })}
                             isInvalid={!!errors.jobTitle}
                           />
                         </InputGroup>

                         <Row>
                           <Col>
                             <FormLabel>
                               Start Date <span className="text-danger">*</span>
                             </FormLabel>
                             <Form.Group controlId="datePicker">
                               <Form.Control
                                 {...register("startDate", { required: true })}
                                 isInvalid={!!errors.startDate}
                                 type="date"
                               />
                               <Form.Control.Feedback type="invalid">
                                 This field is required.
                               </Form.Control.Feedback>
                             </Form.Group>
                           </Col>
                         
                           <Col>
                             <FormLabel>
                               End Date <span className="text-danger">*</span>
                             </FormLabel>
                             <Form.Group controlId="datePicker">
                               <Form.Control
                                 {...register("endDate", { required: true })}
                                 isInvalid={!!errors.endDate}
                                 type="date"
                               />
                               <Form.Control.Feedback type="invalid">
                                 This field is required.
                               </Form.Control.Feedback>
                             </Form.Group>
                           </Col>
                         </Row>

                         <FormLabel>
                           Skill Used <span className="text-danger">*</span>
                         </FormLabel>
                         <InputGroup className="mb-3">
                           <Form.Control
                             type="text"
                             placeholder=""
                             aria-label="skills"
                             aria-describedby="basic-addon1"
                             {...register("skillUsed", { required: true })}
                             isInvalid={!!errors.skillUsed}
                           />
                           <Form.Control.Feedback type="invalid">
                                 This field is required.
                               </Form.Control.Feedback>
                         </InputGroup>

                         <FormLabel>Job Description</FormLabel>
                         <FloatingLabel
                           controlId="floatingTextarea2"
                           label="Comments"
                         >
                           <Form.Control
                             as="textarea"
                             placeholder="Leave a comment here"
                             style={{ height: "100px" }}
                           />
                         </FloatingLabel>

                         <div className="current-salary">
                           <h5>Current Salary ($)</h5>
                           <input
                             className="form-check-input"
                             type="radio"
                             id="hourly"
                             name="salary"
                           />
                           <label for="hourly">Hourly </label>
                           <input
                             className="form-check-input"
                             type="radio"
                             id="monthly"
                             name="salary"
                           />
                           <label for="monthly">Monthly</label>
                           <input
                             className="form-check-input"
                             type="radio"
                             id="annually"
                             name="salary"
                           />
                           <label for="annually">Annually </label>
                         </div>

                         <div className="add-position" onClick={handleAddPosition}>
                           <h4>
                             <i className="fa fa-plus-circle"></i> Add Position
                           </h4>
                         </div>
                       </div>
                     </FormWizard.TabContent>

                     {/* -----------------------Forth Form--------------- */}

                     <FormWizard.TabContent
                       title="Job Preference"
                       icon="fa fa-check"
                     >
                       <h5>Job Preference</h5>
                       <span className="bord"></span>

                       <FormLabel>
                         Preferred Location{" "}
                         <span className="text-danger">*</span>
                       </FormLabel>
                       <InputGroup className="mb-3">
                         <Form.Control
                           type="text"
                           placeholder=""
                           aria-label="Username"
                           aria-describedby="basic-addon1"
                         />
                       </InputGroup>

                       <div className="job-type">
                         <h5>
                           Job Type <span className="text-danger">*</span>
                         </h5>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="perm"
                           name="job-type"
                         />
                         <label for="perm">Permanent </label>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="temp"
                           name="job-type"
                         />
                         <label for="temp">Temporary/Contract</label>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="both"
                           name="job-type"
                         />
                         <label for="both">Both </label>
                       </div>
                       <div className="job-type">
                         <h5>
                           Employment Type{" "}
                           <span className="text-danger">*</span>
                         </h5>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="perm"
                           name="job-type"
                         />
                         <label for="perm">Full time </label>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="temp"
                           name="job-type"
                         />
                         <label for="temp">Part time</label>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="both"
                           name="job-type"
                         />
                         <label for="both">Remote </label>
                       </div>
                       <div className="job-type">
                         <h5>
                           Expected Salary{" "}
                           <span className="text-danger">*</span>
                         </h5>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="perm"
                           name="job-type"
                         />
                         <label for="perm">Hourly </label>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="temp"
                           name="job-type"
                         />
                         <label for="temp">Monthly</label>
                         <input
                           className="form-check-input"
                           type="radio"
                           id="both"
                           name="job-type"
                         />
                         <label for="both">Annually </label>
                       </div>
                     </FormWizard.TabContent>
                   </FormWizard>
                 </Form>
               </div>
             </Col>
           </Row>
         </Container>
       </div>
     </>
   );
}


export default JobSeekerForm
