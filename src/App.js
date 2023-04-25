import Profile from './components/Profile';
import user from './user.json';

const App = () => {
  return (
    <div>
      <Profile
        avatarUrl={user.avatar}
        userName={user.username}
        tagUser={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
};

export default App;
