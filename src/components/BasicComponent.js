import React from "react";
import { Formik } from "formik";

const Basic = () => {
  const initialValues = { email: "dip@gmail.com", password: "" };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validate={}
        onSubmit={values => {
          console.log(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          // errors,
          // touched,
          handleChange,
          // handleBlur,
          handleSubmit
        }) => (
          <div className="col-md-6" style={{ marginTop: "40px" }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
export default Basic;
