import "./App.css";
import Title from "./components/1.title";
import ListStudents from "./components/5.list-students";
import studentsListData from "./data/students-list-data";
import Subtitle from "./components/2.subtitle";
import ListArticles from "./components/7.list-articles";

function App() {
  return (
    <div>
      <Title title="STUDENTS CODECOOL" />
      <Subtitle studentsLength={studentsListData.length} />
      <ListStudents />
      <Title title="BLOG ARTICLES" />
      <ListArticles />
    </div>
  );
}

export default App;
