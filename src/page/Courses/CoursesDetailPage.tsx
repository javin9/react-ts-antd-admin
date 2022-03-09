import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { FunctionComponent } from "react";

interface ICoursesDetailPageProps {}

const CoursesDetailPage: FunctionComponent<ICoursesDetailPageProps> = () => {
  let { id } = useParams<"id">();

  const capitalizeString = useCallback((s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }, []);

  return (
    <div>
      <h2>欢迎学习 {id!.split("-").map(capitalizeString).join(" ")} 课程!</h2>
      <p>这个编程语言不错，快点学习，赢取白富美</p>
      <Link to="/courses">查看所有</Link>
    </div>
  );
};

export default CoursesDetailPage;
