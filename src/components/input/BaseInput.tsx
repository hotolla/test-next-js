import  EyeIcon  from "../icons/Eye.svg";
import EyeOffIcon from "../icons/EyeOff.svg";
import {useState} from "react";
import classNames from "classnames";


export const BaseInput = ({ icon, error, caption }: { icon: boolean; error: boolean; caption: boolean }) => {
    const [type, setType] = useState('password')
    const Icon = type === 'text' ? EyeIcon : EyeOffIcon
    return (
        <div >
            <label className={'font-medium'}>Label</label>
                <div className={`grid grid-rows-1 grid-cols-[auto_40px] my-2.5 w-[327px]`}>
                    <input
                        type={type}
                        className={classNames(`
                            leading-6
                            col-start-1 col-end-3 
                            row-start-1 row-end-1
                            px-3 py-2
                            h-10
                            border-2 border-[#E2E8F0]
                            rounded-[8px]
                            text-[#0F172A]
                            placeholder:text-[#94A3B8]
                            focus:shadow-[0_0_0_2px_#BAE6FD]
                            focus:outline-none
                            `, {
                            ['pr-10']: icon
                        })
                        }
                        placeholder={'Value'}
                    />
                    {icon && <Icon className={`
                        col-start-2 col-end-2
                        row-start-1 row-end-1
                        justify-self-center self-center
                        hover:cursor-pointer
                    `}
                          onClick={() => setType( t => t === 'text' ? 'password' : 'text')}
                    />}
                </div>
            { caption && <div className={classNames('font-normal',{
                ['text-[#F87171]']: error,
                ['text-[#94A3B8]']: !error
            })}>Caption</div>}
        </div>
    )
}