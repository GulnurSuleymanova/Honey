import { useEffect, useState } from "react"
import { useEditCategoryMutation } from "../../../store/newsApi"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"

const EditCategory = ({ setOpen, item }) => {
    const [name, setName] = useState()
    const [slug, setSlug] = useState()
    const [editCategory, { isLoading }] = useEditCategoryMutation()
    const handleSaveCategory = async () => {
        if (!name || !slug) {
            toast.error('Zehmet olmasa butun fieldleri doldurun')
        }
        try {
            await editCategory({ params: { name, slug }, id: item.id }).unwrap()
            toast.success('Category successfully edited')
            setName('')
            setSlug('')
            setOpen(false)
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        setName(item?.name)
        setSlug(item?.slug)
    }, [item])

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <label className='text-white text-lg'>Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className='w-full bg-white text-black rounded-xl p-3 outline-none' placeholder='Edit category name...' type="text" />
            </div>
            <div>
                <label className='text-white text-lg'>Slug</label>
                <input value={slug} onChange={(e) => setSlug(e.target.value)} className='w-full bg-white text-black rounded-xl p-3 outline-none' placeholder='Edit category slug...' type="text" />
            </div>
            <div className='w-full flex justify-end'>
                <button
                    onClick={handleSaveCategory}
                    className='px-4 py-3 font-semibold rounded bg-gray-800 text-gray-100'>
                    {isLoading ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Save'}
                </button>
            </div>
        </div>
    )
}

export default EditCategory
