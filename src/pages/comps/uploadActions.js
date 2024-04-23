import {UPLOAD_IMAGE} from "./types";
import axios from 'axios'

export const uploadImage = (imageData) => async dispatch => {
    if (imageData.entries().next().value[1] != null) {
        const response = await axios.post("http://localhost:8080/photo/add-photo", imageData, {
            onUploadProgress:ProgressEvent => {
                console.log("Uploading : " + ((ProgressEvent.loaded / ProgressEvent.total) * 100).toString() + "%")
            }
        });
        dispatch({
            type: UPLOAD_IMAGE,
            payload: response.data
        });
    }
};