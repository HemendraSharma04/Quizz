import React from "react";
import { useGoogleAuth } from "./googleAuth";

const Login = () => {
    const { signIn } = useGoogleAuth();

    return <button onClick = { signIn } > Login < /button>;
};

export default Login;