import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        marginBottom: ".5rem",
    },
    input: {
        marginRight: "1rem",
        cursor: "pointer",
    },
};

function TodoItem({todo, index}) {
    return (
        <li style={styles.li}>
      <span>
        <strong>{index + 1}</strong>
          &nbsp;
          <Link to={`/${todo.order}/info`}>Region name: {todo.territory}</Link>
          <div>
                Libraries: {todo.libraries}
          </div>
      </span>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
};
export default TodoItem;
