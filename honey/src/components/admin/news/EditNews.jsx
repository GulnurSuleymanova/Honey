import { useEffect, useState } from "react"
import { useAddNewsMutation, useEditNewsMutation, useGetAllCategoriesQuery, useGetNewsByIdQuery } from "../../../store/newsApi"
import { toast } from "react-toastify"
import { Loader2 } from "lucide-react"

const EditNews = ({ setOpen, id }) => {
    const { data, refetch } = useGetAllCategoriesQuery()
    const [editNews, { isLoading }] = useEditNewsMutation()
    const { data: newsById } = useGetNewsByIdQuery(id, { skip: !id })
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [categoryId, setCategoryId] = useState()
    const handleSaveNews = async () => {
        try {
            await editNews({ params: { title, slug, thumbnail, content, categoryId }, id }).unwrap()
            toast.success('Xəbər uğurla yeniləndi')
            setOpen(false)
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        if (newsById) {
            setTitle(newsById.title)
            setSlug(newsById.slug)
            setContent(newsById.content)
            setThumbnail(newsById.thumbnail)
            setCategoryId(newsById.category.id)
        }
    }, [newsById])
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
                    <option selected={categoryId == item.id ? true : false} value={categoryId}>{item.name}</option>
                ))}
            </select>
            <div className='w-full flex justify-end'>
                <button
                    onClick={handleSaveNews}
                    className='px-4 py-3 font-semibold rounded bg-gray-800 text-gray-100'>
                    {isLoading ? <Loader2 className='h-5 w-5 animate-spin' /> : 'Save'}
                </button>
            </div>
        </div >
    )
}

export default EditNews
