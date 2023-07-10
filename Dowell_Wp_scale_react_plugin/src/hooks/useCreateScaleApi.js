import { useState, useEffect } from 'react';
import axios from 'axios';

//custom hook to get scale_id and template_name
const useCreateScaleApi = (url, userName, productName) => {
  const [scaleId, updateScaleId] = useState('');
  const [templateName, updateTempName] = useState('');

  useEffect(() => {
    let createData = {
      username: userName,
      orientation: 'horizontal',
      fomat: 'numbers',
      name: productName,
      left: 'Not likely',
      right: 'Very Likely',
      center: 'neutral',
    };
    axios
      .post(url, createData)
      .then((response) => {
        let scaleData = response.data;
        let jsonData = JSON.parse(scaleData.success);
        updateScaleId(jsonData.inserted_id);
        updateTempName(scaleData.data.settings.template_name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url, productName, userName]);
  return [scaleId, templateName];
};

export default useCreateScaleApi;
