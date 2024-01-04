'use client'
import { handleCreate, handleLogin } from "@/api/user";
import Link from "next/link";
import { useState } from "react";

export default function Register() {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[repeatPassword, setRepeatPassword] = useState("");

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card">
                            <div className="card-header text-center">
                                <h1>Register</h1>
                            </div>
                            <div className="card-body">
                            <div className="mb-3 row">
                                    <label
                                        htmlFor="firstName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        First Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Last Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="staticEmail"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="staticEmail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="inputPassword"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="repeatPassword"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Repeat Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="repeatPassword"
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <button type="button" className="btn btn-secondary" onClick={() => handleCreate(firstName, lastName, email, password, repeatPassword)}>Submit</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="mb-3 row text-center">
                                    <Link href="/">
                                        <button type="button" className="btn btn-outline-secondary">Login</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
