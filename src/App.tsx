import React from 'react';
import ParamEditor from './components/ParamEditor';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Color {
}

const params: Param[] = [
  {
    id: 1,
    name: 'Назначение',
    type: 'string',
  },
  {
    id: 2,
    name: 'Длина',
    type: 'string',
  },
];

const initialModel: Model = {
  paramValues: [
    {
      paramId: 1,
      value: 'повседневное',
    },
    {
      paramId: 2,
      value: 'макси',
    },
  ],
  colors: [],
};

const App: React.FC = () => {
  return (
    <div>
      <h1>Param Editor</h1>
      <ParamEditor params={params} model={initialModel} />
    </div>
  );
};

export default App;
