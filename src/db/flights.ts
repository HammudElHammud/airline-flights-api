const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  lastUpdatedAt: { type: String },
  actualLandingTime: { type: String },
  actualOffBlockTime: { type: String },
  aircraftRegistration: { type: String },
  aircraftType: { iataMain: String , iataSub: String },
  baggageClaim: { type: String },
  checkinAllocations: { endTime: String, Rows: String, startTime: String },
  codeshares: {codeshares: { type: [String], default: [] }},
  estimatedLandingTime: { type: String },
  expectedTimeBoarding: { type: String },
  expectedTimeGateClosing: { type: String },
  expectedTimeGateOpen: { type: String },
  expectedTimeOnBelt: { type: String },
  expectedSecurityFilter: { type: String },
  flightDirection: { type: String, enum: ['A', 'D'] },
  flightName: { type: String },
  flightNumber: { type: Number },
  gate: { type: String },
  pier: { type: String },
  id: { type: String },
  isOperationalFlight: { type: Boolean },
  mainFlight: { type: String },
  prefixIATA: { type: String },
  prefixICAO: { type: String },
  airlineCode: { type: Number },
  publicEstimatedOffBlockTime: { type: String },
  publicFlightState: {flightStates : { type: [String], default: [] }},
  route: {
    destinations: { type: [String], default: [] },
    eu: { type: String, enum: ['S', 'E', 'N'] },
    visa: { type: Boolean }
  },
  scheduleDateTime: { type: String },
  scheduleDate: { type: String },
  scheduleTime: { type: String },
  serviceType: { type: String },
  terminal: { type: Number },
  ip: { type: String },
  transferPositions: {
    transferPositions: { type: [Number], default: [] }
  },
  schemaVersion: { type: String }
});


const Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight;