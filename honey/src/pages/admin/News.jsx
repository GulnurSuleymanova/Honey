import { Loader2, Pen, Trash } from "lucide-react"
import { useDeleteNewsMutation,   useAllNewsQuery } from "../../store/newsApi"
import { useState } from "react"
import Modal from "../../components/ui/Modal"
import { toast } from "react-toastify"
import Swal from "sweetalert2"
import AddNews from "../../components/admin/news/AddNews"
import EditNews from "../../components/admin/news/EditNews"

const News = () => {
  const { data, isLoading } =   useAllNewsQuery()
  const [open, setOpen] = useState(false)
  const [deleteNews] = useDeleteNewsMutation()
  const [edit, setEdit] = useState(null)

  const handleDeleteNews = async (id) => {
    try {
      Swal.fire({
        title: "Xəbəri sil",
        text: "Xəbər silindikdən sonra geri qaytarıla bilməz!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#9f7aea", 
        cancelButtonColor: "#f56565", 
        confirmButtonText: "Bəli, sil"
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteNews(id).unwrap()
          Swal.fire({
            title: "Silindi!",
            text: "Xəbər uğurla silindi!",
            icon: "success",
            confirmButtonColor: "#9f7aea",
          });
        }
      });
    } catch (error) {
      toast.error(error?.data?.message || 'Xəta baş verdi...')
    }
  }

  const handleEditNews = (id) => {
    setEdit(id)
    setOpen(true)
  }

  const handleOpenAdd = () => {
    setEdit(null)
    setOpen(true)
  }

  return (
    <div className="container mx-auto p-6 font-sans text-purple-900">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold tracking-wide">Xəbərlər</h2>
        <button
          onClick={handleOpenAdd}
          className="bg-purple-400 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-3xl shadow-md transition focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Yeni Xəbər Əlavə Et
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg border border-purple-200">
        {isLoading ? (
          <div className="flex justify-center items-center p-20">
            <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
          </div>
        ) : (
          <table className="min-w-full bg-white rounded-xl">
            <thead className="bg-purple-100 text-purple-700 uppercase text-sm select-none">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Şəkil</th>
                <th className="p-3">Başlıq</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Baxış</th>
                <th className="p-3">Bəyənmə</th>
                <th className="p-3">Bəyənməmə</th>
                <th className="p-3 text-center">Redaktə</th>
                <th className="p-3 text-center">Sil</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => (
                <tr
                  key={item.id}
                  className={`border-b border-purple-200 ${
                    idx % 2 === 0 ? "bg-purple-50" : "bg-white"
                  } hover:bg-purple-100 transition`}
                >
                  <td className="p-3 font-medium text-center">{item.id}</td>
                  <td className="p-3">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-xl shadow-sm"
                    />
                  </td>
                  <td className="p-3 font-semibold">{item.title}</td>
                  <td className="p-3 lowercase">{item.slug}</td>
                  <td className="p-3 text-center">{item.views}</td>
                  <td className="p-3 text-center">{item.like}</td>
                  <td className="p-3 text-center">{item.dislike}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleEditNews(item.id)}
                      className="bg-purple-400 hover:bg-purple-500 p-2 rounded-full text-white shadow-md transition"
                      aria-label="Redaktə et"
                      title="Redaktə et"
                    >
                      <Pen className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDeleteNews(item.id)}
                      className="bg-pink-400 hover:bg-pink-500 p-2 rounded-full text-white shadow-md transition"
                      aria-label="Sil"
                      title="Sil"
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal open={open} setOpen={setOpen}>
        {edit ? (
          <EditNews setOpen={setOpen} id={edit} />
        ) : (
          <AddNews setOpen={setOpen} />
        )}
      </Modal>
    </div>
  )
}

export default News
