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
  Checkbox,
} from "antd";
import { padding } from "styled-system";
import { postAddFeatures } from "../../settings/service";
import axios from "axios";

const AddFeature = ({ postsno, postdate }) => {
  console.log(postsno, postdate, "propspassed");
  //Main Features
  const [builtyear, setbuiltyear] = useState("");
  const [view, setview] = useState("");
  const [parkingspace, setparkingspace] = useState("");
  const [doublegazedwindows, setdoublegazedwindows] = useState("");
  const [centralair, setcentralair] = useState("");
  const [centralheat, setcentralheat] = useState("");
  const [flooring, setflooring] = useState("");
  const [electricitybackup, setelectricitybackup] = useState("");
  const [waste, setwaste] = useState("");
  const [floors, setfloors] = useState("");
  const [othermainfeatures, setothermainfeatures] = useState("");
  const [furnished, setfurnished] = useState("");

  //Business
  const [broadband, setbroadband] = useState("");
  const [cable, setcable] = useState("");
  const [intercom, setintercom] = useState("");
  const [otherbusiness, setotherbusiness] = useState("");

  //Nearby Locations
  const [schools, setschools] = useState("");
  const [hospitals, sethospitals] = useState("");
  const [shoppingmalls, setshoppingmalls] = useState("");
  const [resturants, setresturants] = useState("");
  const [airportdistance, setairportdistance] = useState("");
  const [publictransport, setpublictransport] = useState("");
  const [othernearbyplaces, setothernearbyplaces] = useState("");

  //Rooms
  const [bedrooms, setbedrooms] = useState("");
  const [bathrooms, setbathrooms] = useState("");
  const [servantquarter, setservantquarter] = useState("");
  const [drawingroom, setdrawingroom] = useState("");
  const [dinningroom, setdinningroom] = useState("");
  const [kitchen, setkitchen] = useState("");
  const [studyroom, setstudyroom] = useState("");
  const [powderroom, setpowderroom] = useState("");
  const [gymroom, setgymroom] = useState("");
  const [prayerroom, setprayerroom] = useState("");
  const [storerooms, setstorerooms] = useState("");
  const [steamroon, setsteamroon] = useState("");
  const [sittingroom, setsittingroom] = useState("");
  const [laundryroom, setlaundryroom] = useState("");
  const [otherroom, setotherroom] = useState("");

  //Healthcare
  const [lawn, setlawn] = useState("");
  const [swimmingpool, setswimmingpool] = useState("");
  const [suana, setsuana] = useState("");
  const [jacuzzi, setjacuzzi] = useState("");
  const [otherhealth, setotherhealth] = useState("");

  //Other Facilities
  const [maintenance, setmaintenance] = useState("");
  const [security, setsecurity] = useState("");
  const [facilities, setfacilities] = useState("");
  const [otherfacilities, setotherfacilities] = useState("");

  const submitHandler = async (e) => {
    const data = `{
        "pfPostDate": "${postdate}",
        "pfPostSno": "${postsno}",
        "pfBuildinYear": "${builtyear}",
        "pfBedrooms": "${bedrooms}",
        "pfBathrooms": "${bathrooms}",
        "pfElectriccityBackup": "${electricitybackup}",
        "pfWasteDisposal": "${waste}",
        "pfFloors": "${floors}",
        "pfView": "${view}",
        "pfFlooring": "${flooring}",
        "pfParkingSpaces": ${parkingspace},
        "pfCentralAirconditioning": "${centralair}",
        "pfCentralHeating": "${centralheat}",
        "pfIsfurnished": "${furnished}",
        "pfCabletv": "${cable}",
        "pfIntercom": "${intercom}",
        "pfBroadbandInternet": "${broadband}",
        "pfNearbySchool": "${schools}",
        "pfNearbyShoppingMall": "${shoppingmalls}",
        "pfNearbyRestaurants": "${resturants}",
        "pfDistanceAirport": ${airportdistance},
        "pfNearbyTransServ": "${publictransport}",
        "pfServantQuarters": ${servantquarter},
        "pfDrawingRoom": "${drawingroom}",
        "pfDiningRoom": "${dinningroom}",
        "pfKitchens": ${kitchen},
        "pfStudyRoom": "${studyroom}",
        "pfPrayerRoom": "${prayerroom}",
        "pfPowderRoom": "${powderroom}",
        "pfGym": "${gymroom}",
        "pfStoreRooms": "${storerooms}",
        "pfLoungeSetting": "${sittingroom}",
        "pfLawnGarden": "${laundryroom}",
        "pfSwimmingPool": "${swimmingpool}",
        "pfSauna": "${suana}",
        "pfJacuazzi": "${jacuzzi}",
        "pfOtherFacility": "${otherfacilities}",
        "pfMaintenanceStaff": "${maintenance}",
        "pfSecurityStaff": "${security}",
        "pfFacilityDisabled": "${facilities}"
      }`;
    console.log("data", data);
    let res = await postAddFeatures(data);
    console.log(res, "api");
  };

  return (
    <Card style={{ paddingLeft: "10rem", paddingRight: "10rem" }}>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{ marginTop: "20px" }}
      >
        <Alert message="PROPERTY FEATURES" type="success" />
        <h3>Main Features</h3>
        <Form.Item label="Built in year">
          <Input
            value={builtyear}
            onChange={(e) => setbuiltyear(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="View">
          <Input value={view} onChange={(e) => setview(e.target.value)} />
        </Form.Item>
        <Form.Item label="Parking Spaces">
          <Input
            value={parkingspace}
            onChange={(e) => setparkingspace(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setdoublegazedwindows("Y")
                : setdoublegazedwindows("N")
            }
          >
            Double Glazed Windows
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setcentralair("Y")
                : setcentralair("N")
            }
          >
            Central Air Conditioning
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setcentralheat("Y")
                : setcentralheat("N")
            }
          >
            Central Heating
          </Checkbox>
        </Form.Item>

        <Form.Item label="Flooring">
          <Select value={flooring} onChange={(e) => setflooring(e)}>
            <Select.Option value="Tiles">Tiles</Select.Option>
            <Select.Option value="Marble">Marble</Select.Option>
            <Select.Option value="Wooden">Wooden</Select.Option>
            <Select.Option value="Chip">Chip</Select.Option>
            <Select.Option value="Cement">Cement</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Electricity Backup">
          <Select
            value={electricitybackup}
            onChange={(e) => setelectricitybackup(e)}
          >
            <Select.Option value="None">None</Select.Option>
            <Select.Option value="Generator">Generator</Select.Option>
            <Select.Option value="UPS">UPS</Select.Option>
            <Select.Option value="Solar">Solar</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setwaste("Y") : setwaste("N")
            }
          >
            Waste Disposal
          </Checkbox>
        </Form.Item>
        <Form.Item label="Floors">
          <Input value={floors} onChange={(e) => setfloors(e.target.value)} />
        </Form.Item>
        <Form.Item label="Other Main Features">
          <Input
            value={othermainfeatures}
            onChange={(e) => setothermainfeatures(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setfurnished("Y") : setfurnished("N")
            }
          >
            Furnished
          </Checkbox>
        </Form.Item>
        <hr></hr>
        <h3>Bussiness and Communications</h3>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setbroadband("Y") : setbroadband("N")
            }
          >
            Broadband Internet Access
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setcable("Y") : setcable("N")
            }
          >
            Satellite or Cable TV Ready
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setintercom("Y") : setintercom("N")
            }
          >
            Intercom
          </Checkbox>
        </Form.Item>
        <Form.Item label="Other Business and Communication Facilities">
          <Input
            value={otherbusiness}
            onChange={(e) => setotherbusiness(e.target.value)}
          />
        </Form.Item>
        <hr></hr>
        <h3>Nearby Locations and Other Facilities</h3>
        <Form.Item label="Nearby Schools">
          <Input value={schools} onChange={(e) => setschools(e.target.value)} />
        </Form.Item>
        <Form.Item label="Nearby Hospitals">
          <Input
            value={hospitals}
            onChange={(e) => sethospitals(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Nearby Shopping Malls">
          <Input
            value={shoppingmalls}
            onChange={(e) => setshoppingmalls(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Nearby Restaurants">
          <Input
            value={resturants}
            onChange={(e) => setresturants(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Distance From Airport (kms)">
          <Input
            value={airportdistance}
            onChange={(e) => setairportdistance(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Nearby Public Transport Service">
          <Input
            value={publictransport}
            onChange={(e) => setpublictransport(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Other Nearby Places">
          <Input
            value={othernearbyplaces}
            onChange={(e) => setothernearbyplaces(e.target.value)}
          />
        </Form.Item>
        <hr></hr>
        <h3>Rooms</h3>
        <Form.Item label="Bedrooms">
          <Input
            value={bedrooms}
            onChange={(e) => setbedrooms(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Bathrooms">
          <Input
            value={bathrooms}
            onChange={(e) => setbathrooms(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Servant Quarters">
          <Input
            value={servantquarter}
            onChange={(e) => setservantquarter(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setdrawingroom("Y")
                : setdrawingroom("N")
            }
          >
            Drawing Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setdinningroom("Y")
                : setdinningroom("N")
            }
          >
            Dinning Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="Kitchens">
          <Input value={kitchen} onChange={(e) => setkitchen(e.target.value)} />
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setstudyroom("Y") : setstudyroom("N")
            }
          >
            Study Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setpowderroom("Y")
                : setpowderroom("N")
            }
          >
            Powder Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setgymroom("Y") : setgymroom("N")
            }
          >
            Gym Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setprayerroom("Y")
                : setprayerroom("N")
            }
          >
            Prayer Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="Store Rooms">
          <Input
            value={storerooms}
            onChange={(e) => setstorerooms(e.target.value)}
          />
        </Form.Item>
        {/* <Form.Item label=''>
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setsteamroom('Y') : setsteamroom('N')
            }
          >
            Steam Room
          </Checkbox>
        </Form.Item> */}
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setsittingroom("Y")
                : setsittingroom("N")
            }
          >
            Lounge or Sitting Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setlaundryroom("Y")
                : setlaundryroom("N")
            }
          >
            Laundry Room
          </Checkbox>
        </Form.Item>
        <Form.Item label="Other Rooms">
          <Input
            value={otherroom}
            onChange={(e) => setotherroom(e.target.value)}
          />
        </Form.Item>
        <hr></hr>
        <h3>Health Care</h3>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setlawn("Y") : setlawn("N")
            }
          >
            Lawn or Garden
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setswimmingpool("Y")
                : setswimmingpool("N")
            }
          >
            Swimming Pool
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setsuana("Y") : setsuana("N")
            }
          >
            Suana
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setjacuzzi("Y") : setjacuzzi("N")
            }
          >
            Jacuzzi
          </Checkbox>
        </Form.Item>
        <Form.Item label="Other Healthcare and Recreation Facilities">
          <Input
            value={otherbusiness}
            onChange={(e) => setotherhealth(e.target.value)}
          />
        </Form.Item>
        <hr></hr>
        <h3>Other Facilities</h3>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setmaintenance("Y")
                : setmaintenance("N")
            }
          >
            Maintenance Staff
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setsecurity("Y") : setsecurity("N")
            }
          >
            Security Staff
          </Checkbox>
        </Form.Item>
        <Form.Item label="">
          <Checkbox
            onChange={(e) =>
              e.target.checked === true ? setfacilities("Y") : setjacuzzi("N")
            }
          >
            Facilities for Disabled
          </Checkbox>
        </Form.Item>
        <Form.Item label="Other Facilities">
          <Input
            value={otherfacilities}
            onChange={(e) => setotherfacilities(e.target.value)}
          />
        </Form.Item>
        <center>
          <Button type="primary" size="large" onClick={submitHandler}>
            Add Features
          </Button>
        </center>
      </Form>
    </Card>
  );
};

export default AddFeature;
