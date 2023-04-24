import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";

export const AuthenticationContext = React.createContext({});

export const AuthenticationStatus = {
    NOT_FETCHED: "NO_FETCHED",
    IS_FETCHING: "IS_FETCHING",
    NOT_AUTHENTICATED: "IS_NOT_AUTHENTICATED",
    IS_AUTHENTICATED: "IS_AUTHENTICATED",
    FAILURE: "FAILURE",
};

const AuthenticationProvider = ({ children }) => {
    const [authenticationStatus, setAuthenticationStatus] = useState(AuthenticationStatus.NOT_FETCHED);
    const router = useRouter();

    useEffect(() => {
        fetchIsAuthenticated();
    }, []);

    const fetchIsAuthenticated = () => {
        setAuthenticationStatus(AuthenticationStatus.IS_FETCHING);

        fetch(`/api/isAuthenticated`, {
            credentials: "include",
        })
            .then((response) => {
                if (response.status === 200) {
                    setAuthenticationStatus(AuthenticationStatus.IS_AUTHENTICATED);
                } else if (response.status === 401) {
                    setAuthenticationStatus(AuthenticationStatus.NOT_AUTHENTICATED);
                } else {
                    setAuthenticationStatus(AuthenticationStatus.FAILURE);
                }
            })
            .catch(() => {
                setAuthenticationStatus(AuthenticationStatus.FAILURE);
            });
    };

    function chooseRole() {
        router.push("/velg-rolle");
    }

    function logout() {
        window.location.href = `/oauth2/logout?redirect=/`;
    }

    return (
        <AuthenticationContext.Provider value={{ authenticationStatus, chooseRole, logout }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

AuthenticationProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AuthenticationProvider;
