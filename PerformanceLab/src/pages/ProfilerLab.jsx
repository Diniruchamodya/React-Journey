import { useState, Profiler } from "react";

function onRenderCallback(id, phase, actualDuration) {
  console.log("Component:", id);
  console.log("Phase:", phase);
  console.log("Duration:", actualDuration, "ms");
}

function ProfilerLab() {
  const [count, setCount] = useState(0);

  return (
    <Profiler id="BookingCounter" onRender={onRenderCallback}>
      <div>
        <h1>LensCraft Performance Monitor</h1>

        <h1>Count: {count}</h1>

        <button onClick={() => setCount(prev => prev + 1)}>
          Increment
        </button>

        <button onClick={() => setCount(prev => prev - 1)}>
          Decrement
        </button>
      </div>
    </Profiler>
  );
}

export default ProfilerLab;