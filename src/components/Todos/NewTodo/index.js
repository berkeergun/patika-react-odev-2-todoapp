import { useState, useEffect } from "react";

const initialFormValues = { todo: "" };
function NewTodo({ todos, addTodo }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [todos]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todo === "") {
      return false;
    }

    addTodo([...todos, form]);

    // setForm(initialFormValues)
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="todo"
          placeholder="Write Something to do 'Enter'"
          value={form.todo}
          onChange={onChangeInput}
        ></input>
      </div>
    </form>
  );
}

export default NewTodo;
