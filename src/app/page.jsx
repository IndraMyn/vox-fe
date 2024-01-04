'use client'
import { handleLogin } from "@/api/user";
import Link from "next/link";
import { useState } from "react";

export default function Home() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="card">
                            <div className="card-header text-center">
                                <h1>Login</h1>
                            </div>
                            <div className="card-body">
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
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <button type="button" className="btn btn-secondary" onClick={() => handleLogin(email, password)}>Submit</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <Link href="/register">
                                            <button type="button" className="btn btn-outline-secondary">Create</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
