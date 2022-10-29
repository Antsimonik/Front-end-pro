import { Table } from "./Table.js";

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);

const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: `penguin`, icon: `🐧` },
];

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

root.render(
  <React.Fragment>
    <Table list={animals} />
  </React.Fragment>
);
