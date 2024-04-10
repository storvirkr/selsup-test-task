import React, { useState } from 'react';

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

interface Props {
  params: Param[];
  model: Model;
}

interface Color {

}

const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

  const handleParamValueChange = (paramId: number, value: string) => {
    setParamValues((prevParamValues) =>
      prevParamValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      )
    );
  };

  const getModel = (): Model => ({
    paramValues,
    colors: model.colors,
  });

  const handleGetModel = () => {
    const updatedModel = getModel();
    console.log('Updated Model:', updatedModel);
  };

  return (
    <div>
      {params.map((param) => (
        <div key={param.id}>
          <label>{param.name}</label>
          <input
            type="text"
            value={paramValues.find((pv) => pv.paramId === param.id)?.value || ''}
            onChange={(e) => handleParamValueChange(param.id, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleGetModel}>Get Updated Model</button>
    </div>
  );
};

export default ParamEditor;
