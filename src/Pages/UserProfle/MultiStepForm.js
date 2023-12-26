import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

export default function MultiStepForm(){
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <Form.Text className="text-danger">
                  First name is required
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <Form.Text className="text-danger">
                  Last name is required
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <Form.Text className="text-danger">
                  Email is required
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <Form.Text className="text-danger">
                  Password is required
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>{" "}
            <Button variant="primary" onClick={nextStep}>
              Next
            </Button>
          </>
        );
      case 3:
        return (
          <>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <Form.Text className="text-danger">
                  Address is required
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                {...register("city", { required: true })}
              />
              {errors.city && (
                <Form.Text className="text-danger">City is required</Form.Text>
              )}
            </Form.Group>
            <Button variant="secondary" onClick={prevStep}>
              Previous
            </Button>{" "}
            <Button variant="primary" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Form>
      {renderStep()}
    </Form>
  );
};
