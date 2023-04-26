import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistic';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
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
      <Statistic 
      title={data.title}
      />
    </div>
  );
};


