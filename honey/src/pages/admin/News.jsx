// import { Loader2, Pen, Trash } from "lucide-react"
// import { useState } from "react"
// import Modal from "../../components/ui/Modal"
// import AddNews from "../../components/admin/news/AddNews"
// import { toast } from "react-toastify"
// import Swal from "sweetalert2"

// const News = () => {
//     const [open, setOpen] = useState()
//     const [edit, setEdit] = useState()

   

//     const handleEditNews = (id) => {
//         setEdit(id)
//         setOpen(true)
//     }
//     return (
//         <div>
//             <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
//                 <div className="w-full flex justify-between my-5">
//                     <h2 className="mb-4 text-2xl font-semibold leading-tight">News</h2>
//                     <button
//                         onClick={() => setOpen(true)}
//                         className="px-8 py-3 font-semibold rounded bg-gray-800 text-gray-100">
//                         Add new News</button>
//                 </div>

//                 <div className="overflow-x-auto">
//                     <table className="min-w-full text-xs">
//                         <colgroup>
//                             {isLoading ?
//                                 <col />
//                                 :
//                                 <>
//                                     <col />
//                                     <col />
//                                     <col />
//                                     <col />
//                                     <col />
//                                     <col />
//                                     <col />
//                                     <col />
//                                     <col />
//                                 </>
//                             }
//                         </colgroup>
//                         <thead className="dark:bg-gray-300">
//                             <tr className="text-left">
//                                 {isLoading ?
//                                     <th></th>
//                                     :
//                                     <>
//                                         <th className="p-3">Id</th>
//                                         <th className="p-3">Image</th>
//                                         <th className="p-3">Title</th>
//                                         <th className="p-3">Slug</th>
//                                         <th className="p-3">Views</th>
//                                         <th className="p-3">Like</th>
//                                         <th className="p-3">Dislike</th>
//                                         <th className="p-3">Edit</th>
//                                         <th className="p-3">Delete</th>
//                                     </>
//                                 }
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {isLoading ?
//                                 <div className="w-full flex justify-center items-center">
//                                     <Loader2 className="w-10 h-10 animate-spin" />
//                                 </div>
//                                 :
//                                 data?.news?.map((item) => (
//                                     <tr key={item.id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
//                                         <td className="p-3">
//                                             <p>{item.id}</p>
//                                         </td>
//                                         <td className="p-3">
//                                             <img className="w-16 h-16 object-cover" src={item.thumbnail} alt="Xeberler" />
//                                         </td>
//                                         <td className="p-3">
//                                             <p>{item.title}</p>
//                                         </td>
//                                         <td className="p-3">
//                                             <p>{item.slug}</p>
//                                         </td>
//                                         <td className="p-3">
//                                             <p>{item.views}</p>
//                                         </td>
//                                         <td className="p-3">
//                                             <p>{item.like}</p>
//                                         </td>
//                                         <td className="p-3">
//                                             <p>{item.dislike}</p>
//                                         </td>
//                                         <td className="p-3">
//                                             <button onClick={() => handleEditNews(item.id)} className="bg-blue-500 text-white p-3 rounded-md">
//                                                 <Pen className="w-5 h-5" />
//                                             </button>
//                                         </td>
//                                         <td className="p-3">
                                           
//                                         </td>
//                                     </tr>
//                                 ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <Modal open={open} setOpen={setOpen}>
//                 <AddNews setOpen={setOpen} />
//             </Modal>

//             {edit && <Modal open={open} setOpen={setOpen}>
//                 <EditNews setOpen={setOpen} id={edit} />
//             </Modal>}

//         </div>
//     )
// }

// export default News
import React from 'react'

const News = () => {
  return (
    <div>
      news
    </div>
  )
}

export default News
