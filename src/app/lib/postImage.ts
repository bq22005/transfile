import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const postImage = async (imgFile: File) => {
  const formData = new FormData();
  formData.append("image", imgFile);

  try {
    const res = await axios.post(`${apiUrl}/convert`, formData);
    return res.data;
  } catch (error) {
    console.error("Failed to post image.", error);
    return null;
  }
}