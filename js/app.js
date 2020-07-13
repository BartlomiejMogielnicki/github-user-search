// Init Github
const github = new Github;

const searchInput = document.getElementById('search-user');

// Search user
const searchUser = () => {
  const searchValue = searchInput.value;

  if (searchValue !== '') {
    github.getUser(searchValue)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show allert

        } else {
          // Show profile
        }
      })
  } else {
    // Clear profile
  }
};

searchInput.addEventListener('input', searchUser);