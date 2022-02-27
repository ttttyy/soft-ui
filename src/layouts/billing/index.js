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

// @mui material components
import axios from "axios";
import Radio from '@mui/material/Radio';
import Grid from "@mui/material/Grid";
import Slider from '@mui/material/Slider';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import Card from "@mui/material/Card";
import SuiTypography from "components/SuiTypography";
// Soft UI Dashboard React components
// import MasterCard from "examples/Cards/MasterCard";
// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import SuiButton from "components/SuiButton";
import Icon from "@mui/material/Icon";
import Modal from '@mui/material/Modal';
import SuiInput from "components/SuiInput";
import CardLayout from "layouts/tables/CardLayout";
// import SuiBadge from "components/SuiBadge";

// Billing page components
// import PaymentMethod from "layouts/billing/components/PaymentMethod";
// import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";

class Billing extends React.Component {

  // const { open, setOpen } = React.useState(false);
  constructor(props){
    super(props);

    // 状态初始化
    this.state = {
        price:"",
        ratio:"",
        size:"", 
        options:"Buy",
        visible: false,
        // rememberMe:false,
    }
  }

handleClickOpen = () => {
  this.setState({ visible: true });
};

handleClose = () => {
  this.setState({ visible: false });
};

handleSubmit = () => {
  const x = this.state;
    if (x.price && x.size) {
      axios({
        method: 'post',
        url: 'http://localhost:3000/billing',
        data: {
          price: x.price,
          size: x.size,
          options: x.options,
          ratio: x.ratio
        }
      });
      // Alert('This is an alert!')
    } else {
      // Alert('This is an alert!')
    }
  this.setState({ visible: false });
};

handleChange = event => {
  this.setState({ options: event.target.value });
};

  render(){
    const x=this.state;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={4}>
      <SuiBox mr={3} mb={2}>
      <SuiButton variant="gradient" color="dark" mb={3} pb={3} onClick={this.handleClickOpen}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new transactions
        </SuiButton>
        </SuiBox>
        <Modal
          open={x.visible}
          onOk={this.handleSubmit}
          onClose={this.handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <CardLayout>
          <Card>
        <SuiBox p={3} mb={1} textAlign="center">
          <SuiTypography variant="h5" fontWeight="medium">
            New transactions
          </SuiTypography>
        </SuiBox>
        <SuiBox pt={2} pb={3} px={3}>
          <SuiBox component="form" role="form">
            <SuiBox mb={2}>
              <SuiInput placeholder="Price" value={x.price} onChange={(e) => {
              this.setState({ price: e.target.value })
            }}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="size" placeholder="Size" value={x.size} onChange={(e) => {
              this.setState({ size: e.target.value })
            }} />
            </SuiBox>
            <SuiBox mb={2} >
              <SuiBox ml={1}><SuiTypography variant="h6">Margin ratio</SuiTypography></SuiBox>
            <SuiBox ml={1}><Slider defaultValue={x.ratio} onChange={(e) => {
              this.setState({ ratio: e.target.value })
            }} aria-label="Default" valueLabelDisplay="auto" />
            </SuiBox>
            </SuiBox>
            <SuiBox>
            <FormControl>
              <FormLabel id="options-radio"><SuiTypography variant="h6">Options</SuiTypography></FormLabel>
              <RadioGroup
                row
                aria-labelledby="options-radio"
                value={x.options}
                onChange={this.handleChange}
                name="radio-buttons-group"
              >
                <FormControlLabel value="0"  control={<Radio />} label="Buy" />
                <FormControlLabel value="1"  control={<Radio />} label="Sell" />
              </RadioGroup>
            </FormControl>
            </SuiBox>
            <SuiBox mt={4} mb={1}>
              <SuiButton variant="gradient" color="info" fullWidth onClick={this.handleSubmit}>
                Submit
              </SuiButton>
              </SuiBox>
              <SuiBox  mb={1}>
              <SuiButton variant="gradient" color="error" fullWidth onClick={this.handleClose} >
                Cancel
              </SuiButton>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </Card>
      </CardLayout>
        </Modal>
{/*
        <SuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>

                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                 <PaymentMethod 
                 />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Invoices />
            </Grid>
          </Grid>
        </SuiBox>
*/}
        <SuiBox my={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}
}

export default Billing;
