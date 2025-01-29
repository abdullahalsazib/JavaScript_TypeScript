async function fetchPosts() {
    try {
        document.getElementById('posts').innerHTML = '<p>Loading...</p>';
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await response.json();
        let postsHTML = '';
        data.slice(0, 30).forEach(post => {
            postsHTML += `<div class="post">
                            <h3>${post.title}</h3>
                            <p>${post.body}</p>
                            </div>`;
        });
        document.getElementById('posts').innerHTML = postsHTML;
    } catch (error) {
        document.getElementById('posts').innerHTML = '<p>Error loading posts.</p>';
        console.error('Fetch error:', error);
    }
}

fetchPosts();