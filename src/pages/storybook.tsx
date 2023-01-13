import Edit from "components/icons/Edit.svg";
import Eye from "components/icons/Eye.svg";
import EyeOff from "components/icons/EyeOff.svg";
import Trash from "components/icons/Trash.svg";

import { BaseInput } from "../components/input/BaseInput";
import {Button} from "../components/input/Button";
import {RadioGroup} from "../components/input/RadioGroup";


const Layout = () => (

    <div>
        <Edit />
        <Eye />
        <EyeOff />
        <Trash />
        <BaseInput icon={true} error={false} caption="Caption Error!" label="Label"/>
        <Button>Label</Button>
        <RadioGroup />
    </div>
)
export default Layout;
