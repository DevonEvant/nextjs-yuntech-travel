"use server";

import { ScenicSpot } from "../../../../types/scenicSpot";
import fs from "fs";
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  // 構建文件路徑
  const filePath = path.join(
    process.cwd(),
    "test",
    "api",
    "items",
    "fakeData.json",
  );

  // 異步讀取文件
  const data = await fs.promises.readFile(filePath, "utf8");

  // 解析 JSON 數據
  const jsonData = JSON.parse(data);

  // 返回 JSON 響應
  return NextResponse.json(jsonData);

  // try {
  // 1. get access token.
  const token = await getToken();
  // 2. get data from TDX api
  const apiData = await fetchData(token["access_token"]);
  // } catch () { } finally {
  //     return Response.data()
  // }

  fs.writeFile("./output", JSON.stringify(apiData!), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });

  return Response.json(apiData);
}

async function getToken() {
  const tokenUrl =
    "https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token";

  const clientId = process.env.TDX_CLIENT_ID;
  const clientSecret = process.env.TDX_CLIENT_SECRET;

  console.log(">>>", clientId);
  console.log(">>>", clientSecret);
  if (clientId === undefined || clientSecret === undefined) {
    return;
  }

  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    body: (() => {
      const tokenParams = new URLSearchParams();
      tokenParams.append("grant_type", "client_credentials");
      tokenParams.append("client_id", clientId);
      tokenParams.append("client_secret", clientSecret);
      return tokenParams.toString();
    })(),
  });

  if (tokenResponse.ok) {
    const data = await tokenResponse.json(); //! 為什麼需要await
    console.log(JSON.stringify(data));

    return data;
  }

  console.error("Error fetching token", tokenResponse.status);
}

async function fetchData(token: String) {
  const apiUrl =
    "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/YunlinCounty";

  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const data: ScenicSpot = await response.json();
    return data;
  }

  console.error("Error fetching data", response.status);
  return undefined;
}
