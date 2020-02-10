import React from "react";

import FullWidthCarousal from "./FullWidthCarousal";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
    return (
        <div>
            <FullWidthCarousal />
			<DashboardContent />
            {/* <DashboardBody /> */}
        </div>
    );
};

export default Dashboard;