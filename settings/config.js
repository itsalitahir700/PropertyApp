export const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_MOBILE_DEVICE = 4;
export const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_TABLET_DEVICE = 4;
export const HOME_PAGE_SECTIONS_ITEM_LIMIT_FOR_DESKTOP_DEVICE = 5;
export const HOME_PAGE_SECTIONS_COLUMNS_RESPONSIVE_WIDTH = [
  1 / 1,
  1 / 2,
  1 / 3,
  1 / 4,
  1 / 5,
];
export const LISTING_PAGE_POST_LIMIT = 10;

export const LISTING_PAGE_COLUMN_WIDTH_WITHOUT_MAP = [
  1 / 1,
  1 / 2,
  1 / 3,
  1 / 4,
  1 / 5,
];
export const LISTING_PAGE_COLUMN_WIDTH_WITH_MAP = [
  1 / 1,
  1 / 2,
  1 / 2,
  1 / 2,
  1 / 3,
];

let baseURL =
  "http://ec2-13-229-109-204.ap-southeast-1.compute.amazonaws.com:8080/apna/v1";
let username = "apna";
let password = "apnaghar1234";
let credentials = Buffer.from(username + ":" + password).toString("base64");
let basicAuth = "Basic " + credentials;

export { baseURL, basicAuth };
