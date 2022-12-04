import React from "react"
export const ItemPost = (props:any) => {
    const { header, value } = props;
    return (
    <div className="pt-3 px-5">
        <div className="bg-red-100 rounded">
            <div className="max-w-7xl py-1 sm:py-24 sm:px-6 lg:px-8 rounded">
                <div className="flex">
                    <div className="flex">
                        <img className='ml-3' src="" alt="" />
                        <h2 className="py-1 text-xs ml-2 leading-7 font-bold tracking-tight text-red-500">{header}</h2>
                    </div>
                </div>
                    <div className="mt-1 border-t border-gray-500/20 pt-1">
                        <div className="flex items-center">
                            <div className="rounded-md border ml-5 border-red-600 px-3 py-2 shadow-sm focus-within:border-red-600 focus-within:ring-1 focus-within:ring-red-600">
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                                    placeholder="54"
                                />
                            </div>
                            <div className="">
                                <dt className="text-xs ml-3 font-medium leading-5 text-gray-400">{value}</dt>
                            </div>  
                            </div>
                    </div>
            </div>
        </div>
    </div>
    )
}