const followers = document.querySelectorAll(".followers");

followers.forEach((followerCount) => {
  followerCount.innerHTML = "0";
  const updateFollowerCount = () => {
    const target = +followerCount.getAttribute("data-target");
    const c = +followerCount.textContent;
    const increment = target / 500;
    if (c < target) {
      followerCount.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowerCount, 1);
    }
  };
  updateFollowerCount();
});
