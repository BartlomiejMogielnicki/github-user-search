class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

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

  clearProfile() {
    this.profile.innerHTML = '';
  }
}