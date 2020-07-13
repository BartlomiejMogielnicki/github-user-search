// Init Github
const github = new Github;
// Initi UI
const ui = new UI;

const searchInput = document.getElementById('search-user');

// Search user
const searchUser = () => {
  const searchValue = searchInput.value;

  if (searchValue !== '') {
    github.getUser(searchValue)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert error');
        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
};

// Event listeners
searchInput.addEventListener('input', searchUser);