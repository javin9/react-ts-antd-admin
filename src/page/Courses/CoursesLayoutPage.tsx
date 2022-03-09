import { Outlet } from "react-router-dom";

import { FunctionComponent } from "react";

interface ICoursesLayoutPageProps {}

const CoursesLayoutPage: FunctionComponent<ICoursesLayoutPageProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default CoursesLayoutPage;
