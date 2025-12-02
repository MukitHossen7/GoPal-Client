/* eslint-disable @typescript-eslint/no-explicit-any */
import { serverFetch } from "@/utility/serverFetchHelper";
import { getCookies } from "./tokenHandler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUserInfo } from "@/types/user.interface";

export const getUserInfo = async () => {
  let userInfo: IUserInfo | any;
  try {
    const response = await serverFetch.get("/users/me", {
      cache: "force-cache",
      next: { tags: ["USERS"] },
    });
    const result = await response.json();
    if (result.success) {
      const accessToken = await getCookies("accessToken");
      if (!accessToken) {
        throw new Error("No access token found");
      }

      jwt.verify(
        accessToken,
        process.env.ACCESS_TOKEN_SECRET as string
      ) as JwtPayload;
    }

    userInfo = {
      ...result,
    };
    return userInfo;
  } catch (error) {
    console.log(error);
    return {
      id: "",
      name: "Unknown User",
      email: "",
      role: "TRAVELER",
    };
  }
};
