import axios from "axios";
const apiURL = process.env.REACT_APP_CATEGORIES;

// const BearerToken = () =>
//   localStorage.getItem("accessToken")
//     ? JSON.parse(localStorage.getItem("accessToken")).token
//     : false;
// const Headers = () => {
//   return {
//     headers: {
//       token: `Bearer ${BearerToken()}`,
//     },
//   };
// };
export const getAllCategory = async () => {
  try {
    let res = await axios.get(`${apiURL}/getall`);
    return res.data.categories;
  } catch (error) {
    console.log(error);
  }
};


export const createCategory = async ({ nameCategory, description, status }) => {
  try {
    const formData = {
      nameCategory,
      description,
      status,
    };

    const res = await axios.post(`${apiURL}/add`, formData);
    
    return res.data;
  } catch (error) {
    console.log(error);
    return { error: "Failed to create the category." };
  }
};

export const getToEdit = async (_id,nameCategory, description, status) => {
  let data = { _id: _id, nameCategory: nameCategory ,description: description, status: status };
  try {
    let res = await axios.post(
      `${apiURL}/getall`,
      data,
    );
    return res.data.categories;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (_id, nameCategory, description, status) => {
  let data = { _id: _id, nameCategory: nameCategory ,description: description, status: status };
  try {
    let res = await axios.put(
      `${apiURL}/update/${_id}`,
      data,
    );
    return res.data.categories;
  } catch (error) {
    console.log(error);
  }
}

// export const editCategory = async ({ nameCategory, description, status }, _id) => {
//   try {
//     const formData = {
//       nameCategory,
//       description,
//       status,
//     };
//     const res = await axios.put(`${apiURL}/update/${_id}`, formData);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//     return { error: "Failed to edit the category." };
//   }
// }