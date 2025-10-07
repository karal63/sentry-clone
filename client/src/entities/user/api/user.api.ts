import type { LoginPayload, SignupPayload } from "../model/user.model";

export const apiSignup = async ({ email, name, password }: SignupPayload) => {
    console.log("api call", email, name, password);
};

export const apiLogin = async ({ email, password }: LoginPayload) => {
    console.log("api call", email, password);
};
