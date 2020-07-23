export const serviceSpecifications: jdspec.ServiceSpec[] = [
    {
        "name": "Common registers and commands",
        "shortId": "_base",
        "camelName": "base",
        "shortName": "base",
        "extends": [],
        "notes": {
            "short": "Service specification will always list explicitly registers and commands defined here.\nThey can be listed with say `@ intensity` instead of `@ 0x01`.",
            "commands": "Command codes are subdivided as follows:\n* Commands `0x000-0x07f` - common to all services\n* Commands `0x080-0xeff` - defined per-service\n* Commands `0xf00-0xfff` - reserved for implementation\n\nCommands follow.",
            "registers": "Register codes are subdivided as follows:\n* Registers `0x001-0x07f` - r/w common to all services\n* Registers `0x080-0x0ff` - r/w defined per-service\n* Registers `0x100-0x17f` - r/o common to all services\n* Registers `0x180-0x1ff` - r/o defined per-service\n* Registers `0x200-0xeff` - custom, defined per-service\n* Registers `0xf00-0xfff` - reserved for implementation, should not be seen on the wire\n\nThe types listed are typical. Check spec for particular service for exact type,\nand a service-specific name for a register (eg. `value` could be `pulse_length`).\nAll registers default to `0` unless otherwise indicated."
        },
        "classIdentifier": 536870897,
        "enums": {},
        "packets": [
            {
                "kind": "command",
                "name": "announce",
                "identifier": 0,
                "description": "Enumeration data for control service; service-specific advertisement data otherwise.\nControl broadcasts it automatically every 500ms, but other service have to be queried to provide it.",
                "fields": []
            },
            {
                "kind": "report",
                "name": "announce",
                "identifier": 0,
                "description": "Enumeration data for control service; service-specific advertisement data otherwise.\nControl broadcasts it automatically every 500ms, but other service have to be queried to provide it.",
                "fields": []
            },
            {
                "kind": "command",
                "name": "get_register",
                "identifier": 4096,
                "description": "Registers number `N` is fetched by issuing command `0x1000 | N`.\nThe report format is the same as the format of the register.",
                "fields": []
            },
            {
                "kind": "report",
                "name": "get_register",
                "identifier": 4096,
                "description": "Registers number `N` is fetched by issuing command `0x1000 | N`.\nThe report format is the same as the format of the register.",
                "fields": []
            },
            {
                "kind": "command",
                "name": "set_register",
                "identifier": 8192,
                "description": "Registers number `N` is set by issuing command `0x2000 | N`, with the format\nthe same as the format of the register.",
                "fields": []
            },
            {
                "kind": "report",
                "name": "event",
                "identifier": 1,
                "description": "Event from sensor or a broadcast service.",
                "fields": [
                    {
                        "name": "event_id",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "event_argument",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "command",
                "name": "calibrate",
                "identifier": 2,
                "description": "Request to calibrate a sensor. The report indicates the calibration is done.",
                "fields": []
            },
            {
                "kind": "report",
                "name": "calibrate",
                "identifier": 2,
                "description": "Request to calibrate a sensor. The report indicates the calibration is done.",
                "fields": []
            },
            {
                "kind": "command",
                "name": "description",
                "identifier": 3,
                "description": "Request human-readable description of service.",
                "fields": []
            },
            {
                "kind": "report",
                "name": "description",
                "identifier": 3,
                "description": "Request human-readable description of service.",
                "fields": [
                    {
                        "name": "text",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "intensity",
                "identifier": 1,
                "description": "This is either binary on/off (0 or non-zero), or can be gradual (eg. brightness of an RGB LED strip).",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "value",
                "identifier": 2,
                "description": "The primary value of actuator (eg. servo pulse length, or motor duty cycle).",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "i32",
                        "storage": -4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "max_power",
                "identifier": 7,
                "description": "Limit the power drawn by the service, in mA.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "mA",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true,
                        "defaultValue": 500
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ]
            },
            {
                "kind": "ro",
                "name": "reading",
                "identifier": 257,
                "description": "Read-only value of the sensor, also reported in streaming.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "i32",
                        "storage": -4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "low_threshold",
                "identifier": 5,
                "description": "Thresholds for event generation for event generation for analog sensors.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "i32",
                        "storage": -4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "high_threshold",
                "identifier": 5,
                "description": "Thresholds for event generation for event generation for analog sensors.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "i32",
                        "storage": -4,
                        "isSimpleType": true
                    }
                ]
            }
        ]
    },
    {
        "name": "Sensor",
        "shortId": "_sensor",
        "camelName": "sensor",
        "shortName": "sensor",
        "extends": [],
        "notes": {
            "short": "Base class for sensors."
        },
        "classIdentifier": 536870898,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming"
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval"
            }
        ]
    },
    {
        "name": "Accelerometer",
        "shortId": "accelerometer",
        "camelName": "accel",
        "shortName": "accel",
        "extends": [],
        "notes": {
            "short": "Base class for sensors.\nA 3-axis accelerometer.",
            "events": "All events are debounced."
        },
        "classIdentifier": 521405449,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming",
                "derived": true
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval",
                "derived": true
            },
            {
                "kind": "ro",
                "name": "forces",
                "identifier": 257,
                "description": "Indicates the current forces acting on accelerometer.",
                "fields": [
                    {
                        "name": "x",
                        "unit": "g",
                        "shift": 10,
                        "type": "i6.10",
                        "storage": -2
                    },
                    {
                        "name": "y",
                        "unit": "g",
                        "shift": 10,
                        "type": "i6.10",
                        "storage": -2
                    },
                    {
                        "name": "z",
                        "unit": "g",
                        "shift": 10,
                        "type": "i6.10",
                        "storage": -2
                    }
                ],
                "identifierName": "reading"
            },
            {
                "kind": "event",
                "name": "tilt_up",
                "identifier": 1,
                "description": "Emitted when accelerometer is tilted in the given direction.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "tilt_down",
                "identifier": 2,
                "description": "Emitted when accelerometer is tilted in the given direction.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "tilt_left",
                "identifier": 3,
                "description": "Emitted when accelerometer is tilted in the given direction.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "tilt_right",
                "identifier": 4,
                "description": "Emitted when accelerometer is tilted in the given direction.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "face_up",
                "identifier": 5,
                "description": "Emitted when accelerometer is laying flat in the given direction.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "face_down",
                "identifier": 6,
                "description": "Emitted when accelerometer is laying flat in the given direction.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "freefall",
                "identifier": 7,
                "description": "Emitted when total force acting on accelerometer is much less than 1g.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "shake",
                "identifier": 11,
                "description": "Emitted when forces change violently a few times.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "force_2g",
                "identifier": 12,
                "description": "Emitted when force in any direction exceeds given threshold.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "force_3g",
                "identifier": 8,
                "description": "Emitted when force in any direction exceeds given threshold.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "force_6g",
                "identifier": 9,
                "description": "Emitted when force in any direction exceeds given threshold.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "force_8g",
                "identifier": 10,
                "description": "Emitted when force in any direction exceeds given threshold.",
                "fields": []
            }
        ]
    },
    {
        "name": "Bootloader",
        "shortId": "bootloader",
        "camelName": "Bootloader",
        "shortName": "Bootloader",
        "extends": [],
        "notes": {
            "short": "Allows flashing (reprogramming) devices over JACDAC."
        },
        "classIdentifier": 536516936,
        "enums": {
            "Error": {
                "name": "Error",
                "storage": 4,
                "members": {
                    "NoError": 0,
                    "PacketTooSmall": 1,
                    "OutOfFlashableRange": 2,
                    "InvalidPageOffset": 3,
                    "NotPageAligned": 4
                }
            }
        },
        "packets": [
            {
                "kind": "command",
                "name": "info",
                "identifier": 0,
                "description": "The `service_class` is always `0x1ffa9948`. The `device_class` identifies the kind of firmware\nthat \"fits\" this device.",
                "fields": [],
                "identifierName": "announce"
            },
            {
                "kind": "report",
                "name": "info",
                "identifier": 0,
                "description": "The `service_class` is always `0x1ffa9948`. The `device_class` identifies the kind of firmware\nthat \"fits\" this device.",
                "fields": [
                    {
                        "name": "service_class",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "page_size",
                        "unit": "bytes",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "flashable_size",
                        "unit": "bytes",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "device_class",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "command",
                "name": "set_session",
                "identifier": 128,
                "description": "The flashing host should generate a random id, and use this command to set it.",
                "fields": [
                    {
                        "name": "session_id",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "report",
                "name": "set_session",
                "identifier": 128,
                "description": "The flashing host should generate a random id, and use this command to set it.",
                "fields": [
                    {
                        "name": "session_id",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "command",
                "name": "page_data",
                "identifier": 128,
                "description": "Use to send flashing data. A physical page is split into `chunk_max + 1` chunks, where `chunk_no = 0 ... chunk_max`.\nEach chunk is stored at `page_address + page_offset`. `page_address` has to be equal in all chunks,\nand is included in response.\nOnly the last chunk causes writing to flash and elicits response.\n\nErrors not listed are also possible. Errors larger than `0xffff` indicate de-synchronization on chunk numbers.",
                "fields": [
                    {
                        "name": "page_address",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "page_offset",
                        "unit": "",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    },
                    {
                        "name": "chunk_no",
                        "unit": "",
                        "type": "u8",
                        "storage": 1,
                        "isSimpleType": true
                    },
                    {
                        "name": "chunk_max",
                        "unit": "",
                        "type": "u8",
                        "storage": 1,
                        "isSimpleType": true
                    },
                    {
                        "name": "session_id",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "reserved0",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "reserved1",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "reserved2",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "reserved3",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "page_data",
                        "unit": "",
                        "type": "bytes",
                        "storage": 0,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "report",
                "name": "page_data",
                "identifier": 128,
                "description": "Use to send flashing data. A physical page is split into `chunk_max + 1` chunks, where `chunk_no = 0 ... chunk_max`.\nEach chunk is stored at `page_address + page_offset`. `page_address` has to be equal in all chunks,\nand is included in response.\nOnly the last chunk causes writing to flash and elicits response.\n\nErrors not listed are also possible. Errors larger than `0xffff` indicate de-synchronization on chunk numbers.",
                "fields": [
                    {
                        "name": "session_id",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "page_error",
                        "unit": "",
                        "type": "Error",
                        "storage": 4
                    },
                    {
                        "name": "page_address",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            }
        ]
    },
    {
        "name": "Button",
        "shortId": "button",
        "camelName": "Button",
        "shortName": "Button",
        "extends": [],
        "notes": {
            "short": "Base class for sensors.\nA simple push-button.\n\nNote: this service will stream readings while the button is pressed and shortly after it's released, even\nwhen `is_streaming == 0`. TODO remove this?"
        },
        "classIdentifier": 343122531,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming",
                "derived": true
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval",
                "derived": true
            },
            {
                "kind": "ro",
                "name": "pressed",
                "identifier": 257,
                "description": "Indicates whether the button is currently active (pressed).",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "reading"
            },
            {
                "kind": "event",
                "name": "down",
                "identifier": 1,
                "description": "Emitted when button goes from inactive (`pressed == 0`) to active.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "up",
                "identifier": 2,
                "description": "Emitted when button goes from active (`pressed == 1`) to inactive.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "click",
                "identifier": 3,
                "description": "Emitted together with `up` when the press time was not longer than 500ms.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "long_click",
                "identifier": 4,
                "description": "Emitted together with `up` when the press time was more than 500ms.",
                "fields": []
            }
        ]
    },
    {
        "name": "Control",
        "shortId": "control",
        "camelName": "Control",
        "shortName": "Control",
        "extends": [],
        "notes": {
            "short": "Control service is always service number `0`.\nIt handles actions common to all services on a device."
        },
        "classIdentifier": 0,
        "enums": {},
        "packets": [
            {
                "kind": "command",
                "name": "noop",
                "identifier": 128,
                "description": "Do nothing. Always ignored. Can be used to test ACKs.",
                "fields": []
            },
            {
                "kind": "command",
                "name": "identify",
                "identifier": 129,
                "description": "Blink an LED or otherwise draw user's attention.",
                "fields": []
            },
            {
                "kind": "command",
                "name": "reset",
                "identifier": 130,
                "description": "Reset device. ACK may or may not be sent.",
                "fields": []
            },
            {
                "kind": "const",
                "name": "device_description",
                "identifier": 384,
                "description": "Identifies the type of hardware (eg., ACME Corp. Servo X-42 Rev C)",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "const",
                "name": "device_class",
                "identifier": 385,
                "description": "A numeric code for the string above; used to identify firmware images.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "const",
                "name": "bootloader_device_class",
                "identifier": 388,
                "description": "Typically the same as `device_class` unless device was flashed by hand; the bootloader will respond to that code.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "const",
                "name": "firmware_version",
                "identifier": 389,
                "description": "A string describing firmware version; typically semver.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "ro",
                "name": "temperature",
                "identifier": 386,
                "description": "MCU temperature in degrees Celsius (approximate).",
                "fields": [
                    {
                        "name": "_",
                        "unit": "C",
                        "type": "i16",
                        "storage": -2,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "ro",
                "name": "uptime",
                "identifier": 390,
                "description": "Number of microseconds since boot.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "us",
                        "type": "u64",
                        "storage": 8,
                        "isSimpleType": true
                    }
                ]
            }
        ]
    },
    {
        "name": "Humidity",
        "shortId": "humidity",
        "camelName": "Humidity",
        "shortName": "Humidity",
        "extends": [],
        "notes": {
            "short": "Base class for sensors.\nA sensor measuring humidity of outside environment.",
            "registers": "Default streaming interval is 1s."
        },
        "classIdentifier": 382210232,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming",
                "derived": true
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval",
                "derived": true
            },
            {
                "kind": "ro",
                "name": "humidity",
                "identifier": 257,
                "description": "The relative humidity in percentage of full water saturation.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "%RH",
                        "shift": 10,
                        "type": "u22.10",
                        "storage": 4
                    }
                ],
                "identifierName": "reading"
            }
        ]
    },
    {
        "name": "Light",
        "shortId": "light",
        "camelName": "Light",
        "shortName": "Light",
        "extends": [],
        "notes": {
            "short": "A controller for strips of RGB LEDs.",
            "long": "## Light programs\n\nRealistically, with 1 mbit JACDAC, we can transmit under 2k of data per animation frame (at 20fps).\nIf transmitting raw data that would be around 500 pixels, which is not enough for many\ninstallations and it would completely clog the network.\n\nThus, light service defines a domain-specific language for describing light animations\nand efficiently transmitting them over wire.\n\nLight commands are not JACDAC commands.\nLight commands are efficiently encoded as sequences of bytes and typically sent as payload\nof `run` command.\n\nDefinitions:\n* `P` - position in the strip\n* `R` - number of repetitions of the command\n* `N` - number of pixels affected by the command\n* `C` - single color designation\n* `C+` - sequence of color designations\n\nUpdate modes:\n* `0` - replace\n* `1` - add RGB\n* `2` - subtract RGB\n* `3` - multiply RGB (by c/128); each pixel value will change by at least 1\n\nProgram commands:\n* `0xD0: set_all(C+)` - set all pixels in current range to given color pattern\n* `0xD1: fade(C+)` - set pixels in current range to colors between colors in sequence\n* `0xD2: fade_hsv(C+)` - similar to `fade()`, but colors are specified and faded in HSV\n* `0xD3: rotate_fwd(K)` - rotate (shift) pixels by `K` positions away from the connector\n* `0xD4: rotate_back(K)` - same, but towards the connector\n* `0xD5: show(M=50)` - send buffer to strip and wait `M` milliseconds\n* `0xD6: range(P=0, N=length, W=1, S=0)` - range from pixel `P`, `N` pixels long\n  (currently unsupported: every `W` pixels skip `S` pixels)\n* `0xD7: mode(K=0)` - set update mode\n* `0xD8: mode1(K=0)` - set update mode for next command only\n* `0xCF: set1(P, C)` - set one pixel at `P` (in current range) to given color\n\nA number `k` is encoded as follows:\n* `0 <= k < 128` -> `k`\n* `128 <= k < 16383` -> `0x80 | (k >> 8), k & 0xff`\n* bigger and negative numbers are not supported\n\nThus, bytes `0xC0-0xFF` are free to use for commands.\n\nFormats:\n* `0xC1, R, G, B` - single color parameter\n* `0xC2, R0, G0, B0, R1, G1, B1` - two color parameter\n* `0xC3, R0, G0, B0, R1, G1, B1, R2, G2, B2` - three color parameter\n* `0xC0, N, R0, G0, B0, ..., R(N-1), G(N-1), B(N-1)` - `N` color parameter\n* `0xCF, <number>, R, G, B` - `set1` special format\n\nCommands are encoded as command byte, followed by parameters in the order\nfrom the command definition.\n\nThe `set1()` command has irregular encoding to save space - it is byte `0xCF` followed by encoded\nnumber, and followed by 3 bytes of color."
        },
        "classIdentifier": 309264608,
        "enums": {
            "LightType": {
                "name": "LightType",
                "storage": 1,
                "members": {
                    "WS2812B_GRB": 0,
                    "APA102": 16,
                    "SK9822": 17
                }
            }
        },
        "packets": [
            {
                "kind": "rw",
                "name": "brightness",
                "identifier": 1,
                "description": "Set the luminosity of the strip.\nAt `0` the power to the strip is completely shut down.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "frac",
                        "type": "u8",
                        "storage": 1,
                        "isSimpleType": true,
                        "defaultValue": 15
                    }
                ],
                "identifierName": "intensity"
            },
            {
                "kind": "ro",
                "name": "actual_brightness",
                "identifier": 384,
                "description": "This is the luminosity actually applied to the strip.\nMay be lower than `brightness` if power-limited by the `max_power` register.\nIt will rise slowly (few seconds) back to `brightness` is limits are no longer required.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "frac",
                        "type": "u8",
                        "storage": 1,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "light_type",
                "identifier": 128,
                "description": "Specifies the type of light strip connected to controller.\nControllers which are sold with lights should default to the correct type\nand could not allow change.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "LightType",
                        "storage": 1
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "num_pixels",
                "identifier": 129,
                "description": "Specifies the number of pixels in the strip.\nControllers which are sold with lights should default to the correct length\nand could not allow change.\nIncreasing length at runtime leads to ineffective use of memory and may lead to controller reboot.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true,
                        "defaultValue": 15
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "max_power",
                "identifier": 7,
                "description": "Limit the power drawn by the light-strip (and controller).",
                "fields": [
                    {
                        "name": "_",
                        "unit": "mA",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true,
                        "defaultValue": 200
                    }
                ],
                "identifierName": "max_power"
            },
            {
                "kind": "command",
                "name": "run",
                "identifier": 129,
                "description": "Run the given light \"program\". See service description for details.",
                "fields": [
                    {
                        "name": "program",
                        "unit": "",
                        "type": "bytes",
                        "storage": 0,
                        "isSimpleType": true
                    }
                ]
            }
        ]
    },
    {
        "name": "Logger",
        "shortId": "logger",
        "camelName": "Logger",
        "shortName": "Logger",
        "extends": [],
        "notes": {
            "short": "A service which can report messages to the bus."
        },
        "classIdentifier": 316415946,
        "enums": {
            "Priority": {
                "name": "Priority",
                "storage": 1,
                "members": {
                    "Debug": 0,
                    "Log": 1,
                    "Warning": 2,
                    "Error": 3
                }
            }
        },
        "packets": [
            {
                "kind": "rw",
                "name": "min_priority",
                "identifier": 128,
                "description": "Messages with level lower than this won't be emitted. The default setting may vary.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "Priority",
                        "storage": 1,
                        "defaultValue": 1
                    }
                ]
            },
            {
                "kind": "report",
                "name": "debug",
                "identifier": 128,
                "description": "Report a message.",
                "fields": [
                    {
                        "name": "message",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "report",
                "name": "log",
                "identifier": 129,
                "description": "Report a message.",
                "fields": [
                    {
                        "name": "message",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "report",
                "name": "warn",
                "identifier": 130,
                "description": "Report a message.",
                "fields": [
                    {
                        "name": "message",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "report",
                "name": "error",
                "identifier": 131,
                "description": "Report a message.",
                "fields": [
                    {
                        "name": "message",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            }
        ]
    },
    {
        "name": "Motor",
        "shortId": "motor",
        "camelName": "Motor",
        "shortName": "Motor",
        "extends": [],
        "notes": {
            "short": "A bi-directional DC motor."
        },
        "classIdentifier": 385895640,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "duty",
                "identifier": 2,
                "description": "PWM duty cycle of the motor. Use negative/positive values to run the motor forwards and backwards.\nPositive is recommended to be clockwise rotation and negative counterclockwise.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "frac",
                        "type": "i16",
                        "storage": -2,
                        "isSimpleType": true
                    }
                ],
                "identifierName": "value"
            },
            {
                "kind": "rw",
                "name": "enabled",
                "identifier": 1,
                "description": "Turn the power to the motor on/off.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "intensity"
            }
        ]
    },
    {
        "name": "Multitouch",
        "shortId": "multitouch",
        "camelName": "Multitouch",
        "shortName": "Multitouch",
        "extends": [],
        "notes": {
            "short": "Base class for sensors.\nA capacitive touch sensor with multiple inputs.",
            "events": "Most events include the channel number of the input."
        },
        "classIdentifier": 416636459,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming",
                "derived": true
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval",
                "derived": true
            },
            {
                "kind": "ro",
                "name": "capacity",
                "identifier": 257,
                "description": "Capacitance of channels. The capacitance is continuously calibrated, and a value of `0` indicates\nno touch, wheres a value of around `100` or more indicates touch.\nIt's best to ignore this (unless debugging), and use events.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "i32[]",
                        "storage": 0
                    }
                ],
                "identifierName": "reading"
            },
            {
                "kind": "event",
                "name": "touch",
                "identifier": 1,
                "description": "Emitted when an input is touched.",
                "fields": [
                    {
                        "name": "channel",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "event",
                "name": "release",
                "identifier": 2,
                "description": "Emitted when an input is no longer touched.",
                "fields": [
                    {
                        "name": "channel",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "event",
                "name": "tap",
                "identifier": 3,
                "description": "Emitted when an input is briefly touched. TODO Not implemented.",
                "fields": [
                    {
                        "name": "channel",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "event",
                "name": "long_press",
                "identifier": 4,
                "description": "Emitted when an input is touched for longer than 500ms. TODO Not implemented.",
                "fields": [
                    {
                        "name": "channel",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "event",
                "name": "swipe_pos",
                "identifier": 16,
                "description": "Emitted when input channels are successively touched in order of increasing channel numbers.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "swipe_neg",
                "identifier": 17,
                "description": "Emitted when input channels are successively touched in order of decreasing channel numbers.",
                "fields": []
            }
        ]
    },
    {
        "name": "Music",
        "shortId": "music",
        "camelName": "Music",
        "shortName": "Music",
        "extends": [],
        "notes": {
            "short": "A simple buzzer."
        },
        "classIdentifier": 458731991,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "volume",
                "identifier": 1,
                "description": "The volume (duty cycle) of the buzzer.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "frac",
                        "type": "u8",
                        "storage": 1,
                        "isSimpleType": true,
                        "defaultValue": 255
                    }
                ],
                "identifierName": "intensity"
            },
            {
                "kind": "command",
                "name": "play_tone",
                "identifier": 128,
                "description": "Play a PWM tone with given period and duty for given duration.\nThe duty is scaled down with `volume` register.\nTo play tone at frequency `F` Hz and volume `V` (in `0..max`) you will want\nto send `P = 1000000 / F` and `D = P * V / (2 * max)`.",
                "fields": [
                    {
                        "name": "period",
                        "unit": "us",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    },
                    {
                        "name": "duty",
                        "unit": "us",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    },
                    {
                        "name": "duration",
                        "unit": "ms",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    }
                ]
            }
        ]
    },
    {
        "name": "Power",
        "shortId": "power",
        "camelName": "Power",
        "shortName": "Power",
        "extends": [],
        "notes": {
            "short": "A power-provider service."
        },
        "classIdentifier": 530893146,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "enabled",
                "identifier": 1,
                "description": "Turn the power to the bus on/off.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1,
                        "defaultValue": 1
                    }
                ],
                "identifierName": "intensity"
            },
            {
                "kind": "rw",
                "name": "max_power",
                "identifier": 7,
                "description": "Limit the power provided by the service.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "mA",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true,
                        "defaultValue": 500
                    }
                ],
                "identifierName": "max_power"
            },
            {
                "kind": "ro",
                "name": "overload",
                "identifier": 385,
                "description": "Indicates whether the power has been shut down due to overdraw.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ]
            },
            {
                "kind": "ro",
                "name": "current_draw",
                "identifier": 257,
                "description": "Present current draw from the bus.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "mA",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    }
                ],
                "identifierName": "reading"
            },
            {
                "kind": "ro",
                "name": "battery_voltage",
                "identifier": 384,
                "description": "Voltage on input.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "mV",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    }
                ]
            },
            {
                "kind": "ro",
                "name": "battery_charge",
                "identifier": 386,
                "description": "Fraction of charge in the battery.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "frac",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    }
                ],
                "optional": true
            },
            {
                "kind": "const",
                "name": "battery_capacity",
                "identifier": 387,
                "description": "Energy that can be delivered to the bus when battery is fully charged.\nThis excludes conversion overheads if any.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "mWh",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ],
                "optional": true
            },
            {
                "kind": "rw",
                "name": "keep_on_pulse_duration",
                "identifier": 128,
                "description": "Many USB power packs need current to be drawn from time to time to prevent shutdown.\nThis regulates how often and for how long such current is drawn.\nTypically a 1/8W 22 ohm resistor is used as load limiting the duty cycle to 10%.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true,
                        "defaultValue": 600
                    }
                ]
            },
            {
                "kind": "rw",
                "name": "keep_on_pulse_period",
                "identifier": 129,
                "description": "Many USB power packs need current to be drawn from time to time to prevent shutdown.\nThis regulates how often and for how long such current is drawn.\nTypically a 1/8W 22 ohm resistor is used as load limiting the duty cycle to 10%.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true,
                        "defaultValue": 20000
                    }
                ]
            }
        ]
    },
    {
        "name": "Servo",
        "shortId": "servo",
        "camelName": "Servo",
        "shortName": "Servo",
        "extends": [],
        "notes": {
            "short": "Servo is a small motor directed with a PWM signal.\nThis services fixes the servo period at 20ms, and the pulse can be regulated."
        },
        "classIdentifier": 318542083,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "pulse",
                "identifier": 2,
                "description": "Specifies length of the pulse in microseconds. The period is always 20ms.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "us",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    }
                ],
                "identifierName": "value"
            },
            {
                "kind": "rw",
                "name": "enabled",
                "identifier": 1,
                "description": "Turn the power to the servo on/off.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "intensity"
            }
        ]
    },
    {
        "name": "Slider",
        "shortId": "slider",
        "camelName": "Slider",
        "shortName": "Slider",
        "extends": [],
        "notes": {
            "short": "Base class for sensors.\nA slider potentiometer."
        },
        "classIdentifier": 522667846,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming",
                "derived": true
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval",
                "derived": true
            },
            {
                "kind": "ro",
                "name": "position",
                "identifier": 257,
                "description": "The relative position of the slider between `0x0000` and `0xffff`.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "frac",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    }
                ],
                "identifierName": "reading"
            }
        ]
    },
    {
        "name": "TCP",
        "shortId": "tcp",
        "camelName": "TCP",
        "shortName": "TCP",
        "extends": [],
        "notes": {
            "short": "Data transfer over TCP/IP and TLS stream sockets.",
            "commands": "## Pipes"
        },
        "classIdentifier": 457422603,
        "enums": {
            "TcpError": {
                "name": "TcpError",
                "storage": -4,
                "members": {
                    "InvalidCommand": 1,
                    "InvalidCommandPayload": 2
                }
            }
        },
        "packets": [
            {
                "kind": "command",
                "name": "open",
                "identifier": 128,
                "description": "Open pair of pipes between network peripheral and a controlling device. In/outbound refers to direction from/to internet.",
                "fields": [
                    {
                        "name": "inbound",
                        "unit": "",
                        "type": "pipe",
                        "storage": 12
                    }
                ],
                "pipeType": "open"
            },
            {
                "kind": "report",
                "name": "open",
                "identifier": 128,
                "description": "Open pair of pipes between network peripheral and a controlling device. In/outbound refers to direction from/to internet.",
                "fields": [
                    {
                        "name": "outbound_port",
                        "unit": "",
                        "type": "pipe_port",
                        "storage": 2
                    }
                ],
                "pipeType": "open"
            },
            {
                "kind": "meta_pipe_command",
                "name": "open_ssl",
                "identifier": 1,
                "description": "Open an SSL connection to a given host:port pair. Can be issued only once on given pipe.\nAfter the connection is established, an empty data report is sent.\nConnection is closed by closing the pipe.",
                "fields": [
                    {
                        "name": "tcp_port",
                        "unit": "",
                        "type": "u16",
                        "storage": 2,
                        "isSimpleType": true
                    },
                    {
                        "name": "hostname",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ],
                "pipeType": "open"
            },
            {
                "kind": "pipe_command",
                "name": "outdata",
                "identifier": 0,
                "description": "Bytes to be sent directly over an established TCP or SSL connection.",
                "fields": [
                    {
                        "name": "data",
                        "unit": "",
                        "type": "bytes",
                        "storage": 0,
                        "isSimpleType": true
                    }
                ],
                "pipeType": "open"
            },
            {
                "kind": "pipe_report",
                "name": "indata",
                "identifier": 0,
                "description": "Bytes read directly from directly over an established TCP or SSL connection.",
                "fields": [
                    {
                        "name": "data",
                        "unit": "",
                        "type": "bytes",
                        "storage": 0,
                        "isSimpleType": true
                    }
                ],
                "pipeType": "open"
            },
            {
                "kind": "meta_pipe_report",
                "name": "error",
                "identifier": 0,
                "description": "Reported when an error is encountered. Negative error codes come directly from the SSL implementation.",
                "fields": [
                    {
                        "name": "error",
                        "unit": "",
                        "type": "TcpError",
                        "storage": -4
                    }
                ],
                "pipeType": "open"
            }
        ]
    },
    {
        "name": "Temperature",
        "shortId": "temperature",
        "camelName": "Temperature",
        "shortName": "Temperature",
        "extends": [],
        "notes": {
            "short": "Base class for sensors.\nA thermometer measuring outside environment.",
            "registers": "Default streaming interval is 1s."
        },
        "classIdentifier": 337754823,
        "enums": {},
        "packets": [
            {
                "kind": "rw",
                "name": "is_streaming",
                "identifier": 3,
                "description": "Enables/disables broadcast streaming",
                "fields": [
                    {
                        "name": "_",
                        "unit": "",
                        "type": "bool",
                        "storage": 1
                    }
                ],
                "identifierName": "is_streaming",
                "derived": true
            },
            {
                "kind": "rw",
                "name": "streaming_interval",
                "identifier": 4,
                "description": "Period between packets of data when streaming in milliseconds.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "ms",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true,
                        "defaultValue": 100
                    }
                ],
                "identifierName": "streaming_interval",
                "derived": true
            },
            {
                "kind": "ro",
                "name": "temperature",
                "identifier": 257,
                "description": "The temperature.",
                "fields": [
                    {
                        "name": "_",
                        "unit": "C",
                        "shift": 10,
                        "type": "u22.10",
                        "storage": 4
                    }
                ],
                "identifierName": "reading"
            }
        ]
    },
    {
        "name": "WIFI",
        "shortId": "wifi",
        "camelName": "WIFI",
        "shortName": "WIFI",
        "extends": [],
        "notes": {
            "short": "Discovery and connection to WiFi networks. Separate TCP service is used for data transfer.",
            "commands": "## Event"
        },
        "classIdentifier": 413852154,
        "enums": {
            "APFlags": {
                "name": "APFlags",
                "storage": 4,
                "isFlags": true,
                "members": {
                    "HasPassword": 1,
                    "WPS": 2,
                    "HasSecondaryChannelAbove": 4,
                    "HasSecondaryChannelBelow": 8,
                    "IEEE_802_11B": 256,
                    "IEEE_802_11A": 512,
                    "IEEE_802_11G": 1024,
                    "IEEE_802_11N": 2048,
                    "IEEE_802_11AC": 4096,
                    "IEEE_802_11AX": 8192,
                    "IEEE_802_LongRange": 32768
                }
            }
        },
        "packets": [
            {
                "kind": "command",
                "name": "scan",
                "identifier": 128,
                "description": "Initiate search for WiFi networks. Results are returned via pipe, one entry per packet.",
                "fields": [
                    {
                        "name": "results",
                        "unit": "",
                        "type": "pipe",
                        "storage": 12
                    }
                ],
                "pipeType": "scan"
            },
            {
                "kind": "pipe_report",
                "name": "results",
                "identifier": 0,
                "description": "Initiate search for WiFi networks. Results are returned via pipe, one entry per packet.",
                "fields": [
                    {
                        "name": "flags",
                        "unit": "",
                        "type": "APFlags",
                        "storage": 4
                    },
                    {
                        "name": "reserved",
                        "unit": "",
                        "type": "u32",
                        "storage": 4,
                        "isSimpleType": true
                    },
                    {
                        "name": "rssi",
                        "unit": "",
                        "type": "i8",
                        "storage": -1,
                        "isSimpleType": true
                    },
                    {
                        "name": "channel",
                        "unit": "",
                        "type": "u8",
                        "storage": 1,
                        "isSimpleType": true
                    },
                    {
                        "name": "bssid",
                        "unit": "",
                        "type": "u8[6]",
                        "storage": 6
                    },
                    {
                        "name": "ssid",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ],
                "pipeType": "scan"
            },
            {
                "kind": "command",
                "name": "connect",
                "identifier": 129,
                "description": "Connect to named network. Password can be appended after NUL-terminated ssid.",
                "fields": [
                    {
                        "name": "ssid",
                        "unit": "",
                        "type": "string",
                        "storage": 0
                    }
                ]
            },
            {
                "kind": "command",
                "name": "disconnect",
                "identifier": 130,
                "description": "Disconnect from current WiFi network if any.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "got_ip",
                "identifier": 1,
                "description": "Emitted upon successful join and IP address assignment.",
                "fields": []
            },
            {
                "kind": "event",
                "name": "lost_ip",
                "identifier": 2,
                "description": "Emitted when disconnected from network.",
                "fields": []
            }
        ]
    }
]