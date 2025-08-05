import { useState } from "react";
import { Loader2, Pen, Trash } from "lucide-react";
import {
  useGetAllProductQuery,
  useDeleteProductMutation,
  useAddProductMutation,
  useEditProductMutation,
} from "../../store/shopApi";
import Modal from "../../components/ui/Modal";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Product = () => {
  const { data, isLoading } = useGetAllProductQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [addProduct] = useAddProductMutation();
  const [editProduct] = useEditProductMutation();

  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    brandId: "",
    colors: [],
    sizes: [],
    images: [],
    categoryId: "",
    slug: "",
  });

  const openAddModal = () => {
    setFormData({
      name: "",
      description: "",
      price: 0,
      stock: 0,
      brandId: "",
      colors: [],
      sizes: [],
      images: [],
      categoryId: "",
      slug: "",
    });
    setEdit(null);
    setOpen(true);
  };

  const openEditModal = (item) => {
    setFormData({
      name: item.name || "",
      description: item.description || "",
      price: item.price || 0,
      stock: item.stock || 0,
      brandId: item.brandId || "",
      colors: item.colors || [],
      sizes: item.sizes || [],
      images: item.images || [],
      categoryId: item.categoryId || "",
      slug: item.slug || "",
      id: item.id,
    });
    setEdit(item.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Məhsulu sil",
      text: "Silindikdən sonra bərpa olunmayacaq!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9f7aea",
      cancelButtonColor: "#f56565",
      confirmButtonText: "Bəli, sil",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id).unwrap();
          Swal.fire("Silindi!", "Məhsul uğurla silindi.", "success");
        } catch (error) {
          toast.error(error?.data?.message || "Xəta baş verdi...");
        }
      }
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;


    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stock"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.slug) {
      toast.error("Ad və Slug mütləqdir!");
      return;
    }

    try {
      if (edit) {
        await editProduct({ id: edit, ...formData }).unwrap();
        toast.success("Məhsul redaktə olundu!");
      } else {
        await addProduct(formData).unwrap();
        toast.success("Məhsul əlavə olundu!");
      }
      setOpen(false);
    } catch (error) {
      toast.error(error?.data?.message || "Xəta baş verdi!");
    }
  };

  return (
    <div className="container mx-auto p-6 font-sans text-purple-900">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold tracking-wide">Məhsullar</h2>
        <button
          onClick={openAddModal}
          className="bg-purple-400 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-3xl shadow-md transition focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          Yeni Məhsul Əlavə Et
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
                <th className="p-3">Ad</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Qiymət</th>
                <th className="p-3">Anbar</th>
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
                  <td className="p-3 font-semibold">{item.name}</td>
                  <td className="p-3 lowercase">{item.slug}</td>
                  <td className="p-3 text-center">{item.price}</td>
                  <td className="p-3 text-center">{item.stock}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => openEditModal(item)}
                      className="bg-purple-400 hover:bg-purple-500 p-2 rounded-full text-white shadow-md transition"
                      aria-label="Redaktə et"
                      title="Redaktə et"
                    >
                      <Pen className="w-5 h-5" />
                    </button>
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
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
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-w-lg">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="name">
              Məhsul Adı <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              placeholder="Məhsulun adını daxil edin"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="slug">
              Slug <span className="text-red-600">*</span>
            </label>
            <input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleFormChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              placeholder="Slug daxil edin"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="description">
              Təsvir
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Məhsulun təsvirini daxil edin"
              rows={3}
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block mb-1 font-semibold" htmlFor="price">
                Qiymət
              </label>
              <input
                id="price"
                name="price"
                value={formData.price}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                type="number"
                min={0}
                step="0.01"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 font-semibold" htmlFor="stock">
                Anbar
              </label>
              <input
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleFormChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                type="number"
                min={0}
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="brandId">
              Marka ID
            </label>
            <input
              id="brandId"
              name="brandId"
              value={formData.brandId}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              placeholder="Marka ID daxil edin"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold" htmlFor="categoryId">
              Kateqoriya ID
            </label>
            <input
              id="categoryId"
              name="categoryId"
              value={formData.categoryId}
              onChange={handleFormChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              type="text"
              placeholder="Kateqoriya ID daxil edin"
            />
          </div>


          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
            >
              Ləğv et
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
            >
              {edit ? "Redaktə et" : "Əlavə et"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Product;
