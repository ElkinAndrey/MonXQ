import axios from "axios";

const URL = "http://localhost:5000/api";

const Monitors = [
  {
    id: 1,
    name: "Монитор MSI Optix G273QF черный",
    price: 30999,
    description:
      "2560x1440@165 Гц, IPS, 1 мс, 1000 : 1, 300 Кд/м², 178°/178°, HDMI x2, DisplayPort, NVIDIA G-SYNC Compatible",
    characteristics: {
      Model: "MSI Optix G273QF",
      color: "черный",
      screenDiagonal: 27,
      permission: "2560x1440",
      matrixManufacturingTechnology: "IPS",
      aspectRatio: "16:9",
      viewableScreenSize: "596.7 x 335.6 мм",
      Brightness: "300 Кд/м²",
      pixelDensity: "108 ppi",
      screenRefreshRate: "165 Гц",
    },
  },
  {
    id: 2,
    name: "Монитор MSI Pro MP241X черный",
    price: 8999,
    description:
      "1920x1080@75 Гц, VA, 3000 : 1, 250 Кд/м², 178°/178°, HDMI, VGA (D-Sub)",
    characteristics: {
      Model: "MSI Optix G273QF",
      color: "черный",
      screenDiagonal: 27,
      permission: "1920x1080",
      matrixManufacturingTechnology: "IPS",
      aspectRatio: "16:9",
      viewableScreenSize: "596.7 x 335.6 мм",
      Brightness: "300 Кд/м²",
      pixelDensity: "108 ppi",
      screenRefreshRate: "75 Гц",
    },
  },
];

export default class MonitorsService {
  static async getMonitors() {
    const response = await axios.get(`${URL}/monitors/`);
    return response.data;
  }

  static async getMonitor(id) {
    const response = await axios.get(`${URL}/monitor/${id}`);
    return response.data[0];
    // throw new Error("monitorNotFound");
  }
}
