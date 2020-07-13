class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show profile
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="user-container">
        <div class="user-welcome">
          <img class ="user-img"src="${user.avatar_url}">
          <a class="user-link" href="${user.html_url}" target="_blank">View Profile</a>
        </div>
        <div class="user-stats">
          <span>Public Repos: ${user.public_repos}</span>
          <span>Public Gists: ${user.public_gists}</span>
          <span>Followers: ${user.followers}</span>
          <span>Following: ${user.following}</span>
        </div>
        <ul class="user-info">
          <li>Company: ${user.company}</li>
          <li>Website/Blog: ${user.blog}</li>
          <li>Location: ${user.location}</li>
          <li>Member Since: ${user.created_at}</li>
        </ul>
      </div>
      <div class="repos-container">
        <h3>Latest Repos</h3>
        <div id="repos"></div>
      </div>
  `;
  }

  showAlert(message, className) {

    // Clear alerts before insert new one
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add class
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message))

    // Insert element to DOM
    const container = document.querySelector('.container');
    const search = document.querySelector('.search-container')
    container.insertBefore(div, search);

    // Clear alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}