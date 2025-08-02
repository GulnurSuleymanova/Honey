import { useState } from "react"
import { useAddNewsMutation, useGetAllCategoriesQuery } from "../../../store/newsApi"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"

const AddNews = ({setOpen}) => {
    const { data, refetch } = useGetAllCategoriesQuery()
    const [addNews, { isLoading }] = useAddNewsMutation()
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [categoryId, setCategoryId] = useState(data?.[0].id)
    const handleSaveNews = async () => {
        console.log(categoryId)
        try {
            await addNews({ params: { title, slug, thumbnail, content, categoryId } }).unwrap()
            toast.success('Xəbər uğurla yükləndi')
            setOpen(false)
        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <div className='flex flex-col gap-5'>
            <div>
                <label className='text-white text-lg'>Name</label>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className='w-full bg-white text-black rounded-xl p-3 outline-none' placeholder='Add news title...' type="text" />
            </div>
            <div>
                <label className='text-white text-lg'>Content</label>
                <input value={content} onChange={(e) => setContent(e.target.value)} className='w-full bg-white text-black rounded-xl p-3 outline-none' placeholder='Add news content...' type="text" />
            </div>
            <div>
                <label className='text-white text-lg'>Thumbnail</label>
                <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} className='w-full bg-white text-black rounded-xl p-3 outline-none' placeholder='Add news thumbnail...' type="text" />
            </div>
            <div>
                <label className='text-white text-lg'>Slug</label>
                <input value={slug} onChange={(e) => setSlug(e.target.value)} className='w-full bg-white text-black rounded-xl p-3 outline-none' placeholder='Add news slug...' type="text" />
            </div>

            <select onChange={(e) => setCategoryId(e.target.value)} className="p-3 bg-gray-300">
                {data?.map((item, index) => (
                    <option value={item.id}>{item.name}</option>
                ))}
            </select>
            <div className='w-full flex justify-end'>
                <button
                    onClick={handleSaveNews}
                    className='px-4 py-3 font-semibold rounded bg-gray-800 text-gray-100'>
                    {isLoading ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Save'}
                </button>
            </div>
        </div>
    )
}

export default AddNews
