"use client";
import { handleCreate, handleDetail, handleList, handleRemove, handleUpdate } from "@/api/sport-events";
import { handleList as handleListOrganizers } from "@/api/organizers";
import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Edit({ params }) {

    const[organizers, setOrganizers] = useState([]);

    const[eventName, setEventName] = useState("");
    const[eventDate, setEventDate] = useState("");
    const[eventType, setEventType] = useState("");
    const[organizersId, setOrganizersId] = useState();
   

    useEffect(() => {

        async function fetch() {
            const response = await handleDetail(params.id);
            setEventName(response.data.eventName);
            setEventDate(response.data.eventDate);
            setEventType(response.data.eventType);
            setOrganizersId(response.data.organizer.id);

            const resOrganizers = await handleListOrganizers(1, 100);
            setOrganizers(resOrganizers.data.data);
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
                                        Event Name
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            value={eventName}
                                            onChange={(e) => setEventName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Event Type
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            value={eventType}
                                            onChange={(e) => setEventType(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Event Date
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="lastName"
                                            value={eventDate}
                                            onChange={(e) => setEventDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="lastName"
                                        className="col-sm-2 col-form-label"
                                    >
                                        Organizers
                                    </label>
                                    <div className="col-sm-10">
                                        <select class="form-select" aria-label="Default select example" onChange={e => setOrganizersId(e.target.value)}>
                                            {
                                                organizers.map(x => (
                                                    <option value={x.id}>{x.organizersName}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 row text-center">
                                    <div className="col">
                                        <button type="button" className="btn btn-secondary" onClick={() => handleUpdate(params.id, eventName, eventType, eventDate, organizersId)}>Save Changes</button>
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
