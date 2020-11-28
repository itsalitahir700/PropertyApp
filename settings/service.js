const { get } = require("js-cookie");
import axios from "axios";
import { baseURL, basicAuth } from "./config";
export const getPropType = async () => {
  const response = await axios.get(`${baseURL}/categorys`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const getPropSubType = async () => {
  const response = await axios.get(`${baseURL}/proptypes`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const getCountries = async () => {
  const response = await axios.get(`${baseURL}/countrys`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const getCities = async () => {
  const response = await axios.get(`${baseURL}/citys`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const getLocations = async (cityid) => {
  const response = await axios.get(`${baseURL}/locations/${cityid}`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const getCurrency = async () => {
  const response = await axios.get(`${baseURL}/currencys`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const getArea = async () => {
  const response = await axios.get(`${baseURL}/areaunits`, {
    headers: {
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  });
  return response;
};

export const postAddFeatures = async (data) => {
  axios({
    method: "post",
    url: `http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/features`,
    data: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: basicAuth,
      Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
    },
  })
    .then(function (response) {
      //handle success
      console.log(response);
      alert("Property has been added successfully ...");
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
};
