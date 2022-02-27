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
import Card from "@mui/material/Card";
import React from 'react';
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";
import Icon from "@mui/material/Icon";
import SuiButton from "components/SuiButton";
import Modal from '@mui/material/Modal';
import SuiInput from "components/SuiInput";
import CardLayout from "layouts/tables/CardLayout";
// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

class Tables extends React.Component {
  // const { columns, rows } = authorsTableData;
  // const { columns: prCols, rows: prRows } = projectsTableData;
  // const [open, setOpen] = React.useState(false);

  constructor(props){
    super(props);

    // 状态初始化
    this.state = {
        name :"",
        email :"",
        quota:"", 
        price:"",
        visible: false,
        columns: authorsTableData.columns,
        rows: authorsTableData.rows,
        // rememberMe:false,
    }
  }

  handleClose = () => {
    this.setState({ visible: false });
  };

  handleClickOpen = () => {
    this.setState({ visible: true });
  };

  handleSubmit = () => {
    const x = this.state;
    // const { columns, rows } = authorsTableData;
      if (x.price && x.quota) {
        axios({
          method: 'post',
          url: 'http://localhost:3000/tables',
          data: {
            price: x.price,
            quota: x.quota,
            name: x.name,
            email: x.email
          }
        });
        // Alert('This is an alert!')
        console.log("Success")
      } else {
        // Alert('This is an alert!')
        console.log("failed")
      }
    this.setState({ visible: false });
  };

  render(){
    const x=this.state;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
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
              <SuiInput placeholder="Company Name" value={x.name} onChange={(e) => {
              this.setState({ name: e.target.value })
            }}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="email" placeholder="Email" value={x.email} onChange={(e) => {
              this.setState({ email: e.target.value })
            }}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="quota" placeholder="Quota" value={x.quota} onChange={(e) => {
              this.setState({ quota: e.target.value })
            }}/>
            </SuiBox>
            <SuiBox mb={2}>
              <SuiInput type="price" placeholder="Price" value={x.price} onChange={(e) => {
              this.setState({ price: e.target.value })
            }}/>
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
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">transactions table</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={x.columns} rows={x.rows} />
            </SuiBox>
          </Card>
        </SuiBox>
{/*
        <Card>
          <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SuiTypography variant="h6">Projects table</SuiTypography>
          </SuiBox>
          <SuiBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </SuiBox>
        </Card>
          */}
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}
}

export default Tables;
