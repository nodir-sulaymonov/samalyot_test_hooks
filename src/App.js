import React, { useEffect, useState } from "react";
import TodoList from "./List/TodoList";
import Loading from "./Loading";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://data.gov.ru/sites/default/files/opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json", )
        //при заросе там стоит зашита CORS, поэтому при получение даннных получается ошибка
      .then((res) => res.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  return (
      <div className="wrapper">
        <h1>List Regions</h1>
        {loading && <Loading />}
        {todos ? (
          <TodoList todos={todos} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
  );
}

export default App;
