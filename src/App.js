import sum from "lodash-es/sum";
// import { sum } from "lodash";
// import { sum } from "lodash-es";
import React from "react";

export function App() {
  return (
    <>
      <h1>Teste do tamanho do bundle do lodash</h1>
      <div>{sum([1, 2, 3])}</div>
    </>
  );
}

export default App;
