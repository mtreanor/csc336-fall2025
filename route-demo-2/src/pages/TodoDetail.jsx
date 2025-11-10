import { useParams } from "react-router-dom";

function TodoDetail() {
  const { id } = useParams();
  return <div>Todo ID: {id}</div>;
}
export default TodoDetail;