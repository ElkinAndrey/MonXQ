const mongoose = require('mongoose');
const monitorSchema = new mongoose.Schema({
      id: {type: Number, requared: true},
      name: {type: String, requared: true},
      price: {type: Number, requared: true},
      description: {type: String, requared: true},
      characteristics: {
            model: {type: String, requared: true},
            color: {type: String, requared: true},
            screenDiagonal: {type: Number, requared: true},
            permission: {type: String, requared: true},
            matrixManufacturingTechnology: {type: String, requared: true},
            aspectRatio: {type: String, requared: true},
            viewableScreenSize: {type: String, requared: true},
            brightness: {type: String, requared: true},
            pixelDensity: {type: String, requared: true},
            screenRefreshRate: {type: String, requared: true}
      }
});
module.exports = mongoose.model('monitor', monitorSchema);
return mongoose.model('monitor', monitorSchema);