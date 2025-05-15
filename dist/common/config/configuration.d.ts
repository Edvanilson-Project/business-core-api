declare const _default: () => {
    port: number;
    jwt: {
        secret: string | undefined;
        expiresIn: string | undefined;
    };
    database: {
        type: string;
        host: string | undefined;
        port: number;
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
    };
};
export default _default;
