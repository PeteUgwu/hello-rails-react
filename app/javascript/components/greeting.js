import React, { useEffect } from "react";
import { fetchMessages } from "../store/greetingsSlice";
import { useDispatch, useSelector } from "react-redux";

function Greeting() {
  const dispatch = useDispatch();
  const messagesData = useSelector((state) => state.messages.messages);

  useEffect(() => dispatch(fetchMessages()), [dispatch]);

  return (
    <div>
      <h3>{messagesData.greeting}</h3>
      <button onClick={() => dispatch(fetchMessages())}>Get Message</button>
    </div>
  );
}

export default Greeting;
