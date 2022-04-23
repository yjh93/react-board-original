import { useState } from "react";

const Post = ({ onSaveData }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    console.log("form :>> ", form);
    setForm({
      name: "",
      email: "",
      phone: "",
      website: "",
    });
  };

  return (
    <>
      <div className="mt-5 mb-2 text-xl font-bold text-center">
        고객 추가하기
      </div>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="flex flex-col mb-1 md:flex-row">
          <label
            htmlFor="username"
            className="flex-1 w-full mx-2 text-xs font-semibold text-gray-600 uppercase"
          >
            name
            <input
              type="text"
              className="w-full px-1 py-3 mt-1 text-gray-800 border-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              placeholder="이름을 입력해주세요"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="email"
            className="flex-1 w-full mx-2 text-xs font-semibold text-gray-600 uppercase"
          >
            email
            <input
              type="email"
              className="w-full px-1 py-3 mt-1 text-gray-800 border-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              placeholder="이메일 주소를 입력해주세요"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="flex flex-col md:flex-row">
          <label
            htmlFor="phone"
            className="flex-1 w-full mx-2 text-xs font-semibold text-gray-600 uppercase"
          >
            phone
            <input
              type="text"
              className="w-full px-1 py-3 mt-1 text-gray-800 border-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              placeholder="핸드폰 번호를 입력해주세요"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="website"
            className="flex-1 w-full mx-2 text-xs font-semibold text-gray-600 uppercase"
          >
            website
            <input
              type="text"
              className="w-full px-1 py-3 mt-1 text-gray-800 border-2 border-gray-100 appearance-none focus:text-gray-500 focus:outline-none focus:border-gray-200"
              required
              placeholder="사이트 주소를 입력해주세요"
              name="website"
              value={form.website}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-2 mt-4 text-xl text-center text-white bg-blue-400 rounded md:px-12 md:py-3 md:text-base"
          >
            저장
          </button>
        </div>
      </form>
    </>
  );
};

export default Post;
