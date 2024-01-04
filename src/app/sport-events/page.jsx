'use client'
import { handleList, handleRemove } from "@/api/sport-events";
import BaseLayout from "@/components/BaseLayout";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Users() {

    const[list, setList] = useState([]);
    const[page, setPage] = useState(1);
    const[perPage, setPerPage] = useState(10);

    useEffect(() => {

        async function fetch() {
            const response = await handleList(page, perPage);
            setList(response.data.data);
        }

        fetch();
    }, [])

    const onDelete = async (id) => {
        await handleRemove(id);
        const response = await handleList(page, perPage);
        setList(response.data.data);
    }

    return (
        <>
            <BaseLayout>
                <div className="row">
                   <div className="col-12">
                    <div className="card">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Event Name</th>
                                        <th>Event Type</th>
                                        <th>Event Date</th>
                                        <th>Organizer Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map(x => (
                                            <tr>
                                                <td>{x.eventName}</td>
                                                <td>{x.eventType}</td>
                                                <td>{moment(x.eventDate).format("YYYY-MM-DD")}</td>
                                                <td>{x.organizer.organizersName}</td>
                                                <td>
                                                    <Link href={"/sport-events/" + x.id} className="btn btn-sm btn-outline-secondary me-2">Edit</Link>
                                                    <a href="#"onClick={() => confirm("Are you sure?") ? onDelete(x.id) : false} className="btn btn-sm btn-outline-danger">Delete</a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                   </div>
                </div>
            </BaseLayout>
        </>
    );
}
