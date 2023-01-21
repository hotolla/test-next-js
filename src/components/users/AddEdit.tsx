import {BaseInput} from "../input/BaseInput";
import {RadioGroup} from "../input/RadioGroup";
import {Button} from "../input/Button";
import Trash from "../icons/Trash.svg"
import Edit from "../icons/Edit.svg"
export { AddEdit };

const userList = [
    {
        name: 'Jane Cooper',
        company: 'Apple',
        email: 'kjlk@kjlj.com',
        admin: true
    },
    {
        name: 'Jane Cooper2',
        company: 'Apple2',
        email: 'kjlk@kjlj2.com',
        admin: false
    },
    {
        name: 'Jane Cooper3',
        company: 'Apple3',
        email: 'kjlk@kjlj3.com',
        admin: true
    },
    {
        name: 'Jane Cooper4',
        company: 'Apple5',
        email: 'kjlk@kjlj5.com',
        admin: false
    },
    {
        name: 'Jane Cooper5',
        company: 'Apple6',
        email: 'kjlk@kjlj6.com',
        admin: true
    },

]

function AddEdit(props: { user: any; }) {
    const user = props?.user;

    return (
        <div>
            <div>
                <h3>Add Customer</h3>
                <div>user::{JSON.stringify(user)}</div>
                <BaseInput caption="" label="First name" />
                <BaseInput caption="" label="Last name" />
                <BaseInput caption="" label="Company" />
                <RadioGroup />
                <BaseInput caption="" label="Email" />
                <BaseInput caption="8+ characters" label="Password" icon={true}/>
                <Button >Save</Button>
            </div>
            <div className={`flex flex-col items-start p-[40px]
            `}>
                <h3>Customers</h3>
                <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <td>Company</td>
                        <td>Email</td>
                        <td>Admin</td>
                        <td>Action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {userList.map(({ name, company, email, admin }) => (
                        <tr key={email}>
                            <td>{name}</td>
                            <td>{company}</td>
                            <td>{email}</td>
                            <td>{admin ? 'admi' : 'user'}</td>
                            <td><Edit /><Trash /></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}