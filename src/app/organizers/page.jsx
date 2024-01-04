'use client'
import { handleList, handleRemove } from "@/api/organizers";
import BaseLayout from "@/components/BaseLayout";
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
                                        <th>Organizer Name</th>
                                        <th>Image Location</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map(x => (
                                            <tr>
                                                <td>{x.organizersName}</td>
                                                <td>{x.imageLocation}</td>
                                                <td>
                                                    <Link href={"/organizers/" + x.id} className="btn btn-sm btn-outline-secondary me-2">Edit</Link>
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
