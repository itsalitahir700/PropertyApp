import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Alert,
  Row,
  Col,
  Upload,
  Icon,
  message,
  Card,
} from "antd";
import { padding } from "styled-system";
import axios from "axios";
import {
  getPropType,
  getPropSubType,
  getCities,
  getLocations,
  getCurrency,
  getArea,
} from "../../settings/service";

const Addlisting = () => {
  const [loading, setloading] = useState(false);
  const [imageUrl, setimageUrl] = useState("");
  const [purpose, setpurpose] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [pricecurrency, setCurrency] = useState("");
  const [localArea, setLocalArea] = useState("");
  const [areaUnit, setareaUnit] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [expireAfter, setExpireAfter] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // API RESULTS
  const [proptypedata, setproptypedata] = useState([]);
  const [citieslist, setciteslist] = useState([]);
  const [locationslist, setlocationslist] = useState([]);
  const [currencylist, setcurrencylist] = useState([]);
  const [proptypevalue, setproptypevalue] = useState([]);
  const [propsubtypedata, setpropsubtypedata] = useState([]);
  const [propsubtypedataall, setpropsubtypedataall] = useState([]);
  const [arealist, setarealist] = useState([]);

  let propType = "";
  let propsubType = "";
  let cities = "";
  let locations = "";
  let currency = "";
  let area = "";

  useEffect(() => {
    functproptype();
    functcities();
    functcurrency();
    funcpropsbtype();
    functarea();
  }, []);

  async function functproptype() {
    propType = await getPropType();
    setproptypedata(propType.data);
  }
  async function functcities() {
    cities = await getCities();
    setciteslist(cities.data);
  }
  async function functlocation(cityId) {
    locations = await getLocations(cityId);
    setlocationslist(locations.data);
  }
  async function functcurrency() {
    currency = await getCurrency();
    setcurrencylist(currency.data);
  }
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  async function funcpropsbtype() {
    propsubType = await getPropSubType();
    setpropsubtypedataall(propsubType.data);
  }

  async function functarea() {
    area = await getArea();
    setarealist(area.data);
  }

  const handleSetProperty = (e) => {
    const main_property_cat = e.target.value;
    setproptypevalue(e.target.value);
    let filtered_sub_cat = propsubtypedataall.filter((a) => {
      return a.ptypeCat == main_property_cat;
    });
    setpropsubtypedata(filtered_sub_cat);
  };

  console.log(proptypedata, "propslist");
  console.log(citieslist, "citieslist");
  console.log(locationslist, "locationslist");
  console.log(currencylist, "currencylist");
  console.log(arealist, "arealist");

  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setloading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setimageUrl(imageUrl);
        setloading(false);
      });
    }
  };
  const { TextArea } = Input;
  return (
    <Card style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
      <Alert message="PROPERTY TYPE AND LOCATION" type="success" />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{ marginTop: "20px" }}
      >
        <Form.Item label="Purpose">
          <Radio.Group>
            <Radio.Button onClick={(e) => setpurpose(e.target.value)} value="B">
              Buy
            </Radio.Button>
            <Radio.Button onClick={(e) => setpurpose(e.target.value)} value="R">
              Rent
            </Radio.Button>
            <Radio.Button onClick={(e) => setpurpose(e.target.value)} value="P">
              Project
            </Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Property Type" name="size">
          <Radio.Group>
            {proptypedata && proptypedata.length !== 0
              ? proptypedata.map((item) => {
                  return (
                    <span key={item.code}>
                      <Radio.Button
                        value={item.code}
                        onClick={handleSetProperty}
                      >
                        {item.name}
                      </Radio.Button>
                    </span>
                  );
                })
              : "No Records Found"}
          </Radio.Group>
          <br></br>
          <Radio.Group style={{ marginTop: "5px", marginLeft: "20px" }}>
            {propsubtypedata && propsubtypedata.length !== 0
              ? propsubtypedata.map((item, index) => {
                  return (
                    <span key={item.index}>
                      <Radio.Button value={item.ptypeName}>
                        {item.ptypeName}
                      </Radio.Button>
                    </span>
                  );
                })
              : "No Records Found"}
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Select city">
          <Select
            value={city}
            onChange={(e) => {
              setCity(e);
              functlocation(e);
            }}
          >
            {citieslist && citieslist.length !== 0
              ? citieslist.map((item, index) => {
                  return (
                    <Select.Option value={item.cityId} key={item.cityId}>
                      {item.cityName}
                    </Select.Option>
                  );
                })
              : "No Records Found"}
          </Select>
        </Form.Item>
        <Form.Item label="Select Location">
          <Select value={location} onChange={(e) => setCity(e)}>
            {locationslist && locationslist.length !== 0
              ? locationslist.map((item, index) => {
                  return (
                    <Select.Option value={item.plName} key={item.plName}>
                      {item.plName}
                    </Select.Option>
                  );
                })
              : "No Records Found"}
          </Select>
        </Form.Item>
      </Form>
      <Alert message="PROPERTY DETAILS" type="success" />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{ marginTop: "20px" }}
      >
        <Form.Item label="Property Title">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Item>
        <Form.Item label="Property Details">
          <TextArea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
          />
        </Form.Item>
        <Row>
          <Col lg={12}>
            <Form.Item label="All inclusive Price">
              <Input value={price} onChange={(e) => setPrice(e.target.value)} />
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item label="Select Currency">
              <Select value={pricecurrency} onChange={(e) => setCurrency(e)}>
                {currencylist && currencylist.length !== 0
                  ? currencylist.map((item, index) => {
                      return (
                        <Select.Option
                          value={item.currencyCode}
                          key={item.currencyCode}
                        >
                          {item.currencyCode}
                        </Select.Option>
                      );
                    })
                  : "No Records Found"}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <Form.Item label="Land Area">
              <Input onChange={(e) => setLocalArea(e.target.value)} />
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item label="Area Unit">
              <Select value={areaUnit} onChange={(e) => setareaUnit(e)}>
                {arealist && arealist.length !== 0
                  ? arealist.map((item, index) => {
                      return (
                        <Select.Option
                          value={item.areaUnitCode}
                          key={item.areaUnitCode}
                        >
                          {item.areaUnitName}
                        </Select.Option>
                      );
                    })
                  : "No Records Found"}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Bedrooms">
          <Select
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <Select.Option value="demo" selected>
              Islamabad
            </Select.Option>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Bathrooms">
          <Select
            value={bathrooms}
            onChange={(e) => setBathrooms(e.target.value)}
          >
            <Select.Option value="demo" selected>
              Islamabad
            </Select.Option>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Expires After">
          <Select
            value={expireAfter}
            onChange={(e) => setExpireAfter(e.target.value)}
          >
            <Select.Option value="6 Months" selected>
              6 Months
            </Select.Option>
            <Select.Option value="1 Year">1 Year</Select.Option>
          </Select>
        </Form.Item>
        <Alert message="Add Images" type="success" />
        <center className="pt-2">
          <Upload
            style={{ marginTop: "20px" }}
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              <div>
                <Icon type={loading ? "loading" : "plus"} />
                <div className="ant-upload-text">Upload</div>
              </div>
            )}
          </Upload>
        </center>
      </Form>
      <Alert message="CONTACT DETAILS" type="success" />
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{ marginTop: "20px" }}
      ></Form>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{ marginTop: "20px" }}
      >
        <Form.Item label="Phone ">
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <center>
          <Button type="primary" size="large">
            Submit Property
          </Button>
        </center>
      </Form>
    </Card>
  );
};

export default Addlisting;
