var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "შემოსასვლელი/entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0026140865660462254,
          "pitch": 0.23212443901700297,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": -0.5853214799051578,
          "pitch": 0.3460565392163275,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": 0.6979557041828066,
          "pitch": 0.16317408644335885,
          "rotation": 0,
          "target": "1--living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1--living-room",
      "name": "მისაღები ოთახი/living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11739274247867648,
          "pitch": 0.2783521086403695,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 0.7110263141515389,
          "pitch": 0.3692663106750622,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "სამზარეულო/kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.11260466168064,
          "pitch": 0.48914782505700316,
          "rotation": 0,
          "target": "1--living-room"
        },
        {
          "yaw": -3.0731915032839243,
          "pitch": 0.2421462557543208,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": 2.670450020498511,
          "pitch": 0.4823344442595108,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "საძინებელი/bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8320986220837625,
          "pitch": 0.24646109725475895,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bathroom",
      "name": "სააბაზანო/bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8663789016737837,
          "pitch": 0.9051356973564371,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
