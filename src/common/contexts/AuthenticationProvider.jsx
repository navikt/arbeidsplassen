import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import SessionStatusModal from "@/src/common/components/auth/SessionStatusModal";

export const AuthenticationContext = React.createContext({});

export const AuthenticationStatus = {
    NOT_FETCHED: "NO_FETCHED",
    IS_FETCHING: "IS_FETCHING",
    NOT_AUTHENTICATED: "IS_NOT_AUTHENTICATED",
    IS_AUTHENTICATED: "IS_AUTHENTICATED",
    FAILURE: "FAILURE",
};

function AuthenticationProvider({ children }) {
    const [authenticationStatus, setAuthenticationStatus] = useState(AuthenticationStatus.NOT_FETCHED);
    const [hasBeenLoggedIn, setHasBeenLoggedIn] = useState(false);
    const router = useRouter();

    const logout = () => {
        window.location.href = `/oauth2/logout?redirect=/utlogget`;
    };

    const timeoutLogout = () => {
        window.location.href = `/oauth2/logout?redirect=${encodeURIComponent("/utlogget?timeout=true")}`;
    };

    const login = () => {
        window.location.href = `/oauth2/login?redirect=${encodeURIComponent(window.location.href)}`;
    };

    const markAsLoggedOut = () => {
        setAuthenticationStatus(AuthenticationStatus.NOT_AUTHENTICATED);
    };

    const fetchIsAuthenticated = () => {
        setAuthenticationStatus(AuthenticationStatus.IS_FETCHING);

        fetch(`/api/isAuthenticated`, {
            credentials: "include",
            cache: "no-store",
        })
            .then((response) => {
                if (response.status === 200) {
                    setAuthenticationStatus(AuthenticationStatus.IS_AUTHENTICATED);
                    setHasBeenLoggedIn(true);
                } else if (response.status === 401) {
                    setAuthenticationStatus(AuthenticationStatus.NOT_AUTHENTICATED);
                    if (hasBeenLoggedIn) {
                        setHasBeenLoggedIn(false);
                        timeoutLogout();
                    }
                } else {
                    setAuthenticationStatus(AuthenticationStatus.FAILURE);
                }
            })
            .catch(() => {
                setAuthenticationStatus(AuthenticationStatus.FAILURE);
            });
    };

    useEffect(() => {
        fetchIsAuthenticated();
    }, []);

    function chooseRole() {
        router.push("/velg-rolle");
    }

    return (
        // TODO: useMemo?
        // eslint-disable-next-line
        <AuthenticationContext.Provider value={{ authenticationStatus, chooseRole, logout }}>
            <SessionStatusModal
                markAsLoggedOut={markAsLoggedOut}
                setHasBeenLoggedIn={setHasBeenLoggedIn}
                login={login}
                logout={logout}
                timeoutLogout={timeoutLogout}
                hasBeenLoggedIn={hasBeenLoggedIn}
            />
            {children}
        </AuthenticationContext.Provider>
    );
}

AuthenticationProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AuthenticationProvider;
