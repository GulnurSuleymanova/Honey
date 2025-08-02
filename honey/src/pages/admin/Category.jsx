import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import { useDeleteCategoryMutation, useGetAllCategoriesQuery } from '../../store/newsApi'
import AddCategory from '../../components/admin/category/AddCategory'
import { toast } from 'react-toastify'
import EditCategory from '../../components/admin/category/EditCategory'
import Swal from 'sweetalert2'

const Category = () => {
    const [open, setOpen] = useState(false)
    const [edit, setEdit] = useState()

    const { data, refetch } = useGetAllCategoriesQuery()
    const [deleteCategory] = useDeleteCategoryMutation()

    const handleDelete = async (id) => {
        try {
            Swal.fire({
                title: "Kateqoriyanı sil",
                text: "Kateqoriya silindikdən sonra geri qaytarıla bilməz!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await deleteCategory(id).unwrap()
                    Swal.fire({
                        title: "Silindi!",
                        text: "Kateqoriya uğurla silindi!",
                        icon: "success"
                    });
                }
            });
        } catch (error) {
            toast.error(error)
        }
    }

    const handleEdit = (item) => {
        setEdit(item)
        setOpen(true)
    }


    return (
        <div className='p-5'>
            <div className='w-full flex justify-end'>
                <button
                    onClick={() => setOpen(true)}
                    className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">
                    Add new Category</button>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <AddCategory setOpen={setOpen} />
            </Modal>
            <Modal open={open} setOpen={setOpen}>
                <EditCategory setOpen={setOpen} item={edit} />
            </Modal>
            <div className='mt-5'>
                <ul>
                    {data?.map((item, index) => (
                        <li
                            key={item.id}
                            className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg">
                                    {index + 1}
                                </div>
                                <span className="text-gray-800 font-medium text-lg group-hover:text-indigo-600 transition-colors duration-200">
                                    {item.name}
                                </span>
                            </div>
                            <div className=' flex gap-3'>
                                <button
                                    onClick={() => handleEdit(item)}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600 transition-all duration-200"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow hover:bg-red-600 transition-all duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Category
