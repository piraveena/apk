

// --------------------------------------------------------------------
//  Copyright (c) 2023, WSO2 LLC. (http://wso2.com) All Rights Reserved.

//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at

//  http://www.apache.org/licenses/LICENSE-2.0

//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
// -----------------------------------------------------------------------




const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const e = require("express");

// Middleware to parse JSON requests
app.use(bodyParser.json());
console.log("hitttt");
// POST route to handle JSON request

app.post("/api/v1/handle-request", (req, res) => {


  const data = req.body;
  console.log("printing data:===" + data);
  const url = data["requestHeaders"][":path"];
  console.log("printing url:===" + url);

  const free_tier = ["carbon.super", "foo.com"];
  const enterprise_tier = ["abc.com", "xyz.com"];
  const professional_tier = ["bar.com"];

  const config_api = ["/api/server/v1/applications", "/api"];
  const run_time_low_traffic = ["/scim2/Users"];
  const run_time_high_traffic = ["/oauth2/token"];

//  const arrayObject_free_tier = [
//    { name: "run_time_low_traffic", rate_limit: 2 },
//    { name: "run_time_high_traffic", age: 10 },
//    { name: "config_api", age: 3 }
//  ];

  let tenantDomain;
  let apiPath;

  const regex = /\/t\/([^\/]*)(\/[a-zA-Z0-9\/]+)/;
  const match = url.match(regex);
  console.log(match[1]);
  console.log(match[2]);

  if (match && match[1]) {
    console.log(match[1]);
    tenantDomain = match[1];
  }

  if (match && match[2]) {
    console.log(match[2]);
    apiPath = match[2];
  }

  let key = tenantDomain + ":" + apiPath;
  console.log("key: " + key);

  if (free_tier.includes(tenantDomain)) {
      console.log("hittt free_tier ==: ");

    if (run_time_low_traffic.includes(apiPath)) {
      console.log("hittt run_time_low_traffic ==: ");
      res.send({
        rateLimitKeys: {
          free_tier_run_time_low_traffic: key,
        },
      });
    } else if (run_time_high_traffic.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          free_tier_run_time_high_traffic: key,
        },
      });
    } else if (config_api.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          free_tier_config_traffic: key,
        },
      });
    }
  

  } else if (professional_tier.includes(tenantDomain)) {
    if (run_time_low_traffic.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          professional_tier_run_time_low_traffic: key,
        },
      });
    } else if (run_time_high_traffic.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          professional_tier_run_time_high_traffic: key,
        }
      });
    } else if (config_api.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          professional_tier_config: key,
        },
      });
    }

    
  } else if (enterprise_tier.includes(tenantDomain)) {
    if (run_time_low_traffic.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          enterprise_tier_run_time_low_traffic: key,
        },
      });
    } else if (run_time_high_traffic.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          enterprise_tier_run_time_high_traffic: key,
        },
      });
    } else if (config_api.includes(apiPath)) {
      res.send({
        rateLimitKeys: {
          enterprise_tier_config: key,
        },
      });
    }
  } else {
    res.send({
      rateLimitKeys: {},
    });
  }
});

  // Start the server on port 8080
  app.listen(8080, () => {
    console.log("Server is listening on port 8080");
  });

