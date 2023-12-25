import React from "react";
import Header from "../../components/Header/Header";
import { Button, Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { UserSideBar } from "./UserSideBar";

export default function UserDashboard() {
  const now = 80;
  return (
    <>
      <Header />
      <Container>
        <div className="employee-dashboard">
          <h5>Find your dream job now</h5>
          <div className="search-container">
            <Row className="w-100">
              <Col lg={4} sm={12}>
                {/* <i className='fa fa-search'></i> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter skill / designation /company name"
                  name=""
                />
              </Col>
              <Col lg={3} sm={12}>
                <select className="form-select">
                  <option>Select Experience</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>

              <Col lg={3} sm={12}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Location"
                  name=""
                />
              </Col>
              <Col lg={2} sm={12}>
                <div className="search-container-btn">
                  <Button variant="">Search</Button>
                </div>
              </Col>
            </Row>
          </div>

          <div className="search-filter">
            <Row>
              <Col>
                <select className="form-select">
                  <option>Date of Posted</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>

              <Col>
                <select className="form-select">
                  <option>Industry</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>

              <Col>
                <select className="form-select">
                  <option>Job Type</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>

              <Col>
                <select className="form-select">
                  <option>Education</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>

              <Col>
                <select className="form-select">
                  <option>Salary</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </Col>
            </Row>
          </div>
        </div>
        <UserSideBar />
      </Container>
      <Footer />
    </>
  );
}
