'use client'
import { handleCreate, handleDetail, handleLogin } from "@/api/user";
import BaseLayout from "@/components/BaseLayout";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Users() {

    const[user, setUser] = useState({
        firstName: '',
        lastName: '',
        id: 0,
        email: ''
    });

    useEffect(() => {

        async function fetchDetail() {
            const response = await handleDetail();
            setUser(response.data);
        }

        fetchDetail();

        
    }, [])

    return (
        <>
            <BaseLayout>
            
            <div className="row">
                <div className="col">
                    <div className="card p-5">
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">First Name</label>
                            <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.firstName} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Last Name</label>
                            <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.lastName} />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.email} />
                            </div>
                        </div>
                        <div class="mb-3 mt-3 row g-3">
                            <div className="col-auto">
                                <Link href={"/users/" + user.id}>
                                    <button type="button" class="btn btn-primary mb-3">Edit</button>
                                </Link>
                            </div>
                            <div className="col-auto">
                                <Link href={"/users/" + user.id + "/change-password"}>
                                    <button type="button" class="btn btn-primary mb-3">Change Password</button>
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
