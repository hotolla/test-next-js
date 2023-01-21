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
            <div>
                <h3>Customers</h3>
                <ul>
                    {userList.map(({ name, company, email, admin }) => (
                        <li key={email}>
                            <span>{name}</span>
                            <span>{company}</span>
                            <span>{email}</span>
                            <span>{admin ? 'admi' : 'user'}</span>
                            <span><Edit /><Trash /></span>
                        </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}