import OfficeMapView from "./components/OfficeMapView";
import { IOffice } from "./interfaces/IOffice";

const offices: IOffice[] = [
  { name: "Jolann", type: "workstation", x: 0, y: 375 },
  { name: "Rodolphe", type: "workstation", x: 150, y: 375 },
  { name: "Matthieu", type: "workstation", x: 300, y: 375 },
  { name: "Baptiste", type: "workstation", x: 0, y: 450 },
  { name: "Eudes", type: "workstation", x: 150, y: 450 },
  { name: "Josse", type: "workstation", x: 300, y: 450 },
  { name: "Thomas", type: "workstation", x: 300, y: 0, scale: 1.5 },
  {
    name: "Aurélia",
    type: "workstation",
    x: 225,
    y: 0,
    orientation: "vertical",
  },
  {
    name: "Marie-Annie",
    type: "workstation",
    x: 225,
    y: 150,
    orientation: "vertical",
  },
  {
    name: "Vanessa",
    type: "workstation",
    x: 525,
    y: 0,
    scale: 2,
    orientation: "vertical",
  },
  {
    name: "Angelo",
    type: "workstation",
    x: 150,
    y: 0,
    orientation: "vertical",
  },
  {
    name: "Dagan",
    type: "workstation",
    x: 150,
    y: 150,
    orientation: "vertical",
  },
  {
    name: "Traceur",
    type: "printer",
    x: 525,
    y: 375,
    orientation: "vertical",
  },
  {
    name: "Impr.",
    type: "printer",
    x: 525,
    y: 300,
    orientation: "vertical",
    scale: 0.5,
  },
  {
    name: "Cuisine",
    type: "other",
    x: 0,
    y: 0,
    orientation: "vertical",
    scale: 2,
  },
  // ... Ajoute d'autres bureaux ici
];

function App() {
  return (
    <div>
      <OfficeMapView offices={offices} />
    </div>
  );
}

export default App;
