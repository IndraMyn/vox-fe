"use client";
import { handleCreate, handleDetail, handleList, handleRemove, handleUpdate } from "@/api/organizers";
import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Edit({ params }) {

    const[organizersName, setOrganizerName] = useState("");
    const[imageLocation, setImageLocation] = useState("");
   

    useEffect(() => {

        async function fetch() {
            const response = await handleDetail(params.id);
            setOrganizerName(response.data.organizersName);
            setImageLocation(response.data.imageLocation);
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
                                        Organizer Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            value={organizersName}
                                            onChange={(e) => setOrganizerName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Image Location
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            value={imageLocation}
                                            onChange={(e) => setImageLocation(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <button type="button" className="btn btn-secondary" onClick={() => handleUpdate(params.id, organizersName, imageLocation)}>Save Changes</button>
                                    </div>
                                </div>
                                <hr />
                                <div className="mb-3 row text-center">
                                    <Link href="/organizers">
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
