var APP_DATA = {
  "scenes": [
    {
      "id": "0-tampak",
      "name": "tampak",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.07250083664070495,
          "pitch": 0.07430144148283979,
          "rotation": 0,
          "target": "1-aw_1---panorama"
        },
        {
          "yaw": 1.6264257913789422,
          "pitch": 0.06596469635913493,
          "rotation": 0,
          "target": "3-tam_1---panorama"
        },
        {
          "yaw": -1.5277401521718819,
          "pitch": 0.02528942372049059,
          "rotation": 0,
          "target": "10-ms_3---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-aw_1---panorama",
      "name": "aw_1 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7993363655446082,
          "pitch": 0.0708643712221253,
          "rotation": 0,
          "target": "0-tampak"
        },
        {
          "yaw": 0.3783353296011338,
          "pitch": 0.07209878661173441,
          "rotation": 0,
          "target": "2-aw_2---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-aw_2---panorama",
      "name": "aw_2 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7196616368920754,
          "pitch": 0.1973419667475831,
          "rotation": 0,
          "target": "1-aw_1---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-tam_1---panorama",
      "name": "tam_1 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7588894776238284,
          "pitch": 0.22783261229027119,
          "rotation": 0,
          "target": "0-tampak"
        },
        {
          "yaw": -1.6460293765784186,
          "pitch": 0.32772470895628203,
          "rotation": 0,
          "target": "4-tam_2---panorama"
        },
        {
          "yaw": -2.133948668535549,
          "pitch": 0.14332685013440027,
          "rotation": 0.7853981633974483,
          "target": "7-tam_5---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-tam_2---panorama",
      "name": "tam_2 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32841982555300575,
          "pitch": 0.26542867199406395,
          "rotation": 0,
          "target": "3-tam_1---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-tam_3---panorama",
      "name": "tam_3 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.272893102872567,
          "pitch": 0.13922340733578764,
          "rotation": 0.7853981633974483,
          "target": "7-tam_5---panorama"
        },
        {
          "yaw": -0.09739634898045324,
          "pitch": 0.12313731110612736,
          "rotation": 0,
          "target": "6-tam_4---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-tam_4---panorama",
      "name": "tam_4 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08522972052365319,
          "pitch": 0.1642606436147318,
          "rotation": 0,
          "target": "5-tam_3---panorama"
        },
        {
          "yaw": -1.0965990724874928,
          "pitch": 0.08608439901861509,
          "rotation": 0.7853981633974483,
          "target": "0-tampak"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-tam_5---panorama",
      "name": "tam_5 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0786988314361938,
          "pitch": 0.1867183628532807,
          "rotation": 5.497787143782138,
          "target": "5-tam_3---panorama"
        },
        {
          "yaw": 3.0266758637748374,
          "pitch": 0.08207909804867164,
          "rotation": 1.5707963267948966,
          "target": "10-ms_3---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ms_1---panorama",
      "name": "MS_1 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8343606809976478,
          "pitch": 0.10128600760799955,
          "rotation": 0,
          "target": "10-ms_3---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ms_2---panorama",
      "name": "MS_2 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.936209440597647,
          "pitch": 0.18123058937534964,
          "rotation": 4.71238898038469,
          "target": "10-ms_3---panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ms_3---panorama",
      "name": "MS_3 - Panorama",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7272466316274286,
          "pitch": 0.28920560548419516,
          "rotation": 7.0685834705770345,
          "target": "9-ms_2---panorama"
        },
        {
          "yaw": -0.11595282813519603,
          "pitch": 0.17998753106133236,
          "rotation": 0,
          "target": "8-ms_1---panorama"
        },
        {
          "yaw": -0.6686578526764073,
          "pitch": 0.19690021185684614,
          "rotation": 0,
          "target": "7-tam_5---panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
