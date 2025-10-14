export type Project = {
    id: string;
    name: string;
    description: string;
    owner_id: string;
    create_at: string;
};

export type Platform = "" | "VUE" | "REACT";

export type CreateProject = {
    platform: Platform;
    notifyViaEmail: boolean;
    name: string;
    // other discord details
};
