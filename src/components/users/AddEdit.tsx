import {BaseInput} from "../input/BaseInput";
import {RadioGroup} from "../input/RadioGroup";
import {Button} from "../input/Button";
import Trash from "../icons/Trash.svg"
import Edit from "../icons/Edit.svg"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
export { AddEdit };

const userList = [
    {
        id: 1,
        name: 'Jane Cooper',
        company: 'Apple',
        email: 'kjlk@kjlj.com',
        admin: true
    },
    {
        id: 2,
        name: 'Jane Cooper2',
        company: 'Apple2',
        email: 'kjlk@kjlj2.com',
        admin: false
    },
    {
        id: 3,
        name: 'Jane Cooper3',
        company: 'Apple3',
        email: 'kjlk@kjlj3.com',
        admin: true
    },
    {
        id: 4,
        name: 'Jane Cooper4',
        company: 'Apple5',
        email: 'kjlk@kjlj5.com',
        admin: false
    },
    {
        id: 5,
        name: 'Jane Cooper5',
        company: 'Apple6',
        email: 'kjlk@kjlj6.com',
        admin: true
    },

]

function AddEdit(props: { initialProps?: { user: unknown }}) {
    const initialUser = props?.initialProps?.user;
    const [user, setUser] = useState(initialUser);
    const router = useRouter();
    useEffect(() => {
        const url = `/edit/${user}`
        router.push(url, url, { shallow: true})
    }, [user])


    return (
        <div className={`flex flex-row items-start`}>
            <div className={`flex flex-col items-start p-[40px]
            `}>
                <h3>Add Customer</h3>
                <div>user::{JSON.stringify(user)}</div>
                <div>initial user::{JSON.stringify(initialUser)}</div>
                <BaseInput caption="" label="First name" />
                <BaseInput caption="" label="Last name" />
                <BaseInput caption="" label="Company" />
                <RadioGroup />
                <BaseInput caption="" label="Email" />
                <BaseInput caption="8+ characters" label="Password" icon={true}/>
                <Button >Save</Button>
            </div>
            <div className={`flex flex-col items-start p-[40px]`}>
                <h3>Customers</h3>
                <table className={`text-left mt-20`}>
                    <thead>
                        <tr className={'text-tabGray text-left'}>
                            <th className={`text-left w-[307px] pr-[24px]`}>Name</th>
                            <td className={`text-left w-[307px] pr-[24px]`}>Company</td>
                            <td className={`text-left w-[307px] pr-[24px]`}>Email</td>
                            <td className={`text-left pr-[24px]`}>Admin</td>
                            <td className={`text-left`}>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {userList.map(({ name, company, email, admin }, ind) => (
                        <tr key={email}>
                            <td>{name}</td>
                            <td>{company}</td>
                            <td>{email}</td>
                            <td>{admin ? 'admi' : 'user'}</td>
                            <td><Edit className={`inline-block`} onClick={() => setUser(ind)}/><Trash className={`inline-block`} /></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}