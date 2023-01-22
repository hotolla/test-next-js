import { AddEdit } from 'components/users/AddEdit';

export default AddEdit;

const userService = {
    getById: (id: number) => Promise.resolve(id)
}

export async function getServerSideProps({ params }: any) {
    const user = await userService.getById(params.id);

    return {
        props: { initialProps: { user } }
    }
}