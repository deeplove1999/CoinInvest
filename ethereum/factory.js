import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xc957e2F6A5aBF0D0d62e0C0a1d5902ffC9131aaa"
);

export default instance;
