import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Tr from "components/Tr";
import Post from "components/Post";
import Modal from "components/Modal";

function Board() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modalOn, setModalOn] = useState(false);

  const nextId = useRef(11);

  useEffect(() => {
    try {
      async function getData() {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setInfo(res.data);
        // console.log('res :>> ', res);
      }
      getData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      // spread 연산자 방법
      setInfo((prev) => {
        return [
          ...prev,
          {
            id: nextId.current,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website,
          },
        ];
      });
      nextId.current += 1;

      // concat 방법
      // setInfo((info) =>
      //   info.concat({
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website,
      //   })
      // );
      // nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);

    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    console.log("selectedData :>> ", selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    console.log("item :>> ", item);
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="mt-5 mb-3 text-xl font-bold text-center">
        고객 정보 리스트
      </div>
      <table className="min-w-full text-gray-800">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-3 text-gray-300">Id.</th>
            <th className="px-4 py-3 text-gray-300">Name</th>
            <th className="px-4 py-3 text-gray-300">Email</th>
            <th className="px-4 py-3 text-gray-300">Phone No.</th>
            <th className="px-4 py-3 text-gray-300">Website</th>
            <th className="px-4 py-3 text-gray-300">Edit</th>
            <th className="px-4 py-3 text-gray-300">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
        </tbody>
      </table>
      <Post onSaveData={handleSave} />
      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

export default Board;
