export type Issue = {
    id: string;
    project_id: string;
    title: string;
    culprit: string;
    level: "error" | "warning" | "info" | "fatal";
    type: string;
    message: string;
    status: "unresolved" | "resolved" | "ignored" | "muted";
    created_at: Date;
};
