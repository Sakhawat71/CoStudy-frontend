import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    // sign up => email password
    const emailPasswordSignUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign up => google
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // log in => email password 
    const loginEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user managment
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

            if (currentUser) {
                const loggedUserEmail = currentUser?.email;
                axios.post(`https://online-group-study-server-gold.vercel.app/api/v1/auth/jwt`, { email: loggedUserEmail }, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.error('Error sending JWT request:', error);
                    });
            }
        })
        return () => unSubscribe();
    }, [])

    // log out
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }


    // provide all function
    const authInfo = {
        emailPasswordSignUp,
        googleSignIn,
        loginEmailPass,
        logout,
        user,
        loading,
        setLoading
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;
