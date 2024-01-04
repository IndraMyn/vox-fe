"use client";
import {handleDetail, handlePassword, handleUpdate } from "@/api/user";
import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Edit({ params }) {

    const[password, setPassword] = useState("");
    const[newPassword, setNewPassword] = useState("");
    const[repeatPassword, setRepeatPassword] = useState("");

    return (
        <>
            <BaseLayout>
            <div className="row">
                    <div className="col-8 offset-2">
                        <div className="card">
                            <div className="card-body">
                            <div className="mb-3 row">
                                    <label
                                        htmlFor="firstName"
                                        className="col-sm-2 col-form-label"
                                    >
                                       Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="firstName"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="New Password"
                                        className="col-sm-2 col-form-label"
                                    >
                                        New Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="lastName"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Repeat Password
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="lastName"
                                            value={repeatPassword}
                                            onChange={(e) => setRepeatPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <button type="button" className="btn btn-secondary" onClick={() => handlePassword(password, newPassword, repeatPassword)}>Save Changes</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="mb-3 row text-center">
                                    <Link href="/users">
                                        <button type="button" className="btn btn-outline-secondary">Back</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </>
    );
}
