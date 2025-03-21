import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


export const UserContext = createContext()
export const useUser = () => useContext(UserContext); // optional

export const UserContextProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
        
    })
    const navigate = useNavigate()
    useEffect(() => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(users.sort((a, b) => b.id - a.id));
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.userName || !user.email || !user.password) return alert("Please fill in all the fields.");
        // setEvents([{ ...event, id: Date.now() }, ...events]);
        setUser({ userName: "", email: "", password: ""});
        localStorage.setItem(
            "users",
            JSON.stringify([...users, { ...user, id: Date.now() }])
        );
    }
    const handleModal = (id) => {
        navigate(`/login/${id}`);
    }
    return (
        <UserContext.Provider
            value={{
                users: users,
                user: user,
                setUser: setUser,
                handleSubmit,
                handleModal,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}