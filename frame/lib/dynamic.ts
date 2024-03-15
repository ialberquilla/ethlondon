import { DYNAMIC_API_KEY, DYNAMIC_ENV_ID } from "@/app/config";

const DYNAMIC_URL = "https://app.dynamicauth.com/api/v0/environments/";

export const createUser = async (alias: string, email: string) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DYNAMIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: {
      alias: alias,
      email: email,
    },
  };

  console.log("options", options);
  console.log(`${DYNAMIC_URL}${DYNAMIC_ENV_ID}/users`)

  const respose = await fetch(`${DYNAMIC_URL}${DYNAMIC_ENV_ID}/users`, {
    ...options,
    body: JSON.stringify(options.body),
  });

  const data = await respose.json();
  return data;
};

export const createEmbededWallet = async (id: string) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${DYNAMIC_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: {
      chain: "EVM",
      identifier: id,
      type: "id",
    },
  };

  const respose = await fetch(
    `${DYNAMIC_URL}${DYNAMIC_ENV_ID}/embeddedWallets`,
    {
      ...options,
      body: JSON.stringify(options.body),
    }
  );

  const data = await respose.json();
  return data;
};


export const getAllUsers = async () => {

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${DYNAMIC_API_KEY}`,
      "Content-Type": "application/json",
    }
  };

  const respose = await fetch(`${DYNAMIC_URL}${DYNAMIC_ENV_ID}/users`, options);

  const data = await respose.json();
  return data;

};
