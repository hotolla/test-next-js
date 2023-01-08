import classNames from "classnames";

export const Button = ({ children }: { children: string }) => {
    return (
        <button
            className={classNames(`
                    leading-10
                    col-start-1 col-end-3 
                    row-start-1 row-end-1
                    px-3 
                    m-5
                    h-10
                    w-[237px]
                    font-bold
                    text-white
                    rounded-[8px]
                    text-[#0F172A]
                    hover:bg-[#0EA5E9]
                    bg-[#0284C7]
                    `)
            }
        >{children}</button>
    )
}