import {useState} from "react";
import classNames from "classnames";


export const RadioGroup = () => {
    const [active, setActive] = useState(true)
    return (
        <div >
            <label className={'font-medium '}>Label</label>
            <div className={`
                            grid grid-rows-1 grid-cols-2 my-2.5 w-[333px]
                            h-10
                            bg-[#F1F5F9]`}>
                <button
                    className={classNames(`
                            leading-8
                            h-8
                            col-start-1 col-end-2
                            row-start-1 row-end-1
                            px-1 
                            m-1
                            rounded-[4px]
                            text-[#0F172A]
                            font-medium
                            self-center justify-self-medium
                            placeholder:text-[#94A3B8]
                            focus:outline-none
                            `, {
                        ['bg-white']: active,
                        ['shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)]']: active
                    })
                    }
                    onClick={() => setActive(true)}
                >Option1</button>
                <button
                    className={classNames(`
                            leading-8
                            h-8
                            col-start-2 col-end-3
                            row-start-1 row-end-1
                            px-1 
                            m-1
                            rounded-[4px]
                            text-[#0F172A]
                            self-center justify-self-medium
                            font-medium
                            placeholder:text-[#94A3B8]
                            focus:outline-none
                            `, {
                        ['bg-white']: !active,
                        ['shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1),_0px_1px_2px_-1px_rgba(0,_0,_0,_0.1)]']: !active
                    })}
                    onClick={() => setActive(false)}
                    placeholder={'Value'}
                >Option2</button>

            </div>
        </div>
    )
}