import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getTodosData } from "../Redux/Todos/Actions";
import { useNavigate } from "react-router-dom";

export default function TaskItem() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  var todos1 = todos.filter((items) => items.status === "Todo");

  useEffect(() => {
    dispatch(getTodosData());
  }, [dispatch]);

  return (
    <div>
      {todos1.map((e, i) => (
        <div key={i} className="taskIndiv">
          <div className="taskIndivFlex">
            <div className="taskIndivFlexOne">
              <p key={e.id}>{e.title}</p>
              <p>
                {e.tags.official && "Official"} {e.tags.personal && "Personal"}{" "}
                {e.tags.others && "Others"}
              </p>
            </div>
            <div className="taskIndivFlexTwo">
              <p>{e.date}</p>
            </div>
          </div>

          <p>{e.description}</p>

          <div>
            {e.subtasks.map((el) => (
              <div key={el.id}>
                <label>
                  <input type="checkbox" />
                  {el.subtaskTitle}
                </label>
              </div>
            ))}
          </div>

          <button onClick={() => navigate(`/todos/${e.id}/edit`)}>Edit</button>
        </div>
      ))}
    </div>
  );
}
