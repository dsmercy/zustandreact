import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const JobseekerExperience = () => {

    
  return (
    <>
    
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
                           />
                           <label for="eyes">Yes </label>
                           <input
                             className="form-check-input"
                             type="radio"
                             id="eno"
                             name="current"
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
                             value={e=>setCompanyName(e.target.value)}
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

    </>
  )
}
