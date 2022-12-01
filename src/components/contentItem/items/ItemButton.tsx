import { PlusIcon as PlusIconMini } from '@heroicons/react/20/solid'

export const ItemButton = () => {
    return (
        <div className='mt-1 mr-3 items-center'><button onClick={() => { }} className='rounded-full border-2 border-green-700
                                 text-white shadow-lg bg-green-100'>
            <PlusIconMini className="h-4 w-4 text-green-700" aria-hidden="true" /></button></div>
    )
}