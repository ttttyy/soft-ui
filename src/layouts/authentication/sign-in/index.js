/**
=========================================================
* Soft UI Dashboard React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// import { useState } from "react";

// react-router-dom components
import axios from "axios";
import React from 'react'
import { Link } from "react-router-dom";
// import SuiAlert from "components/SuiAlert";
// @mui material components
// import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiInput from "components/SuiInput";
import SuiButton from "components/SuiButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

class SignIn extends React.Component {
  // const [rememberMe, setRememberMe] = useState(true);
  
  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  constructor(props){
    super(props);

    // 状态初始化
    this.state = {
        username:"",
        password:"",
        // rememberMe:false,
    }
  }
  
  handleLogin() {
    const x = this.state;
    if (x.username && x.password) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/dashboard',
        data: {
          username: x.username,
          password: x.password
        }
      });
      // <SuiAlert>This is an alert!</SuiAlert>
    } else {
      // <SuiAlert>This is an alert!</SuiAlert>
    }
  }

  render(){
    const c = this.state;
    return (
      <CoverLayout
        title="Welcome back"
        description="Enter your username and password to sign in"
        image={curved9}
      >
        <SuiBox component="form" role="form">
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Username
              </SuiTypography>
            </SuiBox>
            <SuiInput type="username" placeholder="username" value={c.username}
            onChange={(e) => {
              this.setState({ username: e.target.value })
            }} />
          </SuiBox>
          <SuiBox mb={2}>
            <SuiBox mb={1} ml={0.5}>
              <SuiTypography component="label" variant="caption" fontWeight="bold">
                Password
              </SuiTypography>
            </SuiBox>
            <SuiInput type="password" placeholder="Password" value={c.password}
            onChange={(e) => {
              this.setState({ password: e.target.value })
            }} />
          </SuiBox>
          <SuiBox mt={4} mb={1}>
            <SuiButton variant="gradient" color="info" fullWidth 
            onClick={() => {
              this.handleLogin()
            }}>
              sign in
            </SuiButton>
          </SuiBox>
          <SuiBox mt={3} textAlign="center">
            <SuiTypography variant="button" color="text" fontWeight="regular">
              Don&apos;t have an account?{" "}
              <SuiTypography
                component={Link}
                to="/authentication/sign-up"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Sign up
              </SuiTypography>
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </CoverLayout>
    );
  }
}

export default SignIn;
