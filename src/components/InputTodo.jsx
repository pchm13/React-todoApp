import React from "react";

const style = {
  backgroundColor: "aqua",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const InputTodo = (props) => {
  // 分割代入でpropsの中身を取り出す
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
