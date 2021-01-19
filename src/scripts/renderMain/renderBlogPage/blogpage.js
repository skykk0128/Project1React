const renderBlogPage = () => {
  const blogPage = document.querySelector('#blog');

  blogPage.innerHTML = `
    <div class="titlebanner">
      <h1>My Blogs</h1>
    </div>
    <div class="blog__content">
      <div class="blog__container">
        <h2>Comming Soon</h2>
      </div>
      <div class="blog__container">

      </div>
    </div>
  `;
};
