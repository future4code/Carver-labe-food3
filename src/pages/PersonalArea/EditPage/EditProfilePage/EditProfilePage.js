import React from 'react';
import useProtectedPage from '../../../../hooks/useProtectedPage'



const EditProfilePage = () => {
  useProtectedPage()

  return(
    <div>
      EditProfilePage
    </div>
  )
}

export default EditProfilePage;