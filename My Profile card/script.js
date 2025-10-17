const followButton = document.querySelector('[data-testid="follow-button"]');

followButton.addEventListener('click', () => {
  const isFollowing = followButton.getAttribute('aria-pressed') === 'true';
  followButton.setAttribute('aria-pressed', !isFollowing);
  followButton.textContent = isFollowing ? 'Follow' : 'Following';
});
