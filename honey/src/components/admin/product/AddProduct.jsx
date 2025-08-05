import React from "react";
import {
  useAddProductMutation,
  useGetCategoriesQuery,
} from "../../../store/shopApi";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
import * as Yup from "yup";
import { Field, Formik, Form } from "formik";

const productSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Başlıq çox qısadır")
    .max(100, "Başlıq çox uzundur")
    .required("Başlıq tələb olunur"),
  content: Yup.string()
    .min(10, "Kontent çox qısadır")
    .max(1000, "Kontent çox uzundur")
    .required("Kontent tələb olunur"),
  slug: Yup.string()
    .matches(/^[a-z0-9-]+$/, "Slug yalnız kiçik hərf, rəqəm və '-' ola bilər")
    .min(2, "Slug çox qısadır")
    .max(50, "Slug çox uzundur")
    .required("Slug tələb olunur"),
  thumbnail: Yup.string()
    .url("Düzgün URL daxil edin")
    .required("Şəkil linki tələb olunur"),
  categoryId: Yup.string().required("Kateqoriya seçilməlidir"),
});

const AddProduct = ({ setOpen }) => {
  const { data: categories } = useGetCategoriesQuery();
  const [addProduct, { isLoading }] = useAddProductMutation();

  const saveProduct = async (values, actions) => {
    try {
      const response = await addProduct(values).unwrap();
      toast.success(response.message || "Xəbər uğurla əlavə olundu");
      actions.resetForm();
      setOpen(false);
    } catch (error) {
      toast.error(error?.data?.message || "Xəta baş verdi");
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        slug: "",
        thumbnail: "",
        categoryId: "",
      }}
      validationSchema={productSchema}
      onSubmit={saveProduct}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-5 bg-white p-6 rounded-xl shadow-md text-black">
          <h2 className="text-xl font-bold text-center text-purple-700">Yeni Xəbər Əlavə Et</h2>

          <div>
            <label className="font-medium">Başlıq</label>
            <Field
              name="title"
              type="text"
              className="w-full bg-gray-100 rounded p-3 mt-1"
              placeholder="Başlıq əlavə et"
            />
            {errors.title && touched.title && (
              <div className="text-red-500 text-sm mt-1">{errors.title}</div>
            )}
          </div>

          <div>
            <label className="font-medium">Kontent</label>
            <Field
              name="content"
              as="textarea"
              rows={4}
              className="w-full bg-gray-100 rounded p-3 mt-1 resize-none"
              placeholder="Xəbərin kontenti..."
            />
            {errors.content && touched.content && (
              <div className="text-red-500 text-sm mt-1">{errors.content}</div>
            )}
          </div>

          <div>
            <label className="font-medium">Slug</label>
            <Field
              name="slug"
              type="text"
              className="w-full bg-gray-100 rounded p-3 mt-1"
              placeholder="slug yazın"
            />
            {errors.slug && touched.slug && (
              <div className="text-red-500 text-sm mt-1">{errors.slug}</div>
            )}
          </div>

          <div>
            <label className="font-medium">Şəkil Linki</label>
            <Field
              name="thumbnail"
              type="url"
              className="w-full bg-gray-100 rounded p-3 mt-1"
              placeholder="https://example.com/image.jpg"
            />
            {errors.thumbnail && touched.thumbnail && (
              <div className="text-red-500 text-sm mt-1">{errors.thumbnail}</div>
            )}
          </div>

          <div>
            <label className="font-medium">Kateqoriya</label>
            <Field
              as="select"
              name="categoryId"
              className="w-full bg-gray-100 rounded p-3 mt-1"
            >
              <option value="">Kateqoriya seçin</option>
              {categories?.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Field>
            {errors.categoryId && touched.categoryId && (
              <div className="text-red-500 text-sm mt-1">{errors.categoryId}</div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
              {isLoading ? "Yüklənir..." : "Əlavə Et"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProduct;
