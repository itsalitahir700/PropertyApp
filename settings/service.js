const { get } = require("js-cookie");
import axios from "axios";
export const getPropType = async () => {
  const response = await axios.get(
    "http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/categorys",
    {
      headers: {
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
      },
    }
  );
  return response;
};

export const getPropSubType = async () => {
  const response = await axios.get(
    "http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/proptypes",
    {
      headers: {
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
      },
    }
  );
  return response;
};

export const getCities = async () => {
  const response = await axios.get(
    "http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/citys",
    {
      headers: {
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
      },
    }
  );
  return response;
};

export const getLocations = async (cityid) => {
  const response = await axios.get(
    `http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/locations/${cityid}`,
    {
      headers: {
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
      },
    }
  );
  return response;
};

export const getCurrency = async () => {
  const response = await axios.get(
    `http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/currencys`,
    {
      headers: {
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
      },
    }
  );
  return response;
};

export const getArea = async () => {
  const response = await axios.get(
    `http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1/areaunits`,
    {
      headers: {
        Authorization: "Basic YXBuYTphcG5hZ2hhcjEyMzQ=",
        Cookie: "JSESSIONID=E2A8BF2571BA6B875803BD545D43BBD6",
      },
    }
  );
  return response;
};
