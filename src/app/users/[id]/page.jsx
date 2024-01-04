"use client";
import {handleDetail, handleUpdate } from "@/api/user";
import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Edit({ params }) {

    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");

    useEffect(() => {

        async function fetch() {
            const response = await handleDetail();
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
        }

        fetch();
    }, [])

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
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Email
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <button type="button" className="btn btn-secondary" onClick={() => handleUpdate(firstName, lastName, email)}>Save Changes</button>
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
