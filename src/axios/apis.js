import instance from "./instance"


export const fetchPhotoData = {
    fetchPhotos: async(pageNum) => {
        return await instance.get(`/albums/${pageNum}/photos`);
    }
}