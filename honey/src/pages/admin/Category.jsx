import { useState } from 'react'
import Modal from '../../components/ui/Modal'
import { useDeleteCategoryMutation, useGetCategoriesQuery } from '../../store/shopApi'

import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { Pen, Trash } from "lucide-react"
import EditCategory from '../../components/admin/category/EditCategory'
import AddCategory from '../../components/admin/category/AddCategory'

const Category = () => {
  const [open, setOpen] = useState(false)
  const [edit, setEdit] = useState(null)

  const { data, refetch } = useGetCategoriesQuery()
  const [deleteCategory] = useDeleteCategoryMutation()

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Kateqoriyanı sil",
        text: "Kateqoriya silindikdən sonra geri qaytarıla bilməz!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4F46E5",
        cancelButtonColor: "#EF4444",
        confirmButtonText: "Bəli, sil"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteCategory(id).unwrap()
          refetch()
          Swal.fire("Silindi!", "Kateqoriya uğurla silindi!", "success")
        }
      })
    } catch (error) {
      toast.error(error?.data?.message || "Silinmə zamanı xəta baş verdi")
    }
  }

  const handleEdit = (item) => {
    setEdit(item)
    setOpen(true)
  }

  const handleOpenAdd = () => {
    setEdit(null)
    setOpen(true)
  }

  return (
    <div className="p-8 bg-gradient-to-tr from-pink-50 via-purple-50 to-blue-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-purple-700 tracking-wide select-none">
          Kateqoriyalar
        </h1>
        <button
          onClick={handleOpenAdd}
          className="px-7 py-3 bg-pink-300 hover:bg-pink-400 text-white font-semibold rounded-full shadow-md transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          + Yeni Kateqoriya Əlavə Et
        </button>
      </div>

      <Modal open={open} setOpen={setOpen}>
        {edit ? (
          <EditCategory setOpen={setOpen} item={edit} refetch={refetch} />
        ) : (
          <AddCategory setOpen={setOpen} refetch={refetch} />
        )}
      </Modal>

      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-6 max-w-3xl mx-auto">
        <ul className="space-y-4">
          {data?.map((item, index) => (
            <li
              key={item.id}
              className="flex items-center justify-between p-4 rounded-2xl bg-pink-50 border border-pink-200 hover:border-pink-300 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-200 text-purple-700 font-extrabold text-xl select-none shadow-inner">
                  {index + 1}
                </div>
                <span className="text-purple-900 text-xl font-semibold select-text">
                  {item.name}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-purple-400 hover:bg-purple-500 p-2 rounded-full text-white shadow-md transition"
                  aria-label="Redaktə et"
                  title="Redaktə et"
                >
                  <Pen className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-pink-400 hover:bg-pink-500 p-2 rounded-full text-white shadow-md transition"
                  aria-label="Sil"
                  title="Sil"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
          {!data?.length && (
            <li className="p-6 text-center text-purple-400 italic font-medium">
              Kateqoriya tapılmadı.
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Category
