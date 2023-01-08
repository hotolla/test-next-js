export { AddEdit };

function AddEdit(props: { user: any; }) {
    const user = props?.user;

    return (
        <div>user::{JSON.stringify(user)}</div>
    );
}