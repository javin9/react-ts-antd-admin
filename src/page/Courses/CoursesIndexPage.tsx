import { Link } from "react-router-dom";

import { FunctionComponent } from "react";

interface ICoursesIndexPageProps {}

const CoursesIndexPage: FunctionComponent<ICoursesIndexPageProps> = () => {
  return (
    <div>
      <p>请选择一种编程语言</p>
      <nav>
        <ul>
          <li>
            <Link to="c++-fundamentals">C++</Link>
          </li>
          <li>
            <Link to="advanced-c语言">C语言</Link>
          </li>
          <li>
            <Link to="golang-fundamentals">Golang</Link>
          </li>
          <li>
            <Link to="javascript-router">Javascript</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CoursesIndexPage;
