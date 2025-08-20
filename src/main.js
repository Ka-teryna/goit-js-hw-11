
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async (event) => {

  event.preventDefault();


  const query = event.target.elements.query.value.trim();

  
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Search query cannot be empty!',
      position: 'topRight',
    });
    return; 
  }

  clearGallery();
  showLoader(); 

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    console.error("Error fetching images:", error);
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    searchForm.reset(); 
  }
});