export type SignupPayload = {
    email: string;
    name: string;
    password: string;
};

export type LoginPayload = {
    email: string;
    password: string;
};

export type User = {
    id: string;
    email: string;
    name: string;
};
