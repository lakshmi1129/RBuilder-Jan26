import apiService from "../api/apiService"


// add resume api call by userInput
export const addResumeAPI = async (resumeData)=>{
     return await apiService("POST",'/allResumes',resumeData)
}

// get resume api call by viewResume - ID
export const getResumeAPI = async (id)=>{
     return await apiService("GET",`/allResumes/${id}`,{})
}

// add resume to download api call by viewResume when download button click
export const downloadResumeAPI = async (resumeData)=>{
     return await apiService("POST",'/downloads',resumeData)
}

// get all download resumes api call by downloads when page load
export const getDownloadResumeAPI = async ()=>{
     return await apiService("GET",'/downloads',{})
}

// delete selected download resumes api call by downloads when clicked on delete button
export const deleteDownloadResumeAPI = async (resumeId)=>{
     return await apiService("DELETE",`/downloads/${resumeId}`,{})
}

// edit  resume api call by edit when clicked on update button
export const editResumeAPI = async (id,updateDetails)=>{
     return await apiService("PUT",`/allResumes/${id}`,updateDetails)
}