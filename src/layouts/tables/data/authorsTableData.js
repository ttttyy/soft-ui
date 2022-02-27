/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Author({ image, name, email }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox mr={2}>
        <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
      </SuiBox>
      <SuiBox display="flex" flexDirection="column">
        <SuiTypography variant="button" fontWeight="medium">
          {name}
        </SuiTypography>
        <SuiTypography variant="caption" color="secondary">
          {email}
        </SuiTypography>
      </SuiBox>
    </SuiBox>
  );
}
/*
function Function({ job, org }) {
  return (
    <SuiBox display="flex" flexDirection="column">
      <SuiTypography variant="caption" fontWeight="medium" color="text">
        {job}
      </SuiTypography>
      <SuiTypography variant="caption" color="secondary">
        {org}
      </SuiTypography>
    </SuiBox>
  );
}
*/

export default {
  columns: [
    { name: "author", align: "left" },
    { name: "quota", align: "left" },
    { name: "price", align: "center" },
    { name: "date", align: "center" },
    { name: "status", align: "center" },
  ],

  rows: [
    {
      author: <Author image={team2} name="Company A" email="john@companyA.com" />,
      quota: <SuiTypography variant="caption" color="secondary" fontWeight="medium">300</SuiTypography>,
      price: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">300</SuiTypography>
      ),
      date: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          23/04/18
        </SuiTypography>
      ),
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
    },
    {
      author: <Author image={team3} name="Company B" email="alexa@companyB.com" />,
      quota: <SuiTypography variant="caption" color="secondary" fontWeight="medium">500</SuiTypography>,
      price: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">300</SuiTypography>
      ),
      date: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          11/01/19
        </SuiTypography>
      ),
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="secondary" size="xs" container />
      ),
    },
    {
      author: <Author image={team4} name="Company C" email="laurent@companyC.com" />,
      quota: <SuiTypography variant="caption" color="secondary" fontWeight="medium">700</SuiTypography>,
      price: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">300</SuiTypography>
      ),
      date: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          19/09/17
        </SuiTypography>
      ),
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
    },
    {
      author: <Author image={team3} name="Company D" email="michael@companyD.com" />,
      quota: <SuiTypography variant="caption" color="secondary" fontWeight="medium">300</SuiTypography>,
      price: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">300</SuiTypography>
      ),
      date: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          24/12/08
        </SuiTypography>
      ),
      status: (
        <SuiBadge variant="gradient" badgeContent="online" color="success" size="xs" container />
      ),
    },
    {
      author: <Author image={team2} name="Company E" email="richard@companyE.com" />,
      quota: <SuiTypography variant="caption" color="secondary" fontWeight="medium">400</SuiTypography>,
      price: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">200</SuiTypography>
      ),
      date: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          04/10/21
        </SuiTypography>
      ),
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="error" size="xs" container />
      ),
    },
    {
      author: <Author image={team4} name="Company F" email="miriam@companyf.com" />,
      quota: <SuiTypography variant="caption" color="secondary" fontWeight="medium">600</SuiTypography>,
      price: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">200</SuiTypography>
      ),
      date: (
        <SuiTypography variant="caption" color="secondary" fontWeight="medium">
          14/09/20
        </SuiTypography>
      ),
      status: (
        <SuiBadge variant="gradient" badgeContent="offline" color="error" size="xs" container />
      ),
    },
  ],
};
