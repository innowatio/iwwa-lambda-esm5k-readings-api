"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "sensorId": {
            "type": "string"
        },
        "date": {
            "type": "string",
            "format": "date-time"
        },
        "virtual": {
            "type": "boolean"
        },
        "source": {
            "type": "string",
            "enum": ["forecast", "reading"]
        },
        "measurements": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "type": {
                        "type": "string",
                        "enum": ["temperature", "humidity", "illuminance", "co2", "battery_level"]
                    },
                    "source": {
                        "type": "string",
                        "enum": ["forecast", "reading"]
                    },
                    "value": {
                        "type": "number"
                    },
                    "unitOfMeasurement": {
                        "type": "string"
                    }
                },
                "required": ["type", "value", "unitOfMeasurement"]
            }
        }
    },
    "required": ["sensorId", "date", "measurements"]
};
module.exports = exports["default"];